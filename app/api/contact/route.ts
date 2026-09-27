import { NextRequest, NextResponse } from "next/server";
import { ContactFormSchema } from "@/lib/validations/booking";
import { saveContactLead } from "@/lib/storage";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate submission with Zod
    const parsed = ContactFormSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields accurately.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 2. Honeypot check
    if (data.website_hp && data.website_hp.length > 0) {
      console.warn("[SPAM BOT DETECTED IN CONTACT]");
      return NextResponse.json(
        {
          success: true,
          message: "Inquiry received successfully.",
        },
        { status: 200 }
      );
    }

    // 3. Save lead to persistence store
    const storedLead = await saveContactLead(data);

    // 4. Send email alert to clinic staff
    await sendContactEmail(storedLead);

    return NextResponse.json(
      {
        success: true,
        leadId: storedLead.id,
        message: "Thank you! Our clinical coordinator will reach out to you shortly.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[API CONTACT ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting your inquiry. Please call us directly.",
      },
      { status: 500 }
    );
  }
}

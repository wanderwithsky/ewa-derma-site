import { NextRequest, NextResponse } from "next/server";
import { BookingFormSchema } from "@/lib/validations/booking";
import { saveBooking } from "@/lib/storage";
import { sendBookingEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate submission with Zod
    const parsed = BookingFormSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 2. Honeypot check: If the hidden honeypot field has a value, silently reject bot
    if (data.website_hp && data.website_hp.length > 0) {
      console.warn("[SPAM BOT DETECTED IN BOOKING]");
      return NextResponse.json(
        {
          success: true,
          bookingRef: "EWA-BK-00000",
          message: "Appointment request received.",
        },
        { status: 200 }
      );
    }

    // 3. Save to atomic persistence store
    const storedBooking = await saveBooking(data);

    // 4. Trigger Email Notifications (Patient Confirmation + Clinic Alert)
    await sendBookingEmails(storedBooking);

    return NextResponse.json(
      {
        success: true,
        bookingRef: storedBooking.bookingRef,
        booking: storedBooking,
        message: "Your appointment has been successfully scheduled!",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[API BOOK ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred while processing your booking. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}

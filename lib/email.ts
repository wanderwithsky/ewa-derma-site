import { Resend } from "resend";
import { CLINIC_INFO } from "./data";
import { StoredBooking, StoredContact } from "./storage";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const clinicEmail = process.env.CLINIC_NOTIFICATION_EMAIL || CLINIC_INFO.email;

/**
 * Send booking confirmation email to patient & notification alert to clinic staff
 */
export async function sendBookingEmails(booking: StoredBooking) {
  const patientHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #F2F7F8; margin: 0; padding: 30px 10px; color: #0E2A32; }
          .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(14,42,50,0.08); border: 1px solid rgba(20,106,128,0.15); }
          .header { background: linear-gradient(135deg, #0D4A5A 0%, #146A80 100%); padding: 35px 30px; text-align: center; color: #ffffff; }
          .badge { display: inline-block; padding: 5px 14px; background: rgba(227,28,121,0.25); border: 1px solid #E31C79; color: #ffffff; border-radius: 50px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
          .title { margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
          .content { padding: 30px; }
          .card { background: #F0F7F7; border-radius: 14px; padding: 20px; margin: 20px 0; border: 1px solid rgba(20,106,128,0.12); }
          .row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
          .label { color: #5B747D; font-weight: 600; }
          .value { color: #0D4A5A; font-weight: 700; text-align: right; }
          .footer { padding: 20px 30px 30px; text-align: center; font-size: 12px; color: #7B8F95; border-top: 1px solid #E8F0F2; }
          .btn { display: inline-block; background: #E31C79; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 13px; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">Appointment Reserved</div>
            <h1 class="title">Ewa Derma Clinic</h1>
            <p style="margin: 8px 0 0; opacity: 0.85; font-size: 14px;">Where Science Meets Artistry</p>
          </div>
          <div class="content">
            <p style="font-size: 16px; line-height: 1.6;">Dear <strong>${booking.fullName}</strong>,</p>
            <p style="font-size: 14px; color: #405B63; line-height: 1.6;">
              Your consultation request has been received and prioritized in our Lucknow schedule. Here are your booking details:
            </p>
            
            <div class="card">
              <div class="row"><span class="label">Booking Reference:</span><span class="value" style="color: #E31C79;">${booking.bookingRef}</span></div>
              <div class="row"><span class="label">Selected Procedure:</span><span class="value">${booking.treatment}</span></div>
              <div class="row"><span class="label">Date:</span><span class="value">${booking.date}</span></div>
              <div class="row"><span class="label">Time Slot:</span><span class="value">${booking.timeSlot}</span></div>
              <div class="row"><span class="label">Specialist:</span><span class="value">${booking.doctor}</span></div>
            </div>

            <p style="font-size: 13px; color: #5B747D; line-height: 1.5;">
              📍 <strong>Clinic Address:</strong> ${CLINIC_INFO.address}<br>
              📞 <strong>Helpdesk:</strong> ${CLINIC_INFO.phone}
            </p>
            
            <div style="text-align: center;">
              <a href="https://wa.me/${CLINIC_INFO.whatsapp}?text=Hi%20Ewa%20Derma,%20confirming%20my%20booking%20${booking.bookingRef}" class="btn">
                Confirm via WhatsApp
              </a>
            </div>
          </div>
          <div class="footer">
            Ewa Derma Clinic · Golf City, Lucknow · Mon–Sun 10:00 AM – 7:00 PM
          </div>
        </div>
      </body>
    </html>
  `;

  const clinicAlertHtml = `
    <h2>🚨 New Consultation Booking Alert (${booking.bookingRef})</h2>
    <p><strong>Patient Name:</strong> ${booking.fullName}</p>
    <p><strong>Phone Number:</strong> ${booking.phone}</p>
    <p><strong>Email:</strong> ${booking.email || "Not provided"}</p>
    <p><strong>Procedure:</strong> ${booking.treatment} (${booking.category})</p>
    <p><strong>Date & Slot:</strong> ${booking.date} at ${booking.timeSlot}</p>
    <p><strong>Doctor Preference:</strong> ${booking.doctor}</p>
    <p><strong>Patient Notes:</strong> ${booking.notes || "None"}</p>
    <p><em>Received via Ewa Derma Online Booking Engine at ${new Date(booking.createdAt).toLocaleString("en-IN")}</em></p>
  `;

  // In development or if API key is not configured, log to console gracefully
  if (!resend) {
    console.log("[EMAIL SIMULATOR - DEV MODE]");
    console.log(`To Patient: ${booking.email || booking.phone} | Ref: ${booking.bookingRef}`);
    console.log(`To Clinic: ${clinicEmail} | Patient: ${booking.fullName} (${booking.phone})`);
    return { success: true, simulated: true };
  }

  try {
    const promises: Promise<any>[] = [];

    // Send to clinic desk
    promises.push(
      resend.emails.send({
        from: "Ewa Derma Booking <appointments@ewaderma.com>",
        to: [clinicEmail],
        subject: `New Appointment: ${booking.fullName} - ${booking.treatment} (${booking.bookingRef})`,
        html: clinicAlertHtml,
      })
    );

    // Send to patient if email was provided
    if (booking.email) {
      promises.push(
        resend.emails.send({
          from: "Ewa Derma Clinic <care@ewaderma.com>",
          to: [booking.email],
          subject: `Consultation Confirmed: Ewa Derma Clinic (${booking.bookingRef})`,
          html: patientHtml,
        })
      );
    }

    await Promise.all(promises);
    return { success: true, sent: true };
  } catch (error) {
    console.error("[RESEND EMAIL ERROR]", error);
    // Don't fail the booking flow even if email provider throws an error
    return { success: false, error };
  }
}

/**
 * Send contact lead alert to clinic staff
 */
export async function sendContactEmail(contact: StoredContact) {
  const alertHtml = `
    <h2>📩 New Contact Inquiry Received</h2>
    <p><strong>Full Name:</strong> ${contact.fullName}</p>
    <p><strong>Phone:</strong> ${contact.phone}</p>
    <p><strong>Email:</strong> ${contact.email || "N/A"}</p>
    <p><strong>Treatment Category:</strong> ${contact.treatment}</p>
    <p><strong>Message / Inquiry:</strong> ${contact.message || "N/A"}</p>
    <p><em>Received via Ewa Derma Website Contact Form at ${new Date(contact.createdAt).toLocaleString("en-IN")}</em></p>
  `;

  if (!resend) {
    console.log("[EMAIL SIMULATOR - DEV MODE: CONTACT LEAD]");
    console.log(`Lead from: ${contact.fullName} (${contact.phone})`);
    return { success: true, simulated: true };
  }

  try {
    await resend.emails.send({
      from: "Ewa Derma Inquiries <inquiries@ewaderma.com>",
      to: [clinicEmail],
      subject: `New Inquiry: ${contact.fullName} (${contact.phone})`,
      html: alertHtml,
    });
    return { success: true };
  } catch (error) {
    console.error("[RESEND CONTACT EMAIL ERROR]", error);
    return { success: false, error };
  }
}

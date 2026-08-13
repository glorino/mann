import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function sendWithRetry(transporter: nodemailer.Transporter, mail: nodemailer.SendMailOptions, retries = 3, delay = 2000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await transporter.sendMail(mail);
      return true;
    } catch (err) {
      console.error(`Email attempt ${attempt}/${retries} failed:`, (err as Error).message);
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, delay * attempt));
      }
    }
  }
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 20000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    const notificationMail = {
      from: `"MANN Professional Services" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[MANN Website] ${subject || "New Contact Form Submission"}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: linear-gradient(135deg, #0f3460, #e94560); padding: 35px 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 600;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">You have received a new message from your website</p>
          </div>
          <div style="padding: 30px; background: #f8f9fa; border: 1px solid #e9ecef; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #0f3460; width: 120px; border-bottom: 1px solid #e9ecef;">Name</td>
                <td style="padding: 12px 0; color: #555; border-bottom: 1px solid #e9ecef;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #0f3460; border-bottom: 1px solid #e9ecef;">Email</td>
                <td style="padding: 12px 0; color: #555; border-bottom: 1px solid #e9ecef;"><a href="mailto:${email}" style="color: #e94560; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #0f3460; border-bottom: 1px solid #e9ecef;">Phone</td>
                <td style="padding: 12px 0; color: #555; border-bottom: 1px solid #e9ecef;">${phone}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #0f3460; border-bottom: 1px solid #e9ecef;">Subject</td>
                <td style="padding: 12px 0; color: #555; border-bottom: 1px solid #e9ecef;">${subject || "General Inquiry"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #0f3460; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #555; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px 30px; text-align: center; color: #999; font-size: 12px; background: #fff; border: 1px solid #e9ecef; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="margin: 0;">This message was sent from the MANN Professional Services website contact form.</p>
          </div>
        </div>
      `,
    };

    const acknowledgementMail = {
      from: `"MANN Professional Services" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting MANN Professional Services`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: linear-gradient(135deg, #0f3460, #e94560); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.15); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 28px;">&#10003;</span>
            </div>
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">Thank You, ${name.split(" ")[0]}!</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 10px 0 0; font-size: 15px;">We have received your message</p>
          </div>
          <div style="padding: 35px 30px; background: #fff; border: 1px solid #e9ecef; border-top: none;">
            <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0 0 20px;">
              Dear ${name.split(" ")[0]},
            </p>
            <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0 0 20px;">
              Thank you for reaching out to <strong>MANN Professional Services</strong>. We appreciate your interest in our services and want to assure you that your message has been received and is being reviewed.
            </p>
            <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0 0 20px;">
              Our team will review your inquiry and get back to you within <strong>24 business hours</strong>. In the meantime, please feel free to explore our services or contact us directly if you have any urgent matters.
            </p>
            <div style="background: #f8f9fa; border-left: 4px solid #e94560; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
              <p style="font-size: 14px; color: #666; margin: 0; line-height: 1.6;">
                <strong style="color: #0f3460;">Your Message Summary:</strong><br>
                <span style="color: #888;">Subject: ${subject || "General Inquiry"}</span>
              </p>
            </div>
            <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0 0 10px;">
              Best regards,
            </p>
            <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0 0 25px;">
              <strong>MANN Professional Services</strong>
            </p>
          </div>
          <div style="padding: 25px 30px; background: #f8f9fa; border: 1px solid #e9ecef; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 13px; color: #888; margin: 0 0 10px; text-align: center;">Connect with us</p>
            <table style="width: 100%; border-collapse: collapse; text-align: center;">
              <tr>
                <td style="padding: 5px;">
                  <a href="tel:+2348036364215" style="color: #0f3460; text-decoration: none; font-size: 13px;">+234 803 636 4215</a>
                </td>
                <td style="padding: 5px; color: #ccc;">|</td>
                <td style="padding: 5px;">
                  <a href="mailto:info@mannprofessionalservices.com" style="color: #0f3460; text-decoration: none; font-size: 13px;">info@mannprofessionalservices.com</a>
                </td>
              </tr>
            </table>
            <p style="font-size: 12px; color: #aaa; margin: 15px 0 0; text-align: center;">
              3, Sadatu Street, Oregun, Lagos State, Nigeria
            </p>
          </div>
        </div>
      `,
    };

    const [notifResult, ackResult] = await Promise.allSettled([
      sendWithRetry(transporter, notificationMail),
      sendWithRetry(transporter, acknowledgementMail),
    ]);

    const notifOk = notifResult.status === "fulfilled" && notifResult.value;
    const ackOk = ackResult.status === "fulfilled" && ackResult.value;

    if (!notifOk && !ackOk) {
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: ackOk ? "Email sent successfully" : "Message received. We'll get back to you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"MANN Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[MANN Website] ${subject || "New Contact Form Submission"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #e94560, #0f3460); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background: #f8f9fa; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
                <td style="padding: 12px 0; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 12px 0; color: #555;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #333;">Phone:</td>
                <td style="padding: 12px 0; color: #555;">${phone}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #333;">Subject:</td>
                <td style="padding: 12px 0; color: #555;">${subject || "General Inquiry"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #555; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
            <p>This message was sent from the MANN Professional Services website contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
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

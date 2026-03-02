import { NextResponse } from "next/server"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      )
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      )
    }

    const emailContent = `
New Contact Form Submission from Next General Trading Website

CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone?.trim() || "Not provided"}
Company: ${company?.trim() || "Not provided"}
Service of Interest: ${service?.trim() || "Not specified"}

MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message.trim()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from: Next General Trading Website
Timestamp: ${new Date().toISOString()}
    `.trim()

    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Next General Trading <noreply@ngtechet.com>",
            to: "info@ngtechet.com",
            replyTo: email.trim(),
            subject: `New Inquiry from ${name.trim()}${company ? ` - ${company.trim()}` : ""}`,
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #5971c8; border-bottom: 2px solid #a2ce39; padding-bottom: 10px;">
                  New Contact Form Submission
                </h2>
                
                <h3 style="color: #5971c8; margin-top: 20px;">Contact Details:</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #e0e0e0;">
                    <td style="padding: 8px 0; font-weight: bold; width: 30%;">Name:</td>
                    <td style="padding: 8px 0;">${name.trim()}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e0e0e0;">
                    <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e0e0e0;">
                    <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0;">${phone?.trim() || "Not provided"}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e0e0e0;">
                    <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                    <td style="padding: 8px 0;">${company?.trim() || "Not provided"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Service of Interest:</td>
                    <td style="padding: 8px 0;">${service?.trim() || "Not specified"}</td>
                  </tr>
                </table>

                <h3 style="color: #5971c8; margin-top: 20px;">Message:</h3>
                <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #a2ce39; border-radius: 4px;">
                  <p>${message.trim().replace(/\n/g, "<br>")}</p>
                </div>

                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #999;">
                  <p>This message was sent from the Next General Trading website contact form.</p>
                  <p>Time: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            `,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          console.error("Resend API error:", errorData)
          throw new Error("Email service failed")
        }

        return NextResponse.json(
          {
            success: true,
            message: "Your message has been sent successfully. We will get back to you shortly.",
          },
          { status: 200 }
        )
      } catch (emailError) {
        console.error("Email sending error:", emailError)
        console.log("=== Contact Form Submission (Email Service Failed) ===")
        console.log(emailContent)
        console.log("======================================================")
      }
    }

    // Fallback: Log the submission if email service is not configured
    if (!resendApiKey) {
      console.log("=== Contact Form Submission ===")
      console.log(`To: info@ngtechet.com`)
      console.log(`From: ${email.trim()}`)
      console.log(`Subject: New Inquiry from ${name.trim()}`)
      console.log(emailContent)
      console.log("================================")
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We will contact you shortly.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 }
    )
  }
}

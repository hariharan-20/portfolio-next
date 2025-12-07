"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContact(prevState: any, formData: FormData) {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate inputs
    if (!name || !email || !message) {
        return { success: false, message: "Please fill in all fields." }
    }

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: 'k.hariharan.0520@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        })

        console.log("Email sent successfully via Resend")

        return { success: true, message: "Thanks for reaching out! I'll get back to you soon." }
    } catch (error) {
        console.error("Error sending email:", error)
        return { success: false, message: "Failed to send message. Please try again later." }
    }
}

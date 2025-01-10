import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, message } = await request.json();
    
    if (!email || !message) {
        return NextResponse.json({ message: "Email and message are required." }, { status: 400 });
    }

    try {
        // Configure your Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_PASSWORD, // Your Gmail app password
            },
        });

        // Email details
        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER, // Your Gmail address
            subject: `New Contact Form Submission from ${email}`,
            text: message,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error sending email." }, { status: 500 });
    }
}

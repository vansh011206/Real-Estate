import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, projectType, budget, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Configure transporter using SMTP credentials from env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Stylized HTML email body
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0dbd2; border-radius: 12px; background-color: #faf8f4;">
        <h2 style="color: #1a1714; border-bottom: 2px solid #a89379; padding-bottom: 10px; font-family: 'Georgia', serif;">
          New ARKO Form Submission
        </h2>
        <p style="font-size: 14px; color: #555; line-height: 1.5;">
          You have received a new project inquiry from the ARKO studio contact form. Details are provided below:
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; font-weight: bold; color: #7c7267; width: 140px;">Full Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; color: #1a1a1a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; font-weight: bold; color: #7c7267;">Email Address:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; color: #1a1a1a;"><a href="mailto:${email}" style="color: #a89379; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; font-weight: bold; color: #7c7267;">Phone Number:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; color: #1a1a1a;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; font-weight: bold; color: #7c7267;">Project Type:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; color: #1a1a1a;">${projectType || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; font-weight: bold; color: #7c7267;">Budget Range:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e8e3d8; color: #1a1a1a;">${budget || 'Not specified'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 25px; padding: 15px; background-color: #fff; border: 0.5px solid #d8d3c8; border-radius: 8px;">
          <h4 style="margin-top: 0; color: #7c7267; margin-bottom: 8px;">Message from client:</h4>
          <p style="font-size: 13.5px; color: #2a2a2a; margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; font-size: 11px; color: #aaa; border-top: 1px solid #e8e3d8; pt-15px;">
          &copy; 2024 ARKO Studio. All rights reserved. Sent from next-server mailer.
        </div>
      </div>
    `;

    // Mail configurations
    const mailOptions = {
      from: `"ARKO Studio Inquiry" <${process.env.EMAIL_USER}>`,
      to: 'jeeaspiranttt2024@gmail.com',
      subject: `[ARKO Inquiry] ${name} - ${projectType || 'Project Inquiry'}`,
      text: `New Form Submission Details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email via nodemailer:', error);
    return NextResponse.json(
      { error: 'Failed to send email: ' + error.message },
      { status: 500 }
    );
  }
}

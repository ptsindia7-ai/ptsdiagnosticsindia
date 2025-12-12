import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, whatsapp, email, address, product } = body;

    console.log("MAIL_USER:", process.env.MAIL_USER);
    console.log("MAIL_PASS EXISTS:", !!process.env.MAIL_PASS);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 🔥 This will throw the REAL error if auth fails
    await transporter.verify();
    console.log("SMTP VERIFIED");

    await transporter.sendMail({
      from: `"Diagnostics Website" <${process.env.MAIL_USER}>`,
      to: "officesupport@sinocare.com",
      replyTo: email,
      subject: `New Diagnostics Inquiry from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Whatsapp: ${whatsapp}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>Product: ${product}</p>
      `,
    });

    console.log("EMAIL SENT");

    return Response.json({ success: true });
  } catch (error) {
    console.error("FULL MAIL ERROR:", error);
    return Response.json(
      { error: error.message || "Mail failed" },
      { status: 500 }
    );
  }
}

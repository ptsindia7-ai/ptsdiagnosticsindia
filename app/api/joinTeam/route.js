import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const whatsapp = formData.get("whatsapp");
    const email = formData.get("email");
    const address = formData.get("address");
    const resume = formData.get("resume"); // FILE

    if (!resume) {
      return Response.json({ error: "Resume missing" }, { status: 400 });
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Join Our Team" <${process.env.MAIL_USER}>`,
      to: "officesupport@sinocare.com", // 🎯 TARGET EMAIL
      subject: `New Job Application from ${name}`,
      html: `
        <h3>New Job Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Whatsapp:</strong> ${whatsapp}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return Response.json({ error: "Mail failed" }, { status: 500 });
  }
}

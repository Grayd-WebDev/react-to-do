import nodemailer from "nodemailer";

class MailService {
  constructor() {
    // const [SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL] =
    //   process.env;

    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to, link) {
    // const [SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL] =
    //   process.env;

    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Account activation " + process.env.API_URL,
      text: "",
      html: `
        <div>
          <h1>To activate your account please follow the link bellow</h1>
          <a href='${process.env.API_URL}/api/activate/${link}'>${link}</a>
        </div>
      `,
    });
  }
}

export default new MailService();

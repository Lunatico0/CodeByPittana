export interface FormData {
  email: string;
  subject: string;
  message: string;
  source_plan: string;
}

export default function mailOptions({ subject, email, message, source_plan }: FormData) {
  const userEmail = process.env.EMAIL_USER;
  const template = `
  <div
    style="background-color: #1a1a1a;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #f5f5f5;"
  >
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #2a2a2a; border-radius: 8px; overflow: hidden; border: 1px solid #00bcd433;">
    <tr>
      <td style="padding: 15px; border-bottom: 2px solid #00bcd4;">
        <h1 style="font-size: 24px; color: #00bcd4; margin: 0;">
          Nuevo Contacto en CodeByPittana
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 25px 25px 15px 25px;">
        <p style="font-size: 16px; margin: 0 0 10px 0;">
          <strong style="color: #ffffff;">Email:</strong> <a href="mailto:${email}" style="color: #88c0d0; text-decoration: none;">${email}</a>
        </p>
        <p style="font-size: 16px; margin: 0 0 15px 0;">
          <strong style="color: #ffffff;">Asunto:</strong> ${subject}
        </p>
        <p style="font-size: 16px; margin: 0 0 15px 0;">
          <strong style="color: #ffffff;">Plan:</strong> ${source_plan}
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding: 0 25px;">
        <div style="height: 1px; background-color: #444; margin: 0 0 20px 0;"></div>
      </td>
    </tr>

    <tr>
      <td style="padding: 0 25px 25px 25px;">
        <h3 style="font-size: 18px; color: #ffffff; margin: 0 0 10px 0;">
          Mensaje:
        </h3>
        <p style="font-size: 15px; color: #cccccc; line-height: 1.6; white-space: pre-wrap;">
          ${message}
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding: 15px 25px; text-align: center;">
        <p style="font-size: 12px; color: #666; margin: 0;">Este mensaje fue enviado desde el formulario de contacto de <a href="https://codebypittana.vercel.app/"
         rel=" noopener noreferrer" target="_blank">CodeByPittana</a>
        </p>
      </td>
    </tr>
  </table>
</div>
  `

  const emailTemplate = {
    from: userEmail,
    to: userEmail,
    subject: `CodeByPittana → Nuevo Mensaje: ${subject}`,
    html: template
  }

  return (emailTemplate);
};

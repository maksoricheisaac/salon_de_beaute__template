import * as React from "react";

interface EmailTemplateProps {
  to: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  to,
  firstName,
  lastName,
  email,
  phone,
  service,
  date,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
    <h1>Bonjour, {to}!</h1>
    <p>Vous avez une nouvelle demande de rendez-vous :</p>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        border: "1px solid #ddd",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            <strong>Prénom :</strong>
          </td>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            {firstName}
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            <strong>Nom :</strong>
          </td>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            {lastName}
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            <strong>Email :</strong>
          </td>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            {email}
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            <strong>Téléphone :</strong>
          </td>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            {phone}
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            <strong>Service :</strong>
          </td>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            {service}
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            <strong>Date :</strong>
          </td>
          <td style={{ padding: "8px", border: "1px solid #ddd" }}>
            {date.toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </td>
        </tr>
      </tbody>
    </table>
    <p style={{ marginTop: "20px" }}>
      Merci de prendre en charge cette demande rapidement.
    </p>
    <footer style={{ marginTop: "30px", fontSize: "0.9em", color: "#555" }}>
      <p>Cet email a été généré automatiquement. Veuillez ne pas y répondre.</p>
    </footer>
  </div>
);

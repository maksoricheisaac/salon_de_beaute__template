"use server";

import { action } from "@/src/lib/next-safe";
import { appointmentSchema } from "./appointment.schema";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASSWORD, 
  },
  tls: {
    rejectUnauthorized: false, 
  },
});

export const sendAppointmentEmail = action
  .schema(appointmentSchema)
  .action(async ({ parsedInput: data }) => {
    try {
      
      const clientHtmlContent = `
        <html>
          <body>
            <h1>Bonjour ${data.firstName} ${data.lastName},</h1>
            <p>Votre réservation pour le service <strong>${data.service}</strong> est en cours de traitement.</p>
            <p>Vous recevrez une confirmation dès que possible.</p>
            <p>Merci pour votre confiance !</p>
          </body>
        </html>
      `;

      
      const managerHtmlContent = `
        <html>
          <body>
            <h1>Nouvelle Réservation</h1>
            <p>Une nouvelle réservation a été effectuée avec les détails suivants :</p>
            <ul>
              <li><strong>Nom & prénom :</strong> ${data.lastName} ${data.firstName}</li>
              <li><strong>Email :</strong> ${data.email}</li>
              <li><strong>Téléphone :</strong> ${data.phone}</li>
              <li><strong>Service :</strong> ${data.service}</li>
              <li><strong>Date du rendez-vous :</strong> ${data.date.toLocaleString()}</li>
            </ul>
            <p>Veuillez confirmer cette réservation dès que possible.</p>
          </body>
        </html>
      `;

     
      const clientMailOptions = {
        from: process.env.GMAIL_USER, 
        to: data.email, 
        subject: `Votre réservation pour : ${data.service} est en cours de traitement`,
        html: clientHtmlContent, 
      };

      
      const managerMailOptions = {
        from: data.email, 
        to: process.env.GMAIL_USER, 
        subject: `Nouvelle réservation pour : ${data.service}`,
        html: managerHtmlContent, 
      };

     
      const clientInfo = await transporter.sendMail(clientMailOptions);

      
      const managerInfo = await transporter.sendMail(managerMailOptions);


      if (!clientInfo || !managerInfo) {
        return { error: true, success: false, message: "Erreur lors de l'envoi des emails" };
      }

      
      return { error: false, success: true, message: "Emails envoyés avec succès" };
    } catch (error) {
      console.error("Erreur lors de l'envoi des emails :", error);
      throw new Error("L'envoi des emails a échoué. Veuillez réessayer plus tard.");
    }
  });

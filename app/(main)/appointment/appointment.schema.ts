import * as z from "zod";

export const appointmentSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .regex(
      /^\+?\d{9,15}$/,
      "Numéro de téléphone invalide (format: +242XXXXXXXXX)"
    ),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  date: z.date({
    required_error: "Veuillez sélectionner une date",
  }),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
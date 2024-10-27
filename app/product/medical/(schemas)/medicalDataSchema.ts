import z from "zod";

export const medicalDataSchema = z.object({
  weight: z.string().min(1),
  height: z.string().min(1),
  bloodType: z.string().min(1),
});

export type MedicalData = z.infer<typeof medicalDataSchema>;

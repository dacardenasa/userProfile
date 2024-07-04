import { object, string, TypeOf } from "zod";

export type ContactFormInputs = TypeOf<typeof contactFormSchema>;

export const contactFormSchema = object({
  name: string({
    required_error: "Please enter your name"
  }),
  email: string().email("Please enter a valid email"),
  message: string().min(50).max(1000)
});
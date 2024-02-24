"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";


export async function getContacts() {

  const contacts = await  prisma.contact.findMany();
  return {contacts};
}



export async function create(formData: FormData) {
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const contactno = formData.get("contactno") as string;
  const message = formData.get("message") as string;

  const allFieldsFilled = [firstname, lastname, email, contactno, message].every(field => field.trim());
  if (!allFieldsFilled) {
    return;
  }

  await prisma.contact.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      contactno: contactno,
      message: message,
    },
  });

  revalidatePath("/");
}





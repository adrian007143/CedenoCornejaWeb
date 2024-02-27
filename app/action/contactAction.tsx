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

  revalidatePath("/testpage");
}

export async function editContact(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const contactno = formData.get("contactno") as string;
  const message = formData.get("message") as string;

  await prisma.contact.update({
    where: {
      id: id,
    },
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      contactno: contactno,
      message: message,
    },
  });
  revalidatePath("/testpage");
}

export async function deleteContact(formData: FormData) {
  "use server";

  const id = formData.get("id") as string;

  await prisma.contact.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/testpage");
}
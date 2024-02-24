
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function getContacts() {

    const contacts = await  prisma.contact.findMany();
    return {contacts};
}




export async function addContact(firstname, lastname, email, contactno, message) {
    const contacts = await prisma.contact.create({
      data: { 
        firstname,
        lastname,
        email,
        contactno, 
        message,
      },
      
    })
      return contacts
  };






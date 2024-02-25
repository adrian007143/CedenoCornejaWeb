import { getContacts } from "@/app/action/contactAction";
import { Button } from "../ui/button";

export default async function ContactList() {
  const { contacts } = await getContacts();

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full bg-gray-200 border border-gray-300">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3">FIRST NAME</th>
              <th className="p-3">LAST NAME</th>
              <th className="p-3">CONTACT NO</th>
              <th className="p-3">EMAIL</th>
              <th className="p-3">MESSAGE</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((contact: any) => (
              <tr key={contact.id}>
                <td className="p-3">{contact.firstname}</td>
                <td className="p-3">{contact.lastname}</td>
                <td className="p-3">{contact.contactno}</td>
                <td className="p-3">{contact.email}</td>
                <td className="p-3">{contact.message}</td>
                <td className="p-0">
                  <Button variant="destructive">Delete</Button>
                </td>
                <td className="p-0">
                  <Button variant="outline">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

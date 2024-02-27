import { getContacts, editForm, deleteContact } from "@/app/action/contactAction";
import { Button } from "../ui/button";

export default async function ContactListNew() {
  const { contacts } = await getContacts();

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="overflow-x-auto rounded-xl p-4 bg-[#f7f4f4]">
        {contacts?.map((contact: any) => (
          <div key={contact.id}>
            <div className="flex gap-2">
              <form className=" flex flex-auto gap-2 my-2" action={editForm}>
                <input type="hidden" name="id" value={contact.id}/>
                <input
                  type="text"
                  name="firstname"
                  defaultValue={contact.firstname}
                  className="border p-1"
                />
                <input
                  type="text"
                  name="lastname"
                  defaultValue={contact.lastname}
                  className="border p-1"
                />
                <input
                  type="email"
                  name="email"
                  defaultValue={contact.email}
                  className="border p-1"
                />
                <input
                  type="text"
                  name="contactno"
                  defaultValue={contact.contactno}
                  className="border p-1"
                />
                <input
                  type="text"
                  name="message"
                  defaultValue={contact.message}
                  className="border p-1"
                />
                <button className="rounded-lg mx-1 px-2 bg-[#a8c7c2]">save</button>
              </form>
              <form action={deleteContact}>
              <input type="hidden" name="id" value={contact.id}/>
              <Button variant="outline">Delete</Button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

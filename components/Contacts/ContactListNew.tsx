import {
  getContacts,

  deleteContact,
} from "@/app/action/contactAction";
import SaveContactBtn from "./actions/saveContactBtn";
import DeleteContactBtn from "./actions/deleteContactBtn";

export default async function ContactListNew() {
  const { contacts } = await getContacts();

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="overflow-x-auto rounded-md p-4 bg-[#f7f4f4]">
        {contacts?.map((contact: any) => (
          <div key={contact.id}>
            <div className="flex items-center just gap-2 mx-4">
              <form className=" flex gap-2 my-2">
                <input type="hidden" name="id" value={contact.id} />
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
               <SaveContactBtn/>
              </form>
              <form action={deleteContact} className="pr-4">
                <input type="hidden" name="id" value={contact.id} />
                <DeleteContactBtn/>
              </form>
              <form action=""></form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import ContactForm from "@/components/Contacts/ContactFrom";
import ContactList from "@/components/Contacts/ContactListNew";


const TestPage = async () => {
  return (
    <div className="pt-40">
      <ContactForm/>
      <ContactList/>

    </div>
  );
};

export default TestPage;

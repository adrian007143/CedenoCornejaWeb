import ContactForm from "@/components/shared/AddContact";
import ContactList from "@/components/shared/ContactList";


const TestPage = async () => {
  return (
    <div className="pt-40">
      <ContactForm/>
      <ContactList/>

    </div>
  );
};

export default TestPage;

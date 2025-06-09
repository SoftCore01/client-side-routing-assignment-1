import "./contact.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { type Contact, IsEditContext } from "./utils"
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactContainer from "./ContactsContainer";

export default function ContactBook() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isEditArray, setIsEditArray] = useState<boolean[]>([]);
  return (
    <>
      <IsEditContext.Provider
        value={{ isEditArray, setIsEditArray, contacts, setContacts }}
      >
        <div className="contact-book">
          <Link to="/">Home</Link>
          <Link to="/github-search">Search</Link>
          <ContactHeader />
          <ContactForm />
          <ContactContainer />
        </div>
      </IsEditContext.Provider>
    </>
  );
}

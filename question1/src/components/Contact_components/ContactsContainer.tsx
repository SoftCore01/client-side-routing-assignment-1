import { useIsEditContext } from "./utils";
import ContactCard from "./ContactCard";

export default function ContactContainer() {
  const { contacts } = useIsEditContext();
  return (
    <div className="card-container">
      {contacts.map((contact, index) => (
        <ContactCard
          index={index}
          key={index}
          name={contact.name}
          city={contact.city}
        />
      ))}
    </div>
  );
}

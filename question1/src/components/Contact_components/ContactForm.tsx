import { useIsEditContext, type Contact } from "./utils";
import { useRef, useState } from "react";

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const cityRef = useRef<HTMLInputElement | null>(null);
  const { isEditArray, setIsEditArray, contacts, setContacts } =
    useIsEditContext();
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameRef.current?.value && cityRef.current?.value) {
      setIsError(false);
      const newContact: Contact[] = [...contacts];
      newContact.push({
        name: nameRef.current.value,
        city: cityRef.current.value,
      });

      setContacts(newContact);
      nameRef.current.value = "";
      cityRef.current.value = "";
      const newIsEditArray = [...isEditArray];
      newIsEditArray.push(false);
      setIsEditArray(newIsEditArray);
    } else {
      setIsError(true);
    }
  };

  return (
    <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name" className="name">
          <input id="name" ref={nameRef} type="text" />
        </label>
        <label htmlFor="city" className="city">
          <input id="city" ref={cityRef} type="text" />
        </label>
        <button>Add contact</button>
      </div>

      {isError ? <small>One or more input fields is empty</small> : null}
    </form>
  );
}

import { type Contact, useIsEditContext } from "./utils";
import { useRef } from "react";


interface ContactCardProps extends Contact {
  index: number;
}

export default function ContactCard(props: ContactCardProps) {
  const { isEditArray, setIsEditArray, contacts, setContacts } =
    useIsEditContext();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const cityRef = useRef<HTMLInputElement | null>(null);
  const deleteRef = useRef<HTMLDivElement | null>(null);

  const handleEditTrue = () => {
    const newIsEditArray = [...isEditArray];
    for (let i = 0; i < newIsEditArray.length; i++) {
      if (i == props.index) {
        newIsEditArray[i] = true;
      } else {
        newIsEditArray[i] = false;
      }
    }
    setIsEditArray(newIsEditArray);
  };

  const handleEditFalse = () => {
    const newIsEditArray = [...isEditArray];
    for (let i = 0; i < newIsEditArray.length; i++) {
      newIsEditArray[i] = false;
    }
    setIsEditArray(newIsEditArray);
  };

  const handleSave = () => {
    if (nameRef.current?.value && cityRef.current?.value) {
      const newContact: Contact[] = [...contacts];
      newContact[props.index] = {
        name: nameRef.current.value,
        city: cityRef.current.value,
      };
      setContacts(newContact);
      handleEditFalse();
    }
  };
  const handleDelete = () => {
    const newContact: Contact[] = [...contacts];
    newContact.splice(props.index, 1);
    setContacts(newContact);
    handleEditFalse();
  };

  return (
    <>
      <div ref={deleteRef} className="contact-card">
        {!isEditArray[props.index] ? (
          <div className="info-container">
            <div className="contact-info">
              <h3>{props.name}</h3>
              <p>{props.city}</p>
            </div>
            <button className="edit-button" onClick={() => handleEditTrue()}>
              Edit
            </button>
          </div>
        ) : (
          <div className="edit">
            <form className="edit-contact-form">
              <label htmlFor="name" className="name">
                <input
                  id="edit-name"
                  ref={nameRef}
                  type="text"
                  defaultValue={props.name}
                />
              </label>
              <label htmlFor="city" className="city">
                <input
                  id="edit-city"
                  ref={cityRef}
                  type="text"
                  defaultValue={props.city}
                />
              </label>
            </form>
            <div className="buttons">
              <button onClick={() => handleDelete()} className="delete-button">
                Delete
              </button>
              <div className="cancel-save-buttons-div">
                <button
                  onClick={() => handleEditFalse()}
                  className="cancel-button"
                >
                  Cancel
                </button>
                <button onClick={() => handleSave()} className="save-button">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

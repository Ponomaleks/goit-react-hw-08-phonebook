import ContactsItem from './ContactsItem/ContactsItem';

export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

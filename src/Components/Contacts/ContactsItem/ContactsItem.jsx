import { useDeleteContactMutation } from '../../../redux/phonebook';
import ButtonDelete from '../ButtonDelete';
import s from './ContactsItem.module.css';

export default function ContactsItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.contact}>
      {contact.name}: {contact.number}{' '}
      <ButtonDelete
        type="button"
        text={isDeleting ? 'Deleting...' : 'Delete'}
        id={contact.id}
        onClick={deleteContact}
      ></ButtonDelete>
    </li>
  );
}

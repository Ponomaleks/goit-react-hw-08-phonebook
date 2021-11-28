import { useState } from 'react';
import s from './Form.module.css';
import Button from './Button';
import InputName from './InputName';
import InputTel from './InputTel';
import Loader from '../Loader';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/phonebook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  console.log(data);
  const handleSubmit = e => {
    e.preventDefault();
    const nameIsPresent = data.find(cont => cont.name.toLowerCase() === name.toLowerCase());
    if (nameIsPresent) {
      toast.info(({ data }) => `${data} is already among your contact`, {
        data: name,
      });
      return;
    }
    addContact({ name, number });

    clearForm();
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  return (
    <form className={s.form} name="addContact" onSubmit={handleSubmit}>
      <InputName value={name} onChange={handleChange} name="name"></InputName>
      <InputTel value={number} onChange={handleChange} name="number" />
      <Button type="submit" disabled={!name || !number}>
        Add contact {isAdding && <Loader height={14} width={14} color={'gray'} />}
      </Button>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
}

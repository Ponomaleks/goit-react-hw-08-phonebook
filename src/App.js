import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import SectionH1 from './Components/SectionH1';
import Contacts from './Components/Contacts';
import SectionH2 from './Components/SectionH2';
import Filter from './Components/Filter/Filter';
import { useGetContactsQuery } from './redux/phonebook';
import Loader from './Components/Loader';

export default function App() {
  const [filter, setFilter] = useState('');
  const { data, isLoading } = useGetContactsQuery();

  const filterHundler = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  let filteredContacts;
  const normalizedFilter = filter.toLowerCase();
  data
    ? (filteredContacts = data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      ))
    : (filteredContacts = []);

  return (
    <>
      <SectionH1 title="Phonebook">
        <Form></Form>
      </SectionH1>
      <SectionH2 title="Contacts">
        {isLoading ? (
          <Loader height={120} width={150} color={'#dcdcdc'} />
        ) : (
          <>
            <Filter value={filter} onChange={filterHundler} />
            {data && <Contacts contacts={filteredContacts}></Contacts>}
          </>
        )}
      </SectionH2>
    </>
  );
}

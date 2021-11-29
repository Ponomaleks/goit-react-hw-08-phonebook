import { Routes, Route } from 'react-router';
import './App.css';
// import { useState } from 'react';
// import Form from './Components/Form';
// import SectionH1 from './Components/SectionH1';
// import Contacts from './Components/Contacts';
// import SectionH2 from './Components/SectionH2';
// import Filter from './Components/Filter/Filter';
// import { useGetContactsQuery } from './redux/phonebook';

import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/contacts" element={<ContactsView />} />
      <Route path="/register" element={<RegisterView />} />
    </Routes>
  );
}

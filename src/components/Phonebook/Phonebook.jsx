import React, { useEffect } from 'react';

import css from './Phonebook.module.css';

import ContactForm from './contacnform/ContactForm';
import ContactList from './contactlist/ContactList';
import Filter from './filter/Filter';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactSlice';

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>

        <ContactForm />

        <h2 className={css.title}>Contacts</h2>

        <Filter />

        <ContactList />
      </div>
    </div>
  );
}

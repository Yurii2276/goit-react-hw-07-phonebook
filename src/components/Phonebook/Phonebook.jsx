import React, { useEffect } from 'react';

import css from './Phonebook.module.css';

import ContactForm from './contacnform/ContactForm';
import ContactList from './contactlist/ContactList';
import Filter from './filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactSlice';
import Loader from 'components/loader/Loader';
import { selectContactsError, selectContactsIsLoading } from 'redux/contacts.selectors';
import ErrorMessage from 'components/ErrorMassadge/ErrorMassadge';

export default function Phonebook() {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector (selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error}/> }
 
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

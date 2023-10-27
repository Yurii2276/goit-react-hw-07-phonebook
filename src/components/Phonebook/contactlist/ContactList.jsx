import React from 'react';

import css from './Contactlist.module.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  deliteContacts,
  selectVisibleContacts,
} from '../../../redux/contactSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = contactId => {
    dispatch(deliteContacts(contactId));
  };

  return (
    <div>
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.contactList}>
            {contact.name}: {contact.phone}
            <button
              onClick={() => handleDeleteContact(contact.id)}
              className={css.btnDelete}
              type="click"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

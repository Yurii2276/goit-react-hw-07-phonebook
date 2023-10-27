import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import css from './ContactForm.module.css';

import { addContacts } from '../../../redux/contactSlice';
import { selectContacts } from 'redux/contacts.selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
      default:
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || phone.trim() === '') {
      alert('Please enter name and telephone number!');
      return;
    }
    const newContact = {
      createdAt: new Date().toISOString(),
      name: name,
      phone: phone,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
     
      return;
    }
    dispatch(addContacts(newContact));
    setName('');
    setPhone('');
  };

  return (
    <form className={css.contactContainer} onSubmit={handleSubmit}>
      <label htmlFor="" className={css.InputContainer}>
        <span className={css.inputtitle}>Name</span>
        <input
          onChange={handleInputChange}
          name="name"
          value={name}
          className={css.inputFormStyle}
          type="text"
          required
        />
      </label>

      <label htmlFor="" className={css.InputContainer}>
        <span className={css.inputtitle}>Number</span>
        <input
          onChange={handleInputChange}
          name="phone"
          value={phone}
          className={css.inputFormStyle}
          type="tel"
          required
        />
      </label>

      <button className={css.btnAddContact} type="submit">
        Add contact
      </button>
    </form>
  );
}

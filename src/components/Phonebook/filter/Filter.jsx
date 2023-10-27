import React from 'react';
import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter } from 'redux/contacts.selectors';
import { setFilter } from 'redux/contactSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const filterByName = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="" className={css.InputContainer}>
        <span className={css.inputtitle}>Find contacts by name</span>
        <input
          onChange={filterByName}
          name="filter"
          value={filter}
          className={css.filterInput}
          type="text"
          required
        />
      </label>
    </div>
  );
}

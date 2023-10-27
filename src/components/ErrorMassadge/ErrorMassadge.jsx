import React from 'react';

import css from './ErrorMassadge.module.css'

const ErrorMessage = ({ message }) => {
  return <p className={css.Error}>{message}</p>;
};

export default ErrorMessage;
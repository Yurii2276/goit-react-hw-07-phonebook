import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6536b730bb226bb85dd289fb.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getContacts } from 'components/Api.js/contacts';

export const fetchContacts = createAsyncThunk(
  'contacns/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContacts();

      return contacts; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacns/addContact',
  async (newContact, thunkAPI) => {
    try {
      const contacts = await addContact(newContact);

      return contacts; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: "",
  form: {
    name: '',
    phone: '',
  },
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.contacts.items.push(action.payload);
    // },
    // deliteContact: (state, action) => {
    //   state.contacts.items = state.contacts.items.filter(
    //     contact => contact.id !== action.payload
    //   ); 
    // },
    filtredContact: (state, action) => {
      state.filter = action.payload;
    },
    updateFormField: (state, action) => {
      const { fieldName, value } = action.payload;
      state.form[fieldName] = value;
    },
  },

  extraReducers: builder =>
  builder
    .addCase(fetchContacts.pending, state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    })

    .addCase(addContacts.pending, state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    })
    .addCase(addContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts.items.unshift(action.payload);
    })
    .addCase(addContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    })
    
});



export const { addContact, deliteContact, filtredContact, updateFormField } = contactSlice.actions;

export default contactSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { types } from '../../auth/types/types';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //   id: 'ABC123',
        //   title: '',
        //   body: '',
        //   date: 123456,
        //   imageUrls: [],
        // },
    },
    reducers: {
      addNewEmptyNote: ( state, action ) => {
        state.status = 'authenticated'; // 'not-authenticated' , 'authenticated' , 'checking'
        state.uid = payload.uid;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
        state.errorMessage = null;
      },
      setActiveNote: ( state, action ) => {

      },
      setNotes: ( state, action ) => {

      },
      setSaving: ( state ) => {

      },
      updateNote: ( state, action ) => {

      },
      deleteNoteById: ( state, action ) => {

      }
    }
});


export const { 
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;
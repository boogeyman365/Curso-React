import { createSlice } from '@reduxjs/toolkit';
import { types } from '../../auth/types/types';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
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
      savingNewNote: ( state ) => {
        state.isSaving = true;
      },
      addNewEmptyNote: ( state, action ) => {
        state.notes.push( action.payload );
        state.isSaving = false;
      },
      setActiveNote: ( state, action ) => {
        state.active = action.payload
      },
      setNotes: ( state, action ) => {
        state.notes = action.payload ;
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
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;
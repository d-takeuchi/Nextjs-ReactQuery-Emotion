import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { EditDragon } from '../types/types'
import { RootState } from '../app/store'

export interface uiState {
  editedDragon: EditDragon
}

const initialState: uiState = {
  editedDragon: {
    id: '',
    name: '',
    decription: '',
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setEditedDragon: (state, action: PayloadAction<EditDragon>) => {
      state.editedDragon = action.payload
    },
    resetEditedDragon: (state) => {
      state.editedDragon = initialState.editedDragon
    },
  },
})

export const { setEditedDragon, resetEditedDragon } = uiSlice.actions

export const selectDragon = (state: RootState) => state.ui.editedDragon

export default uiSlice.reducer

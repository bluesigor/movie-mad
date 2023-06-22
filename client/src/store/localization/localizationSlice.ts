import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { General } from '../../core/models'

const initialState: General.Language = {
  lang: 'Ukrainian',
}

export const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload
    },
  },
})

export const { changeLanguage } = localizationSlice.actions

export default localizationSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './localization/localizationSlice'

const store = configureStore({
  reducer: {
    languages: languageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export default store

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
  mode: 'light' | 'dark'
  systemPreference: boolean
}

const initialState: ThemeState = {
  mode: 'light',
  systemPreference: true,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      state.systemPreference = false
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload
      state.systemPreference = false
    },
    setSystemPreference: (state, action: PayloadAction<boolean>) => {
      state.systemPreference = action.payload
      if (action.payload) {
        state.mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
    },
  },
})

export const { toggleTheme, setTheme, setSystemPreference } = themeSlice.actions
export default themeSlice.reducer
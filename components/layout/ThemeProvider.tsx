'use client'

import { createContext, useContext, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../lib/store/hooks'
import { setTheme, setSystemPreference } from '../../lib/store/slices/themeSlice'

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({})

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { mode } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(mode)
    
    // Set theme attribute for accessibility
    root.setAttribute('data-theme', mode)
  }, [mode])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      dispatch(setTheme(mediaQuery.matches ? 'dark' : 'light'))
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [dispatch])

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
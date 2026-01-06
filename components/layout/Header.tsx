'use client'

import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../lib/store/hooks'
import { toggleTheme } from '../../lib/store/slices/themeSlice'
import { logout } from '../../lib/store/slices/authSlice'
import { useRouter } from 'next/navigation'
import { Sun, Moon, Bell, User, LogOut, Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.theme)
  const { user } = useAppSelector((state) => state.auth)
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
    // Clear auth cookie
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary-600" />
            <span className="text-xl font-bold">RentSynch Africa</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => router.push('/dashboard')}>
            Dashboard
          </Button>
          <Button variant="ghost">Properties</Button>
          <Button variant="ghost">Tenants</Button>
          <Button variant="ghost">Reports</Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(toggleTheme())}
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {mode === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="View notifications"
              aria-expanded={showNotifications}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </span>
            </Button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-80 rounded-lg border border-border bg-card p-4 shadow-lg"
                  role="dialog"
                  aria-label="Notifications"
                >
                  <h3 className="font-semibold mb-2">Notifications</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <p className="font-medium">Rent payment received</p>
                      <p className="text-muted-foreground">Sunset Villas - KES 45,000</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Maintenance request</p>
                      <p className="text-muted-foreground">Hilltop Mansion - Plumbing</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-medium">{user?.name}</span>
              <span className="text-xs text-muted-foreground">{user?.role}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              aria-label="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Button variant="ghost" fullWidth onClick={() => router.push('/dashboard')}>
                Dashboard
              </Button>
              <Button variant="ghost" fullWidth>
                Properties
              </Button>
              <Button variant="ghost" fullWidth>
                Tenants
              </Button>
              <Button variant="ghost" fullWidth>
                Reports
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
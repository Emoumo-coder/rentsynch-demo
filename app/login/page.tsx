'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '../../lib/store/hooks'
import { login } from '../../lib/store/slices/authSlice'
import { motion } from 'framer-motion'
import Button from '../../components/ui/Button'
import { Building2, Mail, Lock } from 'lucide-react'
import Input from '@/components/ui/Input'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
  
    // Mock authentication
    setTimeout(() => {
      if (email && password) {
        dispatch(login({ email, password }))
        // Set auth cookie
        document.cookie = 'auth=true; path=/; max-age=86400' // 24 hours
        router.push('/dashboard')
      } else {
        setError('Please enter both email and password')
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleDemoLogin = () => {
    setEmail('demo@rentsynch.com')
    setPassword('demo123')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-950 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="h-16 w-16 rounded-2xl bg-primary-600 flex items-center justify-center">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <h1 className="text-3xl font-bold mb-2">RentSynch Africa</h1>
          <p className="text-muted-foreground">
            Property Management Platform
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-required="true"
                aria-label="Email address"
              />
            </div>

            <div>
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                aria-required="true"
                aria-label="Password"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm"
                role="alert"
              >
                {error}
              </motion.div>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  aria-label="Remember me"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-primary-600 hover:text-primary-800 dark:text-primary-400"
                aria-label="Forgot password"
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              fullWidth
              isLoading={isLoading}
              aria-label={isLoading ? 'Signing in...' : 'Sign in to your account'}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={handleDemoLogin}
              aria-label="Use demo account"
            >
              Use Demo Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            By signing in, you agree to our{' '}
            <button className="text-primary-600 hover:text-primary-800 dark:text-primary-400">
              Terms of Service
            </button>{' '}
            and{' '}
            <button className="text-primary-600 hover:text-primary-800 dark:text-primary-400">
              Privacy Policy
            </button>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} RentSynch Africa. All rights reserved.</p>
          <p className="mt-1">A product of RentNexus Technologies Inc.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '../../lib/store/hooks'
import { motion } from 'framer-motion'
import Header from '../../components/layout/Header'
import SummaryCards from '../../components/dashboard/SummaryCards'
import PropertyTable from '../../components/dashboard/PropertyTable'
import RecentActivity from '../../components/dashboard/RecentActivity'
import RentStatus from '../../components/dashboard/RentStatus'
import { Activity, TrendingUp, Users, Home } from 'lucide-react'

export default function DashboardPage() {
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your properties today.
          </p>
        </motion.div>

        {/* Summary Cards */}
        <div className="mb-8">
          <SummaryCards />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Table */}
          <div className="lg:col-span-2">
            <PropertyTable />
          </div>

          {/* Right Column - Recent Activity & Rent Status */}
          <div className="space-y-8">
            <RecentActivity />
            <RentStatus />
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Home, label: 'Properties Managed', value: '5' },
              { icon: Users, label: 'Active Tenants', value: '4' },
              { icon: TrendingUp, label: 'Collection Rate', value: '78%' },
              { icon: Activity, label: 'Active Requests', value: '3' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="p-4 rounded-lg border border-border bg-card"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                    <stat.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-border py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <div className="h-6 w-6 rounded bg-primary-600" />
              <span className="font-semibold">RentSynch Africa</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RentNexus Technologies Inc. • Demo Version 1.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
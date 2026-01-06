'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { Home, Users, DollarSign, TrendingUp, Wrench, Clock } from 'lucide-react'
import { summaryStats } from '../../lib/utils/mockData'

const iconMap = {
  Home,
  Users,
  DollarSign,
  TrendingUp,
  Wrench,
  Clock,
}

interface SummaryCardProps {
  title: string
  value: string | number
  change?: string
  icon: keyof typeof iconMap
  color?: string
}

function SummaryCard({ title, value, change, icon, color = 'primary' }: SummaryCardProps) {
  const Icon = iconMap[icon]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card hover className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className={`p-2 rounded-lg bg-${color}-100 dark:bg-${color}-900/30`}>
            <Icon className={`h-4 w-4 text-${color}-600 dark:text-${color}-400`} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          {change && (
            <p className="text-xs text-muted-foreground mt-1">
              <span className={change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                {change}
              </span>{' '}
              from last month
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function SummaryCards() {
  const cards: SummaryCardProps[] = [
    {
      title: 'Total Properties',
      value: summaryStats.totalProperties,
      change: '+1',
      icon: 'Home',
      color: 'primary',
    },
    {
      title: 'Occupied Properties',
      value: summaryStats.occupiedProperties,
      icon: 'Users',
      color: 'green',
    },
    {
      title: 'Monthly Rent',
      value: `KES ${summaryStats.totalMonthlyRent.toLocaleString()}`,
      change: '+12.5%',
      icon: 'DollarSign',
      color: 'yellow',
    },
    {
      title: 'Average Occupancy',
      value: `${summaryStats.averageOccupancy}%`,
      change: '+5%',
      icon: 'TrendingUp',
      color: 'blue',
    },
    {
      title: 'Pending Payments',
      value: summaryStats.pendingPayments,
      icon: 'Clock',
      color: 'orange',
    },
    {
      title: 'Maintenance Requests',
      value: summaryStats.maintenanceRequests,
      icon: 'Wrench',
      color: 'red',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {cards.map((card, index) => (
        <SummaryCard key={card.title} {...card} />
      ))}
    </div>
  )
}
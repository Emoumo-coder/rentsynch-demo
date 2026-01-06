'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { CheckCircle, XCircle, AlertCircle, Circle, Clock } from 'lucide-react'
import { mockRentStatus } from '../../lib/utils/mockData'
import { format } from 'date-fns'

const statusConfig = {
  paid: {
    icon: CheckCircle,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  overdue: {
    icon: XCircle,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
  },
  pending: {
    icon: Clock,
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
  },
  partial: {
    icon: AlertCircle,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
}

export default function RentStatus() {
  const totalRent = mockRentStatus.reduce((sum, rent) => sum + rent.amount, 0)
  const collectedRent = mockRentStatus
    .filter(rent => rent.status === 'paid' || rent.status === 'partial')
    .reduce((sum, rent) => sum + (rent.paidAmount || 0), 0)
  const collectionRate = Math.round((collectedRent / totalRent) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Rent Status</CardTitle>
            <div className="text-sm">
              <span className="font-semibold">{collectionRate}%</span>
              <span className="text-muted-foreground"> collected</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Collection Progress</span>
                <span className="font-medium">
                  KES {collectedRent.toLocaleString()} / {totalRent.toLocaleString()}
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${collectionRate}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary-600 rounded-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              {mockRentStatus.map((rent, index) => {
                const config = statusConfig[rent.status]
                const Icon = config.icon
                
                return (
                  <motion.div
                    key={rent.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${config.bgColor}`}>
                        <Icon className={`h-4 w-4 ${config.color}`} />
                      </div>
                      <div>
                        <p className="font-medium">{rent.property}</p>
                        <p className="text-sm text-muted-foreground">
                          {rent.tenant} • Due {format(rent.dueDate, 'MMM d')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        KES {rent.amount.toLocaleString()}
                      </p>
                      {rent.paidAmount && rent.status === 'partial' && (
                        <p className="text-sm text-muted-foreground">
                          Paid: KES {rent.paidAmount.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
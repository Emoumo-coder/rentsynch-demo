'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { CheckCircle, Clock, AlertCircle, FileText } from 'lucide-react'
import { mockRecentActivities } from '../../lib/utils/mockData'
import { format } from 'date-fns'

const activityIcons = {
  payment: CheckCircle,
  maintenance: AlertCircle,
  tenant: FileText,
  property: CheckCircle,
}

const statusColors = {
  completed: 'text-green-600 dark:text-green-400',
  pending: 'text-yellow-600 dark:text-yellow-400',
  failed: 'text-red-600 dark:text-red-400',
}

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRecentActivities.map((activity, index) => {
              const Icon = activityIcons[activity.type]
              
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  role="article"
                  aria-label={`Activity: ${activity.description}`}
                >
                  <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                    <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{activity.description}</p>
                      <span className={`text-xs ${statusColors[activity.status]}`}>
                        {activity.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{activity.property}</span>
                      <span>{format(activity.timestamp, 'MMM d, h:mm a')}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
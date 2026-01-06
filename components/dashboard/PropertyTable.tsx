'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { MoreVertical, Edit, Trash2, Eye } from 'lucide-react'
import { mockProperties } from '../../lib/utils/mockData'
import { format } from 'date-fns'

const statusColors = {
  Occupied: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Vacant: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
  'Under Maintenance': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
}

export default function PropertyTable() {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Properties</CardTitle>
            <button className="text-sm text-primary-600 hover:text-primary-800 dark:text-primary-400">
              View All →
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full" role="table" aria-label="Properties table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Property Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Address
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Monthly Rent
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockProperties.map((property) => (
                  <motion.tr
                    key={property.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{property.name}</p>
                        {property.tenant && (
                          <p className="text-sm text-muted-foreground">
                            Tenant: {property.tenant}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">{property.address}</td>
                    <td className="py-3 px-4">{property.type}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[property.status]}`}>
                        {property.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-semibold">
                        KES {property.monthlyRent.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1 hover:bg-muted rounded"
                          aria-label={`View details for ${property.name}`}
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          className="p-1 hover:bg-muted rounded"
                          aria-label={`Edit ${property.name}`}
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          className="p-1 hover:bg-muted rounded"
                          onClick={() => setSelectedProperty(property.id)}
                          aria-label={`More options for ${property.name}`}
                          aria-expanded={selectedProperty === property.id}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
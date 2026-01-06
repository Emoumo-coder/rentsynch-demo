
export interface Property {
  id: string
  name: string
  address: string
  type: 'Apartment' | 'House' | 'Commercial' | 'Land'
  status: 'Occupied' | 'Vacant' | 'Under Maintenance'
  monthlyRent: number
  tenant?: string
  lastPayment?: Date
  nextPayment?: Date
  occupancy: number
}

export interface RecentActivity {
  id: string
  type: 'payment' | 'maintenance' | 'tenant' | 'property'
  description: string
  property: string
  timestamp: Date
  status: 'completed' | 'pending' | 'failed'
}

export interface RentStatus {
  id: string
  property: string
  tenant: string
  amount: number
  dueDate: Date
  status: 'paid' | 'overdue' | 'pending' | 'partial'
  paidAmount?: number
}

export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Sunset Villas',
    address: '123 Main St, Nairobi',
    type: 'Apartment',
    status: 'Occupied',
    monthlyRent: 45000,
    tenant: 'Jane Smith',
    lastPayment: new Date('2024-03-01'),
    nextPayment: new Date('2024-04-01'),
    occupancy: 100,
  },
  {
    id: '2',
    name: 'Green Valley House',
    address: '456 Oak Ave, Lagos',
    type: 'House',
    status: 'Occupied',
    monthlyRent: 85000,
    tenant: 'John Doe',
    lastPayment: new Date('2024-03-05'),
    nextPayment: new Date('2024-04-05'),
    occupancy: 100,
  },
  {
    id: '3',
    name: 'City Center Plaza',
    address: '789 Business Rd, Accra',
    type: 'Commercial',
    status: 'Occupied',
    monthlyRent: 120000,
    tenant: 'Tech Solutions Ltd',
    lastPayment: new Date('2024-03-10'),
    nextPayment: new Date('2024-04-10'),
    occupancy: 80,
  },
  {
    id: '4',
    name: 'Lakeside Apartments',
    address: '101 Lake View, Kampala',
    type: 'Apartment',
    status: 'Vacant',
    monthlyRent: 35000,
    occupancy: 0,
  },
  {
    id: '5',
    name: 'Hilltop Mansion',
    address: '202 Mountain Rd, Cape Town',
    type: 'House',
    status: 'Under Maintenance',
    monthlyRent: 150000,
    tenant: 'Robert Johnson',
    lastPayment: new Date('2024-02-28'),
    nextPayment: new Date('2024-03-28'),
    occupancy: 100,
  },
]

export const mockRecentActivities: RecentActivity[] = [
  {
    id: '1',
    type: 'payment',
    description: 'Rent payment received',
    property: 'Sunset Villas',
    timestamp: new Date('2024-03-28T10:30:00'),
    status: 'completed',
  },
  {
    id: '2',
    type: 'maintenance',
    description: 'Plumbing repair requested',
    property: 'Hilltop Mansion',
    timestamp: new Date('2024-03-27T14:20:00'),
    status: 'pending',
  },
  {
    id: '3',
    type: 'tenant',
    description: 'New tenant application',
    property: 'Lakeside Apartments',
    timestamp: new Date('2024-03-26T09:15:00'),
    status: 'pending',
  },
  {
    id: '4',
    type: 'property',
    description: 'Property inspection completed',
    property: 'Green Valley House',
    timestamp: new Date('2024-03-25T16:45:00'),
    status: 'completed',
  },
  {
    id: '5',
    type: 'payment',
    description: 'Rent payment overdue',
    property: 'City Center Plaza',
    timestamp: new Date('2024-03-24T11:00:00'),
    status: 'failed',
  },
]

export const mockRentStatus: RentStatus[] = [
  {
    id: '1',
    property: 'Sunset Villas',
    tenant: 'Jane Smith',
    amount: 45000,
    dueDate: new Date('2024-04-01'),
    status: 'paid',
    paidAmount: 45000,
  },
  {
    id: '2',
    property: 'Green Valley House',
    tenant: 'John Doe',
    amount: 85000,
    dueDate: new Date('2024-04-05'),
    status: 'pending',
  },
  {
    id: '3',
    property: 'City Center Plaza',
    tenant: 'Tech Solutions Ltd',
    amount: 120000,
    dueDate: new Date('2024-04-10'),
    status: 'partial',
    paidAmount: 60000,
  },
  {
    id: '4',
    property: 'Hilltop Mansion',
    tenant: 'Robert Johnson',
    amount: 150000,
    dueDate: new Date('2024-03-28'),
    status: 'overdue',
  },
]

export const summaryStats = {
  totalProperties: 5,
  occupiedProperties: 3,
  totalMonthlyRent: 435000,
  averageOccupancy: 76,
  pendingPayments: 2,
  maintenanceRequests: 1,
}
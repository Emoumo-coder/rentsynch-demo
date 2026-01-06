'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Shield, TrendingUp, Users, Globe } from 'lucide-react'
import Button from '../components/ui/Button'

export default function Home() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/login')
  }

  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level security for all your property data and transactions',
    },
    {
      icon: TrendingUp,
      title: 'Real-time Insights',
      description: 'Track performance and make data-driven decisions',
    },
    {
      icon: Users,
      title: 'Tenant Management',
      description: 'Streamline tenant onboarding and communication',
    },
    {
      icon: Globe,
      title: 'Africa-Focused',
      description: 'Built for African property markets and regulations',
    },
  ]

  const stats = [
    { value: '500+', label: 'Properties Managed' },
    { value: '98%', label: 'Rent Collection Rate' },
    { value: '24/7', label: 'Support Available' },
    { value: '10+', label: 'African Countries' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary-600" />
            <span className="text-xl font-bold">RentSynch Africa</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push('/login')}
            >
              Sign In
            </Button>
            <Button onClick={handleGetStarted}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Simplify Property Management{' '}
              <span className="text-primary-600">Across Africa</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              RentSynch Africa is your all-in-one platform for managing properties,
              tenants, and rent collection. Designed specifically for African markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleGetStarted}>
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />
              <div className="relative p-8">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-4 rounded-full bg-muted animate-pulse" />
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-20 rounded-lg bg-card border border-border" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-muted-foreground">
            Streamline your property management workflow with our comprehensive toolkit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of landlords and property managers across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
              onClick={handleGetStarted}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary-600" />
                <span className="text-xl font-bold">RentSynch Africa</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Simplifying property management across Africa
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button className="hover:text-foreground">Features</button></li>
                <li><button className="hover:text-foreground">Pricing</button></li>
                <li><button className="hover:text-foreground">API</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button className="hover:text-foreground">About</button></li>
                <li><button className="hover:text-foreground">Blog</button></li>
                <li><button className="hover:text-foreground">Careers</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button className="hover:text-foreground">Privacy Policy</button></li>
                <li><button className="hover:text-foreground">Terms of Service</button></li>
                <li><button className="hover:text-foreground">Cookie Policy</button></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} RentSynch Africa. A product of RentNexus Technologies Inc.</p>
            <p className="mt-1">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
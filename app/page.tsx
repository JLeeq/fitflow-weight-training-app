'use client'

import { useState } from 'react'
import Dashboard from '@/components/Dashboard'
import RoutineBuilder from '@/components/RoutineBuilder'
import { motion } from 'framer-motion'

export default function Home() {
  const [activePage, setActivePage] = useState(0)

  const pages = [
    { id: 'dashboard', title: 'Dashboard', component: Dashboard },
    { id: 'routine-builder', title: 'Routine Builder', component: RoutineBuilder },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50 p-8 gap-8 overflow-x-auto">
      {pages.map((page, index) => {
        const PageComponent = page.component
        return (
          <motion.div
            key={page.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="min-w-[375px] w-[375px] h-[812px] bg-white rounded-3xl shadow-2xl overflow-hidden flex-shrink-0 relative"
          >
            <PageComponent />
          </motion.div>
        )
      })}
      
      {/* Placeholder for additional pages */}
      <div className="min-w-[375px] w-[375px] h-[812px] bg-gray-100 rounded-3xl shadow-2xl flex items-center justify-center flex-shrink-0">
        <div className="text-center">
          <div className="text-4xl mb-4">📱</div>
          <div className="text-xl font-semibold mb-2">More Pages</div>
          <div className="text-gray-500">Additional pages will be implemented here</div>
        </div>
      </div>
    </div>
  )
} 
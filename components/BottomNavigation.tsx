'use client'

import { Home, ClipboardList, BarChart3, Scale } from 'lucide-react'

interface BottomNavigationProps {
  activeTab: 'dashboard' | 'routines' | 'progress' | 'balance'
}

export default function BottomNavigation({ activeTab }: BottomNavigationProps) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
    },
    {
      id: 'routines',
      label: 'Routines',
      icon: ClipboardList,
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: BarChart3,
    },
    {
      id: 'balance',
      label: 'Balance',
      icon: Scale,
    },
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
} 
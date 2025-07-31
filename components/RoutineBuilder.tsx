'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Save, Edit, Plus, Check } from 'lucide-react'
import BottomNavigation from './BottomNavigation'

interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  weight: string
  icon: string
}

export default function RoutineBuilder() {
  const [routineName, setRoutineName] = useState('Upper Body Strength')
  const [category, setCategory] = useState('Strength Training')
  const [duration, setDuration] = useState('45 minutes')
  const [balanceCheckEnabled, setBalanceCheckEnabled] = useState(true)

  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: '1',
      name: 'Bench Press',
      sets: 3,
      reps: 8,
      weight: '185 lbs',
      icon: '💪',
    },
    {
      id: '2',
      name: 'Overhead Press',
      sets: 3,
      reps: 10,
      weight: '135 lbs',
      icon: '🏋️',
    },
    {
      id: '3',
      name: 'Dumbbell Rows',
      sets: 3,
      reps: 12,
      weight: '65 lbs',
      icon: '💪',
    },
    {
      id: '4',
      name: 'Lateral Raises',
      sets: 3,
      reps: 15,
      weight: '25 lbs',
      icon: '🏋️',
    },
    {
      id: '5',
      name: 'Tricep Dips',
      sets: 3,
      reps: 12,
      weight: 'Bodyweight',
      icon: '💪',
    },
    {
      id: '6',
      name: 'Bicep Curls',
      sets: 3,
      reps: 15,
      weight: '40 lbs',
      icon: '🏋️',
    },
  ])

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 header-curved">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">Create Routine</h1>
            <p className="text-sm opacity-90">Build your perfect workout</p>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white transition-all duration-150 hover:bg-white/30 hover:scale-105">
              <X size={20} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white transition-all duration-150 hover:bg-white/30 hover:scale-105">
              <Save size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Routine Details */}
        <motion.div 
          className="card mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Routine Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Routine Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Upper Body Strength"
                value={routineName}
                onChange={(e) => setRoutineName(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Category</label>
              <select 
                className="form-input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Strength Training</option>
                <option>Cardio</option>
                <option>Flexibility</option>
                <option>Mixed</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Estimated Duration</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., 45 minutes"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Exercise List */}
        <motion.div 
          className="card mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Exercises</h2>
              <p className="text-sm text-gray-500">{exercises.length} exercises added</p>
            </div>
            <button className="btn btn-primary">
              <Plus size={16} />
              Add Exercise
            </button>
          </div>

          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              className="exercise-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <div className="exercise-icon">{exercise.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 mb-1">{exercise.name}</div>
                <div className="text-sm text-gray-500">
                  {exercise.sets} sets × {exercise.reps} reps • {exercise.weight}
                </div>
              </div>
              <button className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 transition-all duration-150 hover:bg-gray-200 hover:scale-105">
                <Edit size={16} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Auto Balance Check */}
        <motion.div 
          className="card mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Auto Balance Check</h2>
              <p className="text-sm text-gray-500">Ensures balanced muscle development</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="balance-check"
                checked={balanceCheckEnabled}
                onChange={(e) => setBalanceCheckEnabled(e.target.checked)}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
              />
              <label htmlFor="balance-check" className="text-sm font-medium text-gray-700">
                Enabled
              </label>
            </div>
          </div>
          
          <div className="text-center">
            <div className="stat-value text-success-500">✓ Balanced</div>
            <div className="stat-label">Your routine targets all major muscle groups</div>
          </div>
        </motion.div>

        {/* Save Actions */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-3">
            <button className="btn btn-secondary flex-1">
              <Save size={16} />
              Save Draft
            </button>
            <button className="btn btn-success flex-1">
              <Check size={16} />
              Save & Start
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="routines" />
    </div>
  )
} 
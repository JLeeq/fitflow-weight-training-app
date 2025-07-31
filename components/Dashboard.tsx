'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings, User, Play, Plus, Check } from 'lucide-react'
import BottomNavigation from './BottomNavigation'

interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  weight: string
  icon: string
  completed: boolean
}

export default function Dashboard() {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: '1',
      name: 'Bench Press',
      sets: 3,
      reps: 8,
      weight: '185 lbs',
      icon: '💪',
      completed: true,
    },
    {
      id: '2',
      name: 'Overhead Press',
      sets: 3,
      reps: 10,
      weight: '135 lbs',
      icon: '🏋️',
      completed: true,
    },
    {
      id: '3',
      name: 'Dumbbell Rows',
      sets: 3,
      reps: 12,
      weight: '65 lbs',
      icon: '💪',
      completed: false,
    },
    {
      id: '4',
      name: 'Lateral Raises',
      sets: 3,
      reps: 15,
      weight: '25 lbs',
      icon: '🏋️',
      completed: false,
    },
  ])

  const completedCount = exercises.filter(ex => ex.completed).length
  const progressPercentage = (completedCount / exercises.length) * 100

  const toggleExercise = (id: string) => {
    setExercises(prev => 
      prev.map(ex => 
        ex.id === id ? { ...ex, completed: !ex.completed } : ex
      )
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 header-curved">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">FitFlow</h1>
            <p className="text-sm opacity-90">Today's Training</p>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white transition-all duration-150 hover:bg-white/30 hover:scale-105">
              <Settings size={20} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white transition-all duration-150 hover:bg-white/30 hover:scale-105">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="stat-value">12</div>
            <div className="stat-label">Exercises</div>
          </motion.div>
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="stat-value">45</div>
            <div className="stat-label">Minutes</div>
          </motion.div>
        </div>

        {/* Current Routine */}
        <motion.div 
          className="card mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Upper Body Strength</h2>
              <p className="text-sm text-gray-500">Progress: {completedCount} of {exercises.length} exercises</p>
            </div>
            <div className="progress-bar w-24">
              <div 
                className="progress-fill" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              className="exercise-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className="exercise-icon">{exercise.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 mb-1">{exercise.name}</div>
                <div className="text-sm text-gray-500">
                  {exercise.sets} sets × {exercise.reps} reps • {exercise.weight}
                </div>
              </div>
              <button
                className={`exercise-status ${exercise.completed ? 'completed' : ''}`}
                onClick={() => toggleExercise(exercise.id)}
              >
                {exercise.completed && <Check size={16} className="text-white" />}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex gap-3">
            <button className="btn btn-primary flex-1">
              <Play size={16} />
              Start Workout
            </button>
            <button className="btn btn-secondary flex-1">
              <Plus size={16} />
              Add Exercise
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="dashboard" />
    </div>
  )
} 
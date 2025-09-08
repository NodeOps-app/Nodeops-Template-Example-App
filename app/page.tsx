"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Plus, ExternalLink, Twitter, Github } from "lucide-react"
import Image from "next/image"

interface Task {
  id: number
  text: string
  completed: boolean
}

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
      }
      setTasks([...tasks, task])
      setNewTask("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="min-h-screen bg-black p-4">
      {/* Logo */}
      <div className="fixed top-5 left-5 z-10">
        <a 
          href="https://nodeops.network/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <Image 
            src="/logo.png" 
            alt="NodeOps Logo" 
            width={240} 
            height={60} 
            className="w-60 h-15 object-contain"
          />
        </a>
      </div>

      <div className="max-w-4xl mx-auto pt-20">
        {/* NodeOps Demo Info Section */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 mb-6">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2">🚀 NodeOps Template Demo</h2>
              <p className="text-purple-700 text-sm">
                This demo showcases how to deploy a template on NodeOps Cloud Marketplace and start earning revenue share!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Documentation Link Box - Blue */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-4">
                  <a 
                    href="https://docs.nodeops.network/Guides/Marketplace/Configure-Compute/public-docker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Create Templates Guide</span>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* YouTube Video Box - Red */}
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:border-red-300 transition-colors">
                <CardContent className="p-4">
                  <a 
                    href="https://www.youtube.com/watch?v=q6S_P3PDAzg&t=1s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-red-700 hover:text-red-900 transition-colors"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Watch Tutorial Video</span>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Twitter Link Box - Purple */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300 transition-colors">
                <CardContent className="p-4">
                  <a 
                    href="https://x.com/BuildOnNodeOps" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    <Twitter className="w-6 h-6 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Follow @BuildOnNodeOps</span>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Repository Link Box - Green */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-300 transition-colors">
                <CardContent className="p-4">
                  <a 
                    href="https://github.com/NodeOps-app/Nodeops-Template-Example-App" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-700 hover:text-green-900 transition-colors"
                  >
                    <Github className="w-6 h-6 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">View Source Code</span>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-purple-600">
                Learn how to dockerize your app and submit it to the NodeOps community marketplace to start earning revenue share.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-purple-600 mb-4">Task Manager</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Add Task Section */}
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
                className="flex-1"
              />
              <Button onClick={addTask} className="bg-purple-600 hover:bg-purple-700" disabled={!newTask.trim()}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Tasks List */}
            <div className="space-y-2">
              {tasks.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No tasks yet. Add your first task above!</p>
                </div>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      task.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-300"
                    }`}
                  >
                    <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
                    <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                      {task.text}
                    </span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteTask(task.id)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>

            {/* Stats */}
            {tasks.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Total tasks: {tasks.length}</span>
                  <span>Completed: {tasks.filter((t) => t.completed).length}</span>
                  <span>Remaining: {tasks.filter((t) => !t.completed).length}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
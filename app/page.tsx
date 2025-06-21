"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Plus, ExternalLink, Twitter, Github } from "lucide-react"
import { WalletConnect } from "@/components/wallet-connect"
import Image from "next/image"

interface Task {
  id: number
  text: string
  completed: boolean
  owner?: string
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [connectedAddress, setConnectedAddress] = useState<string>("")

  // Get environment variable directly (build-time)
  const nextPublicTest = process.env.NEXT_PUBLIC_TEST || "Not set"

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("web3-tasks")
    const savedAddress = localStorage.getItem("connected-wallet")

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
    if (savedAddress) {
      setConnectedAddress(savedAddress)
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("web3-tasks", JSON.stringify(tasks))
  }, [tasks])

  // Save connected address to localStorage
  useEffect(() => {
    if (connectedAddress) {
      localStorage.setItem("connected-wallet", connectedAddress)
    } else {
      localStorage.removeItem("connected-wallet")
    }
  }, [connectedAddress])

  const handleConnect = (address: string) => {
    setConnectedAddress(address)
  }

  const handleDisconnect = () => {
    setConnectedAddress("")
    setTasks([])
  }

  const addTask = () => {
    if (newTask.trim() && connectedAddress) {
      const task: Task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        owner: connectedAddress,
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

  const userTasks = tasks.filter((task) => task.owner === connectedAddress)

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

      <div className="max-w-2xl mx-auto pt-20">
        {/* NodeOps Demo Info Section */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 mb-6">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2">🚀 NodeOps Hackathon Demo</h2>
              <p className="text-purple-700 text-sm">
                This demo showcases how to deploy a template on NodeOps Cloud Marketplace and start earning revenue share!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Documentation Link Box - Blue */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-4">
                  <a 
                    href="https://docs.nodeops.network/Guides/Marketplace/Configure-Compute/Create-Templates" 
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

        {/* Environment Variable Display */}
        <Card className="bg-gray-50 border-gray-200 mb-6">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-mono text-gray-700">
                NEXT_PUBLIC_TEST= <span className="text-purple-600">{nextPublicTest}</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-purple-600 mb-4">A Web3 Task Manager</CardTitle>
            <div className="flex justify-center">
              <WalletConnect
                onConnect={handleConnect}
                onDisconnect={handleDisconnect}
                connectedAddress={connectedAddress}
              />
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {connectedAddress ? (
              <>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-700">
                    Connected as: <span className="font-mono">{connectedAddress}</span>
                  </p>
                  <p className="text-xs text-purple-600 mt-1">
                    Your tasks are stored locally and associated with your wallet
                  </p>
                </div>

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
                  {userTasks.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <p>No tasks yet. Add your first task above!</p>
                    </div>
                  ) : (
                    userTasks.map((task) => (
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
                {userTasks.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Total tasks: {userTasks.length}</span>
                      <span>Completed: {userTasks.filter((t) => t.completed).length}</span>
                      <span>Remaining: {userTasks.filter((t) => !t.completed).length}</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect Your Wallet</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Connect your Web3 wallet to start managing your tasks. Your tasks will be associated with your
                    wallet address and stored securely.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
import TaskManagerClient from './task-manager-client'

export const dynamic = 'force-dynamic'

export default function Page() {
  // Read environment variable at runtime on the server
  const nextPublicTest = process.env.NEXT_PUBLIC_TEST || "Not set"
  
  return <TaskManagerClient nextPublicTest={nextPublicTest} />
} 
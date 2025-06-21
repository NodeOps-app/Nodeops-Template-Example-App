import { NextResponse } from "next/server"

export async function GET() {
  // These environment variables are read at runtime
  const runtimeEnvVars = {
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST || "No runtime value set",
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    // Add any other runtime variables you want to expose
  }

  return NextResponse.json(runtimeEnvVars)
} 
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://app.brivaro.de/api/status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Don't cache status responses
    })

    if (!response.ok) {
      throw new Error("Failed to fetch status")
    }

    const data = await response.json()

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    })
  } catch (error) {
    console.error("Status API error:", error)

    // Return a default outage response instead of error
    return NextResponse.json(
      {
        status: "outage",
        timestamp: new Date().toISOString(),
        components: {
          api: "outage",
          database: "outage",
          services: "outage",
        },
      },
      {
        status: 200, // Return 200 to avoid additional error handling
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    )
  }
}

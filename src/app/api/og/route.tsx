import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  return new ImageResponse(
    (
      <main
        style={{
          fontSize: 40,
          background: "#EAE8E2",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="flex h-[calc(100dvh)] flex-col items-center justify-center"
      >
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_59_23)">
            <path
              d="M10.7279 5.012C12.112 5.012 13.2339 3.89003 13.2339 2.506C13.2339 1.12197 12.112 0 10.7279 0C9.3439 0 8.22192 1.12197 8.22192 2.506C8.22192 3.89003 9.3439 5.012 10.7279 5.012Z"
              fill="black"
            />
            <path
              d="M18.9501 19.2532C20.3341 19.2532 21.4561 18.1312 21.4561 16.7472C21.4561 15.3632 20.3341 14.2412 18.9501 14.2412C17.5661 14.2412 16.4441 15.3632 16.4441 16.7472C16.4441 18.1312 17.5661 19.2532 18.9501 19.2532Z"
              fill="black"
            />
            <path
              d="M2.506 19.2532C3.89003 19.2532 5.012 18.1312 5.012 16.7472C5.012 15.3632 3.89003 14.2412 2.506 14.2412C1.12197 14.2412 0 15.3632 0 16.7472C0 18.1312 1.12197 19.2532 2.506 19.2532Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_23">
              <rect width="22" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </main>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
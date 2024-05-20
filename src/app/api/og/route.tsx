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
          width="217"
          height="198"
          viewBox="0 0 217 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_59_23)">
            <path
              d="M105.816 49.4365C119.468 49.4365 130.534 38.3698 130.534 24.7183C130.534 11.0667 119.468 0 105.816 0C92.1649 0 81.0981 11.0667 81.0981 24.7183C81.0981 38.3698 92.1649 49.4365 105.816 49.4365Z"
              fill="black"
            />
            <path
              d="M186.917 189.907C200.568 189.907 211.635 178.84 211.635 165.188C211.635 151.537 200.568 140.47 186.917 140.47C173.266 140.47 162.199 151.537 162.199 165.188C162.199 178.84 173.266 189.907 186.917 189.907Z"
              fill="black"
            />
            <path
              d="M24.7183 189.907C38.3698 189.907 49.4365 178.84 49.4365 165.188C49.4365 151.537 38.3698 140.47 24.7183 140.47C11.0667 140.47 0 151.537 0 165.188C0 178.84 11.0667 189.907 24.7183 189.907Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_23">
              <rect width="217" height="197.273" fill="white" />
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

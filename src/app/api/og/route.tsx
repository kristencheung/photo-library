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
          width="105"
          height="95"
          viewBox="0 0 105 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.9575 23.807C57.532 23.807 62.861 18.4776 62.861 11.9035C62.861 5.32936 57.532 0 50.9575 0C44.3835 0 39.0541 5.32936 39.0541 11.9035C39.0541 18.4776 44.3835 23.807 50.9575 23.807Z"
            fill="black"
          />
          <path
            d="M90.0129 91.4528C96.5869 91.4528 101.916 86.1232 101.916 79.5492C101.916 72.9753 96.5869 67.6458 90.0129 67.6458C83.4389 67.6458 78.1094 72.9753 78.1094 79.5492C78.1094 86.1232 83.4389 91.4528 90.0129 91.4528Z"
            fill="black"
          />
          <path
            d="M11.9035 91.4528C18.4776 91.4528 23.807 86.1232 23.807 79.5492C23.807 72.9753 18.4776 67.6458 11.9035 67.6458C5.32936 67.6458 0 72.9753 0 79.5492C0 86.1232 5.32936 91.4528 11.9035 91.4528Z"
            fill="black"
          />
        </svg>
      </main>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

"use client"
import { stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"

export const AnimatedTitle = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate([
        [".letter", { y: -56 }, { duration: 0.8, delay: stagger(0.06) }],
      ])
    }
  }, [isInView])
  return (
    <div className="relative" ref={scope}>
      <h1 className="text-2xl">
        <span className="sr-only">Welcome to the Photo Library</span>
        <span className="block h-14 overflow-hidden" aria-hidden>
          {[
            "W",
            "e",
            "l",
            "c",
            "o",
            "m",
            "e",
            "\u00A0",
            "t",
            "o",
            "\u00A0",
            "t",
            "h",
            "e",
            "\u00A0",
            "P",
            "h",
            "o",
            "t",
            "o",
            "\u00A0",
            "L",
            "i",
            "b",
            "r",
            "a",
            "r",
            "y",
          ].map((letter, index) => {
            return (
              <span
                data-letter={letter}
                className="letter relative inline-block h-14 leading-14 after:absolute after:left-0 after:top-full after:h-14 after:content-[attr(data-letter)]"
                key={`${letter}-${index}`}
              >
                {letter}
              </span>
            )
          })}
        </span>
      </h1>
    </div>
  )
}

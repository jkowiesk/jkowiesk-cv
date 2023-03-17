import { useEffect, useState } from 'react'

type Props = {
  children: String
}

export default function TypingText({ children }: Props) {
  const SPEED = 100

  const [currentIndex, setCurrentIndex] = useState(0)

  /*   useEffect(() => {
    console.log(children)
  }, []) */

  useEffect(() => {
    if (currentIndex < children.length) {
      console.log(currentIndex)
      const test = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, SPEED)

      return () => {
        clearTimeout(test)
      }
    }
  }, [currentIndex])

  return (
    <>
      {[...children].map((token, idx) => (
        <span key={idx} style={{ visibility: idx <= currentIndex ? 'visible' : 'hidden' }}>
          {token}
        </span>
      ))}
    </>
  )
}

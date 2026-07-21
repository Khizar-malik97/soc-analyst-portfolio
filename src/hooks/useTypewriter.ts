import { useState, useEffect } from 'react'

function useTypewriter(words: string[], typingSpeed = 100, pauseTime = 1500) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1))
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          setText(currentWord.slice(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseTime])

  return text
}

export default useTypewriter
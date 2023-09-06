import { CountdownContext } from '@/contexts/CountdownContext'
import { useContext } from 'react'

export function useCountdownContext() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext)

  return {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  }
}

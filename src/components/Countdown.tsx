'use client'
import { ChevronRight } from 'lucide-react'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

let countdownTimeouts: NodeJS.Timeout

type CountdownProps = {
  callback: () => void
}

export function Countdown({ callback }: CountdownProps) {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function handlerTime(event: ChangeEvent<HTMLInputElement>) {
    stopTimer()
    const inputName = event.target.name
    let inputValue = Number(event.target.value)

    const regex = /^(?:[0-9]|[1-5][0-9])$/

    if (inputName === 'seconds' && !regex.test(event.target.value)) {
      inputValue = 59
    }

    if (inputName === 'seconds') {
      const newTime = minutes * 60 + inputValue
      setTime(newTime)
    }

    if (inputName === 'minutes') {
      const newTime = inputValue * 60 + seconds
      setTime(newTime)
    }
  }

  function stopTimer() {
    setIsActive(false)
    clearTimeout(countdownTimeouts)
  }

  function toggleCountdown() {
    if (isActive) {
      resetCountdown()
    } else {
      setIsActive(true)
    }
  }

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeouts)
    setIsActive(false)
    setTime(25 * 60)
    callback()
  }, [callback])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeouts = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      resetCountdown()
    }
  }, [isActive, resetCountdown, time])

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-base-200 text-3xl text-white focus-within:border focus-within:border-primary-500">
          <input
            type="text"
            value={minutes}
            name="minutes"
            className="flex w-11 bg-transparent text-center outline-none"
            onChange={handlerTime}
            onFocus={stopTimer}
          />
        </div>
        <span className="text-base font-semibold text-base-200">h</span>
        <span className="text-3xl text-white">:</span>
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-base-200 text-3xl text-white focus-within:border focus-within:border-primary-500">
          <input
            type="text"
            value={seconds}
            name="seconds"
            className="flex w-11 bg-transparent text-center outline-none"
            onChange={handlerTime}
            onFocus={stopTimer}
          />
        </div>
        <span className="text-base font-semibold text-base-200">m</span>
      </div>
      <button
        data-isActive={isActive}
        onClick={toggleCountdown}
        className="flex w-full items-center justify-center rounded-md bg-primary-500 py-4 font-medium transition-colors hover:bg-primary-600 data-[isActive=true]:border-2 data-[isActive=true]:border-primary-500 data-[isActive=true]:bg-transparent data-[isActive=true]:text-primary-500"
        type="button"
      >
        {isActive ? 'Reiniciar' : 'Começar'}
        <ChevronRight size={24} />
      </button>
    </>
  )
}

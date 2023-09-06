'use client'
import * as Slider from '@radix-ui/react-slider'
import { Countdown } from '@/components/Countdown'
import { useRef, useState } from 'react'
import { Modal } from '@/components/Modal'
import { CardProgress } from '@/components/CardProgress'
import { Header } from '@/components/Header'

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [dailyGoal, setDailyGoal] = useState(3000)
  const [quantityPerTime, setQuantityPerTime] = useState(250)
  const progress = useRef(0)

  const percentageProgress =
    (progress.current * quantityPerTime * 100) / dailyGoal

  function finishedTime() {
    setIsOpenModal(true)
  }

  function closeModal() {
    setIsOpenModal(false)
    progress.current++
  }

  return (
    <div className="grid h-screen place-content-center bg-base-500">
      <Header />

      <CardProgress
        dailyGoal={dailyGoal}
        percentageProgress={percentageProgress}
      />

      <section className="flex w-72 flex-col gap-6 md:justify-between">
        <div className="grid grid-flow-row gap-y-2">
          <p className="font-medium text-primary-500">Meta diária</p>
          <span className="place-self-end text-xs font-medium text-base-200">
            {dailyGoal}ml
          </span>
          <Slider.Root
            className="relative col-span-2 flex h-5 touch-none select-none items-center"
            defaultValue={[dailyGoal]}
            value={[dailyGoal]}
            max={10000}
            step={1}
            onValueChange={([value]) => setDailyGoal(value)}
          >
            <Slider.Track className="relative h-1 grow rounded-full bg-base-200">
              <Slider.Range className="absolute h-full rounded-full bg-primary-500" />
            </Slider.Track>
            <Slider.Thumb className="block h-4 w-4 rounded-full bg-primary-500 focus:outline-none" />
          </Slider.Root>
        </div>
        <div className="grid grid-flow-row gap-y-2">
          <p className="font-medium text-primary-500">Quantidade por timer</p>
          <span className="place-self-end text-xs font-medium text-base-200">
            {quantityPerTime}ml
          </span>
          <Slider.Root
            className="relative col-span-2 flex h-5 touch-none select-none items-center"
            defaultValue={[quantityPerTime]}
            max={1000}
            value={[quantityPerTime]}
            step={50}
            onValueChange={([value]) => setQuantityPerTime(value)}
          >
            <Slider.Track className="relative h-1 grow rounded-full bg-base-200">
              <Slider.Range className="absolute h-full rounded-full bg-primary-500" />
            </Slider.Track>
            <Slider.Thumb
              className="block h-4 w-4 rounded-full bg-primary-500 focus:outline-none"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
        <Countdown callback={finishedTime} />
      </section>
      <Modal isOpenModal={isOpenModal} closeModal={closeModal} />
    </div>
  )
}

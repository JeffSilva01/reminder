import Image from 'next/image'

type CardProgressProps = {
  dailyGoal: number
  percentageProgress: number
}

export function CardProgress({
  dailyGoal,
  percentageProgress,
}: CardProgressProps) {
  return (
    <section className="mb-6 flex w-52 flex-col items-center justify-center place-self-center rounded-3xl bg-primary-500 py-8 md:mb-auto md:mr-28">
      <span className="font-semibold">{percentageProgress.toFixed(2)}%</span>
      <Image
        src="/water.svg"
        width={97}
        height={151}
        alt="avatar do usuário"
        className="mb-8 mt-10"
      />

      <span className="font-semibold">Beber água</span>
      <p className="font-medium">Meta: {dailyGoal / 1000}L</p>
    </section>
  )
}

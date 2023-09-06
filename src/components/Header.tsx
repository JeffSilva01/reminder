import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-12 flex items-center gap-3 text-white md:col-span-2">
      <Image
        src="https://robohash.org/jefferson-silva"
        width={63}
        height={63}
        alt="avatar do usuário"
      />
      <p>
        Boa tarde, <br />
        <span className="flex items-center gap-1 font-semibold">
          Jefferson Silva
          <Image
            src="/waving.svg"
            width={25}
            height={25}
            alt="avatar do usuário"
          />
        </span>
      </p>
    </header>
  )
}

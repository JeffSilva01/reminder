import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import Image from 'next/image'

type ModalProps = {
  isOpenModal: boolean
  closeModal: () => void
}

export function Modal({ isOpenModal, closeModal }: ModalProps) {
  return (
    <Dialog.Root open={isOpenModal} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-base-500/70" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-10 flex h-64 w-80 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl bg-base-400 outline-none">
          <Image
            src="/water.svg"
            width={40}
            height={62}
            alt="avatar do usuário"
            className="mb-8 mt-10"
          />
          <Dialog.Description className="text-center text-2xl font-semibold text-primary-500">
            Lembrete para <br /> beber água!
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-base-300 text-white outline-none"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

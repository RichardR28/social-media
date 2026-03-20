import { Divider } from '../'
import { Instagram } from 'lucide-react'
import { useSidebar } from '@/components/ui/sidebar'

export default function Header() {
  const { open } = useSidebar();
  return (
    <section className="flex items-center justify-center flex-col gap-4">
      <div className="flex flex-row items-center justify-center w-full">
        <Instagram className="bg-orange-500 text-white p-1 rounded-lg size-10 shrink-0" />
        <div className={`flex flex-row items-center transition-[max-width,opacity] duration-300 ease-in-out overflow-hidden ${open ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
          <h1 className="text-xl font-bold whitespace-nowrap pl-2">
            Social Hub
          </h1>
        </div>
      </div>
      <Divider />
    </section>
  )
}
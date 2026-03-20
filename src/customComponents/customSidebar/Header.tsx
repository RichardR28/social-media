import { Divider } from '../'
import { Instagram } from 'lucide-react'
import { useSidebar } from '@/components/ui/sidebar'

export default function Header() {
  const { open } = useSidebar();
  return (
    <section className="flex items-center justify-center flex-col gap-4">
      <div className={`flex flex-row items-center justify-center transition-all duration-300 ease-in-out ${open ? 'gap-2' : 'gap-0'}`}>
        <Instagram className="size-8 bg-orange-500 text-white p-1 rounded-[35%]" />
        <h1
          className={`text-xl font-bold whitespace-nowrap transition-all duration-300 ease-in-out ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 overflow-hidden'
            }`}
        >
          Social Hub
        </h1>
      </div>
      <Divider />
    </section>
  )
}
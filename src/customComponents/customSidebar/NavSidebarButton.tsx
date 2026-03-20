import { cloneElement, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { CustomTooltip } from "../";

type NavSidebarButtonProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
  tooltip: string;
}

export function NavSidebarButton({ label, href, icon, tooltip }: NavSidebarButtonProps) {
  const { open } = useSidebar();

  const styledIcon = useMemo(() => cloneElement(icon as React.ReactElement<{ className?: string }>, {
    className: `transition-all duration-300 ease-in-out ${open ? 'size-6' : 'size-7'}`
  }), [open, icon]);

  return (
    <div className="flex justify-center h-10 items-center w-full p-0">
      <CustomTooltip description={tooltip}>
        <Button
          variant="default"
          className={`flex flex-row cursor-pointer items-center bg-transparent text-primary hover:text-black hover:bg-orange-500 transition-all duration-300 ease-in-out ${open ? 'justify-start w-full pt-5 pb-5' : 'justify-center gap-0 w-10 h-10'}`}
          onClick={() => console.log(`Navigate to ${href}`)}
        >
          {styledIcon}
          <p
            className={`text-[16px] whitespace-nowrap transition-all duration-300 ease-in-out ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 overflow-hidden'}`}
          >
            {label}
          </p>
        </Button>
      </CustomTooltip>
    </div >
  )
}
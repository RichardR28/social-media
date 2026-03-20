import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

type CustomTooltipProps = {
  children: React.ReactNode;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function CustomTooltip({ description, children, ...props }: CustomTooltipProps) {
  return (
    <div className="flex w-full" {...props}>
      <TooltipProvider delayDuration={1000} >
        <Tooltip>
          <div className="w-full justify-center items-center flex">
            <TooltipTrigger asChild className="w-full">
              {children}
            </TooltipTrigger>
          </div>
          <TooltipContent side="right">
            <p>{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
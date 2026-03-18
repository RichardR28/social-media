import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

type CustomTooltipProps = {
  children: React.ReactNode;
  description: string;
  fullWidth?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function CustomTooltip({ description, children, fullWidth, ...props }: CustomTooltipProps) {
  return (
    <div className={fullWidth ? "flex w-full" : undefined} {...props}>
      <TooltipProvider >
        <Tooltip>
          <TooltipTrigger asChild className="w-full">
            {children}
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
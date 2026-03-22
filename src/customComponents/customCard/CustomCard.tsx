import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CustomCardProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function CustomCard({ title, description, children, footer }: CustomCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className="flex-col gap-2">
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}
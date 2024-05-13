import { cn } from "@/lib/utils/cn"

export const Container = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div className={cn("max-w-[120rem] mx-auto px-8", className)}>
      {children}
    </div>
  )
}

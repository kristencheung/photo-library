import { cn } from "@/lib/utils/cn"

export const Container = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div className={cn("max-w-[120rem] mx-auto px-10 md:px-[60px]", className)}>
      {children}
    </div>
  )
}

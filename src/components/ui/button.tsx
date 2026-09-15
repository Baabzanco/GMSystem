import * as React from "react"
import { cn } from "@/src/lib/utils"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' | 'ghost', size?: 'default' | 'sm' | 'lg' }>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50 disabled:pointer-events-none",
          {
            'bg-brand-600 text-white hover:bg-brand-700': variant === 'default',
            'border border-gray-200 bg-transparent hover:bg-gray-100 text-gray-900 dark:border-brand-800 dark:hover:bg-brand-900 dark:text-gray-100': variant === 'outline',
            'hover:bg-gray-100 text-gray-900 dark:hover:bg-brand-900 dark:text-gray-100': variant === 'ghost',
            'h-10 py-2 px-4': size === 'default',
            'h-9 px-3 rounded-lg': size === 'sm',
            'h-11 px-8 rounded-xl': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

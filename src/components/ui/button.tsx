import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary-200 text-secondary-foreground hover:bg-secondary-200/70',
        ghost: 'bg-tertiary-100 hover:bg-tertiary-200 text-zinc-600 hover:text-zinc-900',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-4 py-2',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isSubmit?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      asChild = false,
      type = 'button',
      isSubmit = false,
      isLoading,
      isDisabled,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const small = size === 'icon';

    return (
      <Comp
        ref={ref}
        type={isSubmit ? 'submit' : type}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading && <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />}

        {small && !isLoading && children}

        {!small && (
          <>
            {leftIcon && leftIcon}
            {children}
            {rightIcon && rightIcon}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

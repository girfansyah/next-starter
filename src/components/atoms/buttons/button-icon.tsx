import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { buttonVariants } from './button';

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, isIcon: true, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
ButtonIcon.displayName = 'ButtonIcon';

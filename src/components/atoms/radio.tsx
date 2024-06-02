import React, { ComponentPropsWithRef, FC, forwardRef, LegacyRef } from 'react';

import { cn } from '@/lib/utils';

export interface RadioProps
  extends Omit<ComponentPropsWithRef<'input'>, 'ref'> {
  checked?: boolean;
  label?: React.ReactNode;
  isInvalid?: boolean;
  isValid?: boolean;
  ref?: LegacyRef<HTMLInputElement>;
}

const Radio: FC<RadioProps> = forwardRef(
  ({ className, label, isValid, isInvalid, ...props }, ref) => {
    return (
      <div className='form-control'>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input
            ref={ref}
            className={cn(
              'radio rounded-full w-6 h-6 checked:bg-primary',
              isInvalid ? 'border-error' : isValid ? 'border-success' : '',
              className,
            )}
            type='radio'
            {...props}
          />
          <span className='text-sm'>{label}</span>
        </label>
      </div>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;

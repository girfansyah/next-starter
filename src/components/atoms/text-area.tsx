import React, { ComponentPropsWithRef, FC, forwardRef, LegacyRef } from 'react';

import { cn } from '@/lib/utils';

export interface TextAreaProps
  extends Omit<ComponentPropsWithRef<'textarea'>, 'ref'> {
  isLoading?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  counter?: boolean;
  maxLength?: number;
  ref?: LegacyRef<HTMLTextAreaElement>;
}

const TextArea: FC<TextAreaProps> = forwardRef(
  ({ className, isDisabled, isInvalid, counter, maxLength, ...props }, ref) => {
    return (
      <div className='relative'>
        <textarea
          ref={ref}
          disabled={isDisabled}
          className={cn(
            'w-full py-2 px-3 border rounded-lg outline-none text-xs',
            isInvalid ? 'border-error' : 'border-gray-300',
            className,
          )}
          rows={props.rows ?? 3}
          {...props}
          value={props.value}
          maxLength={maxLength}
        />
        {counter ? (
          <span className='absolute bottom-2 right-2 text-xs'>
            {props.value?.toString()?.length ?? 0} / {maxLength}
          </span>
        ) : null}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;

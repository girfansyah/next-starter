import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';

import { cn } from '@/lib/utils';

export interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
  isLoading?: boolean;
  type?: 'text' | 'tel' | 'email' | 'number' | 'password' | 'time';
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
}

const TextInput: ForwardRefExoticComponent<TextInputProps> = forwardRef<
  HTMLInputElement,
  TextInputProps
>((props, ref) => {
  const { className, isDisabled, isInvalid, isValid, ...rest } = props;

  return (
    <input
      ref={ref}
      disabled={isDisabled}
      className={cn(
        'w-full py-2 px-3 h-9 border text-xs rounded-lg outline-none focus:border-accent/60',
        'disabled:bg-gray-200 disabled:text-gray-400',
        isInvalid
          ? 'border-error'
          : isValid
            ? 'border-accent'
            : 'border-gray-300',
        className,
      )}
      {...rest}
    />
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;

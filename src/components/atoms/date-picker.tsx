import { Calendar as CalendarIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { SelectSingleEventHandler } from 'react-day-picker';

import { formatDateDMY } from '@/lib/datetime';
import { cn } from '@/lib/utils';

import { Button } from './buttons';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export function DatePicker({
  className,
  ...props
}: Readonly<{
  className: string;
  defaultValue?: string;
  required?: boolean;
  name: string;
}>) {
  const defaultDate =
    props.defaultValue && props.defaultValue !== 'Invalid Date'
      ? new Date(props.defaultValue)
      : new Date();

  const [date, setDate] = useState<Date>(defaultDate);
  const shadowInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDate(new Date(value));
  };

  return (
    <div>
      <Popover>
        <input
          type='hidden'
          required={props.required}
          name={props.name}
          value={String(date)}
          onChange={handleChange}
          ref={shadowInputRef}
        />

        <PopoverTrigger asChild>
          <Button
            variant='ghost'
            className={cn(
              'border h-9 justify-start gap-2 border-input p-2 text-left font-normal',
              !date && 'text-muted-foreground',
              className,
            )}
          >
            <CalendarIcon className='size-5' />
            {date ? formatDateDMY(date) : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>

        <PopoverContent className='w-auto p-0'>
          <Calendar
            initialFocus
            mode='single'
            selected={date}
            onSelect={setDate as SelectSingleEventHandler}
            defaultMonth={date}
            yearPast={5}
            yearFuture={5}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

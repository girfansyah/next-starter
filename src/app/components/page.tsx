'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/atoms/buttons/button';
import { DatePicker } from '@/components/atoms/date-picker';
import Radio from '@/components/atoms/radio';
import TextArea from '@/components/atoms/text-area';

export default function ComponentPage() {
  const today = new Date();
  const router = useRouter();

  return (
    <main>
      <section>
        <div className='layout py-20'>
          <div className='flex flex-col space-y-2'>
            <h1>Example</h1>
            <p className='text-sm'>
              Most examples and explanation of the components are available on{' '}
              <Link
                href='https://ui.shadcn.com'
                target='_blank'
                className='text-primary font-semibold'
              >
                shadcn UI
              </Link>
            </p>
          </div>
          <Button
            variant='link'
            className='p-0 my-4'
            onClick={() => router.push('/')}
          >
            Back to home
          </Button>
          <ol className='flex flex-col space-y-4'>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>Button</h2>

              <div className='space-x-4'>
                <Button>V</Button>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='outline'>Outline</Button>
                <Button variant='destructive'>Destructive</Button>
                <Button variant='ghost'>Ghost</Button>
                <Button variant='link'>Link</Button>
              </div>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>Radio Button</h2>
              <p className='!mt-1 text-sm'>Radio Button</p>
              <Radio />
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>Textarea</h2>
              <p className='!mt-1 text-sm'>Textarea</p>
              <TextArea />
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>Datepicker</h2>
              <p className='!mt-1 text-sm'>
                A date picker component with range and presets.
              </p>
              <div className='space-y-2 w-44'>
                <DatePicker
                  className='w-full'
                  name='date-picker-example'
                  defaultValue={String(today)}
                />
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

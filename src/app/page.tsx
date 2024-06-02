import React from 'react';

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='w-full'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-4xl font-bold'>
            Next.js + Tailwind CSS + Typescript Starter
          </div>
          <div className='mt-2 text-lg'>
            A starter Next.js with absolute import, pre-configured with Husky
          </div>
        </div>
      </div>
    </div>
  );
}

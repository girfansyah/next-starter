export const SectionHero = () => {
  return (
    <section className='layout px-3 max-sm:py-20 md:py-36 h-[calc(100vh-130px)] flex flex-col items-center justify-center'>
      <div className='flex flex-col space-y-4 items-center justify-center md:mx-20 mx-auto text-center'>
        <h1 className='md:text-5xl text-3xl font-bold my-4 md:my-6 leading-8 tracking-wide'>
          Kickstart your project effortlessly with the Free and Open-Source{' '}
          <span className='gradient-custom'>Next.js Boilerplate</span>
        </h1>
        <p className='text-xl md:text-3xl text-gray-600 leading-6'>
          Jumpstart your project in seconds with built-in support for
          TypeScript, Tailwind CSS, and more.
        </p>
      </div>
    </section>
  );
};

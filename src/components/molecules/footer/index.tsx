const Footer = () => {
  return (
    <footer className='bg-gray-100 text-center text-gray-700 p-4'>
      <div className='layout'>
        <div className='flex justify-center'>
          <p className='text-sm'>
            © {new Date().getFullYear()} Next.JS Boilerplate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import NextLink from 'next/link';

function Navbar() {
  return (
    <>
      <div className='flex px-10'>
        <NextLink href='/menu'>
        <a className=" mb-5 inline-flex bg-pink-500 text-white rounded-full h-6 px-3 font-bold justify-center items-center uppercase text-sm ">
          A Table</a>
          
          
        </NextLink>
        <NextLink href='/specialite'>
          <a className='ml-3 inline-flex bg-purple-500  text-white rounded-full h-6 px-3 font-bold justify-center items-center uppercase text-sm'>
            SPECIALITES
          </a>
        </NextLink>
        <NextLink href='/desserts'>
          <a className=' ml-3 inline-flex bg-blue-400 text-white rounded-full h-6 px-3 font-bold justify-center items-center uppercase text-sm'>
            DESSERTS
          </a>
        </NextLink>
        <NextLink href='/boissons'>
          <a className='ml-3 inline-flex bg-yellow-400 text-white rounded-full h-6 px-3 font-bold justify-center items-center uppercase text-sm'>
            BOISSONS</a>
        </NextLink>
      </div>
    </>
  );
}

export default Navbar;

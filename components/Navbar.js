import NextLink from 'next/link';

function Navbar() {
  return (
    <>
      <div className='flex px-10'>
        <NextLink href='/menu'>
          <a className='p-5 text-xs font-black tracking-widest'>MENU</a>
        </NextLink>
        <NextLink href='/specialite'>
          <a className='p-5 font-black text-xs tracking-widest'>
            SPECIALITES
          </a>
        </NextLink>
        <NextLink href='/desserts'>
          <a className='p-5 font-black text-xs tracking-widest'>
            DESSERTS
          </a>
        </NextLink>
        <NextLink href='/boissons'>
          <a className='p-5 font-black text-xs tracking-widest'>BOISSONS</a>
        </NextLink>
      </div>
    </>
  );
}

export default Navbar;

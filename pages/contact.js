import Image from 'next/image';
import React from 'react';

function contact() {
  return (
    <>
      <div className='relative top-0 grid grid-cols-3 p-5 md:px-10'>
        <Image
          className='bg-gray-400 '
          src='/images/montagne.jpg'
          layout='fill'
          objectFit='cover'
          className='col-span-2'
        />

        <div className='bg-gray-800'>div</div>
      </div>
    </>
  );
}

export default contact;

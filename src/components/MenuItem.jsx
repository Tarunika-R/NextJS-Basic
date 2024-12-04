import React from 'react'
import Link from 'next/link';

export default function MenuItem({title, address}) {
  return (
    <Link href={address} className='hover:font-semibold'>
        <p className='uppercase text-sm'>{title}</p>
    </Link>
  );
}

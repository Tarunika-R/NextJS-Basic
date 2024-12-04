import React from 'react'
import Link from 'next/link';

export default function MenuItem({title, address}) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <p className='uppercase text-sm'>{title}</p>
    </Link>
  );
}

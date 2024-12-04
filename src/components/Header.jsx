import React from 'react'
import MenuItem from './MenuItem'

export default function Header() {
  return (
    <div className=''>
      <div className='flex gap-4'>
        <MenuItem title='home' address='/#'/>
        <MenuItem title='about' address='/about'/>
        <MenuItem title='contact' address='/contacts'/>
      </div>
      <div className=''>

      </div>
    </div>
  )
}

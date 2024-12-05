import MenuItem from './MenuItem'

export default function Header() {
  return (
    <div className=''>
      <div className='flex gap-4 bg-black text-white p-6 space-x-2'>
        <MenuItem title='home' address='/#'/>
        <MenuItem title='about' address='/about'/>
        <MenuItem title='contact' address='/contacts'/>
      </div>
      <div className=''>

      </div>
    </div>
  )
}

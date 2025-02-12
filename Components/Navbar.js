import Link from "next/link"
const Navbar = () => {
  return (
      <nav className='h-[80px] flex justify-between items-center sticky z-10 top-0 bg-purple-400 text-white px-8 py-2'>
        <div className="logo">
            <img src="/nuthatch.png" className='border-white'  width={80}
          height={37} alt="" />
        </div>
        <ul className='flex justify-evenly items-center gap-5'>
            <li><Link href = '/' >Home</Link></li>
            <li><Link href = '/about' >About</Link></li>
            <li><Link href = '/contact' >Contact</Link></li>
            <li><Link href = '/services' >Services</Link></li>
            {/* <li><Link href = '/api/postGet' >MongoDbdata</Link></li> */}
        </ul>
      </nav>
  )
}

export default Navbar

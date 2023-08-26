import React from 'react'
import About from '@/pages/About'
import Link from 'next/link'

export default function Nav() {
  return (
    <div style={{backgroundColor: "aqua"}}>
      <h1>Navbar</h1>
      <Link href= "/About">About page</Link>

    </div>
    
  )
}

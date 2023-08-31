import Link from 'next/link'

import Logo from './logo'
import classes from './navigation.module.css'

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/about">About us </Link>
      
      <ul>
        <li>
          <Link href="/stats">Go stats page</Link>
        </li>
        <li> 
          <Link href="/api/route">
            Get the most current salary statistics
          </Link>
          </li>
      </ul>

     
    </header>
  )
}

export default Navigation

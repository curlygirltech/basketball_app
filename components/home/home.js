import Image from 'next/image'
import classes from './home.module.css'

const Home = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/bball_hands.jpg"
          alt="players jump shot"
          width={200}
          height={200}
        />
      </div>

      <h1>Stats Nerds</h1>
      <p>Find out the stats on the top players</p>
    </section>
  )
}

export default Home
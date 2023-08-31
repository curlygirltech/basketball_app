import Image from "next/image"


function About() {
  return (
    <section>
       <h2> This is the About Page</h2>

       <div>
        <Image
          src="/images/tinyMoose.png"
          alt="players jump shot"
          width={200}
          height={200}
        />
      </div>

    </section>
  )
}

export default About
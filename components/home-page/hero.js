import classes from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/joe.png'
          alt='my image'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Joe</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Reactjs and Nextjs
      </p>
    </section>
  );
};

export default Hero;

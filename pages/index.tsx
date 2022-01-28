import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import S from "../styles/Home.module.scss";
import coverImage from "../public/assets/cover.png";
import profileImage from "../public/assets/profile.png";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const coverRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (coverRef.current)
      coverRef.current.style.filter = `blur(${window.scrollY / 128}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={S.container}>
      <Head>
        <title>Coffee Dev </title>
        <meta name="description" content="The Coffee Developer Portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={S.main}>
        <div ref={coverRef} className={S.coverContainer}>
          <Image
            src={coverImage}
            alt="Cover Image"
            placeholder="blur"
            className={S.coverImage}
            layout="fill"
            objectPosition="center"
            objectFit="cover"
          />
          <Image
            src={profileImage}
            alt="Site Author Profile Image"
            width={256}
            height={256}
            className={S.profileImage}
          />
        </div>
        <div className={S.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam
          veritatis sed eum sequi veniam, error, repudiandae consectetur
          voluptatem voluptatibus doloremque ex dolorum, natus quo odit iusto
          ratione facere vitae.<br></br>
        </div>
      </main>
    </div>
  );
};

export default Home;

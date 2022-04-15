import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import S from "../styles/Home.module.scss";
import coverImage from "../public/assets/cover.png";
import profileImage from "../public/assets/profile.png";
import { useEffect, useRef, useState } from "react";
import Pageable from "../models/Pageable";
import Post from "../models/Post";
import useFetch from "../hooks/useFetchPosts";

interface State {
  posts?: Pageable<Post>;
}

const initialState: State = {};

const Home: NextPage = () => {
  const coverRef = useRef<HTMLDivElement>(null);

  const posts = useFetch<Pageable<Post>>("api/posts");
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState((s) => {
      return { ...s, posts };
    });
  }, [posts]);

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
          {state.posts?.content.map((post) => (
            <h2 key={post.id}>
              <span>{post.title}</span>
            </h2>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

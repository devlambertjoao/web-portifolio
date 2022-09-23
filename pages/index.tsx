import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import S from "../styles/Home.module.scss";
import coverImage from "../public/assets/cover.png";
import profileImage from "../public/assets/profile.png";
import { useEffect, useRef } from "react";
import Pageable from "../models/Pageable";
import Post from "../models/Post";
import useFetch from "../hooks/useFetchPosts";

const Home: NextPage = () => {
  const coverRef = useRef<HTMLDivElement>(null);

  const posts = useFetch<Pageable<Post>>("api/posts");

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
          <div className={S.postListContainer}>
            {posts?.content.map((post) => (
              <div key={post.id} className={S.postContainer}>
                <span className={S.postTitle}>{post.title}</span>
                <div className={S.postContent}>
                  <div className={S.imageContainer}>
                    <Image
                      src={post.image}
                      alt={`Image of post: ${post.title}`}
                      layout="responsive"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className={S.postDescriptionContainer}>
                    <span className={S.postDescription}>{post.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

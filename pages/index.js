import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Joe&aposs Blog</title>
        <meta name='description' content='I blogs about coding' />
      </Head>
      <Hero />
      {<FeaturedPost posts={props.posts} />}
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;

// - a hero section => present ourselves
// - featured posts

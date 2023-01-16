import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

const posts = [
  { title: "React testing", excerpt: "Learn react testing" },
  { title: "React with tailwind", excerpt: "Learn react with tailwind" },
];

const Home: NextPage = () => {
  return (
    <div className="container px-10 mx-auto mb-8">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

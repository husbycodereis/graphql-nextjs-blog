import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  console.log("relatedPosts", relatedPosts);
  return (
    <div className="p-8 mb-8 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold text-white border-b">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="flex-none w-16">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-row ml-4">
            <p className="text-xs text-gray-300">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              className="text-md"
              href={`/post/${post.slug}`}
              key={post.title}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

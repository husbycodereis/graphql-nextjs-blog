import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log("post", post);
  return (
    <div>
      <div className="p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md pb-80">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="absolute object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;

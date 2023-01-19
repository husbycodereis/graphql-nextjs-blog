import moment from "moment";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
    console.log("slug", slug);
    console.log("comments", comments);
  }, []);

  return (
    <div>
      {comments.length > 0 && (
        <div className="p-8 pb-12 mb-8 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="pb-4 mb-8 text-xl font-semibold border-b">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="p-4 mb-4 border-b border-gray-100"
            >
              <p className="mb-4">
                <span className="font-semibold">
                  {comment.name} on{" "}
                  {moment(comment.createdAt).format("MMM DD, YYYY")}
                </span>
              </p>
              <p className="w-full text-gray-300 whitespace-pre-line">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;

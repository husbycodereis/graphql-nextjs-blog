import React, { useRef, useState } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name", name);
      localStorage.removeItem("email", email);
    }
  };
  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">CommentsForm</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="w-full p-4 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          placeholder="name"
          name="name"
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
        />
        <input
          type="text"
          ref={emailEl}
          placeholder="email"
          name="email"
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="">
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            name="storeData"
            value={true}
          />
          <label
            htmlFor="storeData"
            className="ml-2 text-gray-500 cursor-pointer"
          >
            Save email and name
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields a required.</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="inline-block px-8 py-3 text-lg text-white transition duration-500 ease-linear bg-pink-600 rounded-full cursor-pointer hover:bg-indigo-900"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment submitted for review.
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;

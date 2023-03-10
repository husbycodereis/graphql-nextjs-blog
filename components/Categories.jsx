import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="p-8 mb-8 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold text-white border-b">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="block pb-3 mb-3 cursor-pointer">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

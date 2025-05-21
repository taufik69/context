import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const lodingRef = useRef();
  const [products, setproducts] = useState([]);
  const [page, setpage] = useState(0);
  const [hasMore, setHasmore] = useState(true);
  console.log(lodingRef.current);

  useEffect(() => {
    const fetchFuntion = async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10}`
      );
      const data = await res.json();

      if (data.products.length == 0) {
        setHasmore(false);
      } else {
        setproducts([...products, ...data.products]);
        setpage((prev) => prev + 1);
      }
    };
    const obserFunction = (entries) => {
      const entriesItem = entries[0];

      if (entriesItem.isIntersecting && hasMore) {
        fetchFuntion();
      }
    };
    const observer = new IntersectionObserver(obserFunction);
    if (observer && lodingRef.current) {
      observer.observe(lodingRef.current);
    }

    //clean up
    return () => {
      if (observer && lodingRef.current) {
        observer.unobserve(lodingRef.current);
      }
    };
  }, [page, hasMore]);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <>
          <p key={product.id}>{product.title}</p>
          <img src={product.images[0]} alt="" />
        </>
      ))}

      <h1 ref={lodingRef}>loading ...</h1>
    </div>
  );
};

export default App;

//"Imagine you're building a React application that displays a list of items
//(e.g., articles, images, or products) and you want to implement infinite scrolling.
//As the user scrolls down the page, more items should be fetched from an API and displayed,
//creating a continuous scrolling experience.
/*
import React, { useState, useEffect } from "react";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchedData = async () => {
    setLoading(true);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10000`
    );
    const newData = await response.json();
    setData((prevData) => [...prevData, ...newData]);
    setPage(page + 1);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      fetchedData();
    }
  };

  useEffect(() => {
    fetchedData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} {item.title}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}
export default InfiniteScroll;


import React, { useEffect, useState } from "react";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchedData() {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10000`
    );
    const newData = await response.json();

    setData((prevData) => [...prevData, ...newData]);
    setPage(page + 1);
    setLoading(false);
  }

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      fetchedData();
    }
  }

  useEffect(() => {
    fetchedData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} {item.title}
          </li>
        ))}
      </ul>
      {loading && <p>Loading....</p>}
    </div>
  );
}

export default InfiniteScroll;

 */

import React, { useEffect, useState } from "react";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchedData() {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10000`
    );
    const newData = await response.json();
    setData((prevData) => [...prevData, ...newData]);
    setPage(page + 1);
    setLoading(false);
  }

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      fetchedData();
    }
  }

  useEffect(() => {
    fetchedData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.id}
            {user.title}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfiniteScroll;

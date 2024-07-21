"use client";
import React, { useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Clientdata() {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);

  // async function fetchData() {
  //   try {
  //     const response = await fetch("https://dummyjson.com/users?limit=5");
  //     const data = await response.json();
  //     setData(data.users);
  //     setLoading(false);
  //   } catch (error) {
  //     throw new Error("Failed to fetch userlist");
  //   }
  // }

  // if (loading) {
  //   fetchData();
  //   return <div>Loading...</div>;
  // }

  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users?limit=5",
    fetcher
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to fetch userlist</div>;

  return (
    <div>
      <h1>Client Data : </h1>
      <ul>
        {data && data?.users && data?.users.length > 0 ? (
          data.users.map((user) => (
            <li key={user.id}>
              <br></br>
              <Link href={`/client-data/${user.id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}

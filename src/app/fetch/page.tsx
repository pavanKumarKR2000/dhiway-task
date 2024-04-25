import React from "react";
import { promises } from "readline";

interface DataProp {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async (): Promise<DataProp[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const FetchPage = async () => {
  const data: DataProp[] = await getData();

  return (
    <main className="p-6 space-y-2">
      {data?.map((item: DataProp) => (
        <div
          key={item.id}
          className="space-y-2 p-2 shadow-md border border-black"
        >
          <p>title : {item.title}</p>
          <p>userId:{item.userId}</p>
          <p>body:{item.body}</p>
        </div>
      ))}
    </main>
  );
};

export default FetchPage;

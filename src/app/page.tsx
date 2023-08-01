import React from "react";

const fetch_todo_lists = async () => {
  const res = await fetch(process.env.URL + "/api/todolists");

  if (!res.ok) return console.log(res);
  return res.json();
};

const Home = async () => {
  const todo_lists = await fetch_todo_lists();
  console.log("data", todo_lists);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world
    </main>
  );
};

export default Home;

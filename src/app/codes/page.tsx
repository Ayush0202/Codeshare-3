"use client";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface Code {
  id: string;
  document: string;
  userId: string;
  key: number;
}

export default function Codes() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const [data, setData] = useState<Code[]>([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const response = await fetch("/api/codes", {
        method: "GET",
      });
      console.log("hello", response);
      if (response.ok) {
        const getData = await response.json();
        setData(getData);
        console.log("get - - ", getData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: String) => {
    try {
      const response = await fetch("/api/codes", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      console.log(response);
      getAllData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>hello from codes page</h1>
      the length is - {data.length}
      {data.map((dat) => (
        <div key={dat.key}>
          <h3>
            {dat.id} and here is the {dat.userId} - - {dat.key}
            <button onClick={() => handleDelete(dat.id)}>Delete</button>
          </h3>
        </div>
      ))}
      <hr />
      <hr />
      <br />
      {userId} <br />
      {sessionId} <br />
      <br />
    </>
  );
}

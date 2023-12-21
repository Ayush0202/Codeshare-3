"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface Code {
  id: number;
  document: string;
  userId: String;
  // Add other properties as needed
}

export default function Codes() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const [data, setData] = useState<Code[]>([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get("/api/codes");
        setData(response.data);
        console.log("hello", data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>hello from codes page</h1>
      the length is - {data.length}
      {data.map((dat) => (
        <div key={dat.id}>
          <h3>
            {dat.document} and here is the {dat.userId}
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

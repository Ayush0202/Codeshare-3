"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface Code {
  id: string;
  document: string;
  userId: string;
  key: number;
  createdAt: string;
}

export default function Codes() {
  const { user } = useUser();

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

  console.log("user -0--", user?.username);

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

      {user?.username}

      <h1 className="flex justify-center text-4xl font-bold mt-16">
        Your Codeshares
      </h1>

      <Link className="flex justify-center mt-4" href="/new">
        <span className="bg-red-700 rounded text-white p-2">New Codeshare</span>
      </Link>
      <h1 className="flex justify-center text-xl mt-8 mb-8">
        You have currently {data.length} Codeshares
      </h1>

      {data.length === 0 && (
        <h1 className="flex justify-center text-lg">
          Click on New to create your codeshare
        </h1>
      )}

      {data.length !== 0 && (
        <div className="relative flex justify-center overflow-x-auto">
          <table className="w-3/4 text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Codeshare ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Syntax
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr
                  key={data.key}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link href={`/doc/${user?.username}/${data.id}`}>
                      {data.id}
                    </Link>
                  </th>
                  <td className="px-6 py-4">{data.createdAt.split("T")[0]}</td>
                  <td className="px-6 py-4">Plain Text</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDelete(data.id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

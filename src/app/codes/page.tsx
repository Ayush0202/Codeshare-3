"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "./loading";

interface Code {
  id: string;
  document: string;
  userId: string;
  key: number;
  createdAt: string;
}

export default function Codes() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState<Code[]>([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const response = await fetch("/api/codes", {
        method: "GET",
      });
      if (response.ok) {
        const getData = await response.json();
        setData(getData);
        setLoading(false);
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
      setShowAlert(true);
      getAllData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {showAlert && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Document deleted successfully!</strong>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}

      <h1 className="flex justify-center text-4xl font-bold mt-16">
        Your Codeshares
      </h1>

      <Link className="flex justify-center mt-4" href="/new">
        <span className="bg-red-700 rounded text-white p-2">New Codeshare</span>
      </Link>
      <h1 className="flex justify-center text-xl mt-8 mb-8">
        You have currently {data.length} Codeshares
      </h1>

      {loading ? (
        <Loading />
      ) : !loading && data.length === 0 ? (
        <h1 className="flex justify-center text-lg">
          Click on New to create your codeshare
        </h1>
      ) : (
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

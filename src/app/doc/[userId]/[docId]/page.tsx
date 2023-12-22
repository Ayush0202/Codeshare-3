"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SavedDoc() {
  const pathname = usePathname();
  const userId = pathname.split("/")[2];
  const docId = pathname.split("/")[3];

  const [code, setCode] = useState("");

  useEffect(() => {
    async function getSavedData() {
      const response = await fetch(`/api/doc/${userId}/${docId}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data.document);
      setCode(data.document);
    }

    getSavedData();
  });

  return (
    <>
      <h1>hello from saved doc</h1>
      {userId}
      <br />
      {docId}
      <br />
      {code}
    </>
  );
}

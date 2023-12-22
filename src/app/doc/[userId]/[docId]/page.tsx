"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Navbar from "@/app/components/Navbar";
import { cpp } from "@codemirror/lang-cpp";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust";
import { sql } from "@codemirror/lang-sql";
import { xml } from "@codemirror/lang-xml";
import CodeMirror from "@uiw/react-codemirror";

export default function SavedDoc() {
  const [screenHeight, setScreenHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <Navbar />
      <form>
        {/* editor component */}
        <CodeMirror
          value={code} // dynamically saving value that is fetched from database
          height={`${screenHeight}px`}
          theme="dark"
          extensions={[
            // supporint different languages
            javascript({ jsx: true }),
            cpp(),
            css(),
            html(),
            java(),
            php(),
            python(),
            rust(),
            sql(),
            xml(),
          ]}
        />
      </form>
    </>
  );
}

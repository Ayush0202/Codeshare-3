"use client";

const URL = "http://localhost:3000";

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
import { useRouter } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function New() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [code, setCode] = useState("");

  const router = useRouter();

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

  const onChangeValue = (e: SetStateAction<string>) => {
    setCode(e);
    console.log(code);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/new`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      if (response.ok) {
        const newdoc = await response.json();
        router.push("/codes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* navbar component */}
        <Navbar />

        {/* editor component */}
        <CodeMirror
          value={code}
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
          onChange={onChangeValue}
        />
      </form>
    </>
  );
}

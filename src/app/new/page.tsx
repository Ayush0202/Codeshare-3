"use client";

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
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function New() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [code, setCode] = useState({ codeValue: "" });
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onChangeValue = React.useCallback(
    (value: string) => {
      setCode({ ...code, codeValue: value });
      console.log(value);
    },
    [code]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* navbar component */}
        <Navbar />

        {/* editor component */}
        <CodeMirror
          value={code.codeValue}
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

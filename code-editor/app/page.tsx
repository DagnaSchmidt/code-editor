"use client";
import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";

const INITIAL_VALUE: string = "value";
const DEFAULT_LANGUAGE: string = "javascript";

export default function Home() {
  const [value, setValue] = useState<string>(INITIAL_VALUE);
  const handleSubmit = () => {

  }

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  }

  return (
    <main className="flex h-screen p-4">
      <div
        className="mockup-window border border-base-300 p-2 w-full"
      >
        <form action="#" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="comment" className="sr-only">
              Add your code
            </label>
            <Editor
              height="50vh"
              defaultLanguage="javascript"
              value={value}
              onChange={handleValueChange}
            />
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-5"></div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="btn btn-accent"
              >
                Run
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

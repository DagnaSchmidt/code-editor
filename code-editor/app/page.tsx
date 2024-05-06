"use client";

import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";

export default function Home() {
  const handleSubmit = () => {

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
              defaultValue='Deno.serve(req => new Response("Hello!"));'
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

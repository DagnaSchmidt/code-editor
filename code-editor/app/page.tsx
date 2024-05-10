"use client"

import { useRef, useState } from "react";
import { monaco } from "@monaco-editor/react";

import { DEFAULT_LANGUAGE } from "./constans";

import EditorWindow from "@/components/EditorWindow";
import OutputWindow from "@/components/OutputWindow";


export default function Home() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);


  return (
    <main className="flex h-screen p-4 bg-base-100 join w-full">
      <EditorWindow editorRef={editorRef} language={language} setLanguage={setLanguage} />
      <OutputWindow editorRef={editorRef} language={language} />
    </main>
  );
};

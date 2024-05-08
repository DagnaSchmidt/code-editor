"use client";

import { monaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import React, { useState, useRef } from "react";

import LanguageSwitch from "./LanguageSwitch";
import { INITIAL_VALUE, DEFAULT_LANGUAGE } from "@/app/constans";


const EditorWindow = () => {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    const [value, setValue] = useState<string>(INITIAL_VALUE);
    const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);


    const handleMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleSubmit = () => {

    }


    return (
        <div
            className="mockup-window border border-base-300 p-2 w-full flex flex-col gap-5"
        >
            <LanguageSwitch language={language} onSelect={setLanguage} />
            <form action="#" id="code-editor" onSubmit={handleSubmit}>
                <div className="">
                    <Editor
                        height="50vh"
                        defaultLanguage="javascript"
                        value={value}
                        onMount={handleMount}
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
    )
}

export default EditorWindow;

"use client";

import { monaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import React, { useState, useRef } from "react";

import LanguageSwitch from "./LanguageSwitch";
import { INITIAL_VALUE, DEFAULT_LANGUAGE } from "@/app/constans";


const EditorWindow = () => {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    const [defaultValue, setDefaultValue] = useState<string>(INITIAL_VALUE);
    const [value, setValue] = useState<string>(INITIAL_VALUE);
    const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);


    const handleMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleChange: monaco.editor.IEditorProps["onChange"] = (newValue: string) => {
        setValue(newValue);
    };

    const handleSubmit = () => {

    };


    return (
        <div
            className="mockup-window border border-base-300 p-2 w-full flex flex-col gap-5"
        >
            <LanguageSwitch language={language} onSelect={setLanguage} setDefaultValue={setDefaultValue} />
            <form action="#" id="code-editor" onSubmit={handleSubmit}>
                <div className="">
                    <Editor
                        height="50vh"
                        defaultLanguage="javascript"
                        defaultValue={defaultValue}
                        value={value}
                        onMount={handleMount}
                        onChange={handleChange}
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

"use client";

import Editor, { monaco } from "@monaco-editor/react";
import React, { useState, useRef } from "react";

import LanguageSwitch from "./LanguageSwitch";
import { INITIAL_VALUE } from "@/app/constans";


interface IEditorWindowProps {
    editorRef: monaco.editor.IStandaloneCodeEditor | null;
    language: string;
    setLanguage: Function;
};

const EditorWindow = (props: IEditorWindowProps): React.JSX.Element => {
    const { editorRef, language, setLanguage } = props;

    const [defaultValue, setDefaultValue] = useState<string>(INITIAL_VALUE);
    const [value, setValue] = useState<string>(INITIAL_VALUE);


    const handleMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleChange: monaco.editor.IEditorProps["onChange"] = (newValue: string) => {
        setValue(newValue);
    };


    return (
        <div
            className="p-2 w-full flex flex-col gap-5 join-item artboard border-slate-200 border"
        >
            <LanguageSwitch language={language} onSelect={setLanguage} setDefaultValue={setDefaultValue} />
            <Editor
                height="70vh"
                defaultLanguage="javascript"
                defaultValue={defaultValue}
                value={value}
                onMount={handleMount}
                onChange={handleChange}
            />
        </div>
    );
};

export default EditorWindow;

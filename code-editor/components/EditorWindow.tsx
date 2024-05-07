"use client";
import LanguageSwitch from "./LanguageSwitch";
import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";

import { INITIAL_VALUE, DEFAULT_LANGUAGE } from "@/app/constans";

const EditorWindow = () => {
    const [value, setValue] = useState<string>(INITIAL_VALUE);
    const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);

    const handleSubmit = () => {

    }

    return (
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
                    // onChange={handleValueChange}
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

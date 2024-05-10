"use client"

// @ts-ignore: Unreachable code error
import { monaco } from "@monaco-editor/react";
import { useState } from "react";
import { executeCode } from "../app/api";

interface IOutputWindowProps {
    editorRef: monaco.editor.IStandaloneCodeEditor | null;
    language: string;
};


const OutputWindow = (props: IOutputWindowProps): React.JSX.Element => {
    const { editorRef, language } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const compileCode = async () => {
        try {
            const code = editorRef.current.getValue();
            if (!code) return;
            const result = await executeCode(language, code);
            console.log(result.run.output);
            setOutput(result.run.output);
        } catch (error) {
            if (error instanceof Error) {
                setError(error);
                console.error(error);
            }
        }
    };

    return (
        <div
            className="p-2 join-item artboard border-slate-200 border flex flex-col"
        >
            <button
                className="btn btn-accent self-end"
                onClick={compileCode}
            >
                Run
            </button>
            <div
                className="p-2"
            >
                {output}
            </div>
        </div>
    );
};

export default OutputWindow;

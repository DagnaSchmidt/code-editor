"use client"
import { useState } from "react";


const OutputWindow = (): React.JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [output, setOutput] = useState<string | null>(null);

    return (
        <div
            className="p-2 join-item artboard border-slate-200 border"
        >
            <h4>Output</h4>
        </div>
    )
}

export default OutputWindow;

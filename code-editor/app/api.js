import { API_URL } from "./constants";

export const executeCode = async (language, sourceCode) => {
    const data = {
        language: language,
        files: [
            {
                content: sourceCode,
            },
        ],
    };
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return await response.json();
};

import { API_URL, VERSIONS } from "./constans";

export const executeCode = async (language, sourceCode) => {
    const data = {
        language: language,
        version: VERSIONS[language],
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

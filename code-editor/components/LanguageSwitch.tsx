import React from 'react';
import { LANGUAGES, CODE_TEMPLATES } from "../app/constans";

interface ILanguageSwitchProps {
    language: string;
    onSelect: Function;
    setDefaultValue: Function
};

const LanguageSwitch = (props: ILanguageSwitchProps) => {
    const { language, onSelect, setDefaultValue } = props;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        onSelect(selectedLanguage);
        setDefaultValue(selectedLanguage as keyof typeof CODE_TEMPLATES);
    };


    return (
        <select
            className="select select-accent w-full select-sm max-w-xs"
            defaultValue={language}
            onChange={handleChange}
        >
            <option value="">-change language-</option>
            {
                LANGUAGES.map(i => <option value={i} key={i}>{i}</option>)
            }
        </select>
    )
}

export default LanguageSwitch;

import React from 'react';
import { LANGUAGES_VERSIONS } from "../app/constans";

interface ILanguageSwitchProps {
    language: string;
    onSelect: Function
}

const LanguageSwitch = (props: ILanguageSwitchProps) => {
    const { language, onSelect } = props;
    const handleChange = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // onSelect(e.target.value)
    }
    return (
        <select
            className="select select-accent w-full select-sm max-w-xs"
            onChange={handleChange}
        >
            <option disabled selected>-change language-</option>
            {
                LANGUAGES_VERSIONS.map(i => <option value={i} key={i}>{i}</option>)
            }
        </select>
    )
}

export default LanguageSwitch;

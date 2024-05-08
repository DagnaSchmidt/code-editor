import React from 'react';
import { LANGUAGES_VERSIONS } from "../app/constans";

interface ILanguageSwitchProps {
    language: string;
    onSelect: Function
}

const LanguageSwitch = (props: ILanguageSwitchProps) => {
    const { language, onSelect } = props;


    return (
        <select
            className="select select-accent w-full select-sm max-w-xs"
            onChange={({ target }) => onSelect(target.value)}
        >
            <option value="">-change language-</option>
            {
                LANGUAGES_VERSIONS.map(i => <option value={i} key={i}>{i}</option>)
            }
        </select>
    )
}

export default LanguageSwitch;

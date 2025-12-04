import {useRef, useState} from 'react';
import clsx from "clsx";
import s from './languageSelect.module.css';
import {useClickOutside} from "../../hooks/useClickOutside.ts";

const languages = [
  {code: 'ru', name: 'RU'},
  {code: 'en', name: 'EN'},
  {code: 'de', name: 'DE'},
];

export const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('ru');

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (code: string) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  useClickOutside(wrapperRef, () => setIsOpen(false), isOpen);

  return (
    <div className={s.wrapper} ref={wrapperRef}>
      <button
        className={s.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLang.toUpperCase()}
      </button>

      {isOpen && (
        <div className={clsx(s.dropdown, s.open)}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={clsx(s.option, selectedLang === lang.code && s.active)}
              onClick={() => handleSelect(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
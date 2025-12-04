import {useClickOutside} from "../../hooks/useClickOutside.ts";
import {useRef, useState} from "react";
import clsx from "clsx";
import s from "./searchInput.module.css";

export const SearchInput = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(wrapperRef, () => setOpen(false), open);

  return (
    <div className={s.wrapper} ref={wrapperRef}>
      <button className={s.iconBtn} onClick={() => setOpen((o) => !o)}>
        <span className={s.bg}></span>
        <svg viewBox="0 0 24 24">
          <path
            d="M10 2a8 8 0 015.292 13.708l4 4a1 1 0 01-1.414 1.414l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"/>
        </svg>
      </button>

      <div className={clsx(s.inputWrapper, open && s.open)}>
        <input
          type="text"
          className={s.input}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};
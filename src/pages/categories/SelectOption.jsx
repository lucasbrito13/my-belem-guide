import React from "react";
import { useNavigate } from "react-router-dom";
import "./selectOption.css";

export default function MySelect({ options, placeholder }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");
  const wrapperRef = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="meu-seletor" ref={wrapperRef}>
      <h2>O que você procura fazer hoje?</h2>
      <button onClick={() => setOpen(!open)}>
        {selected || placeholder}
      </button>

      {open && (
        <ul className="lista">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setSelected(option.label);
                setOpen(false);
                navigate(option.value);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

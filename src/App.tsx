import React, { useState } from 'react';
import './App.css';
import { generatePassword } from './passwordGenerator';
import CustomTitleBar from './CustomTitleBar';
import { SquarePlus, SquareMinus, Copy } from 'lucide-react';

function App() {
  const [length, setLength] = useState(12);
  const [inputValue, setInputValue] = useState('12');
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [symbols, setSymbols] = useState('!@#$%&*?');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const handleGenerate = () => {
    const pwd = generatePassword(length, useUpper, useLower, useNumbers, useSymbols, symbols);
    setPassword(pwd);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // --- Salasanan pituuden syötteen käsittely ---
  const handleLengthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.replace(/[^0-9]/g, ''));
  };

  const commitLengthInput = () => {
    let num = parseInt(inputValue, 10);
    if (isNaN(num)) num = 8;
    if (num < 8) num = 8;
    if (num > 40) num = 40;
    setLength(num);
    setInputValue(num.toString());
  };

  const handleLengthInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      commitLengthInput();
      (e.target as HTMLInputElement).blur();
    }
  };

  React.useEffect(() => {
    setInputValue(length.toString());
  }, [length]);

  return (
    <div className={`App ${theme}-theme`}>
      <CustomTitleBar theme={theme} toggleTheme={toggleTheme} />
      <h1 className="main-title">Salasanageneraattori</h1>
      <div className="generator-container">
        <div className="generator-left">
          <div className="generator-left-title">Valitse merkistöt</div>
          <label>
            <input
              type="checkbox"
              checked={useUpper}
              onChange={e => setUseUpper(e.target.checked)}
            />
            Isot kirjaimet (A-Z)
          </label>
          <label>
            <input
              type="checkbox"
              checked={useLower}
              onChange={e => setUseLower(e.target.checked)}
            />
            Pienet kirjaimet (a-z)
          </label>
          <label>
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={e => setUseNumbers(e.target.checked)}
            />
            Numerot (0-9)
          </label>
          <label>
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={e => setUseSymbols(e.target.checked)}
            />
            Erikoismerkit
          </label>
          <div className="symbols-input" style={{ visibility: useSymbols ? "visible" : "hidden" }}>
            <label>
              Sallitut erikoismerkit:
              <input
                type="text"
                value={symbols}
                onChange={e => setSymbols(e.target.value)}
                style={{width: '200px' }}
              />
            </label>
            <div className="symbols-preview">
              {symbols.split('').map((char, idx) => (
                <span className="symbol-bubble" key={idx}>{char}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="generator-right">
          <div className="length-controls">
            <div className="length-title">Salasanan pituus</div>
            <input
              type="number"
              min="8"
              max="40"
              value={inputValue}
              onChange={handleLengthInputChange}
              onBlur={commitLengthInput}
              onKeyDown={handleLengthInputKeyDown}
              className="length-number"
            />
            <div className="input-hint">Sallittu pituus: 8–40 merkkiä</div>
            <div className="length-inputs">
              <button
                className="length-btn"
                onClick={() => setLength(l => Math.max(8, l - 1))}
                aria-label="Vähennä pituutta"
                type="button"
              >
                <SquareMinus size={28} />
              </button>
              <input
                type="range"
                min="8"
                max="40"
                value={length}
                onChange={e => setLength(Number(e.target.value))}
                className="length-slider"
              />
              <button
                className="length-btn"
                onClick={() => setLength(l => Math.min(40, l + 1))}
                aria-label="Lisää pituutta"
                type="button"
              >
                <SquarePlus size={28} />
              </button>
            </div>
          </div>
          <div className="password-output">
            <strong>Generoitu salasana:</strong>
            <div className="password-value-wrapper">
              <div
                className="password-value"
                style={{
                  fontSize:
                    password.length > 39
                      ? "1.2rem"
                      : password.length > 35
                      ? "1.3rem"
                      : password.length > 31
                      ? "1.4rem"
                      : password.length > 27
                      ? "1.6rem"
                      : password.length > 23
                      ? "1.8rem"
                      : password.length > 17
                      ? "2rem"
                      : "2.2rem"
                }}
              >
                {password}
              </div>
            </div>
            <button
              className="copy-btn-inside"
              onClick={() => {
                if (password) {
                  navigator.clipboard.writeText(password);
                }
              }}
              aria-label="Kopioi salasana"
              type="button"
            >
              <Copy size={16} />
            </button>
          </div>
          <button className="generate-btn" onClick={handleGenerate}>
            Luo salasana
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

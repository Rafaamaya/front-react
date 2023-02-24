import React, { useState, useEffect, Fragment } from "react"
import "./app.style.css";

const greetings = [
  "Bienvenido al curso de React",
  "Welcome to React course",
  "Bienvenue au cours de React",
  "Bem-vindo ao curso de React",
  "歡迎來到 React 課程"
];

function App() {
  const [index, setChangeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const min = 1;
      const max = greetings.length - 1;
      const rand = min + Math.random() * (max - min);
      setChangeIndex(Math.round(rand));
    }, 2000);

    return () => {
      clearInterval(interval);
    }
  }, [index]);

  return (
    <Fragment>
      <div className="App">
        {greetings[index]}
        <div className="welcome-logo">
          <img
            src="https://images.prismic.io/dh-frontend/3daea5ec-e5b0-451a-a27e-2b039506c9ca_DigitalHouse_Logo_Black.png?auto=compress,format"
            alt="DH_LOGO"
          />
        </div>
      </div>
    </Fragment>
  )
}

export default App

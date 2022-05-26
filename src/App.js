import { useEffect, useState } from "react"


function App() {

  const [styleMode, setStyleMode] = useState('light')

  useEffect(() => {
    document.title = "Dark mode"
  }, []);

  const switchMode = () => {
    setStyleMode((oldValue) => {
      return oldValue === 'light' ? 'dark' : 'light';
    })
  };

  return (
    <div className={['App', styleMode].join(" ")}>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-12">
            <h4>Titolo del paragrafo</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button className="btn btn-success" onClick={switchMode}>{styleMode === 'light' ? "Modalità dark" : "Modalità light"}</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

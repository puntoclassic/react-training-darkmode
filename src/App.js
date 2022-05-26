import { useEffect, useState } from "react"



/**
 * COME FUNZIONA
 * useState mantiene lo stato della modalità light, dark
 * 
 */
function App() {

  //ottiene dalla memoria locale qual'è ultima modalità impostata
  const getFromLocalStorage = () => {
    if (localStorage.getItem("styleMode")) {
      return localStorage.getItem("styleMode");
    } else {
      return "light"
    }
  }

  const [styleMode, setStyleMode] = useState(getFromLocalStorage())

  //Cambiamolo il titolo alla finestra... potevamo farlo da html visto che è una pagina sola
  useEffect(() => {
    document.title = "Dark mode"
  }, []);

  //quando viene chiamata fa lo switch della modalità
  const switchMode = () => {
    setStyleMode((oldValue) => {
      const newVal = oldValue === 'light' ? 'dark' : 'light';

      //memorizza nella memoria locale la modalità scelta
      localStorage.setItem("styleMode", newVal);
      return newVal; // operatore ternario
    })
  };

  //
  /** 
   * [].join, aggiungiamo lo stile dinamicamente usando un array separato da spazio
   * onMouseDown={(e) => e.preventDefault()} workaround per evitare lo sgradevole effetto del bottone che rimane pressato
   * onClick={switchMode} -> chiamiamo la funzione switchMode
   * {styleMode === 'light' ? "Modalità dark" : "Modalità light"} usiamo l'operatore ternario per mostrare un testo di verso in base allo stato
   */
  return (
    <div className={['App', styleMode].join(" ")}>
      <div className="container p-4">
        <div className="row">
          <CardConTesto />
          <CardConTesto />
          <CardConTesto />
        </div>
        <div className="row my-3">
          <CardConTesto />
          <CardConTesto />
          <CardConTesto />
        </div>
        <div className="row my-3">
          <div className="col-lg-12">
            <button onMouseDown={(e) => e.preventDefault()} className="btn btn-success" onClick={switchMode}>{styleMode === 'light' ? "Modalità dark" : "Modalità light"}</button>
          </div>
        </div>
      </div>
    </div >
  );
}

//Creato questo componente per evitare di ripetetere il paragrafo e per una maggiore pulizia del codice
function CardConTesto() {
  return <>
    <div className="col-lg-4">
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Titolo del paragrafo</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div></>
}

export default App;

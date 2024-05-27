import { useEffect, useState } from "react";

function App() {
  const [playing, setPlaying] = useState(false);
  const [push, setPush] = useState(false);
  const [time, setTime] = useState(0);
  const [timeId, setTimeId] = useState(0);
  const [showRestart, setShowRestart] = useState(false);
  const [bestScore, setBestScore] = useState(10);

  useEffect(() => {
    if (push) {
      setTimeout(() => {
        crono(false);
        setShowRestart(true);
      }, 10010);
    }
  }, [push]);

  useEffect(() => {
    let local: any = localStorage.getItem("highScore");

    localStorage.getItem("highScore") == null &&
      localStorage.setItem("highScore", JSON.stringify(10));
      
    localStorage.getItem("highScore") != null &&
      setBestScore(JSON.parse(local));
  }, []);

  const crono = (flag: boolean) => {
    if (flag) {
      let start: any = 0;
      setTimeId(
        setInterval(() => {
          setTime(start.toFixed(2));
          start += 0.01;
        }, 10)
      );
    } else {
      clearInterval(timeId);
      if (Number(time) < Number(bestScore) && Number(time) > 0) {
        localStorage.setItem("highScore", JSON.stringify(time));
        setBestScore(Number(time));
      }
    }
  };

  const play = () => {
    setTimeout(() => {
      setPush(true);
      crono(true);
    }, Math.floor(Math.random() * (5000 - 1000 + 1) + 1000));
    setPlaying(true);
  };

  const stopGame = () => {
    setPlaying(false);
    setPush(false);
    setTime(0);
  };

  return (
    <main className="flex flex-col justify-around items-center">
      <div className="flex flex-col gap-[15px]">
        <h1>Mejor Tiempo: {bestScore} segundos.</h1>
        <h1>{time} segundos</h1>
      </div>
      <section>
        <figure
          onClick={() => {
            if (push) {
              crono(false);
              setShowRestart(true);
            }
          }}
          className={
            push ? "size-[300px] bg-red-800" : "size-[300px] bg-slate-400"
          }
        />
      </section>

      <footer>
        {playing && push && showRestart && (
          <button
            className=" w-[300px] text-[30px] hover:bg-slate-50 hover:text-black duration-300"
            onClick={() => {
              stopGame();
              setShowRestart(false);
            }}
          >
            Reiniciar
          </button>
        )}
        {!playing && (
          <button
            className=" w-[300px] text-[30px] hover:bg-slate-50 hover:text-black duration-300"
            onClick={play}
          >
            Jugar
          </button>
        )}
      </footer>
    </main>
  );
}

export default App;

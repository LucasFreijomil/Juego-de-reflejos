import { useEffect, useState } from "react";

function App() {
  const [playing, setPlaying] = useState(false);
  const [push, setPush] = useState(false);
  const [time, setTime] = useState(0);
  const [timeId, setTimeId] = useState(0);

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

  useEffect(() => {
    if (push) {
      setTimeout(() => {
        crono(false);
      }, 10010);
    }
  }, [push]);

  return (
    <main className="flex flex-col justify-around items-center">
      <header>
        <h1>{time} segundos</h1>
      </header>
      <section>
        <figure
          onClick={() => crono(false)}
          className={
            push ? "size-[300px] bg-red-800" : "size-[300px] bg-slate-400"
          }
        />
      </section>

      <footer>
        {playing && push && (
          <button
            className=" w-[300px] text-[30px] hover:bg-slate-50 hover:text-black duration-300"
            onClick={stopGame}
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

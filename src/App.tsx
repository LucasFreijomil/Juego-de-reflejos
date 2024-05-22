function App() {
  return (
    <main className="flex flex-col justify-around items-center">
      <header>
        <h1>{0} segundos</h1>
      </header>
      <section>
        <figure className=" bg-slate-400 size-[300px]" />
      </section>
      <footer>
        <button className=" w-[300px] text-[30px] hover:bg-slate-50 hover:text-black duration-300">Jugar</button>
      </footer>
    </main>
  );
}

export default App;

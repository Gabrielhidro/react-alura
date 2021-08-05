import ListaDeNotas from './components/ListaDeNotas'

function App() {
  return (
    <>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar nota</button>
      </form>
      <ListaDeNotas />
    </>
  );
}

export default App;

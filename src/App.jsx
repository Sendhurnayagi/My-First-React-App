import "./App.css";
import MyForm from "./Components/Form";
import Time from "./Components/Time";
import Routing from "./Components/Routing";
import Header from "./Components/Header";


function App() {
  return (
    <div className="container">
      <Header myValue="Project" />
      <main className="main_content">
        <section className="card">
          <h2>Learning Hooks</h2>
          <Time />
        </section>
        <section className="card">
          <h2>Working on form elements</h2>
          <MyForm />
        </section>
        <section className="card">
          <h2>Learning about BrowserRouter</h2>
          <Routing />
        </section>
      </main>
    </div>
  );
}

export default App;

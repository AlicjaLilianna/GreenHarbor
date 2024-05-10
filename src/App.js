import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <HomePage></HomePage>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

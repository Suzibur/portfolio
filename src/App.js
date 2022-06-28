import './App.css';
import { About, Heading, Navbar } from './components';
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <About />
      </div>
    </>
  );
}

export default App;

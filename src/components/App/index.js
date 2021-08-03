import './styles.scss';
import Header from '../Header';
import Footer from '../Footer';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
        <p>
          Portfolio
        </p>
        <Footer />
      </header>
    </div>
  );
}

export default App;

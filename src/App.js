import Header from './components/Header';
import Stock from './components/Stock';
import './index.css';

function App() {
  return (
    <div className='container'>
      <Header>
          <Stock />
      </Header>
    </div>
    
  );
}

export default App;

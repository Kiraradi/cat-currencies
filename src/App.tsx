import { Provider } from 'react-redux';
import './App.css';
import { store } from './services/store';
import CurrencyPage from './components/CurrencyPage/CurrencyPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CurrencyPage></CurrencyPage>
      </Provider>
    </div>
  );
}

export default App;

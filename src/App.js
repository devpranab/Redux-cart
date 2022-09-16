import './App.css';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
     <Cart />
     <Shop />
    </Provider>
  );
}

export default App;

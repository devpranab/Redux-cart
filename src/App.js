import './App.css';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
    <div className="row">
      <div className="col-7">
     <Shop />
      </div>
      <div className="col-5">
      <Cart />
      </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;

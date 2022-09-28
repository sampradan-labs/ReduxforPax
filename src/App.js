import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './UserStore/store';
import UserContainer from './UserContainer';

function App() {
  return (
    <Provider store={store}>
      <UserContainer/>
    </Provider>
  );
}

export default App;

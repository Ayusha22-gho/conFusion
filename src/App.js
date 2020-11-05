import React ,{Component} from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore ();

class App extends Component {

  render(){
  return (
    <Provider store = {store}>
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
    </Provider>
    //to make information available in the menu componenet using the child class props
  );
}
}

export default App;


import './App.css';
import Container from './component/container'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
          <Provider store={store}> 
            <div className="App">
              <Container />
            </div>
          </Provider>
  );
}

export default App;

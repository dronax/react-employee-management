
import './App.css';
import Emplist from './Components/Emplist';
import AddEmployee from './Components/AddEmployee';
import store from './Redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {" "}
        <h1>Employee Management System</h1>
        <Emplist />
        {/* <AddEmployee/> */}
      </div>
    </Provider>
  );
} 

export default App;

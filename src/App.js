import './App.css';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Routes from './router/Routes';


function App() {
  return (

    // <Provider>
        <BrowserRouter>
          <LastLocationProvider>
            <Routes />
          </LastLocationProvider>
        </BrowserRouter>
    // </Provider>
  );
}

export default App;

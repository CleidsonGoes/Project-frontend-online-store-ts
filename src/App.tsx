import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;


import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/admin/menu/menu.component';
import { AppRouter } from './components/Approuter';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
      <AppRouter></AppRouter>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;

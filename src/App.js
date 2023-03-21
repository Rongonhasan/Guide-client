import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routs from './routs/Routs';

function App() {
  return (
    <div className='max-w-screen-xl	mx-auto'>
      <RouterProvider router={Routs}>

      </RouterProvider>
    </div>
  );
}

export default App;

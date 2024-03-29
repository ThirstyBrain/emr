import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App: React.FC = () => {
   return <RouterProvider router={router}></RouterProvider>
  
}

export default App;

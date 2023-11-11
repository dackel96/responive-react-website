import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  const path = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
        </>
      ),
    },
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={path} />{' '}
      </div>
    </>
  );
}

export default App;

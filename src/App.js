import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';

function App() {
  const path = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
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

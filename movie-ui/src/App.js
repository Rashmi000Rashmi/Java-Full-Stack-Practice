
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-gray-900 min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow pt-16'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

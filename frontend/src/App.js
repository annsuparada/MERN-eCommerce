import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Hearder';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

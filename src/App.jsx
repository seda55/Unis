import { useDispatch } from 'react-redux';
import './App.css';
import Basket from './components/Basket';
import ProductList from './components/ProductList';
import { useEffect } from 'react';
import { fetchProducts } from './redux/productSlice'; // fetchProducts funksiyasını import edin.

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Məhsulları yükləmək üçün fetchProducts çağırılır.
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Basket</h1>
        <ProductList />
        <Basket />
      </div>
    </>
  );
}

export default App;

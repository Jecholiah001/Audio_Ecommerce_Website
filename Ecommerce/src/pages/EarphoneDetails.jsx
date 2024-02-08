/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Audiogear from '../components/Audiogear';
import Footer from '../components/Footer';
import Shop from '../components/Shop';
import jsonData from '../data.json';

function EarphoneDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedId = parseInt(id);
    const selectedProduct = jsonData.find((product) => product.id === selectedId);
    setProduct(selectedProduct);
  }, [id]);


  return (
    <div>
      <Header />
      <Shop/>
      <Audiogear />
      <Footer />
    </div>
  );
}

export default EarphoneDetails;
import React from 'react';

function ListRendering() {
  const products = ['Laptop', 'Radio', 'Phone', 'Car'];
  const porductsList = products.map((product, index) => (
    <h2 key={index}>{product}</h2>
  ));

  return <div>{porductsList}</div>;
}

export default ListRendering;

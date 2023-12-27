import React from 'react';

function Product({name, cost}) {
	return <p>
		name : <span>{name}</span><br />
		cost:  <span>{cost}</span>
	</p>;
}

export default Product;
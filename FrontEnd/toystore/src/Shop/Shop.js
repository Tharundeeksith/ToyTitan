import React, { useEffect } from 'react';
import './Shop.css';
import NavBar from '../Home/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { cartProducts } from '../Redux/action/Action';
import { FcLike } from 'react-icons/fc';
import { BsFillShareFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Shop() {
  const dispatch = useDispatch();
  const prod = useSelector(state => state);
  const [source, setSource] = React.useState([]); // State to store the fetched data

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get('http://localhost:8080/api/v1/auth/products')
      .then(response => {
        // The response object will contain the data returned from the server
        const sourceData = response.data;
        console.log(sourceData);
        setSource(sourceData); // Set the fetched data to the "source" state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className='products'>
        {source.map(product => (
          <div className='product' key={product.id}>
            {console.log(product)}
            <a href=''>
              <FcLike />
            </a>
            <a href='' id='share'>
              <BsFillShareFill />
            </a>
            <img src={product.link} className='image' alt={product.desc} />
            <p id='brand'>{product.brand}</p>
            <div className='desc'>
              <p>{product.desc}</p>
            </div>
            <div className='prices'>
              <p id='price'>${product.price}</p>
              <p id='dprice'>${product.dprice}</p>
              <p id='save'>(Save {product.save}%)</p>
            </div>
            <div className='price2'>
              {/* <h2 id='btnwishlist'>♡ Add To WishList</h2> */}
              <h2
                id='btnshop'
                onClick={() => {
                  dispatch(cartProducts(product));
                  toast.success('Item Added Successfully');
                }}
              >
                Add To cart 🛍️
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

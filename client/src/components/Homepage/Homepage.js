import rating from "../../images/rating.png"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

export default function Homepage() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/posts");
      // const {data}  = await axios.get("https://fakestoreapi.com/products");

      // console.log(data);

      setPosts(data);
    };

    fetchData();

  }, []);



  function parseint(rate) {

    if (rate >= 1 && rate < 2) {
      return (
        <div className='rating-div'>
          <img src={rating} className="card-rating"/>
        </div>
      )
    }

    if (rate >= 2 && rate < 3) {
      return (
        <div className='rating-div'>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>
        </div>
      )
    }


    if (rate >= 3 && rate < 4) {
      return (
        <div className='rating-div'>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating" />
        </div>
      )
    }


    if (rate >= 4 && rate < 5) {
      return (
        <div className='rating-div'>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>

        </div>
      )
    }

    if (rate >= 5) {
      return (
        <div className='rating-div'>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>
          <img src={rating} className="card-rating"/>
        </div>
      )
    }

  }

  return (
    <div className="App">
      {/* HELLO:{posts && JSON.stringify(posts)} */}

      {/* <h1> TANTRA</h1> */}
      <Navbar/>
      <div className='flex-row'>
        {
          posts.map((index) =>

            <div className='card flex-column' key={index.id}>

              <img src={index.image} className='card-image' />
              <p className='card-title'>{index.title} </p>
              <p className='card-desc'>{index.description} </p>
              {parseint(index.rating.rate)}
              <p className='card-price'>PRICE {index.price}$ </p>
            </div>







          )}
      </div>


    </div>
  );
}

// export default Homepage;

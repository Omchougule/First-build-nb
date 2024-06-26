import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';
// import ReviewCard from '../../components/ReviewCard';
import ReviewCard from '../../components/ReviewCards/ReviewCard';
import axios from 'axios';

export default function Reviews() {
  const [reviews, setReviews] = useState([])

  const loadReview = async () => {
    // try {
    //   const response = await axios.get(`${import.meta.env.VITE_API_URL}/review`);
    //   setReviews(response.data.data);
    //   toast.success('Reviews Loaded');
    // } catch (error) {
    //   console.error('Error loading reviews:', error);
    //   toast.error('Failed to load reviews');
    // }
  };

  const fetch_reviews = async () => {
    const res = await axios.get('http://localhost:5000/getreviews')

    if(res.data.success)
    {
      console.log(res.data.data);
      setReviews(res.data.data)
    }
  }

  useEffect(() => {
    fetch_reviews()
  }, [])


  return (
    <div data-scroll-container>

      <div className='
       md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
      bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center pt-20
      '>

        <Navbar />

        <h1 className='font-hand text-5xl py-36 mt-2 text-orange-400'>Review</h1>

        {/* <button className='text-white bg-transparent z-50 border py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 -translate-y-20'>Shop Now</button> */}

      </div>



      {/* <Navbar /> */}
      

      <div className="container mt-5 mx-auto">

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Reviews</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
            </div>
            <div className="mt-12 animate-rotate-y w-4/5 mx-auto ">
              <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {reviews.map((review) => (
                  <ReviewCard 
                  key={review._id} 
                  name={review.userName} 
                  message={review.review}
                  userPhoto='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?ga=GA1.1.784385548.1718181495'
                  loadReview={loadReview} />
                ))}


              </ul>


            </div>
            <button type="button" onClick={loadReview} className="flex mx-auto mt-16 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded-md text-lg">Load Reviews</button>
          </div>
        </section>

      </div>
    </div>
  );
}
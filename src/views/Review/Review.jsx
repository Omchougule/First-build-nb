import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';
// import ReviewCard from '../../components/ReviewCard';
import ReviewCard from '../../components/ReviewCards/ReviewCard';

export default function Reviews() {
  const userName = localStorage.getItem('userName');
  const uPhoto = localStorage.getItem('userPhoto');

  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    loadReview();
  }, []);

  const addReview = async () => {
    // try {
    //   const response = await axios.post(`${import.meta.env.VITE_API_URL}/review`, {
    //     name: userName,
    //     message: message,
    //     userPhoto: uPhoto,
    //   });
    //   toast.success(response.data.message);
    //   loadReview();
    //   reset();
    // } catch (error) {
    //   console.error('Error adding review:', error);
    //   toast.error('Failed to add review');
    // }
  };

  const reset = () => {
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-10 mx-auto w-3/5">
        <div className=" card m-auto shadow-md border border-t-white rounded p-4 mt-5 animate-fade-up ">
          <h1 className="text-center mb-10 text-info-emphasis text-4xl font-bold">Add Review</h1>
          <hr className="my-4" />
          <p className="mb-2">
            Name: <span className="font-semibold">{userName}</span>
          </p>
          <p className="my-4">Review:</p>
          <input
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-8 p-2 px-3 rounded border border-black w-full"
          />
          <div className="flex justify-start">
            <button
              type="button"
              onClick={reset}
              className="border rounded-lg hover:bg-green-100 px-4 py-2 mr-3 text-sm font-semibold"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={addReview}
              className="border rounded-lg bg-green-600 text-white hover:bg-green-500 px-4 py-2 text-sm font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      
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
                  <ReviewCard key={review._id} {...review} loadReview={loadReview} />
                ))}


              </ul>


            </div>
            <button type="button" onClick={loadReview} className="flex mx-auto mt-16 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded-md text-lg">Load Reviews</button>
          </div>
        </section>

      </div>
    </>
  );
}
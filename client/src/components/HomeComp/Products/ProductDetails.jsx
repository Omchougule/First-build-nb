import React, { useEffect,useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import products from './productsConfig';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useUserContext } from '../../../context/Authcontext';


export default function ProductDetail() {
  const { id } = useParams();
  const {user} = useUserContext()
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [product, setProduct] = useState(null);

  const navigate = useNavigate()
  
  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/getproducts');
        setProducts(res.data);

        const foundProduct = res.data.find((item) => item._id === id);
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsloading(false);
      }
    };

    
    fetchProducts();
    

      axios.post('http://localhost:5000/getfav', {userId : user?.id})
      .then((res)=>{
        if(res.data.success == true)
        {
          const fav = res.data.favourites.split(', ')
          setFavourites(fav)
          if(fav.includes(id))
            setIsLiked(true)
        }
      })
      .catch((err) => {
        console.log(err);
      })

  },[user?.id])


  if (isloading)
  {
    return <div className="text-center mt-10 text-gray-800">Loading...</div>;
  }
  if (!product && !isloading) {
    return <div className="text-center mt-10 text-gray-800">Product not found</div>;
  }

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     lerp: 0.05,
  //   });
  // }, []);

  const handleAddToCart = async () => {

    if(user?.id)
    {
      const res = await axios.post('http://localhost:5000/addcart', {
        title : product.title,
        quantity : 1,
        userId : user.id,
        imageUrl : product.imageUrl,
        description : product.description,
        price : product.price,
        proId : product._id
      })
  
      if(res.data.success == true)
      {
        toast.success("Product added to Cart!");
      }
      else
      {
        toast.error("Product already in Cart!");
      }
      navigate('/cart')
    }
    else
    {
      navigate('/login')
      toast.error("Please login first!");
    }

  }

  const handleAddToFavorites = () => {
  //   let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  //   const isProductInFavorites = favorites.some(item => item.imageUrl === product.imageUrl);
  if(user?.id)
  {
    let updatedFavourites = [];
    if(!isLiked)
    {
      updatedFavourites = [...favourites, id];
      setFavourites(updatedFavourites);
      setIsLiked(true);
      setIsLiked(!isLiked);
    } 
    else
    {
      console.log(typeof(favourites));
      const updatedFavourites = favourites.filter(item => item !== id);
      setFavourites(updatedFavourites);
      setIsLiked(false);
    }
    axios.post('http://localhost:5000/addfav',{userId : user.id, favourites : updatedFavourites})
    .then((response) => {
      
    })
    .catch((error) => {
      console.log(error);
    })

  }
  else
  {
    toast.error("Please login first !")
  }

    // if (isProductInFavorites) {
    //   // If the product is already in the favorites, display a toast message
    //   setIsLiked(!isLiked)
    //   toast.error("Product is already in Favorites!");
    // } else {
    //   favorites.push(product);
    //   localStorage.setItem('favorites', JSON.stringify(favorites));
    //   toast.success("Product added to Favorites!");
    // }
  };

  return (
    <div data-scroll-container className='bg-[#b5c817]'>
      <div className=''>
        <div className='
          bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
          bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center pt-20
        '>
          <Navbar />
          <h1 className='font-hand text-5xl py-36 mt-2 text-orange-400'>Product Details</h1>
        </div>
      </div>

      <section className="bg-[#b5c817] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <img alt="ecommerce" className="h-96 object-cover object-center rounded-lg" src={product.imageUrl} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-white text-5xl title-font font-medium mb-1 font-hand">{product.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center text-white">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">₹ {product.price}</span>
                  <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                <button onClick={handleAddToFavorites} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 active:text-green-500 ml-4">
                  <svg fill={isLiked?'red':'currentcolor'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

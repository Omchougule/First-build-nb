import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../context/Authcontext';
import { Link } from 'react-router-dom';

const FavouriteItem = ({ imageUrl, proId, title, description, addToCart, removeFromFavourites, checkLike }) => {

    const isliked = checkLike(proId)

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm light:border-gray-700 light:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <Link to={`/product/${proId}`} className="shrink-0 md:order-1">
                    <img src={imageUrl} alt={title} className="h-20 w-20 object-cover rounded-lg" />
                </Link>
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <Link to={`/product/${proId}`} className="text-base font-medium text-gray-900 hover:underline light:text-white">{description}</Link>
                    <div className="flex items-center gap-4">
                        {/* <button type="button" onClick={addToCart} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline light:text-gray-400 light:hover:text-white">
                            <svg className="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-1 1h-1.63l-1.57 6.28a2 2 0 01-1.93 1.47H7.2a2 2 0 01-1.93-1.47L3.63 7H2a1 1 0 01-1-1V5zm4 9a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm6 0a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>

                            Add to Cart
                        </button> */}
                        <button type="button" onClick={removeFromFavourites} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline light:text-red-500">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Favourites = () => {
    const { user } = useUserContext()
    const [favourites, setFavourites] = useState([])


    useEffect(() => {
        if (user?.id) {
            axios.post('http://localhost:5000/getfav', { userId: user?.id })
                .then((res) => {
                    if (res.data.success == true) {
                         const fav = res.data.favourites
                        setFavourites(fav)
                    }
                })
                .catch((err) => {
                    console.log(err);
                })

        }
    }, [user])

    const isLiked = (id) => {
        favourites.forEach((favprod) => {
            if (favprod.proId == id) {
                return true
            }
        })
        return false
    }


    // Dummy data for three ice cream items
    const iceCreamItems = [
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Vanilla Ice Cream',
            description: 'Creamy vanilla flavored ice cream topped with chocolate syrup.'
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Chocolate Chip Ice Cream',
            description: 'Rich chocolate ice cream with chunks of chocolate chips mixed in.'
        },
        {
            id: 3,
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Strawberry Ice Cream',
            description: 'Sweet strawberry flavored ice cream made with fresh strawberries.'
        },
        {
            id: 4,
            imageUrl: 'https://via.placeholder.com/150',
            title: ' Shrumberry Ice Cream',
            description: 'Sweet shrumberry flavored ice cream made with fresh strawberries.'
        }
    ];

    const handleAddToCart = (id) => {
        // Implement your logic to add item to cart
        console.log(`Added item with id ${id} to cart`);
    };

    const removeFromFavourites = async (id) => {
        // Implement your logic to remove item from favourites
        console.log(`Removed item with id ${id} from favourites`);
        const newlist = favourites.filter((pro)=>pro.proId != id)
        setFavourites(newlist)
        await axios.post('http://localhost:5000/addfav',{userId : user.id, favourites : newlist})
    };

    return (
        <div className='p-20'>
            <h1 className="font-hand text-gray-900 light:text-white text-5xl mb-10">My Favourites</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {favourites.map((item) => (
                    <FavouriteItem
                        key={item.proId}
                        proId ={item.proId}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        description={item.description}
                        addToCart={() => handleAddToCart(item.proId)}
                        removeFromFavourites={() => removeFromFavourites(item.proId)}
                        checkLike={isLiked}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favourites;

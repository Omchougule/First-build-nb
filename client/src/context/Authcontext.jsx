import { createContext, useContext, useEffect, useState } from "react"
// import {IUser} from '../types'
// import { getCurrentUser } from "@/lib/appwrite/api";
import { getCurrentUser, getProducts } from "../api";
import { useNavigate } from "react-router-dom";

// export const INITIAL_USER = {
//     id: '',
//     // name: '',
//     // username: '',
//     email: '',
//     sessionId: ''
//     // imageUrl: '',
//     // bio: ''
//  }


 const INITIAL_STATE = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    products : [],
    order : [],
    summary : {},
    address : {},
    setUser: (user)=>{},
    setOrder: (order)=>{},
    setSummary : (summary)=>{},
    setIsAuthenticated: (val)=>{},
    checkAuthUser: async () => false,
    setAddress : (address)=>{},
 }

 const Authcontext = createContext(INITIAL_STATE);

const AuthProvider = ({children}) => {
  
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [order, setOrder] = useState([])
  const [summary, setSummary] = useState({})
  const [address, setAddress] = useState({})

  const  checkAuthUser = async () => {
    try {
      const currentAccout = await getCurrentUser();
      const pro = await getProducts();
      setProducts(pro);
    //   console.log(currentAccout);
      if(currentAccout)
      {
        setUser({
          id : currentAccout._id,
          userName : currentAccout.userName,
          phoneNumber : currentAccout.phoneNumber,
          email : currentAccout.email,
          address : currentAccout.address,
          sessionId : currentAccout.sessionId
        });

        setIsAuthenticated(true)

        return true;
      }
      return false;
      
    } catch (error) {
      console.log(error);
      return false;
    }
    finally{
      setisLoading(false);
    }
  };

  useEffect(()=>{
    // 
    // const usersession = JSON.parse(localStorage.getItem('auth'))
    if(!user)
    {
      checkAuthUser()
    }
    //   navigate('sign-in');
    
  },[])

  const values = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
    products,
    order,
    setOrder,
    summary,
    setSummary,
    address,
    setAddress
  }


  return (
    <Authcontext.Provider value={values}>
      {children}
    </Authcontext.Provider>
  )
}

export default AuthProvider

export const useUserContext = ()=> useContext(Authcontext);
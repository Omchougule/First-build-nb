import axios from 'axios';

export async function getCurrentUser() {
  let data;
  console.log('call');
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user) {
      const res = await axios.post("http://localhost:5000/getuser", {
        email: user.email,
        sessionId: user.sessionId,
      });

      if (res.data.data) {
        data = res.data.data;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error while getting user info", error);
  }
  return data;
}

export async function getProducts()
{
  try {
    const res = await axios.get('http://localhost:5000/getproducts')
    
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

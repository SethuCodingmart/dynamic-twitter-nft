import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL

const fetchTweetDetails = async (twitterId) => {
    const tweetDetails = await axios.get(`${BASE_URL}/api/details?username=${twitterId}`)

    return tweetDetails.data.data;
}

export {
    fetchTweetDetails
}

const twitterId = localStorage.getItem("twitterId");

export const fetchBadges = async () => {
    const res = await axios.get(`http://localhost:5000/api/user/all/badge/${twitterId}`)
    return res;
}

export const addCoupon = async (body) => {
    try {
      const resp = await axios.post(
        `http://localhost:5000/api/user/claim`,
        body
      );
      return resp;
    } catch (error) {
      return error.response.data;
    }
  };
  
  


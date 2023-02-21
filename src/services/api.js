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
    const res = await axios.get(`https://revisequest.loca.lt/api/user/all/badge/${twitterId}`)
    return res;
}

export const addCoupon = async (body) => {
    const resp = await axios.post(`https://revisequest.loca.lt/api/user/claim`, body )
    console.log("🚀 ~ file: api.js:25 ~ addCoupon ~ resp", resp)
    return resp;
}



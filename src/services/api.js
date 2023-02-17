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



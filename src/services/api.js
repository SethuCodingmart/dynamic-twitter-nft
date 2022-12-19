import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL

const fetchTweetDetails = async (twitterId) => {
    const tweetDetails = await axios.get(`${BASE_URL}/api/details?username=${twitterId}`)

    return tweetDetails.data.data;
}

export {
    fetchTweetDetails
}
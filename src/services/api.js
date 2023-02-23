import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

const fetchTweetDetails = async (twitterId) => {
    const tweetDetails = await axios.get(`${BASE_URL}/api/details?username=${twitterId}`)
    return tweetDetails.data.data;
}

const loginRoute = async ({ username, password }) => {
    const token = await axios.post(`https://revisequest.loca.lt/api/auth/signin`, { username, password })
    return token
}

const addBadge = async (data, { token }) => {
    const code = await axios.post(`https://revisequest.loca.lt/api/admin/addBadge`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return code
}

const getAllBadges = async ({ token }) => {
    const allBadges = await axios.get(`https://revisequest.loca.lt/api/admin/allBadges`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return allBadges.data
}

const badgeStandings = async ({ token }) => {
    const standings = await axios.get(`https://revisequest.loca.lt/api/admin/badgeStandings`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return standings.data
}


const selectTemplates = async ({ token }) => {
    const standings = await axios.get(`https://revisequest.loca.lt/api/admin/templates`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return standings.data

}


export {
    fetchTweetDetails,
    loginRoute,
    addBadge,
    getAllBadges,
    badgeStandings,
    selectTemplates
}

const twitterId = localStorage.getItem("twitterId");

export const fetchBadges = async () => {
    const res = await axios.get(`https://revisequest.loca.lt/api/user/all/badge/${twitterId}`)
    return res;
}

export const addCoupon = async (body) => {
    try {
      const resp = await axios.post(
        `https://revisequest.loca.lt/api/user/claim`,
        body
      );
      return resp;
    } catch (error) {
      return error.response.data;
    }
  };
  
  


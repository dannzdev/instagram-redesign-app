import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetUser = (api, token) => {
    const [user, setUser] = useState([]);

    useEffect(async() => {
        const response = await axios(`${api}?fields=username&access_token=${token}`);
        setUser(response.data)
    }, [])
    return user;
}
const useGetMedia = (api, token) => {
    const [media, setMedia] = useState([]);

    useEffect(async() => {
        const response = await axios(`${api}/media?fields=id,media_url&access_token=${token}`);
        setMedia(response.data)
    }, [])
    return media;
}





export { useGetUser, useGetMedia };

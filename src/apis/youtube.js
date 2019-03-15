import axios from 'axios'

const KEY = 'AIzaSyDUw5ka5iPB8lxK5OBFL8jHHGTPlR2WOHQ'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:
    {
        key:KEY,
        part:'snippet',
        maxResults: 5
    }
}) ; 

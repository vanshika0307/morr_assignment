import axios from 'axios';

const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

export const fetchData = async () => {
    let changableUrl = url;


    try {
        const { data: { entries } } = await axios.get(changableUrl);
         console.log(entries);
        return { entries };

    } catch (error) {
        console.log(error);
    }
}

export const fetchUrl= async (url) => {
    let changableUrl = url;


    try {
        const { data: { entries:{images:{posterArt :{url}}}} }  = await axios.get(changableUrl);
         console.log(url);
        return { url };


    } catch (error) {
        console.log(error);
    }
}
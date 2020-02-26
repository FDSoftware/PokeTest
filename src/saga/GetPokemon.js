import axios from 'axios';

export default function GetPokemon (url){
    return axios.request({
        method: 'get',
        url: url
      });
}
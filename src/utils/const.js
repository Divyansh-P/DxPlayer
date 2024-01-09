import { FaFilm,FaCar,FaMusic,FaGamepad,FaLaughSquint,FaNewspaper } from "react-icons/fa";
import { MdOutlinePets, MdOutlineSportsBasketball } from "react-icons/md";
import {GiDramaMasks} from "react-icons/gi"
import {FcBiotech} from 'react-icons/fc'

export const Home_Video="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+import.meta.env.VITE_YTAPI_KEY

export const Video_Info="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+import.meta.env.VITE_YTAPI_KEY+"&id="

export const Autocomplete_API="https://youtube-data8.p.rapidapi.com/auto-complete/?gl=IN&q="

export const Searchinfo_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+import.meta.env.VITE_YTAPI_KEY+"&q="

export const RelatedVideo_API='https://youtube-data8.p.rapidapi.com/video/related-contents/?gl=IN&id='

export const Options= {headers:{
    'X-RapidAPI-Key': import.meta.env.VITE_AUTOSUGGESTAPI_KEY,
    'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
}
}

export const categories=[{id:1,name:'Film',icon:FaFilm},{id:2,name:'Auto&vehicle',icon:FaCar},{id:10,name:'Music',icon:FaMusic },{id:15,name:'Pets and Animal',icon:MdOutlinePets },{id:17,name:'Sports',icon:MdOutlineSportsBasketball },{id:20,name:'Gaming',icon:FaGamepad },{id:23,name:'Comedy',icon:FaLaughSquint },{id:24,name:'Entertainment',icon:GiDramaMasks },{id:25,name:'News',icon:FaNewspaper },{id:28,name:'Science&technology',icon:FcBiotech }]

export  function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);
  
    // Enumerate number abbreviations
    var abbrev = ["K", "M", "B"];
  
    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
  
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3);
  
      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round(number * decPlaces / size) / decPlaces;
  
        // Handle special case where we round up to the next abbreviation
        if ((number == 1000) && (i < abbrev.length - 1)) {
          number = 1;
          i++;
        }
  
        // Add the letter for the abbreviation
        number += abbrev[i];
  
        // We are done... stop
        break;
      }
    }
  
    return number;
  }



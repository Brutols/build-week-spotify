import { fetchData } from "../js/fetchData.js";
import * as constant from "./constant.js"
import { createJumbotron } from "./componentArtist.js";


const displayArtist = async () => {
    let data = await fetchData();
    let songs = data.data;
    createJumbotron(
        songs[0].album.cover_medium,
        songs[0].album.title,
        songs[0].artist.picture_small,
        songs[0].title,
        songs[0].artist.id,
        songs[0].artist.id,
        '2',
        constant.centerSection);

    for (const song of songs) {
        //console.log(song);
    }

}

displayArtist();
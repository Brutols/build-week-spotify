import { fetchData } from "../js/fetchData.js";
import * as constant from "./constant.js"
import { createJumbotron,createTracksSection } from "./componentArtist.js";


const displayArtist = async (id) => {
    let data = await fetchData(constant.URL,id);
    console.log('trovo il nome dell artista che ha quell id');
    let artist = await fetchData(constant.URLq,data.name)
    let songs = artist.data;
    console.log('oggetto dell artista di id: '+id);
    console.log(songs);
    createJumbotron(
        songs[0].album.cover_medium,
        songs[0].album.title,
        songs[0].artist.picture_small,
        data.name,
        songs[0].artist.id,
        songs[0].artist.id,
        '2',
        constant.centerSection);
        const centerSectionTrackList = document.querySelector('.section_center .track-list');
    for (const song of songs) {
        console.log(song.title);
        createTracksSection(
            song.title,
            song.album.cover_medium,
            song.duration,
            centerSectionTrackList)
     }
};
const getId = ()=>{

    let params = new URLSearchParams(document.location.search)
    let idURL = params.get('id')
    displayArtist(idURL)
}
window.onload = getId
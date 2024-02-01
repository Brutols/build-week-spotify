import { fetchData } from "../js/fetchData.js";
import * as constant from "./constant.js"
import { createJumbotron,createTracksSection } from "./componentArtist.js";


const displayArtist = async (id) => {
    let data = await fetchData(constant.URL,id);
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
        const centerSectionTrackList = document.querySelector('.section_center .track-list')
        console.log(songs);
    for (const song of songs) {

        createTracksSection(
            song.album.title,
            song.album.cover_medium,
            centerSectionTrackList)
    }

}

const getId = ()=>{

    let params = new URLSearchParams(document.location.search)
    let idURL = params.get('id')
    displayArtist(idURL)
}
window.onload = getId
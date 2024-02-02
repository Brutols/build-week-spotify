import { createCard } from "./createComponents.js";
import { fetchData } from "./fetchData.js";
import { numRandom } from "../artist js/helper.js";
import * as constant from "./constant.js"
import * as constantArtist from "../artist js/constant.js"
//import { createMusicCard } from './createComponents.js';
let array = [

];
// Esegui la fetch dei dati e crea la card musicale
// fetchData().then(data => {
//   if (data) {
//     const userData = {
//       userImage: "path_to_user_image.jpg", // Sostituisci con i dati effettivi
//       username: "Nome Utente", // Sostituisci con i dati effettivi
//       songTitle: "Titolo della canzone", // Sostituisci con i dati effettivi
//       listeners: 12345678, // Sostituisci con i dati effettivi
//       userLogo: "path_to_user_logo.jpg" // Sostituisci con i dati effettivi
//     };
//     const musicCard = createMusicCard(userData, data.tracks.data);
//     const musicCardContainer = document.getElementById('musicCardContainer');
//     musicCardContainer.appendChild(musicCard);
//   } else {
//     // Gestisci l'errore nel recupero dei dati
//     console.error('Dati non disponibili');
//   }
// });

const cardWrapper = document.querySelector(".altro-di-ciò");
const loader = document.querySelector(".loader_wrapper");
let isDnone = true;
const pushArray = async ()=>{
  handleDnone(loader);
  for (let i = 1; i < 10; i++) {
    let data = await fetchData(constantArtist.URL,i)
    array.push(data.name);
  }
  initAlbums();
}
const handleDnone = (el) => {
  if (isDnone) {
    el.classList.remove("d-none");
    isDnone = false
    console.log(isDnone);
  } else {
    el.classList.add("d-none");
    isDnone = true
    console.log(isDnone);
  }
};

const queries = [
  "metallica",
  "linkin park",
  "muse",
  "50cent",
  "eminem",
  "kiss",
  "snoop dogg",
  "guns n' roses",
  "milly vanilly",
  "architects",
];

const initAlbums = () => {

  array.forEach(async (el) => {
    const res = await fetchData(constant.URL,el);
    //console.log(res);
    createCard(
      res.data[0].album.cover_medium,
      res.data[0].album.title,
      res.data[0].rank,
      res.data[0].album.id,
      cardWrapper
    );
  });
  setTimeout(() => {handleDnone(loader)}, "1000");
};

document.addEventListener("DOMContentLoaded", pushArray);


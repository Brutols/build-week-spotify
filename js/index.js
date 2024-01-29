import { fetchData } from './fetchData.js';
import { createMusicCard } from './createComponents.js';

// Esegui la fetch dei dati e crea la card musicale
fetchData().then(data => {
  if (data) {
    const userData = {
      userImage: "path_to_user_image.jpg", // Sostituisci con i dati effettivi
      username: "Nome Utente", // Sostituisci con i dati effettivi
      songTitle: "Titolo della canzone", // Sostituisci con i dati effettivi
      listeners: 12345678, // Sostituisci con i dati effettivi
      userLogo: "path_to_user_logo.jpg" // Sostituisci con i dati effettivi
    };
    const musicCard = createMusicCard(userData, data.tracks.data);
    const musicCardContainer = document.getElementById('musicCardContainer');
    musicCardContainer.appendChild(musicCard);
  } else {
    // Gestisci l'errore nel recupero dei dati
    console.error('Dati non disponibili');
  }
});
// Funzione per eseguire la fetch dei dati
export async function fetchData() {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/75621062');
      if (!response.ok) {
        throw new Error('Errore nella fetch dei dati');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Errore durante il recupero dei dati:', error);
      return null;
    }
  }
  
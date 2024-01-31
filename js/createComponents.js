// export {createMusicCard};

// function createMusicCard(userData, trackData) {
//     const musicCardDiv = document.createElement('div');
//     musicCardDiv.className = 'card';
    
//     const cardHTML = `
//       <div class="card-top">
//         <div class="user-dropdown">
//           <img src="${userData.userImage}" alt="User Image">
//           <div class="dropdown">
//             <span class="username">${userData.username}</span>
//             <i class="fas fa-caret-down"></i>
//           </div>
//         </div>
//         <div class="verification">
//           <i class="fas fa-check-circle"></i>
//           <span>Artista Verificato</span>
//         </div>
//         <h2 class="title">${userData.songTitle}</h2>
//         <div class="stats">
//           <span class="number">${userData.listeners}</span>
//           <span class="label">Ascoltatori Mensili</span>
//         </div>
//       </div>
//       <div class="card-bottom">
//         <button class="play-button"><i class="fas fa-play"></i></button>
//         <button class="following-button">Following</button>
//         <div class="menu-dots">
//           <i class="fas fa-ellipsis-h"></i>
//         </div>
//         <div class="related-info">
//           <p>Popolari</p>
//           <p>Brani che ti piacciono</p>
//         </div>
//         <div class="track-list">
//           <ol>
//             ${generateTrackList(trackData)}
//           </ol>
//         </div>
//         <div class="user-info">
//           <img src="${userData.userLogo}" alt="User Logo">
//           <p>Hai messo mi piace</p>
//         </div>
//       </div>
//     `;
    
//     musicCardDiv.innerHTML = cardHTML;
//     return musicCardDiv;
//   }
  
//   // Funzione per generare la lista delle tracce
//   function generateTrackList(trackData) {
//     let trackListHTML = '';
//     trackData.forEach(track => {
//       trackListHTML += `
//         <li>
//           <img src="${track.trackImage}" alt="${track.title}">
//           <div class="track-info">
//             <h3>${track.title}</h3>
//             <p>Visualizzazioni: ${track.views}</p>
//             <p>Durata: ${track.duration}</p>
//           </div>
//         </li>
//       `;
//     });
//     return trackListHTML;
//   }


export const createCard = (src, title, desc, id, container) => {

    const link = document.createElement("a")
    const divCard = document.createElement('div');
    const img = document.createElement('img');
    const divCardBody = document.createElement('div');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');


    link.href = `./album.html?id=${id}`
    divCard.className = 'card p-2';
    divCard.id = id;
    img.src = src;
    img.alt = '...';
    divCardBody.className = 'card-body p-0';
    h5.className = 'text-white card-title mt-3 text-truncate';
    h5.textContent = title;
    p.className = 'text-white card-text';
    p.textContent = desc;


    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);
    divCard.appendChild(img);
    divCard.appendChild(divCardBody);
    link.appendChild(divCard)

    container.appendChild(link);
}
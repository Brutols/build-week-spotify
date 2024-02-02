export { createJumbotron, createTracksSection };

const createJumbotron = (
  cover,
  title,
  artistImg,
  artist,
  artistId,
  ntracks,
  duration,
  container
) => {
  const jumbotron = document.createElement("div");
  jumbotron.className = "jumbotron d-flex flex-column";
  jumbotron.style.backgroundImage = `url(${artistImg})`;

  const jumboControls = document.createElement("div");
  jumboControls.className =
    "jumbotron_controls d-flex justify-content-between align-items-center py-3";
  jumbotron.appendChild(jumboControls);

  const controlsBtns = document.createElement("div");
  controlsBtns.className = "controls_btns";
  jumboControls.appendChild(controlsBtns);
  const back = document.createElement("ion-icon");
  back.setAttribute("name", "chevron-back-sharp");
  back.className = "fs-4 text-white";
  controlsBtns.appendChild(back);
  const next = document.createElement("ion-icon");
  next.setAttribute("name", "chevron-forward-sharp");
  next.className = "fs-4 text-white";
  controlsBtns.appendChild(next);

  const profile = document.createElement("div");
  profile.className =
    "controls_profile d-flex align-items-center justify-content-center gap-1";
  jumboControls.appendChild(profile);
  const profileImg = document.createElement("img");
  profileImg.src = "https://placehold.it/50x50";
  profileImg.alt = "profile-img";
  profile.appendChild(profileImg);
  const profileName = document.createElement("p");
  profileName.className = "m-0 text-truncate";
  profileName.textContent = "profile name";
  profile.appendChild(profileName);
  const openProfile = document.createElement("ion-icon");
  openProfile.setAttribute("name", "caret-down-sharp");
  profile.appendChild(openProfile);

  const verified = document.createElement("div");
  verified.className = "d-flex";
  jumbotron.appendChild(verified);
  const checkIcon = document.createElement("ion-icon");
  checkIcon.setAttribute("name", "checkmark-outline");
  verified.appendChild(checkIcon);
  const verifiedText = document.createElement("h6");
  verifiedText.textContent = "Artista verificato";
  verified.appendChild(verifiedText);

  const titolo = document.createElement("h1");
  titolo.className = "ps-2";
  titolo.textContent = `${artist}`;
  jumbotron.appendChild(titolo);

  const listeners = document.createElement("h6");
  listeners.textContent = "3.433.158 ascoltatori mensili";
  jumbotron.appendChild(listeners);

  container.appendChild(jumbotron);

  const containerDoom = document.createElement("div");
  containerDoom.className = "container";
  const innerContainer = document.createElement("div");
  innerContainer.className = "d-flex align-items-center gap-3";
  containerDoom.appendChild(innerContainer);

  const playIcon = document.createElement("ion-icon");
  playIcon.setAttribute("size", "medium");
  playIcon.setAttribute("style", "background-color: #1ED760;");
  playIcon.className = "p-2 rounded-circle";
  playIcon.setAttribute("name", "play-sharp");
  innerContainer.appendChild(playIcon);

  const followingLink = document.createElement("a");
  followingLink.href = "#";
  followingLink.className = "following btn border-white text-white fw-bold";
  followingLink.textContent = "FOLLOWING";
  innerContainer.appendChild(followingLink);

  const ellipsisIcon = document.createElement("ion-icon");
  ellipsisIcon.setAttribute("name", "ellipsis-horizontal");
  innerContainer.appendChild(ellipsisIcon);

  musicCardContainer.appendChild(containerDoom);

  const rowDiv = document.createElement("div");
  rowDiv.className = "row pt-3 gap-3";
  containerDoom.appendChild(rowDiv);

  const col7Div = document.createElement("div");
  col7Div.className = "div_scroll col-12 col-md-7 hidden";
  col7Div.style.height = "50vh";
  rowDiv.appendChild(col7Div);

  const popolariTitle = document.createElement("h5");
  popolariTitle.textContent = "Popolari";
  col7Div.appendChild(popolariTitle);
  const trackList = document.createElement("ul");
  trackList.className = "track-list d-flex flex-column gap-3";
  col7Div.appendChild(trackList);

  const col5Div = document.createElement("div");
  col5Div.className = "col-4 d-none d-md-block";
  rowDiv.appendChild(col5Div);

  const piaccionoTitle = document.createElement("h5");
  piaccionoTitle.textContent = "Brani che ti piacciono";
  col5Div.appendChild(piaccionoTitle);

  const innerRowDiv = document.createElement("div");
  innerRowDiv.className = "row align-items-center";
  col5Div.appendChild(innerRowDiv);

  const col3Div = document.createElement("div");
  col3Div.className = "col-3";
  innerRowDiv.appendChild(col3Div);

  const image = document.createElement("img");
  image.className = "w-100 rounded-circle";
  image.src = `${artistImg}`;
  image.alt = "";
  col3Div.appendChild(image);

  const col9Div = document.createElement("div");
  col9Div.className = "col-9";
  innerRowDiv.appendChild(col9Div);

  const miPiaceParagraph = document.createElement("p");
  miPiaceParagraph.className = "m-0 ps-2";
  miPiaceParagraph.textContent = "Hai messo Mi piace a brani";
  col9Div.appendChild(miPiaceParagraph);

  const yellowcardParagraph = document.createElement("p");
  yellowcardParagraph.className = "m-0 ps-2";
  yellowcardParagraph.textContent = `Di ${artist}`;
  col9Div.appendChild(yellowcardParagraph);

  innerRowDiv.appendChild(col9Div);

  musicCardContainer.appendChild(containerDoom);
  container.appendChild(containerDoom);
};

const createTracksSection = (
  song_title,
  album_cover,
  rank,
  duration,
  container
) => {
  const trackList = document.querySelector(".track-list");

  const trackItem = document.createElement("li");

  const trackDetails = document.createElement("div");
  trackDetails.className =
    "row w-auto justify-content-between align-items-center";

  const col6Div = document.createElement("div");
  col6Div.className = "col-8 col-sm-7";

  const flexDiv = document.createElement("div");
  flexDiv.className = "d-flex align-items-center";

  const trackImage = document.createElement("img");
  trackImage.className = "w-50";
  trackImage.src = `${album_cover}`;
  trackImage.alt = "";

  const trackTitle = document.createElement("h6");
  trackTitle.className = "mb-0 ps-2";
  trackTitle.textContent = `${song_title}`;

  flexDiv.appendChild(trackImage);
  flexDiv.appendChild(trackTitle);

  col6Div.appendChild(flexDiv);

  const col4Div = document.createElement("div");
  col4Div.className = "d-none d-sm-block col-3";
  col4Div.textContent = `${rank}`;

  const col2Div = document.createElement("div");
  col2Div.className = "col-2";
  col2Div.textContent = `${duration}`;

  trackDetails.appendChild(col6Div);
  trackDetails.appendChild(col4Div);
  trackDetails.appendChild(col2Div);

  trackItem.appendChild(trackDetails);

  container.appendChild(trackItem);
};

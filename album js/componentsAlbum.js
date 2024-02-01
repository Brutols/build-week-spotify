export const createJumbotron = (
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

  const jumboControls = document.createElement("div");
  jumboControls.className =
    "jumbotron_controls d-flex justify-content-between align-items-center py-3";
  jumbotron.appendChild(jumboControls);

  const controlsBtns = document.createElement("div");
  controlsBtns.className = "controls_btns";
  jumboControls.appendChild(controlsBtns);

  const back = document.createElement("ion-icon");
  back.setAttribute("name", "chevron-back-circle-sharp");
  const next = document.createElement("ion-icon");
  next.setAttribute("name", "chevron-forward-circle-sharp");
  controlsBtns.appendChild(back);
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

  const jumbotronMain = document.createElement("div");
  jumbotronMain.className = "jumbotron_main d-flex";
  jumbotron.appendChild(jumbotronMain);

  const albumCover = document.createElement("img");
  albumCover.src = cover;
  albumCover.alt = "album Cover";
  jumbotronMain.appendChild(albumCover);

  const jumbotronText = document.createElement("div");
  jumbotronText.className = "jumbotron_text";
  jumbotronMain.appendChild(jumbotronText);

  const albumWord = document.createElement("h6");
  albumWord.className = "m-0";
  albumWord.textContent = "ALBUM";
  jumbotronText.appendChild(albumWord);

  const albumTitle = document.createElement("h1");
  albumTitle.className = "text-truncate";
  albumTitle.textContent = title;
  jumbotronText.appendChild(albumTitle);

  const albumArtist = document.createElement("div");
  albumArtist.className = "album_artist d-flex align-items-center gap-1";
  jumbotronText.appendChild(albumArtist);

  const artistPic = document.createElement("img");
  artistPic.src = artistImg;
  artistPic.alt = "Artist";
  albumArtist.appendChild(artistPic);

  const artistInfo = document.createElement("h6");
  artistInfo.className = "m-0 text-truncate";
  albumArtist.appendChild(artistInfo);

  const spanA = document.createElement("span");
  artistInfo.appendChild(spanA);

  const link = document.createElement("a");
  link.id = artistId;
  link.href = `./artist.html?id=${artistId}`;
  link.textContent = artist;
  spanA.appendChild(link);

  const spanB = document.createElement("span");
  spanB.textContent = ` - ${ntracks} brani, `;
  artistInfo.appendChild(spanB);

  const spanC = document.createElement("span");
  spanC.textContent = `${duration}min`;
  artistInfo.appendChild(spanC);

  container.appendChild(jumbotron);
};

export const createTracksSection = (container) => {
  const tracks = document.createElement("div");
  tracks.className = "tracks d-flex flex-column";

  const tracksControls = document.createElement("div");
  tracksControls.className = "tracks_controls d-flex gap-3";
  tracks.appendChild(tracksControls);

  const iconPlay = document.createElement("ion-icon");
  iconPlay.setAttribute("name", "play-sharp");
  iconPlay.className = "icon_play";
  tracksControls.appendChild(iconPlay);
  const iconHeart = document.createElement("ion-icon");
  iconHeart.setAttribute("name", "heart-outline");
  tracksControls.appendChild(iconHeart);
  const iconArrow = document.createElement("ion-icon");
  iconArrow.setAttribute("name", "arrow-down-circle-outline");
  tracksControls.appendChild(iconArrow);
  const iconDots = document.createElement("ion-icon");
  iconDots.setAttribute("name", "ellipsis-horizontal");
  tracksControls.appendChild(iconDots);

  const trackSections = document.createElement("div");
  trackSections.className = "tracks_sections row";
  tracks.appendChild(trackSections);

  const hash = document.createElement("div");
  hash.className = "# col-1";
  hash.textContent = "#";
  trackSections.appendChild(hash);

  const titles = document.createElement("div");
  titles.className = "col-7 d-flex justify-content-between";
  trackSections.appendChild(titles);

  const titlesTitol = document.createElement("h6");
  titlesTitol.textContent = "TITLE";
  titles.appendChild(titlesTitol);

  const titlesPlays = document.createElement("h6");
  titlesPlays.textContent = "RANK";
  titles.appendChild(titlesPlays);

  const titlesIcon = document.createElement("div");
  titlesIcon.className = "col-4 d-flex justify-content-end";
  trackSections.appendChild(titlesIcon);

  const iconSvg = document.createElement("ion-icon");
  iconSvg.setAttribute("name", "time-outline");
  titlesIcon.appendChild(iconSvg);

  const tracksList = document.createElement("div");
  tracksList.className = "tracks_list d-flex flex-column gap-1";
  tracks.appendChild(tracksList);

  container.appendChild(tracks);
};

export const createTrack = (
  ntrack,
  title,
  artist,
  rank,
  duration,
  container
) => {
  const track = document.createElement("div");
  track.className = "track row align-items-center";

  const trackN = document.createElement("div");
  trackN.className = "track_number col-1";
  trackN.textContent = ntrack;
  track.appendChild(trackN);

  const trackInfo = document.createElement("div");
  trackInfo.className =
    "col-7 d-flex justify-content-between align-items-center";
  track.appendChild(trackInfo);

  const trackName = document.createElement("div");
  trackName.className = "track_name";
  trackInfo.appendChild(trackName);

  const trackTitle = document.createElement("h6");
  trackTitle.className = "track_title m-0";
  trackTitle.textContent = title;
  trackName.appendChild(trackTitle);

  const trackArtist = document.createElement("p");
  trackArtist.className = "track_artist m-0";
  trackArtist.textContent = artist;
  trackName.appendChild(trackArtist);

  const trackRank = document.createElement("h6");
  trackRank.className = "track_plays m-0";
  trackRank.textContent = rank;
  trackInfo.appendChild(trackRank);

  const trackDuration = document.createElement("div");
  trackDuration.className = "col-4 d-flex justify-content-end track_duration";
  trackDuration.textContent = duration;
  track.appendChild(trackDuration);

  const trackDurationAlt = document.createElement("div");
  trackDurationAlt.className =
    "col-4 d-flex justify-content-end track_duration track_duration_alt d-none";
  const altIcon = document.createElement("ion-icon");
  altIcon.setAttribute("name", "ellipsis-vertical");
  trackDurationAlt.appendChild(altIcon);
  track.appendChild(trackDurationAlt);

  container.appendChild(track);
};

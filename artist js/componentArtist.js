export {createJumbotron};

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
    jumbotron.style.backgroundSize = "contain";
    jumbotron.style.backgroundImage = "url('https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg')";


    const jumboControls = document.createElement("div");
    jumboControls.className = "jumbotron_controls d-flex justify-content-between align-items-center py-3";
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
    profile.className = "controls_profile d-flex align-items-center justify-content-center gap-1";
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
    titolo.textContent = "Yellowcard";
    jumbotron.appendChild(titolo);


    const listeners = document.createElement("h6");
    listeners.textContent = "3.433.158 ascoltatori mensili";
    jumbotron.appendChild(listeners);


    container.appendChild(jumbotron);

};
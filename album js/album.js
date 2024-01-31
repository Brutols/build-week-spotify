import { fetchRequest } from "./fetchAlbum.js";
import * as constant from "./constant.js";
import {
  createJumbotron,
  createTrack,
  createTracksSection,
} from "./componentsAlbum.js";
import { calcDuration } from "./helper.js";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const initAlbum = async () => {
  const res = await fetchRequest({ url: constant.URL, id: id });
  console.log(res);

  createJumbotron(
    res.cover_medium,
    res.title,
    res.artist.picture_small,
    res.artist.name,
    res.artist.id,
    res.nb_tracks,
    calcDuration(res.duration),
    constant.centerSection
  );

  createTracksSection(constant.centerSection);

  const trackWrapper = document.querySelector(".tracks_list");

  const tracksArr = res.tracks.data;
  tracksArr.forEach((el, index) => {
    const trackNumber = index + 1;
    createTrack(
      trackNumber,
      el.title,
      el.artist.name,
      el.rank,
      calcDuration(el.duration),
      trackWrapper
    );
  });
};

document.addEventListener("DOMContentLoaded", initAlbum());

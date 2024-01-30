export const fetchRequest = async ({ url, id = "" }) => {
  try {
    const resp = await fetch(url + id);
    const json = await resp.json();
    return json;
  } catch (error) {
    alert(`error: ${error}`);
  }
};

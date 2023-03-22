export const GetGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=wUILR29K4kDvNSAqLq96gqEmKlDyzXAJ&q=${category}&limit=5`;
  const rpta = await fetch(url);
  const { data } = await rpta.json();
  const gifs = data.map((Image) => ({
    id: Image.id,
    title: Image.title,
    url: Image.images.downsized_medium.url,
  }));
  return gifs;
};

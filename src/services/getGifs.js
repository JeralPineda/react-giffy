const apiKey = 'yfxK1j1iSVjkUj0lGKX2RKL8Oqyu0svM';

export const getGif = async ({ keyword = 'One Piece' } = {}) => {
   const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

   const resp = await fetch(apiUrl);

   const { data } = await resp.json();

   const gifs = data.map((img) => {
      const { title, id } = img;
      const { url } = img.images.downsized_medium;

      return {
         title,
         id,
         url,
      };
   });

   return gifs;
};

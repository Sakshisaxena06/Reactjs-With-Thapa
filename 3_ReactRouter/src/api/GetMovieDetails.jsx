export const getMoviesDetails = async ({ params }) => {
  try {
    const id = params.movieId;
    console.log(params);

    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );

    const data = await response.json();   // ← FIXED
    return data;
  } catch (error) {
    console.log(error);
    return null;  // prevent undefined return
  }
};

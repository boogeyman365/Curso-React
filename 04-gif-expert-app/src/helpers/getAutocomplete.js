export const getAutocomplete = async( category ) => {
  const apiKey = 'brtGMWPFf7QixzITLnJpGAhoIKRBmLsq';
  const url = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${category}&limit=10`;
  const resp = await fetch( url );

  const data = await resp.json();
  console.log('data: ', data);
  // const search = data.map(search => ({
  //   name: search.name
  // }))

  // console.log(gifs);
  return data;
}
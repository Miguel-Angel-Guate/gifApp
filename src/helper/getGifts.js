export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category)}&limit=10&api_key=kvqnu1GdfYbCClVChQNgvfsoGs0of9TR`
    const resp =  await fetch(url);
    const {data} = await resp.json()
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
    // console.log(gifs);
    // setImages(gifs)
}
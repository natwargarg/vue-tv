export const smoothScroll = (cb, delay, repetitions) => {
  let x = 0;
  const intervalID = setInterval(function () {
    cb();
    if (++x === repetitions) {
      clearInterval(intervalID);
    }
  }, delay);
};

export const todayDate = () => 
'2021-12-01' // using this date as it has few shows rating above 5, to show popular show list
// new Date().toISOString().split('T')[0] // use this to get today's date

export const filterShowsByGenres = (genres, filterShows) =>{
  if (genres && genres?.length > 0) {
    filterShows = filterShows?.filter((shows) =>
      shows?.show?.genres.some((item) => genres?.includes(item))
    );
  }
  return filterShows;
}

export const filterShowsByRating = (rating, filterShows) => {
  if(rating && rating > 0 ){
    filterShows = filterShows?.filter((shows) => {
      return (shows?.rating?.average >= rating);
    })
  }
  return filterShows;
}
import { Api } from "./Api";
/*
    Shows
        URL: /shows/:id
        Example: https://api.tvmaze.com/shows/1
        Example: https://api.tvmaze.com/shows/1?embed=cast

    Show episode list
        URL: /shows/:id/episodes
        (optional) specials: do include both significant and insignificant specials in the list
        Example: https://api.tvmaze.com/shows/1/episodes
        Example: https://api.tvmaze.com/shows/1/episodes?specials=1

    Show alternate lists
        URL: /shows/:id/alternatelists
        Example: https://api.tvmaze.com/shows/180/alternatelists
        URL: /alternatelists/:id
        Example: https://api.tvmaze.com/alternatelists/1
        Example: https://api.tvmaze.com/alternatelists/1?embed=alternateepisodes
        URL: /alternatelists/:id/alternateepisodes
        Example: https://api.tvmaze.com/alternatelists/1/alternateepisodes
        Example: https://api.tvmaze.com/alternatelists/1/alternateepisodes?embed=episodes

    Episode by number
        URL: /shows/:id/episodebynumber?season=:season&number=:number
        season: a season number
        number: an episode number
        Example: https://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1

    Episodes by date
        URL: /shows/:id/episodesbydate?date=:date
        date: an ISO 8601 formatted date
        Example: https://api.tvmaze.com/shows/1/episodesbydate?date=2013-07-01

    Show seasons
        URL: /shows/:id/seasons
        Example: https://api.tvmaze.com/shows/1/seasons

    Season episodes
        URL: /seasons/:id/episodes
        Example: https://api.tvmaze.com/seasons/1/episodes

    Show cast
        URL: /shows/:id/cast
        Example: https://api.tvmaze.com/shows/1/cast
    
    Show crew
        URL: /shows/:id/crew
        Example: https://api.tvmaze.com/shows/1/crew
    
    Show AKA's
        URL: /shows/:id/akas
        Example: https://api.tvmaze.com/shows/1/akas
    
    Show images
        URL: /shows/:id/images
        Example: https://api.tvmaze.com/shows/1/images
    
    Show index
        URL: /shows?page=:num
        Example: https://api.tvmaze.com/shows
        Example: https://api.tvmaze.com/shows?page=1
*/

const END_POINT_SHOW = "/shows";


export default {

    // Example: https://api.tvmaze.com/shows/1
    // Example: https://api.tvmaze.com/shows/1?embed=cast

    byId(showId) {
      return Api.get(`${END_POINT_SHOW}/${showId}`);
    },
    embedCast(showId) {
        return Api.get(`${END_POINT_SHOW}/${showId}?embed=cast`);
    },
    episodeList(showId) {
        return Api.get(`${END_POINT_SHOW}/${showId}/episodes`);
    },
    alternateList(showId) {
        return Api.get(`${END_POINT_SHOW}/${showId}/alternatelists`);
    },
    episodeByNumber(showId, season, number) {
        return Api.get(`${END_POINT_SHOW}/${showId}/episodebynumber?season=${season}&number=${number}`);
    },
    episodesByDate(showId, date) {
        return Api.get(`${END_POINT_SHOW}/${showId}/episodesbydate?date=${date}`);
    },

/*
        Show seasons
        Season episodes
        Show cast
        Show crew
        Show AKA's
        Show images
        Show index
*/

  };


  
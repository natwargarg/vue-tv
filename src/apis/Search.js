import { Api } from "./Api";

/*
    ************ Search API Endpoints *********** 
    1. Show search
        URL: /search/shows?q=:query
        Example: https://api.tvmaze.com/search/shows?q=girls

    2. Show single search
        URL: /singlesearch/shows?q=:query
        Example: https://api.tvmaze.com/singlesearch/shows?q=girls
        Example: https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes

    3. Show Lookup
        URL: /lookup/shows?tvrage=:id or /lookup/shows?thetvdb=:id
        Example: https://api.tvmaze.com/lookup/shows?tvrage=24493
        Example: https://api.tvmaze.com/lookup/shows?thetvdb=81189
        Example: https://api.tvmaze.com/lookup/shows?imdb=tt0944947

    4. People search
        URL: /search/people?q=:query
        Example: https://api.tvmaze.com/search/people?q=lauren
*/

const END_POINT_SHOW_SEARCH = "/search/shows";
const END_POINT_SHOW_SINGLE_SEARCH = "/singlesearch/shows";
const END_POINT_SHOW_LOOKUP = "/lookup/shows";
const END_POINT_PEOPLE_SEARCH = "/search/people";

export default {
  show(query) {
    return Api.get(`${END_POINT_SHOW_SEARCH}?q=${query}`);
  },
  showSingle(query) {
    return Api.get(`${END_POINT_SHOW_SINGLE_SEARCH}?q=${query}`);
  },
  showLookup(id) {
    return Api.get(`${END_POINT_SHOW_LOOKUP}/?tvrage=${id}`);
  },
  people(query) {
    return Api.get(`${END_POINT_PEOPLE_SEARCH}?q=${query}`);
  },
};

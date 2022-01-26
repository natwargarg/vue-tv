import { Api } from "./Api";
/*
    Show updates

        URL: /updates/shows
        Example: https://api.tvmaze.com/updates/shows
        Example: https://api.tvmaze.com/updates/shows?since=day
        Example: https://api.tvmaze.com/updates/shows?since=week
        Example: https://api.tvmaze.com/updates/shows?since=month
        
    Person updates
    
        URL: /updates/people
        Example: https://api.tvmaze.com/updates/people
        Example: https://api.tvmaze.com/updates/people?since=day
        Example: https://api.tvmaze.com/updates/people?since=week
        Example: https://api.tvmaze.com/updates/people?since=month
*/

const END_POINT_SHOW_UPDATES = "/updates/shows";
const END_POINT_PERSON_UPDATES = "/updates/people";

export default {
  showUpdates(query) {
    return Api.get(`${END_POINT_SHOW_UPDATES}?q=${query}`);
  },
  showUpdatesBySince(dayOrWeekOrMonth) {
    return Api.get(`${END_POINT_SHOW_UPDATES}?since=${dayOrWeekOrMonth}`);
  },
  personUpdates(query) {
    return Api.get(`${END_POINT_PERSON_UPDATES}?q=${query}`);
  },
  personUpdatesBySince(dayOrWeekOrMonth) {
    return Api.get(`${END_POINT_PERSON_UPDATES}?since=${dayOrWeekOrMonth}`);
  },
};

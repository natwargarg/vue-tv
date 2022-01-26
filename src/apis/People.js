import { Api } from "./Api";
/*
People
    Person main information
        URL: /people/:id
        Example: https://api.tvmaze.com/people/1
        Example: https://api.tvmaze.com/people/1?embed=castcredits

    Person cast credits
        URL: /people/:id/castcredits
        Example: https://api.tvmaze.com/people/1/castcredits
        Example: https://api.tvmaze.com/people/1/castcredits?embed=show

    Person crew credits
        URL: /people/:id/crewcredits
        Example: https://api.tvmaze.com/people/100/crewcredits
        Example: https://api.tvmaze.com/people/100/crewcredits?embed=show

    Person index
    URL: /people?page=:num
    Example: https://api.tvmaze.com/people
*/

const END_POINT_PERSON = "/people";

export default {
  all() {
    return Api.get(`${END_POINT_PERSON}`);
  },

  byPageNumber(page_number) {
    return Api.get(`${END_POINT_PERSON}?page=${page_number}`);
  },

  byId(peopleId) {
    return Api.get(`${END_POINT_PERSON}/${peopleId}`);
  },

  embededCastcredits(peopleId) {
    return Api.get(`${END_POINT_PERSON}/${peopleId}?embed=castcredits`);
  },

  castcredits(peopleId) {
    return Api.get(`${END_POINT_PERSON}/${peopleId}/castcredits`);
  },

  castcreditsEmbededShow(peopleId) {
    return Api.get(`${END_POINT_PERSON}/${peopleId}/castcredits?embed=show`);
  },

  crewcredits(id) {
    return Api.get(`${END_POINT_PERSON}/${id}/crewcredits`);
  },

  crewcreditsEmbeded_show(id) {
    return Api.get(`${END_POINT_PERSON}/${id}/crewcredits?embed=show`);
  },
};

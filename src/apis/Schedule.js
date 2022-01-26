import { Api } from "./Api";
/*
    1. Schedule by country and date
        URL: /schedule?country=:countrycode&date=:date
        (optional) countrycode: an ISO 3166-1 code of the country; defaults to US
        (optional) date: an ISO 8601 formatted date; defaults to the current day
        Example: https://api.tvmaze.com/schedule?country=US&date=2014-12-01
        Example: https://api.tvmaze.com/schedule

    2. Web/streaming schedule
        URL: /schedule/web?country=:countrycode&date=:date
        (optional) countrycode: an ISO 3166-1 code of the country
        (optional) date: an ISO 8601 formatted date; defaults to the current day
        Example: https://api.tvmaze.com/schedule/web?date=2020-05-29
        Example: https://api.tvmaze.com/schedule/web?date=2020-05-29&country=
        Example: https://api.tvmaze.com/schedule/web?date=2020-05-29&country=US

    3. Full schedule
        URL: /schedule/full
        Example: https://api.tvmaze.com/schedule/full

*/
const END_POINT_SCHEDULE = "/schedule";
const END_POINT_SCHEDULE_WEB_STREAMING = "/schedule/web";
const END_POINT_SCHEDULE_FULL = "/schedule/full";


export default {
  byCountryAndDate(countrycode, date) {
    return Api.get(`${END_POINT_SCHEDULE}?country=${countrycode}&date=${date}`);
  },
  webAndStreaming(countrycode, date) {
    return Api.get(
      `${END_POINT_SCHEDULE_WEB_STREAMING}?country=${countrycode}&date=${date}`
    );
  },
  full() {
    //return Api.get('/schedule?country=US&date=2014-12-01');
    return Api.get(`${END_POINT_SCHEDULE_FULL}`);
  },
};

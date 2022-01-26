import Schedule from "../apis/Schedule";
import Search from "../apis/Search";
import Shows from "../apis/Shows";
import {todayDate} from "../utils"

export const getFullSchedule = ({ commit }) => {
    Schedule.full().then(response => {
        commit('SET_SHOWS', response.data);
    })
}

export const getTodayShowByCountry = ({ commit }, countrycode) => {
    commit('SET_SEARCH_QUERY', '');
    Schedule.byCountryAndDate(countrycode, todayDate()).then(response => {
        commit('SET_SHOWS', response.data);
    })
}

export const getShow = ({ commit }, showId) => {
    Shows.byId(showId).then(response => {
        commit('SET_SHOW', response.data);
    })
}

export const setShow = ({ commit }, show) => {
    // Shows.byId(showId).then(response => {
        commit('SET_SHOW', show);
    // })
}

export const getShowBySearch = ({ commit }, searchQuery) => {
    commit('SET_SEARCH_QUERY', searchQuery);
    Search.show(searchQuery).then(response => {
        commit('SET_SHOWS', response.data);
    })
}



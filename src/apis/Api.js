import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.tvmaze.com",
});

/*
******** TV shows API availeble on http://www.tvmaze.com/api)********
    Search
        Show Search
        Show single search
        Show Lookup
        People search
    Schedule
        Web/Streaming Schedule
        Full Schedule
    Shows
        Show main information
        Show episode list
        Show alternate lists
        Episode by number
        Episodes by date
        Show seasons
        Season episodes
        Show cast
        Show crew
        Show AKA's
        Show images
        Show index
    Episodes
        Episode main information
    People
        Person main information
        Person cast credits
        Person crew credits
        Person index
    Updates
        Show updates
        Person updates

*/


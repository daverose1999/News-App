import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
const axios = require("axios");

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    country: "us",
    favourite: "technology",
    mainHeadlines: { articles: {}, fetched: false },
    news: {
      crypto: { articles: [], fetched: false, recentPage: 0, totalResults: 0 },
      sports: { articles: [], fetched: false, recentPage: 0, totalResults: 0 },
      technology: {
        articles: [],
        fetched: false,
        recentPage: 0,
        totalResults: 0,
      },
      entertainment: {
        articles: [],
        fetched: false,
        recentPage: 0,
        totalResults: 0,
      },
      science: {
        articles: [],
        fetched: false,
        recentPage: 0,
        totalResults: 0,
      },
      health: {
        articles: [],
        fetched: false,
        recentPage: 0,
        totalResults: 0,
      },
    },
  },
  getters: {
    country: (state) => {
      return state.country;
    },
    mainHeadlines: (state) => {
      return state.mainHeadlines.articles;
    },
    headlines: (state) => (category) => {
      return state.news[category].articles;
    },
    recentPage: (state) => (category) => {
      return state.news[category].recentPage;
    },
    totalResults: (state) => (category) => {
      return state.news[category].totalResults;
    },
  },
  mutations: {
    POPULATE_MAIN_HEADLINES(state, { category, articles }) {
      state.mainHeadlines.articles[category] = articles;
      state.mainHeadlines.fetched = true;
    },
    POPULATE_NEWS(state, { category, articles }) {
      state.news[category].articles = articles;
      state.news[category].fetched = true;
      state.news[category].recentPage = 1;
    },
    // GET_MORE_HEADLINES(){}
  },
  actions: {
    fetchMainHeadlines({ state, commit }) {
      if (state.mainHeadlines.fetched) {
        return;
      }
      Promise.all([
        // fave category
        axios.get(
          `https://newsapi.org/v2/top-headlines?country=${state.country}&category=${state.favourite}&pageSize=6&apiKey=${process.env.VUE_APP_API_KEY}`
        ),
        // general
        axios.get(
          `https://newsapi.org/v2/top-headlines?country=${state.country}&category=general&pageSize=4&apiKey=${process.env.VUE_APP_API_KEY}`
        ),
      ]).then((response) => {
        let [favouriteResp, generalResp] = response;
        console.log(response);
        if (favouriteResp.status === 200) {
          commit("POPULATE_MAIN_HEADLINES", {
            category: "favourite",
            articles: favouriteResp.data.articles,
          });
        }
        if (generalResp.status === 200) {
          commit("POPULATE_MAIN_HEADLINES", {
            category: "general",
            articles: generalResp.data.articles,
          });
        }
      });
    },
    async fetchHeadlines({ state, commit }, payload) {
      if (state.news[payload].fetched) {
        return;
      }
      const instance = axios.create({
        baseURL: `https://newsapi.org/v2/top-headlines`,
        params: { country: state.country, category: payload },
        headers: { "X-Api-Key": process.env.VUE_APP_API_KEY },
      });
      console.log("fetchinggggg", payload);
      try {
        const response = await instance.get();
        if (response.status === 200) {
          commit("POPULATE_NEWS", {
            category: payload,
            results: response.data.totalResults,
            articles: response.data.articles,
          });

          console.log("SUCCESSFUL");
        }
      } catch (error) {
        console.error(error);
      }
    },
    // async searchHeadlines({ state, commit }, payload) {},
    // async fetchNextPage(){}
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});

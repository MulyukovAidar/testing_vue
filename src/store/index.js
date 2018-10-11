import Vue from 'vue'
import Vuex from 'vuex'
import { Note } from '../api/notes'
import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  SET_ARTICLES,
  ADD_USER,
  REMOVE_USER
} from './mutation-types.js'

Vue.use(Vuex)

// Состояние
const state = {
  articles: [],
  trending: [],
  user: {}
}

// Геттеры
const getters = {
  articles: state => state.articles,
  trending: state => state.trending,
  user: state => state.user
}

// Мутации
const mutations = {
  // Добавляем заметку в список
  [ADD_ARTICLE] (state, article) {
    state.articles = [article, ...state.articles]
  },
  // Убираем заметку из списка
  [REMOVE_ARTICLE] (state, { id }) {
    state.articles = state.articles.filter(article => {
      return article.id !== id
    })
  },
  // Задаем список заметок
  [SET_ARTICLES] (state, { articles }) {
    state.articles = articles
  },
  [ADD_USER] (state, user) {
    state.user = user
  },
  [REMOVE_USER] (state) {
    state.user = {}
  }
  // Добавляем заметку в список
  // [ADD_TRENDING] (state, article) {
  //   state.trending = [article, ...state.trending]
  // },
  // // Убираем заметку из списка
  // [REMOVE_TRENDING] (state, { id }) {
  //   state.trending = state.trending.filter(trending => {
  //     return trending.id !== id
  //   })
  // },
  // // Задаем список заметок
  // [SET_ARTICLES] (state, { trending }) {
  //   state.trending = trending
  // }
}

// Действия
const actions = {
  createNote ({ commit }, noteData) {
    Note.create(noteData).then(note => {
      commit(ADD_ARTICLE, note)
    })
  },
  deleteNote ({ commit }, note) {
    Note.delete(note).then(response => {
      commit(REMOVE_ARTICLE, note)
    })
  },
  getNotes ({ commit }) {
    Note.list().then(articles => {
      commit(SET_ARTICLES, { articles: articles })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

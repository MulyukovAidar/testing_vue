import { HTTP } from './common'

export const Article = {
  create (config) {
    return HTTP.post('api/v1/articles/', config).then(response => {
      return response.data
    })
  },
  delete (note) {
    return HTTP.delete(`api/v1/articles/${note.id}/`)
  },
  list () {
    return HTTP.get('api/v1/articles/').then(response => {
      return response.data
    })
  }
}

export const User = {
  login (config) {
    return HTTP.post('/login/', config).then(response => {
      return response.data
    })
  },
  logout () {
    return HTTP.delete(`/logout/`)
  },
  register(user) {
    return HTTP.post('/register/')
  }
}

import axios from 'axios'

const GET_GUITARISTS = 'GET_GUITARISTS'
const GET_SONGS = 'GET_SONGS'
const TOGGLE_FETCH = 'TOGGLE_FETCH'
const CHANGE_VIEW = 'CHANGE_VIEW'

/*
  action creators
*/

const getGuitaristsAction = guitarists => {
  return {
    type: GET_GUITARISTS,
    guitarists
  }
}
const getSongsAction = songs => {
  return {
    type: GET_SONGS,
    songs
  }
}
const setFetchAction = fetching => {
  return {
    type: TOGGLE_FETCH,
    fetching
  }
}
export const setViewAction = view => {
  return {
    type: CHANGE_VIEW,
    view
  }
}

/*
  thunk creators
*/

export const getGuitaristsThunk = () => {
  return dispatch => {
    dispatch(setFetchAction(true))
    axios.get('/api/guitarists').then(res => {
      dispatch(getGuitaristsAction(res.data))
      dispatch(setFetchAction(false))
    })
  }
}
export const getSongsThunk = searchParams => {
  return dispatch => {
    dispatch(setFetchAction(true))
    axios.post('/api/songs', searchParams).then(res => {
      dispatch(getSongsAction(res.data))
      dispatch(setFetchAction(false))
    })
  }
}

const initialState = {
  guitarists: [],
  songs: [],
  results: false,
  isFetching: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GUITARISTS:
      return {...state, guitarists: action.guitarists}
    case GET_SONGS:
      return {...state, songs: action.songs}
    case CHANGE_VIEW:
      return {...state, results: action.view}
    case TOGGLE_FETCH:
      return {...state, isFetching: action.fetching}
    default:
      return state
  }
}

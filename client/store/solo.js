import axios from 'axios'

const GET_GUITARISTS = 'GET_GUITARISTS'
const GET_SONGS = 'GET_SONGS'
const TOGGLE_FETCH = 'TOGGLE_FETCH'

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
const toggleFetchAction = () => {
  return {
    type: TOGGLE_FETCH
  }
}

/*
  thunk creators
*/

export const getGuitaristsThunk = () => {
  return dispatch => {
    axios.get('/api/guitarists').then(res => {
      dispatch(getGuitaristsAction(res.data))
      dispatch(toggleFetchAction())
    })
  }
}

const initialState = {
  guitarists: [],
  songs: [],
  isFetching: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GUITARISTS:
      return {...state, guitarists: action.guitarists}
    case GET_SONGS:
      return {...state, songs: action.songs}
    case TOGGLE_FETCH:
      return {...state, isFetching: false}
    default:
      return state
  }
}

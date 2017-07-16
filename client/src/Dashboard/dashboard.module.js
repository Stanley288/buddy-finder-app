// ------------------------------------
// Constants
// ------------------------------------
const SAVE_PLACES = 'SAVE_PLACES'

// ------------------------------------
// Actions
// ------------------------------------
export const savePlaces = places => ({
  type: SAVE_PLACES,
  places,
})

export const actions = {
  savePlaces,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SAVE_PLACES]: (state, { places }) => ({
    ...state,
    places,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// ------------------------------------
// Constants
// ------------------------------------
const SAVE_USER = 'SAVE_USER'

// ------------------------------------
// Actions
// ------------------------------------
export const saveUser = email => ({
  type: SAVE_USER,
  email,
})

export const actions = {
  saveUser,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SAVE_USER]: (state, { email }) => ({
    ...state,
    email,
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

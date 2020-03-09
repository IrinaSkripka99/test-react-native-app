import { ACTION_SET_EMAIL, ACTION_SET_PASSWORD } from '../../screens/SignIn'

const initialState = {
  email: '',
  password: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_EMAIL:
      return { ...state, email: action.payload }
    case ACTION_SET_PASSWORD:
      return { ...state, password: action.payload }
  }
  return state;
}
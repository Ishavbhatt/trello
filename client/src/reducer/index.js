import { GET_USER } from "../action/types";

const initialState = {
  user: [],
};

export default function reducer(state = initialState, action) {
  switch (action) {
    case GET_USER:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return { ...state };
  }
}

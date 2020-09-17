import {
  GET_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  MEMBERS_ERROR,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  members: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
        loading: false,
      };
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload],
        loading: false,
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };
    case MEMBERS_ERROR:
      return {
        ...state,
        members: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

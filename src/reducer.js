export default function reducer(state, action) {
  if (!state) {
    return null;
  }

  switch (action.type) {
    case "UPDATE_USER_CONNECTED": {
      return { ...state, userConnected: action.value };
    }
    default:
      return state;
  }
}

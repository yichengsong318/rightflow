export default function reducer(state, action) {
  if (!state) {
    return null;
  }

  switch (action.type) {
    case "UPDATE_USER_IS_CONNECTED": {
      return { ...state, userIsConnected: action.value };
    }
    case "UPDATE_USER_INFO": {
      return { ...state, userInfo: action.value };
    }
    case "UPDATE_SOCKET_INSTANCE": {
      return { ...state, socketIoInstance: action.value };
    }
    case "UPDATE_USER_FULLNAME": {
      return { ...state, userFullName: action.value };
    }
    case "UPDATE_VIEW_ONBOARDING": {
      return { ...state, viewOnbording: action.value };
    }
    default:
      return state;
  }
}

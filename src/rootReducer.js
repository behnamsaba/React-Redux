const INITIAL_STATE = {data: []};

function rootReducer2(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CREATE":
      return {...state , data: [...state.data, action.payload]};

    case "REMOVE":
      return {data : state.data.filter(obj => (obj.top !== action.payload))};

    default:
      return state;
  }
}

export default rootReducer2;


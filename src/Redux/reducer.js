import { actionConstants } from "./action";

const auth = false;

export function reducer(state = auth, action) {
  switch (action.type) {
    case actionConstants.AUTH: {
      return {
        state
      };
    }
    default: {
      return {
        auth
      };
    }
  }
}

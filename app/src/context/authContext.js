import createDataContext from "./createDataContext";
import trackerApi from "../services/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const { data } = await trackerApi.post("/signup", { email, password });
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup },
  { isSignedIn: false }
);

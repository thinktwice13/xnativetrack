import createDataContext from "./createDataContext";
import trackerApi from "../services/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  console.log({ action });
  const { type, payload } = action;
  switch (type) {
    case "add_error":
      return { ...state, errorMessage: payload };
    case "signup":
      return { ...state, token: payload, errorMessage: null };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }, vb) => {
  try {
    const { data } = await trackerApi.post("/signup", { email, password });
    console.log({ data });
    await AsyncStorage.setItem("token", data.token);
    dispatch({
      type: "signup",
      payload: data.token,
    });

    navigate("TrackList");
  } catch (error) {
    console.log({ error });

    dispatch({
      type: "add_error",
      payload: "Something went wrong with signup",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup },
  { token: null, errorMessage: null }
);

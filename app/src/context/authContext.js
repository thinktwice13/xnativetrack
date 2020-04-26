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
    case "signin":
      return { ...state, token: payload, errorMessage: null };
    default:
      return state;
  }
};

const signin = (dispatch) => async ({ email, password }, vb) => {
  try {
    const { data } = await trackerApi.post("/signin", { email, password });
    console.log({ data });
    await AsyncStorage.setItem("token", data.token);
    dispatch({
      type: "signin",
      payload: data.token,
    });

    navigate("TrackList");
  } catch (error) {
    console.log({ error });

    dispatch({
      type: "add_error",
      payload: "Something went wrong with signin",
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin },
  { token: null, errorMessage: null }
);

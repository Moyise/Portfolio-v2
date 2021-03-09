import axios from "axios";
import {
  FORM_SEND_FAIL,
  FORM_SEND_REQUEST,
  FORM_SEND_SUCCESS,
} from "../constants/formConstants";

export const formAction = (
  name: string,
  subject: string,
  email: string,
  message: string
) => async (dispatch: any) => {
  try {
    dispatch({
      type: FORM_SEND_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/", { name, subject, email, message }, config);

    dispatch({
      type: FORM_SEND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_SEND_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

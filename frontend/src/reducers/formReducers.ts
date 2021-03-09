import {
  FORM_SEND_FAIL,
  FORM_SEND_REQUEST,
  FORM_SEND_SUCCESS,
} from "../constants/formConstants";

interface IAction {
  type: string;
  payload: any;
}

const initialState = {};

export const formReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case FORM_SEND_REQUEST:
      return { loading: true, success: false };

    case FORM_SEND_SUCCESS:
      return { loading: false, success: true, formInfo: payload };

    case FORM_SEND_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

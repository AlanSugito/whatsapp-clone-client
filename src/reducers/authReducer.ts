interface Payload {
  username?: string;
  password?: string;
  image?: Blob | null;
}

type ActionType = "SET_IMAGE" | "SET_PASSWORD" | "SET_USERNAME" | "CLEAR";

interface Action {
  type: ActionType;
  payload: Payload;
}

const authReducer = (state: Payload, action: Action): Payload => {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.payload.password };
    case "SET_USERNAME":
      return { ...state, username: action.payload.username };
    case "SET_IMAGE":
      return { ...state, image: action.payload.image };
    case "CLEAR":
      return { username: "", image: null, password: "" };
    default:
      throw new Error("Incorrect action type");
  }
};

export default authReducer;

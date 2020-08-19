import { GET_USER } from "../action/types";

export function Showuser(payload) {
  return { type: GET_USER, payload };
}

export function getUser() {
  return (dispatch) => {
    fetch("http://localhost:8000/api/v1/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(Showuser(data.user));
      });
  };
}

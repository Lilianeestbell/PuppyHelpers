import axios from "axios";
// import { useDispatch } from "react-redux";

const userSignupRequest = (userData:any) => {
    return (dispatch:any) => {
        return axios.post("/api/users", userData)
    }
}

export default userSignupRequest;

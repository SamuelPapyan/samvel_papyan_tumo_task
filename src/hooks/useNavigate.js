import {useNavigate} from "react-router";

export default function useMyNavigate(){
    const navigate = useNavigate()
    return navigate;
}
import {useParams} from "react-router";

export default function useStudentId(){
    const {id} = useParams();
    return id;
}
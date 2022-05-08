import React, {Component} from 'react'
import useMyNavigate from "../hooks/useNavigate.js"
import useStudentId from "../hooks/useStudentId.js";
import useSearchQuery from "../hooks/useSearchQuery.js";

export const withHooksHOCNavigate = (Component)=>{
    return(props)=>{
        const navigate = useMyNavigate();
        return <Component navigate={navigate} {...props}/>
    };
}

export const withHooksHOCParams = (Component)=>{
    return(props)=>{
        const studentId = useStudentId();
        return <Component studentId={studentId} {...props}/>
    };
}

export const withHooksHOCSearchQuery = (Component)=>{
    return(props)=>{
        const searchQuery = useSearchQuery();
        return <Component searchQuery={searchQuery} {...props}/>
    };
}
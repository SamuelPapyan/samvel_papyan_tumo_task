import React from 'react';
import {useLocation} from "react-router";

export default function useSearchQuery(){
    const {search} = useLocation();
    const query = React.useMemo(() => new URLSearchParams(search),[search]);
    return query.get("q");
}
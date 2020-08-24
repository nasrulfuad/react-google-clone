import { useState, useEffect } from "react";
import { API_KEY } from "../env";

const CONTEXT_KEY = "4e3f539b93f166ef5";

const GoogleSearch = term => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
            .then(response => response.json())
            .then(result => setData(result));
    }, [term]);
    return { data };
};

export default GoogleSearch;

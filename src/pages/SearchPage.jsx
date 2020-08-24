import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../react_context/StateProvider";
import GoogleSearch from "../components/GoogleSearch";
import "../styles/SearchPage.css";

import data from "../response.json";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    // const { data } = GoogleSearch(term);
    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="google-logo"
                    />
                </Link>
            </div>
            <div className="searchPage__results"></div>
        </div>
    );
}

export default SearchPage;

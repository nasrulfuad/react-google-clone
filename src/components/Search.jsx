import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "../styles/Search.css";

function Search({ hideButtons = false }) {
    const [input, setInput] = useState("");

    const history = useHistory();

    const search = e => {
        e.preventDefault();
        history.push("/search");
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            <div className="search__buttons">
                <Button
                    className={hideButtons ? "search__buttonsHidden" : ""}
                    type="submit"
                    variant="outlined"
                    onClick={search}
                >
                    Google Search
                </Button>
                <Button
                    className={hideButtons ? "search__buttonsHidden" : ""}
                    variant="outlined"
                >
                    I'm feeling Lucky
                </Button>
            </div>
        </form>
    );
}

export default Search;

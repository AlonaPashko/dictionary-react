import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";

export default function Dictionary(props){
    
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
    //documentation: https://dictionaryapi.dev/
    //documentation: https://www.pexels.com/api/documentation/
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelslApiKey = "563492ad6f9170000100000128a388e5794f49f7b41d6de886dbd2ac";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelslApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

    }
    function handleSubmit(event){
    event.preventDefault();
    search();
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    function load(){
        setLoaded(true);
        search();
    }
    if(loaded){
        return(<div className="Dictionary">
        <section>
            <h1>What do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">
            suggested words: forest, book, plant...
        </div>
        </section>
        <Results results={results}/>
        <Photos photos={photos} />
    </div>)
    }
else{
load();
return "Loading...";
}
}
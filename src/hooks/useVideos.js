import { useState, useEffect } from "react";
import youTube from "../API/youTube";

const useVideo = () => {
    const [videos, setVideos] = useState([]);

    useEffect((defaultSearchTerm) => {
        search(defaultSearchTerm)
    }, []);

    const search = async (term) => {

        const response = await youTube.get('/search', {
          params: {
            q: term
          }
        });
        setVideos(response.data.items);
    };
    return [videos, search];
}

export default useVideo;
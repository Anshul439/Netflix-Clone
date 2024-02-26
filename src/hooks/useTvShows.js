import { useDispatch, useSelector } from "react-redux";
import { addTvShows } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTvShows = () => {
  const dispatch = useDispatch();

  const tvShows = useSelector((store) => store.movies.tvShows);

  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShows(json.results));
  };

  useEffect(() => {
    !tvShows && getTvShows();
  }, []);
};

export default useTvShows;

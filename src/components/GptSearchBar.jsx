import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);

  //   const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo-0125",
  //   });
  //   console.log(gptResults.choices);
  // };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const genAI = new GoogleGenerativeAI(
    OPENAI_KEY
  );

  const handleGptSearchClick = async () => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    // movie1, movie2, movie3, movie4, movie5
    console.log(text);

    const gptMovies = await text.split(",");
    // [movie1, movie2, movie3, movie4, movie5]

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 hover:bg-red-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      
    </div>
  );
};

export default GptSearchBar;

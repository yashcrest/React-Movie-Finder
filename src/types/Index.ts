// src/types.ts
export type TrendingMoviesData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

type TMovieGenre = {
  id: number;
  name: string;
};

type TCastCredit = {
  cast_id: number;
  character: string;
  gender: number;
  name: string;
  profile_path: string;
  known_for_department: string;
};

type TCrewCredit = {
  id: number;
  gender: number;
  name: string;
  profile_path: string;
  known_for_department: string;
  job: string;
};

export type TMovieData = {
  adult: boolean;
  id: number;
  original_title: string;
  overview: string;
  title: string;
  imdb_id: string;
  tagline: string;
  poster_path: string;
  genres: TMovieGenre[];
  release_date: string;
  runtime: number;
};

export type TMovieCredit = {
  cast: TCastCredit[];
  crew: TCrewCredit[];
  id: number;
};

export type OnMovieClick = (movie: TrendingMoviesData) => void;

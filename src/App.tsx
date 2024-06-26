import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import TrendingDetails from "./components/TrendingDetails/TrendingDetails";
import { TvShowsDetails } from "./components/TvShowsDetails/TvShowsDetails";
import TvShowPage from "./pages/TvShowPage";
import SelectedMovies from "./pages/SelectedMovies/SelectedMovies";
import SelectedMoviesDetails from "./components/SelectedMoviesDetails/SelectedMoviesDetails";

const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Review/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/:movieId" element={<TrendingDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="tv-shows" element={<TvShowPage />} />
        <Route path="tv-shows/:tvShowId" element={<TvShowsDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>       
        <Route path="selected" element={<SelectedMovies />} />
        <Route path="selected/:selectedId" element={<SelectedMoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

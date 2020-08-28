import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import WatchlistPage from './pages/watchlistPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesContextProvider from "./contexts/upcomingMoviesContext";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import ActorsContextProvider from "./contexts/actorsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PeoplePage from './pages/peoplePage'
import ActorPage from "./pages/actorDetailsPage";



const sampleActor = {
	popularity: 63.861,
	known_for_department: "Acting",
	gender: 1,
	id: 2263933,
	profile_path: "/oBfjVOzILe9OnYOl3kuIl698GNY.jpg",
	adult: false,
	known_for: [
	{
		release_date: "2019-03-07",
		id: 571683,
		vote_count: 6,
		video: false,
		media_type: "movie",
		vote_average: 6.3,
		title: "Heavy Load",
		genre_ids: [
		35
		],
		original_title: "Selvhenter",
		original_language: "da",
		adult: false,
		backdrop_path: "/zgl7RIABM0HybST6frkyC47pGQO.jpg",
		overview: "The two estranged brothers Emil and Magnus travel to Spain to bring home the body of their drunken and now dead father. What Emil doesn’t know is that Magnus has only agreed to go because of their father’s valuable Rolex watch which can save his bleeding finances. But when it turns out the transportation of the body will cost more than 10,000 Euro, Magnus convinces his reluctant little brother to run away with the body hidden in a roof box on top of a way too small rental car. Soon the two brothers find themselves on a wild escape from the police, and their father’s last trip forces them to face their own problems.",
		poster_path: "/uWC8vrvERAjKu7ecT1Tuu6ohKSh.jpg"
	},
	{
		original_name: "Den som dræber - Fanget af mørket",
		vote_count: 4,
		poster_path: "/6bstsCJ5JdAZ38nhmhv5dwzjibm.jpg",
		media_type: "tv",
		name: "Darkness: Those Who Kill",
		vote_average: 8.3,
		id: 87542,
		first_air_date: "2019-02-22",
		original_language: "da",
		genre_ids: [
		80
		],
		backdrop_path: "/fUjCQnmMFP6rtEAmBcx3dFiMNDf.jpg",
		overview: "Investigator Jan and profiler Louise constantly move around in the thrilling periphery of a murderer's view as they link a series of killings.",
		origin_country: [
		"DK"
		]
	},
	{
		original_name: "Ondt i Røven",
		id: 87545,
		origin_country: [],
		name: "Ondt i Røven",
		backdrop_path: "/kusfD6xOPmSLTqPArNLbKZLhVxk.jpg",
		original_language: "da",
		first_air_date: "2019-02-04",
		genre_ids: [
		18
		],
		vote_count: 0,
		media_type: "tv",
		vote_average: 0,
		overview: "Tessa is enthralled by the Copenhagen queer community, after she moves onto a couch in the collective \"The soft core\". Here a new world opens to Tessa, who begins questioning herself and her life, while she eagerly struggles to fit in. It turns out not being too easy; in the queer community she looks too straight, is too privileged and ignorant, but among her hetero friends she's too queer. Sometimes you have find your community to find yourself.",
		poster_path: "/dL56ODSZEv4YyD08K24W1UukNBV.jpg"
	}
	],
	name: "Tessa Hoder"
};


const actors = [ sampleActor,sampleActor,sampleActor,sampleActor,sampleActor];


const App = () => {
  return (
		<BrowserRouter>
			<div className="jumbotron">
				<SiteHeader /> 
				<div className="container-fluid">
				<MoviesContextProvider>
				<GenresContextProvider>
				<ActorsContextProvider>
				<UpcomingMoviesContextProvider>
				<Switch>
				  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
				  <Route path="/reviews/:id" component={MovieReviewPage} />
				  <Route path="/similar/:id" component={SimilarMoviesPage} />
				  <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
				  <Route exact path="/movies/watchlist" component={WatchlistPage} />
				  <Route exact path="/upcoming" component={UpcomingMoviesPage} />
				  <Route exact path="/people" component={PeoplePage} />
				  <Route path="/movies/:id" component={MoviePage} />
				  <Route path="/actors/:id" component={ActorPage} />
				  <Route path="/" component={HomePage} />
				  <Redirect from="*" to="/" />
				</Switch>
				</UpcomingMoviesContextProvider>
				</ActorsContextProvider>
				</GenresContextProvider>
				</MoviesContextProvider>
			  </div>
			</div>
		  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
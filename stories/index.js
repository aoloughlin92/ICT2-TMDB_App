import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import ActorCard from "../src/components/actorCard";
import ActorFilterControls from "../src/components/actorFilterControls";
import ActorList from "../src/components/actorList";
import ActorHeader from "../src/components/actorHeader";
import ActorsHeader from "../src/components/headerActorList";
import ActorDetails from "../src/components/actorDetails";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieReview from "../src/components/movieReview";
import MovieReviews from "../src/components/movieReviews";
import ReviewsForm from "../src/components/reviewForm";
import SiteHeader from "../src/components/siteHeader";
import TemplateMovieListPage from "../src/components/templateMovieListPage";
import TemplateMoviePage from "../src/components/templateMoviePage";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import AddReviewButton from "../src/components/buttons/addReview";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import ActorsContextProvider from "../src/contexts/actorsContext";
import MoviesContextProvider from "../src/contexts/moviesContext";
import { action } from "@storybook/addon-actions";


//Sample Movie
const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

//Sample Actor
const popularActor = {
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

const sampleActor= {
	birthday:"1964-09-02",
	known_for_department:"Acting",
	deathday:null,
	id:6384,
	name:"Keanu Reeves",
	also_known_as:[
		"Keanu Charles Reeves",
	],
	gender:2,
	biography:"Keanu Charles Reeves is a Canadian actor. Reeves is known for his roles in Bill &amp; Ted's Excellent Adventure, Speed, Point Break, and The Matrix trilogy as Neo. He has collaborated with major directors such as Stephen Frears (in the 1988 period drama Dangerous Liaisons); Gus Van Sant (in the 1991 independent film My Own Private Idaho); and Bernardo Bertolucci (in the 1993 film Little Buddha). Referring to his 1991 film releases, The New York Times' critic, Janet Maslin, praised Reeves' versatility, saying that he \"displays considerable discipline and range. He moves easily between the buttoned-down demeanor that suits a police procedural story and the loose-jointed manner of his comic roles.\" A repeated theme in roles he has portrayed is that of saving the world, including the characters of Ted Logan, Buddha, Neo, Johnny Mnemonic, John Constantine and Klaatu.",
	popularity:39.991,
	place_of_birth:"Beirut, Lebanon",
	profile_path:"\/d9HyjGMCt4wgJIOxAGlaYWhKsiN.jpg",
	adult:false,
	imdb_id:"nm0000206",
	homepage:null
}


//Homepage
storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });


  //PEOPLE PAGE
  storiesOf("People Page/ActorCard", module)
	  .add("default", () => <ActorCard actor={popularActor} />)
	  .add("exception", () => {
		const sampleActorNoPoster = { ...popularActor, profile_path: undefined };
		return <ActorCard actor={sampleActorNoPoster} />;
	  });

  storiesOf("People Page/ActorFilterControls", module)
    .add("default", () => <ActorFilterControls />)


  storiesOf("People Page/ActorsHeader", module).add("default", () => (
	<ActorsHeader numActors ={60} />
  ));

  storiesOf("People Page/ActorList", module)
	.add("default",() =>{
		const actors = [popularActor,popularActor,popularActor,popularActor,popularActor,popularActor]
		return <ActorList actors={actors} />
	});

//Actor Details
  storiesOf("Actor Details Page/ActorDetails", module).add("default",() => (
  	  <ActorDetails actor={sampleActor} />
  ));

  storiesOf("Actor Details Page/Actor Header", module).add("default", () =>(
	<ActorHeader actor={sampleActor} />
  ));





 //Movie Details
storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);
import { Jokes } from "../../models/Jokes.js";
import { jokesArr } from "./jokesArr.js";

export const fillJokesTable = async () => {
  const count = await Jokes.count();

  if (count === 0) {
    const onlyJokeSet = new Set();
    const onlyJoneandSetupSet = new Set();
    const filteredJokes = [];

    for (let arr of jokesArr) {
      for (let joke of arr) {
        if (joke.delivery && joke.setup) {
          const theJoke = `${joke.delivery}-and-${joke.setup}`;
          if (!onlyJoneandSetupSet.has(theJoke)) {
            onlyJoneandSetupSet.add(theJoke);
            filteredJokes.push(joke);
          }
        } else if (joke.joke) {
          if (!onlyJokeSet.has(joke.joke)) {
            onlyJokeSet.add(joke.joke);
            filteredJokes.push(joke);
          }
        }
      }
    }

    console.log("Unique Single Jokes: ", onlyJokeSet.size);
    console.log(
      "Unique Joke with Setup and Delivery: ",
      onlyJoneandSetupSet.size
    );
    console.log("Total Unique Jokes to Add: ", filteredJokes.length);

    for (let joke of filteredJokes) {
      try {
        if (joke.delivery && joke.setup) {
          await Jokes.create({
            setup: joke.setup,
            delivery: joke.delivery,
          });
        } else if (joke.joke) {
          await Jokes.create({
            joke: joke.joke,
          });
        }
      } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
          console.log(`Skipped duplicate joke: ${joke.joke || joke.setup}`);
        } else {
          console.error("Error adding joke:", error);
        }
      }
    }

    console.log("Jokes added successfully!");
  }
};

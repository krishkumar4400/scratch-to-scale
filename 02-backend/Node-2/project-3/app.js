//  Random joke generator:


import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
    const url = "https://v2.jokeapi.dev/joke/Any";
    https.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log("Here is a Joke: ");
            console.log(chalk.bgGreen.blueBright.bold(joke.joke));
            console.log(chalk.blue.bgRed.bold(joke.category));

        });
    });
}

getJoke();
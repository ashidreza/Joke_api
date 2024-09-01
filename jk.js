const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    try {
        const jokeText = await getdadJoke();
        const newLi = document.createElement('LI');
        newLi.append(jokeText);
        jokes.append(newLi);
    } catch (e) {
        console.log("error");
    }

}

const getdadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "Error";
    }
}

button.addEventListener('click', addNewJoke);
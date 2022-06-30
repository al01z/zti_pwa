const zdjecie = document.querySelector('img');
const button = document.querySelector('button');
const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY = "DEMO-API-KEY";

const pobierzKota = () => {
    axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY"
    const URL = API_URL
    axios.get(URL).then(response => { 
        console.log(response.data)
        const temp = response.data[0].url
        zdjecie.src = temp
    })
}

pobierzKota();
button.addEventListener('click', pobierzKota);





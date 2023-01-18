// stocks API key ZIxeNYptpyEx7ttuoFfptrcihI53Y_lo
// news API key 82561c971d50430187557fc656da806a
// weather API key 536f859786a518738a9b20276be37ff1
// word of the day API key 3f822b6b-4ac4-4981-8976-890864d87cb8

//Stock API setup

//set to querey selector
let closePrice
let openPrice
//pulls stock data and applies the text to its selectors
function aaplStockData() {
    let aaplOpen = document.querySelector("#aaplOpen")
    let aaplClose = document.querySelector("#aaplClose")
    let ticker = 'AAPL' //make input

    let stockUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=ZIxeNYptpyEx7ttuoFfptrcihI53Y_lo`
        fetch(stockUrl)
                .then(function (response) {
                    
                    return response.json();
                })

                .then(function (data) {
                    console.log(data);

                    aaplOpen.textContent = "Open: " + "$" + data.results[0].o
                    aaplClose.textContent = "Close: " + "$" + data.results[0].c
                });
            
            };

           

            aaplStockData();


function msftStockData() {
    let msftOpen = document.querySelector("#msftOpen")
    let msftClose = document.querySelector("#msftClose")
    let ticker = 'MSFT' //make input

    let stockUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=ZIxeNYptpyEx7ttuoFfptrcihI53Y_lo`
        fetch(stockUrl)
                .then(function (response) {
                    
                    return response.json();
                })

                .then(function (data) {
                    console.log(data);

                     msftOpen.textContent = "Open: " + "$" + data.results[0].o
                     msftClose.textContent = "Close: " + "$" + data.results[0].c
                });
            
            };

           

            msftStockData();

// Your stocks API setup

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", getStockData);

previousTicker = []

function getStockData () {

    let ticker = "" //make input

    let stockUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=ZIxeNYptpyEx7ttuoFfptrcihI53Y_lo`
        fetch(stockUrl)
                .then(function (response) {
                    
                    return response.json();
                })

                .then(function (data) {
                    console.log(data);

                    
                });
            };





//News API setup

//set to selectors
let thumbnail1 = document.querySelector("#thumbnail1");
let title1 = document.querySelector("#title1");
let articleUrl1 = document.querySelector("#articleUrl1");

let thumbnail2 = document.querySelector("#thumbnail2");
let title2 = document.querySelector("#title2");
let articleUrl2 = document.querySelector("#articleUrl2");

let thumbnail3 = document.querySelector("#thumbnail3");
let title3 = document.querySelector("#title3");
let articleUrl3 = document.querySelector("#articleUrl3");

function getNewsData() {
  let newsUrl = `https://gnews.io/api/v4/top-headlines?token=c0ce1376fc76d20830d8473d38ce3ea9&topic=breaking-news&country=us`;
  fetch(newsUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);

      thumbnail1.src = data.articles[0].image;
      title1.textContent = data.articles[0].title;
      articleUrl1.href = data.articles[0].url;

      thumbnail2.src = data.articles[1].image;
      title2.textContent = data.articles[1].title;
      articleUrl2.href = data.articles[1].url;

      thumbnail3.src = data.articles[2].image;
      title3.textContent = data.articles[2].title;
      articleUrl3.href = data.articles[2].url;
    });
}

getNewsData();

//weather API setup
let temp = document.querySelector("#temp");
let feelsLike = document.querySelector("#feelsLike");
let tempMin = document.querySelector("#tempMin");
let tempMax = document.querySelector("#tempMax");
let weatherIcon = document.querySelector("#weatherIcon");

const successCallback = (position) => {
  console.log(position);

  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=536f859786a518738a9b20276be37ff1&units=imperial`;

  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      temp.textContent = data.main.temp + "°F";
      feelsLike.textContent = data.main.feels_like + "°F";
      tempMin.textContent = data.main.temp_min + "°F";
      tempMax.textContent = data.main.temp_max + "°F";
      weatherIcon.src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    });
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//dictionary API setup

let word = document.querySelector("#word");
let wordType = document.querySelector("#wordType");
let definition = document.querySelector("#definition");
function randomWordData() {
  let randomWordUrl = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=zzy79quh09ugrg1shgdd2vkt6snleh2tr68h1qp7dma0h9qdy`;

  fetch(randomWordUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);

      word.textContent = data.word;
      wordType.textContent = data.definitions[0].partOfSpeech;
      definition.textContent = data.definitions[0].text;
    });
}

randomWordData();

// adds date to hero
let dayOfWeek = dayjs();
let date = dayjs();
$("#dayOfWeek").text(dayOfWeek.format("dddd"));
$("#date").text(date.format("MMMM D, YYYY"));

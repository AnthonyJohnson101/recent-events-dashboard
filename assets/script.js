// stocks API key ZIxeNYptpyEx7ttuoFfptrcihI53Y_lo
// news API key 82561c971d50430187557fc656da806a
// weather API key 536f859786a518738a9b20276be37ff1
// word of the day API key 3f822b6b-4ac4-4981-8976-890864d87cb8



//Stock API setup

//set to querey selector
let closePrice
let openPrice
//pulls stock data and applies the text to its selectors
function getStockData() {

    let ticker = 'AAPL' //make input

    let stockUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=ZIxeNYptpyEx7ttuoFfptrcihI53Y_lo`
        fetch(stockUrl)
                .then(function (response) {
                    
                    return response.json();
                })

                .then(function (data) {
                    console.log(data);

                     /* openPrice.textContent = data.results[0].o
                     closePrice.textContent = data.results[0].c */
                });
            };

           

            getStockData();

            


//News API setup

//set to selectors
let thumbnail1 = document.querySelector("#thumbnail1")
let title1 = document.querySelector("#title1")
let articleUrl1 = document.querySelector("#articleUrl1")

let thumbnail2 = document.querySelector("#thumbnail2")
let title2 = document.querySelector("#title2")
let articleUrl2 = document.querySelector("#articleUrl2")

let thumbnail3 = document.querySelector("#thumbnail3")
let title3 = document.querySelector("#title3")
let articleUrl3 = document.querySelector("#articleUrl3")



function getNewsData() {

    let now = dayjs().format("YYYY-MM-DD")

    let newsTopic = "US" //make input

    let newsUrl = `http://newsapi.org/v2/top-headlines?q=${newsTopic}&from=${now}&sortBy=popularity&country=us&apiKey=82561c971d50430187557fc656da806a`
        fetch(newsUrl)
                .then(function (response) {
                    
                    return response.json();
                })

                .then(function (data) {
                    console.log(data);

                    thumbnail1.src = data.articles[0].urlToImage
                    title1.textContent = data.articles[0].title
                    articleUrl1.href = data.articles[0].url

                    thumbnail2.src = data.articles[1].urlToImage
                    title2.textContent = data.articles[1].title
                    articleUrl2.href = data.articles[1].url

                    thumbnail3.src = data.articles[2].urlToImage
                    title3.textContent = data.articles[2].title
                    articleUrl3.href = data.articles[2].url


                });
            };

            getNewsData();

//weather API setup
let temp
let icon

               
const successCallback = (position) => {
        console.log(position);

        let lat = position.coords.latitude
        let lon = position.coords.longitude

        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=536f859786a518738a9b20276be37ff1&units=imperial`

        fetch(weatherUrl)
            .then(function (response) {
                        
                return response.json();
            })

            .then(function (data) {
             console.log(data);
            /* temp = data.list[0].main.temp
            icon.src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png" */ 
            });
        };
    
    const errorCallback = (error) => {
        console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);            

//dictionary API setup

let word
function randomWordData() {

    let randomWordUrl = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=zzy79quh09ugrg1shgdd2vkt6snleh2tr68h1qp7dma0h9qdy`

            fetch(randomWordUrl)
            .then(function (response) {
                
                return response.json();
            })

            .then(function (data) {
                console.log(data);


            
            });
        
        };

            randomWordData();
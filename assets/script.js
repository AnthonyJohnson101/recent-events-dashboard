// stocks API key ZIxeNYptpyEx7ttuoFfptrcihI53Y_lo
// news API key 82561c971d50430187557fc656da806a
// weather API key 536f859786a518738a9b20276be37ff1
// word of the day API key 3f822b6b-4ac4-4981-8976-890864d87cb8



//Stock API setup
let ticker = 'AAPL' //make input

function getStockData() {

    let stockUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=ZIxeNYptpyEx7ttuoFfptrcihI53Y_lo`
        fetch(stockUrl)
                .then(function (response) {
                    
                    return response.json();
                })

                .then(function (data) {
                    console.log(data);
                });
            };

            getStockData();


//News API setup
function getNewsData() {

    let now = dayjs().format("YYYY-MM-DD")

    let newsTopic = "covid" //make input

    let newsUrl = `https://newsapi.org/v2/top-headlines?q=${newsTopic}&from=${now}&sortBy=popularity&country=us&apiKey=82561c971d50430187557fc656da806a`
        fetch(newsUrl)
                .then(function (response) {
                    
                    return response.json();
                })

                .then(function (data) {
                    console.log(data);
                });
            };

            getNewsData();

// your code here:
import fetch from 'node-fetch';

class DataSource {
    getPrices() {
        return fetch("https://interview.switcheo.com/test.json")
            .then((response) => response.json())
            .then((js) => Object.values(js.data.prices))
            .then((prices) => prices.map(price => 
                    new Price(price.buy, price.sell, price.id, price.pair, price.timestamp)));
    }
}

class Price {
    constructor(buy, sell, id, pair, timestamp) {
        this.buy = buy;
        this.sell = sell;
        this.pair = pair;
    }

    mid() {
        return (this.buy + this.sell)/200;
    }

    quote() {
        return this.pair.slice(3);
    }
}


new DataSource().getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    });

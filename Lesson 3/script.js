let stockPrice = 300;
console.log(stockPrice);

stockPrice = 500; //or stockPrice = stockPrice + 200
console.log(stockPrice);

let money = 6000
money += 3000;
console.log(money);

money *= 3;
console.log(money);

const company = "Microsoft";
const desc = "is an IT company";

console.log(company + " " + desc); // Output: "Microsoft is an IT company"

const closingPrice = 200.92;

console.log(company + " ended the trading session with a closing price of " + closingPrice);


const companyName = "Amazon"
const companyRating = 5

console.log(companyName + " " + "has a customer rating of" + " " + companyRating);


const welcome_string = "Welcome to a world of JavaScript";
const char = welcome_string.substring(0,7);

console.log(char); // outputs "Welcome" to the console


const CompanyName = "Metaa";
const Char = CompanyName.substring(0,4);

console.log(Char);

const Char1 = Char.toUpperCase();
console.log(Char1);



const DayOneClosingPrice = "87.14";
const DayTwoClosingPrice = "84.22";
const avgClosing = (parseFloat(DayOneClosingPrice) + parseFloat(DayTwoClosingPrice))/2;

console.log(avgClosing);


//Array
const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]

console.log((TSLAClosingPrices[0]+TSLAClosingPrices[1]+TSLAClosingPrices[2]+TSLAClosingPrices[3]+TSLAClosingPrices[4])/5);


//Objects
const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}

console.log((AAPLPrevBar['close'] + AAPLPrevBar['open'])/2);
console.log((AAPLCurrentBar['open'] + AAPLCurrentBar['close'] + AAPLCurrentBar['high'] + AAPLCurrentBar['low'])/4);
console.log(Math.max(AAPLCurrentBar['high'],AAPLCurrentBar['open'],AAPLCurrentBar['close']));
console.log(Math.min(AAPLCurrentBar['low'],AAPLCurrentBar['open'],AAPLCurrentBar['close']));


const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}

if(stockOHLC['open']>stockOHLC['close'])
    {
        console.log("Stock is bearish");
    }
else if(stockOHLC['close'] > stockOHLC['open'])
    {
        console.log("Stock is bullish");
    }

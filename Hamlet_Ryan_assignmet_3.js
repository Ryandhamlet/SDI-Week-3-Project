//Ryan Hamlet
//SDI Project 3
//23 MAY 2013

//Procedure

//Global Variable

var customer = "Steve";

var budget = 40000;

var car1 = {
    year:2013,
	make:"BMW",
	model:"328i",
	cost:37000,
	color:"Black"
	};

var car2 = {
	year:2014,
	make:"Lexus",
	model:"IS",
	cost:38000,
	color:"Black"
	};

var car3 = {
	year:2013,
	make:"Audi",
	model:"A5",
	cost:38000,
	color:"Red"
	};

var top3 = [car1, car2, car3];

// Boolean Function

var scheduling = function(saturday,thursday){
	if (saturday === true) {
	console.log(customer + " calls to setup the appointment for Saturday to testdrive 3 cars.");
    return console.log('The Dealer says,"Sure come on down." ');
	}
	else if (thursday === true) {
	console.log(customer + "calls to setup the appointment for Saturday but the Salesman ask reschedule for Thursday.");
    return console.log('The Dealer says,"Maybe we can do something next week." ');
	}
};

var bigDay = scheduling(true,false);

   console.log("That sounds good I will see you Saturday at 1am.");
    console.log( "This is the list of cars I will be driving today.");

for (var i = 0; i < top3.length; i++)
{

   console.log(top3[i]);
}

//Array Function


//compare the testdrive results

var carAdj = ["Poor", "Fair", "Good", "Excellent"];

//BMW
car1Score = {
	handling: carAdj[3],
	fuelEconomy: carAdj[2],
	comfort: carAdj[2]
};

//Lexus
car2Score = {
	handling: carAdj[2],
	fuelEconomy: carAdj[3],
	comfort: carAdj[2]
};

//Audi
car3Score = {
	handling: carAdj[2],
	fuelEconomy: carAdj[3],
	comfort: carAdj[2]
};

var testResults = function(){
    console.log("After " + customer + " drove the cars this how he rated them.");
    console.log(
    car1.make,
    car1Score,
    car2.make,
    car2Score,
    car3.make,
    car3Score);
    };

testResults ();

//number  Function Converts an object's value to a number
//number(object);


var costDifference = function(){
	console.log("The " + car1.make + " cost $" + (budget - car1.cost) + " less than my budget."),
    console.log("The " + car2.make + " cost $" + (budget - car2.cost) + " less than my budget."),
    console.log("The " + car3.make + " cost $" + (budget - car3.cost) + " less than my budget.");
};

costDifference();
console.log()

//String function The String() function converts the value of an object to a string.

carNumscore = {
    Poor: 1,
    Fair: 2,
    Good: 3,
    Excellent: 4
    };

//stirng (carNumscore);

//BMW
testDrive1 = {
    handling: 4,
	fuelEconomy: 3,
	comfort:3
};

//Lexus
testDrive2 = {
	handling: 3,
	fuelEconomy: 4,
	comfort: 3
};


//Audi
testDrive3 = {
	handling: 3,
	fuelEconomy: 4,
	comfort: 3
};

   console.log(testDrive1, testDrive2, testDrive3);

var brands = [car1.make, car2.make, car3.make]

var numbersDontlie =[
	(testDrive1.handling + testDrive1.fuelEconomy + testDrive1.comfort),
	(testDrive2.handling + testDrive2.fuelEconomy + testDrive2.comfort),
	(testDrive3.handling + testDrive3.fuelEconomy + testDrive3.comfort)
	];


for (var i = 0; i < numbersDontlie.length; i++)
{
	console.log("The" + brands[i] + "scored a " + numbersDontlie[i]);
};

console.log("The fact that the cars are so evenly matched really made it hard for " + customer + " to deside on the car he wants to buy.");
console.log(customer + " desides to purchase the " + car1.make + " since all the cars are pretty evenly matched and it's $" + (budget - car1.cost) + " less than his budget.")
console.log("The dealerwalks up and tells " + customer + " that there was a mistake with the price of the " + car1.make + " that he qouted him in the begining. It seems that the car cost $2000 more than what was told to " + customer + " at first.");
console.log(customer + " tells the dealer I want this car for the price you told that you weregoing to sell it to me for. The dealer really wants to make the deal so he goes to speak with his manager.");

var newcar1 = {
    year:2013,
	make:"BMW",
	model:"328i",
	cost:39000,
	color:"Black"
	};


var wheelAndDeal = function (offers.one,offer.two)
	if (offer.one === true) {
	console.log("I'm gald that we could meet in the middle on this deal.");
    return console.log(customer + "bought the car for " + offers.one);
	}
	else if (offfers.two === true) {
	console.log(customer + "you drive a hard bargain but I don't want to lose your business we have a deal.");
    return console.log(customer + "bought the car for " + offers.two);
	}
};

var happyOwner = wheelAndDeal(false,true);

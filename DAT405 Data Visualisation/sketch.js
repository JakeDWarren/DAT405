//http://http://api.postcodes.io/

//Use a text/string object to assign the city we would like to know the weather of
let postcode = "EX27FP";
//The API key has to be given by the openweathermap.org website (for free / per account)
//let apiKey = "6b4a465ac9894c63172283b3f271c20c";
//This variable will store the JSON weather data
//let weather;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let url = "https://api.postcodes.io/postcodes/"+postcode;
  //The URL is sent to the loadJSON that returns the data to the weather variable
  result = loadJSON(url);
}

function setup() {
  console.log(result); //Return all JSON data
  var canvas = createCanvas(1280, 720); //Creating canvas
  canvas.positon(700,500);
  background(164,205,253); //Background colour set

  //textAlign(CENTER);
  //textSize(18);
  //text("Location is " + result.result.latitude + " " + result.result.longitude, width/2, height/2);

  noLoop();
}

function draw(){
}

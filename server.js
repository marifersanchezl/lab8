var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

77
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
	{
		name: "Juana Juana",
		phone: "55123345",
		email: "lajuana@gmail.com",
		uid: 101
	},
	{
		name: "Maluma Hidalgo",
		phone: "336987451",
		email: "malumababy@gmail.com",
		uid: 102
	}
];

var waitingList = [
	{
		name: "J Alvarez",
		phone: "8118118018",
		email: "jalvarez2020@gmail.com",
		uid: 103
	}
];

app.get("/", function(req, res) {

	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
	
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
	
	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
	
	return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
	
	return res.json(waitingList);
});

app.post("/api/tables", function(req, res) {
  
	var newReservation = req.body;

	console.log(newReservation);
	
	if (reservations.length <= 5){

		reservations.push(newReservation);
		res.json(true);

	} else {

		waitingList.push(newReservation);
		res.json(false);
	}

});

app.listen(PORT, function(){
	
	console.log("Listening PORT: " + PORT);
});
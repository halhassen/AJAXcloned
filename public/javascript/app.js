var firebase = "https://songsosongs.firebaseio.com/";

var playlist = [];

function Music(title, artist, album, img) {
	this.title = title;
	this.artist = artist;
	this.album = album;
	this.img = img;
	this._id = null;
}

function displaySongs() {
	elemString = "";
	for(var i = 0; i < playlist.length; i++) {
		document.getElementById('display').innerHTML +=
		"<div class='page-header row col-sm-4 text-center'>" + 
		"<span id='play' class='btn glyphicon glyphicon-play'>" +  "<img class='img-responsive img-rounded' src='" + playlist[i].img + "' style='border: auto; margin: auto; height: 200px'/>" + "</span>" + "<br>" + 
		"<span style='font-weight: strong; font-size: 1.35em'>" + playlist[i].title + "</span><br>" + 
		"<span>" + playlist[i].artist + " - <i>" + playlist[i].album + "</i></span>" + 
		"</div>"
	}
	for(var i = 0; i < playlist.length; i++) {
		document.getElementById('songCount').innerHTML = ' (' + playlist.length + ' songs)'
	}
	document.getElementById('display').innerHTML += elemString;
}

function getSongs() {
	var req = new XMLHttpRequest();

	req.open('GET', firebase + '.json', true);


	/*
	//Used to send object to Firebase
	req.open('POST', firebase + '.json', true);
	var song = new Music('Back Then', 'Mike Jones', 'Who Is Mike Jones?', 'https://upload.wikimedia.org/wikipedia/en/c/ce/Mike_Jones_Back_Then.jpg')

	req.send(JSON.stringify(song));*/

	req.onload = function() {
		if(this.status >= 200 && this.status < 400) {
			var res = JSON.parse(this.response);
			console.log(res);
			for(var prop in res) {
				playlist.push(res[prop]); //pushes the properties from into the JS array
			}
			displaySongs();
		}
	}

	req.send();
}
getSongs();
/*
if(this.status >= 200 && this.status < 400) {
	var res = JSON.parse(this.response);
	for(var prop in res) {
		playlist.push(res[prop])
	}
}
*/















/* 
var firebase = "https://blinding-heat-4411.firebaseio.com/"; //.json makes the link readable as a .json file


var books = [];

function Book(title, author, img) {
	this.title = title;
	this.author = author;
	this.img = img;
	this._id = null;
};

function displayBooks() {
	var elemString = "";
	for(var i = 0; i < books.length; i++) {
		elemString += '<li>' + 
		'<img src="' + books[i].img + '"style="height: 75px; border: auto"/>' + 
		'<span style="font-size: 1.25em; font-weight: strong">' + books[i].title + '</span><span> by: <i>' + books[i].author + '</i></span>' + 
		'</li>'
	}
	document.getElementById('display').innerHTML = elemString;
}

//create the req
function getBooks() {
	var req = new XMLHttpRequest();

	//open the req
	req.open('GET', firebase + ".json", true);

	//define the onload
	req.onload = function() {
		if(this.status >= 200 && this.status < 400) {
			var res = JSON.parse(this.response);
			console.log(res);
			for(var prop in res) {
				books.push(res[prop]);
			}
			displayBooks(); //important to get this function out of the way first
		}
	}

	//send the req
	req.send();	
}

getBooks();*/
const express = require('express');
const https = require('https')
const app = express();
const bodyParser = require('body-parser')
const axios = require('axios');
const port = "3000";

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));

app.get("/search", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/detail")

app.post("/", function(req, res){
    const movieName = req.body.movieName;
    const year = req.body.movieYear;
    const url = "https://www.omdbapi.com/?apikey=faf7e5bb&s&t="+ movieName +"&y="+ year +""

    axios({
        method: 'get',
        url: url,
        responseType: 'json'
      })
        .then(function (response) {
            const movieName = response.data.Title
            const year = response.data.Year
            const releaseDate = response.data.Released
            const director = response.data.Director
            const actor = response.data.Actors
            const plot = response.data.Plot
            const ratingImdb = response.data.imdbRating
            const ratingMeta = response.data.Metascore
            console.log(response);
            try{
          res.render('response', {
            movieTitle: movieName, 
            movieYear: year,
            movieRelease: releaseDate,
            movieDirector: director,
            movieCast: actor,
            moviePlot: plot,
            movieRatingImdb: ratingImdb,
            movieRatingMeta: ratingMeta
            
            })
            }
            catch(e){
                console.log(e);
            }
        });

    // fetch("https://www.omdbapi.com/?apikey=faf7e5bb&s&t="+ movieName +"&y="+ year +"") 
    // .then((response) => response.json()) 
    // .then((data) => console.log(data));

    // https.get(url, function(resp){
        // resp.on("data", function(data){
        //     console.log(JSON.stringify(data));
            // const title = dataJSON.Title;
            // const releaseDate = dataJSON.Released
            // const director = dataJSON.Director
            // const cast = dataJSON.Actors
            // const plot = dataJSON.plot
            // const imdbRating = dataJSON.imdbRating
            // res.send(title)
    //     })
    // })
})

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})

//apikey: faf7e5bb&s

//url: https://www.omdbapi.com/?apikey=faf7e5bb&s&t=Avengers&y=2012plot=full
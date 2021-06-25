const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How much films has you watched?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How much films has you watched?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the last watched films');
            b = prompt('How do you note him');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You have watched a little bit of films')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are the classical watcher')
        } else if (personalMovieDB.count >= 30) {
            console.log('You are an CinemaMan')
        } else {
            console.log("The error is happened")
        }
    },
    showMyDB: function (hidden) {
        if (hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGeneres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favourite genre number ${i}`);

            if (genre === "" || genre == null) {
                console.log('You has inserted the incorrect data or forgot to insert it')
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre number ${i + 1} - is ${item}`)
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.start();

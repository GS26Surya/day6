class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating; 
    }
  
    set rating(rating) {
      if (rating) {
        this._rating = rating;
      } else {
        this._rating = "PG";
      }
    }
  
    get rating() {
      return this._rating;
    }
  
    static getPG(movieArray) {
      const pgmovies = [];
      for (let i = 0; i < movieArray.length; i++) {
        if (movieArray[i].rating === "PG") {
          pgmovies.push(movieArray[i]);
        }
      }
      return pgmovies;
    }
  }
  
  const movie1 = new movie("Avengers", "Marvel");
  const movie2 = new movie("Endgame", "Marvel", "PG13");
  
  console.log(movie1);
  console.log(movie2);
  
  const movielist = [
    new movie("Avengers", "Marvel"),
    new movie("Endgame", "Marvel", "PG13"),
    new movie("Beast", "Sunpictures"),
    new movie("Onepiece", "Toei Animation")
  ];
  
  console.log(movie.getPG(movielist));
  
  const CasinoRoyale = new movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(CasinoRoyale);
  
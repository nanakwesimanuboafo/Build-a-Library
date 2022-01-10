class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
      this._movieCast = [];
      this._songTitles = [];
    }
  
    get title(){
      return this._title;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    get ratings(){
      return this._ratings;
    }
  
    get movieCast(){
      return this._movieCast;
    }
  
    get songTitles(){
      return this._songTitles;
    }
  
    toggleCheckOutStatus(){
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating(){
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
      return ratingsSum / this.ratings.length;
    }
  
    addRating(value){
       if(value < 1 || value > 5 ) {
      console.log('Error! Please rate between 1 and 5')
           
      } else { 
         this._ratings.push(value); 
    }
    }
  
  
    set isCheckedOut(value){
      this._isCheckedOut = value;
    }
  
  }
  
  
  
  
  class Book extends Media{
    constructor(author, title ,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
     get author(){
       return this._author;
     }
  
      get pages(){
       return this._pages;
     }
  
  }
  
  
  
  class Movie extends Media{
    constructor(director,title,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
     get director(){
       return this._director;
     }
  
      get runTime(){
       return this._runTime;
     }
  
  }
  
  
  
  
  
  
  const historyOfEverything =  new Book('Bill Bryson', 'A Short History of Nearly Everything',544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  
  const speed = new Movie('Jan de Bont','Speed',116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
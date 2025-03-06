// You need to implement the Playlist constructor function and its prototype method

// problem 4 
function Playlist() {
    // Initialize songs property
    this.songs =[]
}

Playlist.prototype.addSong = function (songObj){
  this.songs.push.songObj;
  return songObj.song;
}

let playList = new Playlist()
console.log("addSong result-",playList.addSong({"song":"to hai to main hu"}))
// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
    // Initialize items property
    this.items = []
  }
  
  // Define addItem method on ShoppingCart's prototype
  ShoppingCart.prototype.addItem = function (price) {
    this.items.push(price);
  }
  
  // Define getTotalPrice method on ShoppingCart's prototype
  ShoppingCart.prototype.getTotalPrice = function () {
    return this.items.reduce((acc, item) => acc + item, 0)
  }
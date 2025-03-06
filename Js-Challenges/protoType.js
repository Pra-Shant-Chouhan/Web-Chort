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
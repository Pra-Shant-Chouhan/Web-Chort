// You just need to implement the addGuest function
function addGuest(guestList, newGuest) {
   let newList= [...guestList,newGuest];
    return newList;
    // Add the newGuest to guestList and return the updated list
  }
  

//   console.log(addGuest(["pra"],"ed"))
  // You just need to implement the eatCandy function
function eatCandy(candyJar) {
    // Remove the last candy from the jar and return the updated jar
    let popCandy = candyJar.pop();
   let remainCandyInJar =   candyJar.filter((candy)=>candy !== popCandy)
   return remainCandyInJar;
}
// console.log(eatCandy(["J","K"]))

function addPuppy(queue, puppyName) {
    // let contactArray= puppyName.flat()
       // Add puppyName at the beginning of queue and return updated queue
         queue.unshift(puppyName)
         return queue;
   }
   console.log("addPuppy",addPuppy(["P","R"],"s"))
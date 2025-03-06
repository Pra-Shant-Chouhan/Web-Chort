// // You just need to implement the distributeGifts function
// function distributeGifts(totalGifts, friends) {
//     // write your code here
//     let giftsPerFriends = totalGifts / friends
//     let distribution = new Array(friends).fill(0)
  
//     for (let i = 0; i < totalGifts; i++) {
//       distribution[i % totalGifts] += 1;
//     }
//   }
//   distributeGifts(10,5);// Number of gifts and friends
const totalGifts = 10;
const totalFriends = 5;

// Calculate the number of gifts each friend will receive
const giftsPerFriend = totalGifts / totalFriends;

// Array to store the distribution
const distribution = new Array(totalFriends).fill(0);

// Distribute the gifts equally
for (let i = 0; i < totalGifts; i++) {
    distribution[i % totalFriends] += 1;
}

// Output the distribution
console.log("Gifts distribution:", distribution);

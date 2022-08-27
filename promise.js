/* Simple Promise example
A Promise is an object that return a result on succes or on failure on an
asynchronous operatoin

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({user: "juan"});
    reject(new Error('user not found'));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err.message);
  });

*/

// Same example from app.js but with promises

console.log('Start');

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('now we have the data');
      resolve({ userEmail: email });
    }, 1500);
  });
}

/* version 1 getUserVideos
function getUserVideos(email, callback){
  setTimeout(() => {
    return ["video1", "video2", "video3"];
  }, 1000);
}
*/

// version 2 getUserVideos
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3']);
    }, 1000);
  });
}

function videoDetails(videos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Title of the video');
    }, 1000);
  });
}

loginUser('user', '123')
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos))
  .then((detail) => console.log(detail));

// console.log(user); this will print undefined
// console.log(getUserVideos()); this will also print undefined with the version 1

console.log('End');

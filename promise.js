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

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log('now we have the data');
    callback({ userEmail: email });
  }, 1500);
}

/* version 1 getUserVideos
function getUserVideos(email, callback){
  setTimeout(() => {
    return ["video1", "video2", "video3"];
  }, 1000);
}
*/

// version 2 getUserVideos
function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3']);
  }, 1000);
}

function videoDetails(videos, callback) {
  setTimeout(() => {
    callback('Title of the video');
  }, 1000);
}

const user = loginUser('example@goomail.com', 123, (user) => {
  console.log(user);
  getUserVideos(user.email, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

// console.log(user); this will print undefined
// console.log(getUserVideos()); this will also print undefined with the version 1

console.log('End');

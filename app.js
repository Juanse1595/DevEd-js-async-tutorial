/*
// Sync code example

function syncFunct() {
  console.log("we are in otherFunc");
  console.log("do some stuff");
}

console.log("Start Sync part");

syncFunct();

console.log("End Sync part");

// Async code example

console.log("Start Async part");

setTimeout(() => {
  console.log("we are in the timeout");
}, 2)

console.log("End Async part");
*/

/* Example 2. in this case, when you run the code, user will be undefined until
the end of the execution, the timeout will be executed last */

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("now we have the data");
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
    callback(["video1", "video2", "video3"]);
  }, 1000)
}

function videoDetails(videos, callback) {
  setTimeout(() => {
    callback("Title of the video");
  }, 1000)
}


const user = loginUser("example@goomail.com", 123, (user) => {
  console.log(user);
  getUserVideos(user.email, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    })
  })
});

// console.log(user); this will print undefined
// console.log(getUserVideos()); this will also print undefined with the version 1

console.log("End");
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
      console.log('getting back videos');
      resolve(['video1', 'video2', 'video3']);
    }, 1000);
  });
}

function videoDetails(videos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting back title of the video');
      resolve('Title of the video');
    }, 1000);
  });
}

// loginUser('user', '123')
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos))
//   .then((detail) => console.log(detail));

async function displayUser(){
  try {
    const loggedUser = await loginUser("ad@mail.com", "123");
    const videos = await getUserVideos(loginUser.userEmail);
    const videoTitle = await videoDetails(videos[0]);
    console.log(videoTitle);
  } catch(err) {
    console.log(err);
  }
}

displayUser();

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log('getting stuff from youtube');
    resolve({ videos: [1, 2, 3, 4] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log('getting stuff from facebook');
    resolve({ user: 'name' });
  }, 2000);
});

// Promise.all([yt, fb]).then((result) => console.log(result));

console.log('End');

/* Simple Promise example
A Promise is an object that return a result on succes or on failure on an
asynchronous operatoin*/

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

/** FEEDBACK: Great job getting all test cases to pass! Your code looks very clean too! */
const resolvedWrapper = (num) => {
  return new Promise((resolve, reject) => {
    resolve(num)
  })
};

const rejectedWrapper = (str) => {
  return new Promise((resolve, reject) => {
    reject(new Error(`${str}`))
  })
};

const handleResolvedPromise = (promise) => {
  return promise.then((data) => {
    console.log((data))
    return data
  })
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise.then((data) => {
    console.log(data)
    return data
  })
    .catch((err) => {
      console.error(`Your error message was: ${err.message}`)
      return null
    })
};

const pauseForMs = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, num)
  })
    .then(() => {
      console.log('time')
    })
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};

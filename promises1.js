// Promise Structure
const myPromise = new Promise((resolve, reject) => {
  resolve()
     // reject("Failed")
})
// Promise resolve callback called
 .then(value => {
    console.log(value)
 })
 // Promise reject callback called
 .catch(err => {
    console.log(err)
 })
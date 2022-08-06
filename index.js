//synchronous , Assynchronous, Callbacks, Promises

// console.log('I eat')
// console.log('Ice cream')
// console.lg('with a')
// console.log('spoon')

//Assynchronous

// console.log('I eat')
// setTimeout(function () {
//     console.log('Ice cream')
// }, 4000)

// console.log('with a')
// console.log('spoon')

//Callbacks


// function combined() {
//     function receipt(money) {
//         console.log('Oder receipt')
//         money()
//     }
//     setTimeout(function () {
//         console.log('Production Finished')
//     }, 4000)
//     setTimeout(function () {
//         console.log('Welcome again')
//     }, 10000)

//     function production() {
//         console.log('Production has started')

//     }

//     receipt(production)
// }


// const button = document.getElementById('btn')
// button.addEventListener('click', combined)


// function end() {
//     console.clear()
// }
// const lbutton = document.getElementById('lbtn')
// lbutton.addEventListener('click', end)


// //Assync js Callbacks


// let posts = [
//     { title: 'Post one', body: 'My post one' },
//     { title: 'Post two', body: 'My post two' }
// ]


// function getPosts() {
//     setTimeout(() => {
//         let output = ''
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }

// function createPost(post, callBack) {
//     setTimeout(() => {
//         posts.push(post)
//         callBack()     ///By using a call back
//     }, 3000)
// }


// createPost({ title: 'my new post three', body: 'I used async' }, getPosts)

//Async js Promises

// let posts = [
//     { title: 'Post one', body: 'My post one' },
//     { title: 'Post two', body: 'My post two' }
// ]


// function getPosts() {
//     setTimeout(() => {
//         let output = ''
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post)

//             const error = true//Should be false  
//             ///Async js promises

//             if (!error) {
//                 resolve()
//             } else {
//                 reject('Kuna error Msee')
//             }
//         }, 3000)
//     })
// }

// createPost({ title: 'my new post three', body: 'I used async' })
//     .then(getPosts)
//     .catch(err => console.log(err))

//To avoid doing . dot ///Using the promise ,all

const promise1 = Promise.resolve('Hello world')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
})

Promise.all([promise1, promise2, promise3]).then(values => console.log(values))
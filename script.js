// console.log('1')

// setTimeout(() => {
//     console.log('2');
// }, 1000);

// console.log('3');

// const promise = new Promise(function(resolve, reject){
//     console.log('IN PROMISE')
// })

// console.log(promise);


// Promise Consuming
// const promise = new Promise(function(resolve, reject){
//     console.log('IN PROMISE')
//     resolve()
// })

// promise 
//     .then(() => {
//         console.log('Now fulfilled');
//     })


// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('resolved');
//         resolve()
//     } , 1000)
// })

// promise 
//     .then(() => {
//         console.log('Now fulfilled');
//     })


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('RESOLVE');
//         resolve()
//     }, 1000)
// })
//     .then(() => {
//         console.log('Hey');
//     })


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             console.log('RESOLVE')
//             resolve('fulfull')
//         } else {
//             console.log('Error')
//             reject('Error not fulfill')
//         }
//     }, 1000)
// })
//     .then((response) => {
//         console.log('Hey', response);
//     })
//     .catch((error) => {
//         console.log('Hey an error !', error)
//     })

//async/await
// const promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             let error = true
//             if (!error) {
//                 console.log('2')
//                 resolve('fulfull')
//             } else {
//                 console.log('2')
//                 reject('Error not fulfill')
//             }
//         }, 1000)
//     })

//Promise consuming then and catch keyword 

    // .then((response) => {
    //     console.log('Hey', response);
    // })
    // .catch((error) => {
    //     console.log('Hey an error', error)
    // })
    
//Promise consuming async/await    keyword
    
// console.log("1");
    
//  async function myPromise() {
//            try{
//             const pr = await promise
//             console.log("3" , pr);

//            }catch(err){
//             console.log("err" ,err);
//            }             
//         }
//     myPromise()

// note:json place holder website for server

async function getAllPosts() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log("resp", response);

}catch(error){
    console.log("error",error);
}
}
getAllPosts()    
async function getAllPosts() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log("resp", response);

}catch(error){
    console.log("error",error);
}
}

getAllPosts()    
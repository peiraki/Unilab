// const getPosts = async () => {
//         const posts = await fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(_ => _.json())
//         posts.forEach(post => {
//             if(post.id <= 50) {
//                 console.log(post.id)
//                 postsCont.innerHTML += 
//                 `<div>
//                     <h3>${post.title}</h3>
//                     <img src="${post.url}">
//                 </div>`
//             }
//           });
// }     
// getPosts()


fetch("https://jsonplaceholder.typicode.com/photos?_limit=48")
  .then(response => response.json())
  .then(posts => {
        posts.forEach(post => {
                    postsCont.innerHTML += 
                    `<div>
                        <h3>${post.title}</h3>
                        <img src="${post.url}">
                    </div>`
            });
})
  .catch(error => console.error(error));
   
  
  
 






//  fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//       .then(post => console.log(post))

//       posts.forEach(element => {
//         console.log(element.title)
//       });




// const getPosts = async () => {
//     try{
//         const posts = await fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(p => p.json())
        
//     }catch (error){
//         console.log("error")
//     }
// }
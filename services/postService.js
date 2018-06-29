'use strict'
import serviceBase from './serviceBase'
console.log('test')
const postService = {
    
    addPost:(data) => serviceBase.post('/addposts',data),
    getPost:(data) => serviceBase.post('/addposts/hhhhh',data),
   
}
export default postService
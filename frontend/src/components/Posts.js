import React, { useEffect, useState } from 'react'
import Blog from '../views/Blog';
import BlogBody from '../classes/BlogBody'



const Posts = () => {
  const mystyle = {
   
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: "10px",
  }
  const mysecondstyle = {
    color: "lightgrey",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: "10px",
  }

  const [posts, setPosts] =useState([])

  useEffect(()=> {
  const getPosts = async () => {
    const res = await fetch ('https://localhost:7161/api/Values/Test')
    const data = await res.json()
    setPosts(data)
  }
  
  function getPosts()  //{
    // Hämta alla blogposter från API/JSON
    // FETCH('GET', "blogPostApi/posts")
  //   return [new BlogBody('testTitle', 'testIndex dsjfhjsbfjbvjdb hsjhsjdfhj hdjhsjfdshsj dhjhfjshfjk hhhhdhdjhsdjhsjdh shdjshdjsdhjs dhsjdhjsdhsj shdjshdjsdh shdjshjdhsjds sbjdsbd'), new BlogBody('bajs', 'korvhdjhjdh sbhdhsbdh hsvdhshsvd'), new BlogBody('pizza', 'kebab')]
  // }
  })
  
  
    return (
    <div> 
<div className="mb-3">
{getPosts().map((item) => 
  <div>
  <div className="card" >
<div src="..." className="card-img-top" alt="..."></div>
<div className="card-body text-align:center;">
  <h5 className="card-title text-align:center;" style={mystyle}> {item.title}</h5>
  <p className="date"style={mysecondstyle} > {item.date}</p>
  
  <p className="card-text">{item.index}</p>
 
  </div> 
  </div>
  </div>)}

  </div>
</div>


)
}

export default Posts

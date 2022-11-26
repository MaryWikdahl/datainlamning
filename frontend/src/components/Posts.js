import React, { useEffect, useState } from 'react'

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

  const [posts, setPosts] = useState([])

  useEffect(()=> {
  const getPosts = async () => {
    const res = await fetch ('https://localhost:7134/api/Blog')
    const data = await res.json()
    setPosts(data)
  }
  
  getPosts()

  })
  
  
    return (
    <div> 
<div className="mb-3">
{posts.map((item) => 
  <div>
  <div className="card" >
<div src="..." className="card-img-top" alt="..."></div>
<div className="card-body text-align:center;">
  <h5 className="card-title text-align:center;" style={mystyle}> {item.title}</h5>
  <p className="date"style={mysecondstyle} > {item.date}</p>
  
  <p dangerouslySetInnerHTML={{__html: item.message}} className="card-text"></p>
 
  </div> 
  </div>
  </div>)}

  </div>
</div>


)
}

export default Posts

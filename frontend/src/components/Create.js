import React, { useState, useRef, useEffect, useCallback } from 'react'
import Blog from '../views/Blog';
import BlogBody from '../classes/BlogBody'
import Quill from 'quill'
import'quill./dist/quill.snow.css'

const Create = () => {
  // const qWrapper =useRef()
  const [quill, setQuill]= useState('');
  const [title, setTitle] = useState('');
  const [index, setIndex] = useState('');
    function createBlogPost() {
      const bb = new BlogBody(title, index);
      console.log(bb);
    }
  // useEffect (() =>{
  //   const editor = document.createElement('div')
  //   qWrapper.current.append(editor)
  //   new Quill(editor,{theme:'snow'})
  //   return ()=> {
  //     qWrapper.current.innerHTML =''
  //   }
    
  // }) 
  
  const qWrapper = useCallback(wrapper => {

 const TOOLBAR_OPTIONS =[
  ['bold', 'italic', 'underline'],
  ['image'],
  [{header: [1,2,3,4,5,6, false]}],
  [{'color': []}, {'background':[]}],
  [{'font': []}],
  [{'allign': []}],
  ['clean']
]
 
    wrapper.innerHTML =''
    const editor = document.createElement('div')
    Wrapper.append(editor)
    const q= new Quill(editor,{theme:'snow', modules: {toolbar: TOOLBAR_OPTIONS}})
    setQuill(q)
  },[])
}
    return (
    <div> 
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Titel</label>
  <input type="titel" className="form-control" id="exampleFormControlInput1" value={title} name='title' onChange={e => setTitle(e.target.value)}></input>
</div>
<div id='q-wrapper' ref={qWrapper} className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Index</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={index} name='index' onChange={e => setIndex(e.target.value)}></textarea>
  {/* <div>{getBlogBody().date}</div> */}
  <button type="button" onClick={() => createBlogPost()}>Add</button>
</div>
</div> 

)
}

export default Create
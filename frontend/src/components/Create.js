import React, { useState, useCallback } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const Create = () => {
  const [quill, setQuill]= useState('');
  const [title, setTitle] = useState('');
    async function createBlogPost() {
      const message = quill.root.innerHTML;
      const response = await fetch('https://localhost:7134/api/Blog', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({title, message})
      });

      if(response.status == 201) {
      alert('Blogposten är skapad');
      
      // Rensar fälten
      setTitle('');
      quill.root.innerHTML = '';
      }
      else {
        alert('Någonting gick fel vid sparandet av bloggposten')
      }

    }
  
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
    if(wrapper) {
      wrapper.innerHTML = ''
      const editor = document.createElement('div')
      wrapper.append(editor)
      const q= new Quill(editor,{theme:'snow', modules: {toolbar: TOOLBAR_OPTIONS}})
      setQuill(q)
    }
  },[])

    return (
    <div> 
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Titel</label>
  <input type="titel" className="form-control" id="exampleFormControlInput1" value={title} name='title' onChange={e => setTitle(e.target.value)}></input>
</div>
<label htmlFor="exampleFormControlInput1" className="form-label">Message</label>
<div id='q-wrapper' ref={qWrapper} className="mb-3">
</div>
<button type="button" onClick={() => createBlogPost()}>Add</button>
</div> 
)
}

export default Create
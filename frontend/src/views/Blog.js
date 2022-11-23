import Posts from '../components/Posts';

const Blog = () => {
    
  const mystyle = {
   
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: "10px",
  }
  return (
<div>
    <form id="myForm" className="container col-6">
    <h2 className="d-flex align-items-center"style={mystyle}>Blog Posts</h2>
    <Posts/>
   
    
  
    </form>
    </div>  
    )

}
export default Blog
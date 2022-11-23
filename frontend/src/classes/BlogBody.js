export default class BlogBody {
    constructor(_title, _index)
    {
        this.id = this.GetMaxId();
        this.title = this.capitalizeFirstLetter(_title);
        this.index = this.capitalizeFirstLetter(_index);
        this.date = this.GetTodaysDate();
    }
    id;
    title;
    index;
    date;

    GetMaxId() {
        return Math.random() * 1000;
    }

    GetTodaysDate ( ){
        const todayTime = new Date().getTime();
        console.log(todayTime);
        const currentDay = new Date(todayTime);
        return currentDay.toLocaleString();
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
}

// import React from 'react'

// const BlogBody = () => {    
//     function GetTodaysDate ( ){
//     const todayYear = new Date().getFullYear();
//     const todayMonth = new Date().getMonth() + 1;
//     const todayDay = new Date().getDate();
//     const currentDay = new Date(todayYear, todayMonth, todayDay);
//     return currentDay

// }
   
//  const BlogPosts= {
//     id:10,
//     Titel: "hej",
//     Index: "Sol igern djojfdofd",
//     Todaysdate: GetTodaysDate(),
   
//  }
//     return (
//         <div></div>
//  )
// }

// export default BlogBody
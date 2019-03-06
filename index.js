// const _ = require("lodash")

// const createPost = () =>
//   event.preventDefault()
//   const title = document.getElementById("title").value;
//   const body = document.getElementById("body").value;
//   const author = document.getElementById("author").value;

function createPost(event) {
  // event.preventDefault()
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let author = document.getElementById("author").value;

  console.log("!!");

  let pageTemplate = document.getElementById("page-template");

  let templateFn = _.template(pageTemplate.innerHTML)

  let postDiv = document.getElementById("post")

  let templateHTML = templateFn({ title: title, body: body, author: author })

  postDiv.innerHTML += templateHTML



  // put variables in an object
  // send object into template function and return html string
  // append html string
}

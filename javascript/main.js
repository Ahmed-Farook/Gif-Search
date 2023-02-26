// Grab input

document.querySelector(".js-go").addEventListener("click", function () {
  var input = document.querySelector("input").value;
  console.log(input);
  changeurl(input);
});

document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
  var input = document.querySelector("input").value;
  console.log(input);
  if (e.which === 13) {
    changeurl(input);
  }
});


// Api Stuff

var GiphyAJAXCall = new XMLHttpRequest();
url =
  "http://api.giphy.com/v1/gifs/search?q=funny&api_key=ZYqunnepYGrb0aHc2MQ7hhDMvfftPq9h";
GiphyAJAXCall.open("GET", url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener("load", function (e) {
  var data = e.target.response;
  pushToDom(data);
});

function changeurl(newsrc) {
  if (newsrc === "") {
    url =
      "http://api.giphy.com/v1/gifs/search?q=funny&api_key=ZYqunnepYGrb0aHc2MQ7hhDMvfftPq9h";
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", function (e) {
      var data = e.target.response;
      pushToDom(data);
    });
  } else {
    url =
      "http://api.giphy.com/v1/gifs/search?q=" +
      newsrc +
      "&api_key=ZYqunnepYGrb0aHc2MQ7hhDMvfftPq9h";
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", function (e) {
      var data = e.target.response;
      pushToDom(data);
    });
  }
}


// Show the GIF
function pushToDom(input) {
  var response = JSON.parse(input);

  var imageUrls = response.data;
  cleanContainer();

  imageUrls.forEach(function (image) {
    var src = image.images.fixed_height.url;

    var container = document.querySelector(".js-container");
    container.innerHTML =
      container.innerHTML + '<img src="' + src + '" class="container-image">';
  });
}

function cleanContainer() {
  var container = document.querySelector(".js-container");
  container.innerHTML = "";
}

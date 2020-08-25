function addProject(imgSource, title, year, desc, tags) {
  var projectContainer = document.getElementById("projects");

  var newitem = document.createElement("div");
  newitem.classList.add("item");
  newitem.classList.add("fade-in"); // TODO: replace
  projectContainer.appendChild(newitem);

  var newImg = document.createElement("div");
  newImg.classList.add("img");
  newImg.classList.add("item-container");
  newitem.appendChild(newImg);

  var img = document.createElement("img");
  img.src = imgSource;
  newImg.appendChild(img);

  var newDesc = document.createElement("div");
  newDesc.classList.add("desc");
  newDesc.classList.add("item-container");
  // newDesc.classList.add("from-right"); // TODO: replace
  newitem.appendChild(newDesc);

  var newHeading = document.createElement("h3");
  newHeading.classList.add("heading");
  newHeading.textContent = title;
  newDesc.appendChild(newHeading);

  var newStats = document.createElement("div");
  newStats.classList.add("stats");
  newDesc.appendChild(newStats);

  var developedIn = document.createElement("p");
  developedIn.classList.add("backfont");
  developedIn.textContent = "Developed in ";
  newStats.appendChild(developedIn);

  var tagContainer = document.createElement("div");
  tagContainer.classList.add("tags");
  newStats.appendChild(tagContainer);

  var yearTag = document.createElement("div");
  yearTag.classList.add("tag");
  yearTag.textContent = year;
  tagContainer.appendChild(yearTag);

  var newWrapper = document.createElement("div");
  newWrapper.classList.add("p-wrapper");
  newDesc.appendChild(newWrapper);

  for (const value of desc) {
    var temp = document.createElement("p");
    temp.textContent = value;
    newWrapper.appendChild(temp);
  }

  var newTagList = document.createElement("div");
  newTagList.classList.add("tags");
  newDesc.appendChild(newTagList);

  for (const value of tags) {
    var temp = document.createElement("div");
    temp.classList.add("tag");
    temp.textContent = value;
    newTagList.appendChild(temp);
  }
}

function requestProjectsFromJSON() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var response = JSON.parse(xhttp.responseText);
      var projects = response.projects;

      for (const value of projects) {
        addProject(value.img, value.title, value.year, value.desc, value.tags);
      }
    }
  };

  // False makes request synchronous and ensures projects have finished loading
  xhttp.open("GET", "assets/json/projects.json", false);
  xhttp.send();
}

window.addEventListener("load", function () {
  requestProjectsFromJSON();
  displayPage();
  activateGSAPAnimations();
  document.classList.remove("is-preload");
});

function addProject(imgSource, title, year, desc, tags) {
  var projectContainer = document.getElementById("projects");

  var newitem = document.createElement("div");
  newitem.classList.add("item");

  var newImg = document.createElement("div");
  newImg.classList.add("img");

  var img = document.createElement("img");
  img.src = imgSource;

  var newDesc = document.createElement("div");
  newDesc.classList.add("desc");

  var newWrapper = document.createElement("div");
  newWrapper.classList.add("p-wrapper");

  var newHeading = document.createElement("h3");
  newHeading.classList.add("heading");
  newHeading.textContent = title;
  newWrapper.appendChild(newHeading);

  var newStats = document.createElement("div");
  newStats.classList.add("stats");
  newWrapper.appendChild(newStats);

  var developedIn = document.createElement("p");
  developedIn.textContent = "Developed in: ";
  var yearTag = document.createElement("div");
  yearTag.classList.add("tag");
  yearTag.textContent = year;
  newStats.appendChild(developedIn);
  newStats.appendChild(yearTag);

  for (const value of desc) {
    var temp = document.createElement("p");
    temp.textContent = value;
    newWrapper.appendChild(temp);
  }

  var newTagList = document.createElement("div");
  newTagList.classList.add("tags");

  for (const value of tags) {
    var temp = document.createElement("div");
    temp.classList.add("tag");
    temp.textContent = value;
    newTagList.appendChild(temp);
  }

  newImg.appendChild(img);
  newitem.appendChild(newImg);

  newDesc.appendChild(newWrapper);
  newDesc.appendChild(newTagList);
  newitem.appendChild(newDesc);
  projectContainer.appendChild(newitem);
}

function loadJSON() {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var response = JSON.parse(xhttp.responseText);
      var projects = response.projects;

      for (const value of projects) {
        addProject(value.img, value.title, value.year, value.desc, value.tags);
      }
    }
  };

  xhttp.open("GET", "assets/json/projects.json", true);
  xhttp.send();
}



loadJSON();

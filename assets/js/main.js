function test(imgSource, title, p, tags) {
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

    for (const value of p) {
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

var p1 = "Starman’s Roadtrip To Mars is a fully functional game written in C++ and OpenGL. The idea is dedicated to Elon Musk’s Falcon Heavy Launch which contained a tesla model s with a dummy that should reach mars."

var p2 = "Despite being a game, we set the focus on the game engine development itself. I implemented several effects such as particle systems, HDR, cell shading as well as native PhysX implementation."

var tags = ["C/C++", "GLSL", "OpenGL", "PhysX"];

test("assets/images/03-starman.png", "Starman's roadtrip to mars", [p1, p2], tags);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel(){
  let carousel = document.createElement("div");
  carousel.classList.add("carousel");

  let leftBtn = document.createElement("div");
  leftBtn.classList.add("left-button");

  let img1 = document.createElement("img");
  img1.src = "./assets/carousel/mountains.jpeg";
  img1.style.display = "block";

  let img2 = document.createElement("img");
  img2.src = "./assets/carousel/computer.jpeg";

  let img3 = document.createElement("img");
  img3.src = "./assets/carousel/trees.jpeg";

  let img4 = document.createElement("img");
  img4.src = "./assets/carousel/turntable.jpeg";

  let rightBtn = document.createElement("div");
  rightBtn.classList.add("right-button");

  carousel.appendChild(leftBtn);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightBtn);

  let imgArr = [img1, img2, img3, img4];

  rightBtn.addEventListener("click", e => {
    let currentImg = imgArr[0];
    for (let i=0; i<imgArr.length; i++){
      if(imgArr[i].style.display === "block"){
        currentImg = imgArr[i]
      }
    }
    let index = imgArr.indexOf(currentImg);
      if (imgArr[index+1] !== undefined){
        // imgArr[index].style.display = "none";
        // imgArr[index+1].style.display = "block";
        // $(imgArr[index]).hide(1000);
        // $(imgArr[index+1]).show(1000);
        $(imgArr[index]).animate({width:'toggle'},"slow");
        $(imgArr[index+1]).animate({width:'toggle'},"slow");

      } else{
        // imgArr[index].style.display = "none";
        // imgArr[0].style.display = "block";
        // $(imgArr[index]).hide(1000);
        // $(imgArr[0]).show(1000);
        $(imgArr[index]).animate({width:'toggle'},"slow");
        $(imgArr[0]).animate({width:'toggle'},"slow");
      }
  });

  leftBtn.addEventListener("click", e => {
    let currentImg = imgArr[0];
    for (let i=0; i<imgArr.length; i++){
      if(imgArr[i].style.display === "block"){
        currentImg = imgArr[i]
      }
    }
    let index = imgArr.indexOf(currentImg);
      if (imgArr[index-1] !== undefined){
        // imgArr[index].style.display = "none";
        // imgArr[index-1].style.display = "block";
        // $(imgArr[index]).hide(1000);
        // $(imgArr[index-1]).show(1000);
        $(imgArr[index]).animate({width:'toggle'},"slow");
        $(imgArr[index-1]).animate({width:'toggle'},"slow");
      } else{
        // imgArr[index].style.display = "none";
        // imgArr[imgArr.length-1].style.display = "block";
        // $(imgArr[index]).hide(1000);
        // $(imgArr[imgArr.length-1]).show(1000);
        $(imgArr[index]).animate({width:'toggle'},"slow");
        $(imgArr[imgArr.length-1]).animate({width:'toggle'},"slow");
      }
  });
  
  return carousel;
}

let carParent = document.querySelector(".carousel-container");
carParent.appendChild(createCarousel());

// console.log(createCarousel());


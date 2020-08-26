const imageArray = [
  "../dist/img/a.jpg",
  "../dist/img/b.jpg",
  "../dist/img/c.jpg",
  "../dist/img/d.jpg",
];

const selectButtons = document.getElementById("selectButtons");
for (let j = 0; j < imageArray.length; j++) {
  const selectButton = document.createElement("button");
  selectButton.id = j;
  selectButton.className = "selectButton";
  selectButton.addEventListener("click", function () {
    document.getElementById("images").src =
      imageArray[selectButton.getAttribute("id")];
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(changeImg, 5000);
    selectedButton(selectButton.getAttribute("id"));
    i = selectButton.getAttribute("id");
  });
  selectButtons.appendChild(selectButton);
}

const selectedButton = (id) => {
  const buttonContainer = document.querySelectorAll(".selectButton");
  buttonContainer.forEach((element) => {
    element.style.border = "none";
  });
  document.getElementById(id).style.border = "3px solid grey";
};

document.getElementById("images").src = imageArray[2];
selectedButton(2);

let i = -1;

changeImg = () => {
  i >= 3 ? (i = 0) : i++;
  selectedButton(i);
  document.getElementById("images").src = imageArray[i];
  window.clearTimeout(timeoutHandle);
  timeoutHandle = window.setTimeout(changeImg, 5000);
};
changeImg();

var timeoutHandle = window.setTimeout(changeImg, 5000);

document.getElementById("prev").addEventListener("click", function () {
  i <= 0 ? (i = 3) : (i -= 1);
  document.getElementById("images").src = imageArray[i];
  selectedButton(i);
  window.clearTimeout(timeoutHandle);
  timeoutHandle = window.setTimeout(changeImg, 5000);
});

document.getElementById("next").addEventListener("click", function () {
  i >= 3 ? (i = 0) : (i = +i + +1);
  document.getElementById("images").src = imageArray[i];
  selectedButton(i);
  window.clearTimeout(timeoutHandle);
  timeoutHandle = window.setTimeout(changeImg, 5000);
});

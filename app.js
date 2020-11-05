let myName = "Emma";
(function () {
  const outDoorElement = document.querySelector(".out-door");
  const enterButtonElement = document.querySelector(".enter-button");
  const imageElement = document.querySelector(".background-image");
  const inputContainerElement = document.querySelector(".input-container");
  const inputElement = document.querySelector(".input-field");
  const titleElement = document.querySelector(".title");

  // Listen for click on "enter"-button, create and dispatch custom event
  enterButtonElement.addEventListener("click", (event) => {
    const customEvent = new CustomEvent("enterDoor", {
      detail: inputElement.value,
      bubbles: true,
    });
    titleElement.dispatchEvent(customEvent);
    // titleElement.dispatchEvent(event);
  });

  // Listen for "enterDoor"-event on title-element and change text
  titleElement.addEventListener("enterDoor", (event) => {
    titleElement.innerHTML = `Välkommen hit ${event.detail} \<br\> önskar ${myName}`;
  });

  // Listen for "enterDoor"-event on image-element and build new page
  const body = document.querySelector("body");
  body.addEventListener("enterDoor", () => {
    outDoorElement.innerHTML = "";
    inputContainerElement.innerHTML = "";
    imageElement.src = "img/background-image-3497025.jpg";
    const poem = document.createElement("p");
    poem.innerText = "Vatten är blött";
    outDoorElement.append(poem);
  });
})();

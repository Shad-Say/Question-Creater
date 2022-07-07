addOptions.addEventListener("click", optionsAdder);
removeOptions.addEventListener("click", optionsRemover);

questionTypeButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    return questionTypeChanger(event.target);
  });
});

submitButton.addEventListener("click", questionPoster);

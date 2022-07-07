const multipleOptionsContainer = document.getElementById(
  "multiple-option-container"
) as HTMLElement;
const addOptions = document.getElementById("add-options") as HTMLButtonElement;
const removeOptions = document.getElementById(
  "remove-options"
) as HTMLButtonElement;
const questionTypeButton = document.querySelectorAll(".question-type-button")!;
const submitButton = document.getElementById(
  "submit-button"
) as HTMLButtonElement;
const question = document.getElementById("question-box") as HTMLInputElement;
const display = document.getElementById("display-section") as HTMLDivElement;

const questionTypeIds: { [key: string]: string } = {
  "text-question": "6299b4ffe3d2004c0a545c38",
  "numeric-question": "6299b4ffe3d2004c0a545c39",
  "dropdown-question": "6299b4ffe3d2004c0a545c36",
  "checkbox-question": "6299b4ffe3d2004c0a545c37",
};

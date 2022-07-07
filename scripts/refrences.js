"use strict";
const multipleOptionsContainer = document.getElementById("multiple-option-container");
const addOptions = document.getElementById("add-options");
const removeOptions = document.getElementById("remove-options");
const questionTypeButton = document.querySelectorAll(".question-type-button");
const submitButton = document.getElementById("submit-button");
const question = document.getElementById("question-box");
const display = document.getElementById("display-section");
const questionTypeIds = {
    "text-question": "6299b4ffe3d2004c0a545c38",
    "numeric-question": "6299b4ffe3d2004c0a545c39",
    "dropdown-question": "6299b4ffe3d2004c0a545c36",
    "checkbox-question": "6299b4ffe3d2004c0a545c37",
};

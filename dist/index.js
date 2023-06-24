"use strict";
const btn_action_format = document.querySelector(".form-button");
const container_text_formated = document.querySelector(".container-text-formated");
const label_text_formated = document.querySelector(".text-formate-span");
const form_error_input = document.querySelector(".form-error-input");
function createFileName(exercise, fileExtension) {
    const splitExerciseTitle = exercise.split(".");
    let newExerciseTitle = splitExerciseTitle[1];
    newExerciseTitle = newExerciseTitle.toLowerCase().trim();
    newExerciseTitle = newExerciseTitle.split(" ").join("-");
    if (fileExtension == undefined) {
        return `${splitExerciseTitle[0]}-${newExerciseTitle}`;
    }
    return `${splitExerciseTitle[0]}-${newExerciseTitle}.${fileExtension}`;
}
function formatName(event) {
    event.preventDefault();
    const input_exercice_name = document.querySelector("#input-file-name");
    const input_exercice_extension = document.querySelector("#input-extension-name");
    errorToogle(false);
    validateInput(input_exercice_name.value, input_exercice_extension.value);
}
function validateInput(exercise_name, exercise_extension) {
    const validateTheExercise = exercise_name.includes(".");
    if (exercise_name == "" || !validateTheExercise) {
        errorToogle(true);
        return false;
    }
    if (exercise_extension == "") {
        containerToogle();
        label_text_formated.value = createFileName(exercise_name);
        return false;
    }
    containerToogle();
    label_text_formated.value = createFileName(exercise_name, exercise_extension);
}
function containerToogle() {
    container_text_formated === null || container_text_formated === void 0 ? void 0 : container_text_formated.classList.remove("container-text-formated__hidden");
    container_text_formated === null || container_text_formated === void 0 ? void 0 : container_text_formated.classList.add("container-text-formated__visible");
}
function errorToogle(showError) {
    if (showError) {
        form_error_input.classList.remove("hidden");
        form_error_input.classList.add("visible");
    }
    else {
        form_error_input.classList.add("hidden");
        form_error_input.classList.remove("visible");
    }
}
function clipBoard() {
    const copyText = document.querySelector(".text-formate-span");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado com sucesso :) ");
}

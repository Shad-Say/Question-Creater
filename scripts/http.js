"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = "https://forms-47.herokuapp.com/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM2M2E0NDljMWE5Njg5ZTlkNzk5MzciLCJuYW1lIjoiU2hhcmR1bCIsImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMiR4SFFoWFdnanFKZ3Q5dHBlaEdXUlNPdkIvSE9nNUhUUkN0Ty9lNm1hdUxScUdydnpMczNaQyIsInJvbGUiOiI2Mjk5YjRmZmUzZDIwMDRjMGE1NDVjMzIiLCJpYXQiOjE2NTcxNTgyNDksImV4cCI6MTY1NzI0NDY0OX0.Gid7zrPc04Kx4sIMY6j1tGMlOlsaWGKu3aVbpRSiT4c";
const postQuestion = (question) => __awaiter(void 0, void 0, void 0, function* () {
    const responseFromPost = yield fetch(`${baseUrl}question`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(question),
    });
    return yield responseFromPost.json();
});
const getAllQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    const getResponse = yield fetch(`${baseUrl}question`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
    return yield getResponse.json();
});
const deleteQuestion = (index) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteResponse = yield fetch(`${baseUrl}question/${index}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
    return yield deleteResponse.json();
});
const shiftQuestion = (questionId, shiftOperation) => __awaiter(void 0, void 0, void 0, function* () {
    const patchResponse = yield fetch(`${baseUrl}question/shift/${questionId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify({ shiftAction: shiftOperation }),
    });
    return patchResponse.json();
});

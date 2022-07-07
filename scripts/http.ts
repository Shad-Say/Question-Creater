const baseUrl = "https://forms-47.herokuapp.com/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM2M2E0NDljMWE5Njg5ZTlkNzk5MzciLCJuYW1lIjoiU2hhcmR1bCIsImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMiR4SFFoWFdnanFKZ3Q5dHBlaEdXUlNPdkIvSE9nNUhUUkN0Ty9lNm1hdUxScUdydnpMczNaQyIsInJvbGUiOiI2Mjk5YjRmZmUzZDIwMDRjMGE1NDVjMzIiLCJpYXQiOjE2NTcxNTgyNDksImV4cCI6MTY1NzI0NDY0OX0.Gid7zrPc04Kx4sIMY6j1tGMlOlsaWGKu3aVbpRSiT4c";

//Interface

interface Iquestion {
  text: string;
  type: string;
  Options?: string[];
}

const postQuestion = async (question: any) => {
  const responseFromPost = await fetch(`${baseUrl}question`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(question),
  });
  return await responseFromPost.json();
};

const getAllQuestions = async () => {
  const getResponse = await fetch(`${baseUrl}question`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return await getResponse.json();
};

const deleteQuestion = async (index: number) => {
  const deleteResponse = await fetch(`${baseUrl}question/${index}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return await deleteResponse.json();
};

const shiftQuestion = async (questionId: string, shiftOperation: string) => {
  const patchResponse = await fetch(`${baseUrl}question/shift/${questionId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ shiftAction: shiftOperation }),
  });
  return patchResponse.json();
};

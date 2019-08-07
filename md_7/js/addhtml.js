"use strict";

import quiz from "./quiz-data.js";

const form = document.querySelector("form");
form.classList.add("js-form");

function createTest(quiz) {
  const fragment = document.createDocumentFragment();

  const h1 = document.createElement("h1");
  h1.classList.add("js-h1");
  h1.textContent = quiz.title;
  fragment.append(h1);

  for (let i = 0; i < quiz.questions.length; i += 1) {
    const section = document.createElement("section");
    section.classList.add("js-sectionOne");
    fragment.append(section);

    const ol = document.createElement("ol");
    ol.classList.add("ol");
    section.append(ol);

    for (let k = 0; k < quiz.questions[i].choices.length; k += 1) {
      const li = document.createElement("li");
      ol.append(li);

      const label = document.createElement("label");
      li.append(label);

      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", `${i}`);
      input.setAttribute("value", `${k}`);
      input.setAttribute("required", "");

      let text = quiz.questions[i].choices[k];
      label.append(input, text);
    }
    const h3 = document.createElement("h3");
    h3.textContent = quiz.questions[i].question;
    section.prepend(h3);
  }
  form.prepend(fragment);
}

createTest(quiz);

const button = document.querySelector("button");
button.classList.add("js-button");

form.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const data = {};

  formData.forEach((value, name) => {
    data[name] = value;
  });

  let score = 0;

  for (let j = 0; j < quiz.questions.length; j += 1) {
    if (Number(data[j]) === quiz.questions[j].answer) {
      score += 16.5;
    }
  }
  let victory = "Тест провалено";
  if (score > 80) {
    victory = "Тест пройдено успішно";
  }

  alert(`${victory}  Відсоток вірних відповідей ${score}%`);
});

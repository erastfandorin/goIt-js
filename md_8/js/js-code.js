"use strict";

import gallery from "./gallery-items.js";

const ul = document.querySelector(".gallery");

for (let j = 0; j < gallery.length; j += 1) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  ul.append(li);

  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.setAttribute("href", `${gallery[j].original}`);
  li.append(a);

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", `${gallery[j].preview}`);
  img.setAttribute("data-source", `${gallery[j].original}`);
  img.setAttribute("alt", `${gallery[j].description}`);
  a.append(img);

  const span = document.createElement("span");
  span.classList.add("gallery__icon");
  a.append(span);

  const i = document.createElement("i");
  i.classList.add("material-icons");
  i.textContent = "zoom_out_map";
  span.append(i);
}

const openlightbox = document.querySelector(".lightbox___image");
const div = document.querySelector(".lightbox");
ul.addEventListener("click", open)

function open() {
  event.preventDefault();
  div.classList.add("is-open");
  openlightbox.setAttribute("src", `${event.target.dataset.source}`);
  openlightbox.setAttribute("alt", `${event.target.alt}`);
  window.addEventListener("keydown", closeKey)
};

const closelightboxButton = document.querySelector(".lightbox__button");
closelightboxButton.addEventListener("click", closeButton);

function closeButton () {
  div.classList.remove("is-open");
};

const closelightbox = document.querySelector(".lightbox__content");
closelightbox.addEventListener("click", close);

function close () {
  if (event.target !== event.currentTarget) {
    return;
  };
  div.classList.remove("is-open");
};

function closeKey(event) {
  if (event.code !== "Escape") {
    return;
  };
  div.classList.remove("is-open");
};



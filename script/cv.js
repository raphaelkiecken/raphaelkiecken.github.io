let currentContent;
let baseProfileTextHeight;

window.onload = init;

function init() {
  const content = document.getElementsByClassName('content');
  for (let i = 0; i < content.length; i++) {
    content[i].style.opacity = 0;
  }
  changeContent(0);
}

function changeContent(id) {
  const content = document.getElementsByClassName('content');
  if (currentContent === id) return;
  if (currentContent === undefined) currentContent = id;
  content[currentContent].style.opacity = 0;
  content[id].style.opacity = 1;
  currentContent = id;
}
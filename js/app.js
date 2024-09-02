function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("Text successfully copied to clipboard.");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}

function applyActionToElements(action, ...elements) {
  elements.forEach(element => {
    if (element instanceof Element) {
      action(element);
    } else {
      console.warn("Not an HTML element:", element);
    }
  });
}

function temporarilyOverrideImgAndStyle(milliseconds= 3000, ...elements) {
  applyActionToElements((element) => element.classList.add('override-image'), ...elements);
  setTimeout(
    () => applyActionToElements((element) => element.classList.remove('override-image'),
      ...elements
    ),
    milliseconds
  );
}

const copyEmailButton = document.getElementById('copy-email-button');
const copyEmailButtonImg = copyEmailButton.querySelector('img');
const copyEmailButtonPopUp = copyEmailButton.querySelector('span');
copyEmailButton.addEventListener('click', () => {
  copyTextToClipboard("hellomarvelorleans@gmail.com");
  temporarilyOverrideImgAndStyle(
      1500,
    copyEmailButton,
    copyEmailButtonImg,
    copyEmailButtonPopUp
  );
});



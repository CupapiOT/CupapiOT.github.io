function applyActionToElements(action, ...elements) {
  elements.forEach((element) => {
    if (element instanceof Element) {
      action(element);
    } else {
      console.warn("Not an HTML element:", element);
    }
  });
}

// Navigation Bar "Close after pressing button" logic.

function uncheckCheckbox(checkbox) {
  checkbox.checked = false;
}

const hamburgerMenu = document.getElementById("hamburger-menu__toggle");
const hamburgerMenuLinks = document.getElementsByClassName("dropdown__link");
for (let i = 0; i < hamburgerMenuLinks.length; i++) {
  hamburgerMenuLinks[i].addEventListener("click", () => {
    uncheckCheckbox(hamburgerMenu);
  });
}

// Copy Email Button

function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text successfully copied to clipboard.");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  } else {
    // Fallback for browsers that don't support the Clipboard API.
    const temporaryTextArea = document.createElement("textarea");
    temporaryTextArea.value = text;
    document.body.appendChild(temporaryTextArea);
    temporaryTextArea.select();
    temporaryTextArea.setSelectionRange(0, 99999);

    try {
      document.execCommand("copy");
      console.log("Fallback: Text successfully copied to clipboard.");
    } catch (error) {
      console.error("Fallback: Failed to copy text: ", error);
    }

    document.body.removeChild(temporaryTextArea);
  }
}

function temporarilyOverrideImgAndStyle(milliseconds = 3000, ...elements) {
  applyActionToElements(
    (element) => element.classList.add("override-image"),
    ...elements
  );
  setTimeout(
    () =>
      applyActionToElements(
        (element) => element.classList.remove("override-image"),
        ...elements
      ),
    milliseconds
  );
}

function copyEmailButtonEventListener(
  action,
  copyEmailButton,
  copyEmailButtonImg,
  copyEmailButtonPopUp
) {
  copyEmailButton.addEventListener(action, () => {
    copyTextToClipboard("hellomarvelorleans@gmail.com");
    temporarilyOverrideImgAndStyle(
      1500,
      copyEmailButton,
      copyEmailButtonImg,
      copyEmailButtonPopUp
    );
  });
}

const copyEmailButton = document.getElementById("copy-email-button");
const copyEmailButtonImg = copyEmailButton.querySelector("img");
const copyEmailButtonPopUp = copyEmailButton.querySelector("span");

copyEmailButtonEventListener(
  "click",
  copyEmailButton,
  copyEmailButtonImg,
  copyEmailButtonPopUp
);
copyEmailButtonEventListener(
  "touchstart",
  copyEmailButton,
  copyEmailButtonImg,
  copyEmailButtonPopUp
);

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
}

const button = document.getElementById('copy-email-button');
button.addEventListener('click', () => {
  copyTextToClipboard('hellomarvelorleans@gmail.com');
});

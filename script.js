function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    return window.clipboardData.setData("Text", text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return prompt("Copy to clipboard: Ctrl+C, Enter", text);
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

function generatePassword() {
  const passwordContainer = document.getElementById("password");
  passwordContainer.innerHTML = "";
  var capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nonCapitalCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  for (let i = 0; i < 2; i++) {
    passwordContainer.innerHTML += capitalCharacters.charAt(
      Math.floor(Math.random() * capitalCharacters.length)
    );
  }
  passwordContainer.innerHTML += "_";
  for (let i = 0; i < 4; i++) {
    passwordContainer.innerHTML += nonCapitalCharacters.charAt(
      Math.floor(Math.random() * nonCapitalCharacters.length)
    );
  }
  for (let i = 0; i < 4; i++) {
    passwordContainer.innerHTML += numbers.charAt(
      Math.floor(Math.random() * numbers.length)
    );
  }
  copyToClipboard(passwordContainer.innerHTML);
}

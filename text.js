let speech = new SpeechSynthesisUtterance();
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

// this is js file

// giving up is not even in the blood sir.

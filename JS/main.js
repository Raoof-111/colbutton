
const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  let colors = ["red", "blue", "green", "yellow","brown","teal","black"  ];
  let container = document.getElementById("res");
  container.innerHTML = '';
  for (let i = 0; i < 4; i++) {
      let randomColorIndex = Math.floor(Math.random() * colors.length);
      let randomColor = colors[randomColorIndex];
      let button = document.createElement("button");
      button.style.color = randomColor;
      button.textContent = "Bildiriş " + (i+1);
      container.appendChild(button);
      setTimeout(function(btn) {
          return function() {
              container.removeChild(btn);
          }
      }(button), (i + 1) * 1000);
  }
})
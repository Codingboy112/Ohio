let button = document.getElementById("button");
let audio = document.getElementById("audio")

function startSnowfall() {
  setInterval(createSnowflake, 100);
  button.style.display = "none";
  audio.play();
  audio.loop = true;
  
}

function createSnowflake() {
  const snowflake = document.createElement("i");
  snowflake.classList.add("bi", "bi-snow", "snowflake");
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = Math.random() * 3 + 3 + "s";
  snowflake.style.fontSize = Math.random() * 5 + "em";
  document.body.appendChild(snowflake);
}

button.addEventListener("click", startSnowfall);

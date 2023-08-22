window.addEventListener("load", start);

let rndNum;

function start() {
  rndNum = Math.floor(Math.random() * 101);
  klikKnap();
  document.querySelector("#fejring").classList.add("hidden");
}

function klikKnap() {
  console.log("klikKnap");
  document.querySelector("#button").addEventListener("click", tjekSvar);
}

function tjekSvar() {
  console.log("tjekSvar");
  let svar = parseInt(document.querySelector("#tjekInput").value);

  if (svar === rndNum) {
    document.querySelector(
      "#output"
    ).textContent = `Tillykke! Du gættede tallet ${rndNum}`;
    document.querySelector("#fejring").classList.remove("hidden");
  } else if (svar < rndNum) {
    document.querySelector("#output").textContent = "Dit gæt er for lavt.";
  } else {
    document.querySelector("#output").textContent = "Dit gæt er for højt.";
  }
}

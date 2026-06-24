let safeScore = 0;
let wrongScore = 0;
let player = "";

function startGame() {
   player = prompt("Enter your name:");
   document.getElementById("playerName").innerText = player || "Player";
   go("dashboard");
}

function go(id) {
   document
      .querySelectorAll(".screen")
      .forEach((s) => s.classList.remove("active"));
   document.getElementById(id).classList.add("active");
}

function safe() {
   safeScore += 10;
   document.getElementById("safeScore").innerText = safeScore;
   go("dashboard");
}

function wrong() {
   wrongScore++;
   document.getElementById("wrongScore").innerText = wrongScore;
   alert("❌ Unsafe choice! Stay alert.");
   go("dashboard");
}

function finishGame() {
   if (safeScore >= 30) {
      showReward();
   } else {
      document.getElementById("finalSafe").innerText = safeScore;
      document.getElementById("finalWrong").innerText = wrongScore;
      go("end");
   }
}

function showReward() {
   const gifts = [
      "🏆 Scam Awareness Champion Badge",
      "🎖️ Cyber Safety Hero",
      "📘 Advanced Safety Tips Access",
      "🛡️ Trusted Digital Citizen"
   ];

   document.getElementById("giftText").innerText =
      gifts[Math.floor(Math.random() * gifts.length)];

   document.getElementById("finalScore").innerText = safeScore;
   go("reward");
}

function downloadCertificate() {
   alert(
      "📜 Certificate Generated\n\n" +
         "Name: " +
         player +
         "\nAchievement: Cyber Safety Awareness"
   );
}
function restartGame() {
   safeScore = 0;
   wrongScore = 0;

   document.getElementById("safeScore").innerText = 0;
   document.getElementById("wrongScore").innerText = 0;

   document.getElementById("finalSafe").innerText = "";
   document.getElementById("finalWrong").innerText = "";
   document.getElementById("finalScore").innerText = "";
   document.getElementById("giftText").innerText = "";

   go("start");
}

import { a3capasUniverso } from "../../declarations/a3capasUniverso";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with a3capasUniverso actor, calling the greet method
  const greeting = await a3capasUniverso.greet(name);

  document.getElementById("greeting").innerText = greeting;
});

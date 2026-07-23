document.addEventListener("DOMContentLoaded", function () {
  var navHTML = `
  <div class="brand">
    <img src="assets/img/Logo_212th.png" alt="Logo 212th">
    212TH BATAILLON
  </div>
  <ul>
    <li><a href="index.html">🏠 Accueil</a></li>
    <li><a href="effectif.html">👥 Effectif</a></li>
    <li><a href="reglement.html">📃 Règlement</a></li>
    <li><a href="reglement-tenues.html">🧥 Règlement tenues</a></li>
    <li><a href="decorations-internes.html">🎖️ Décorations internes</a></li>
    <li><span>👨‍🏫 Formation initiale ⌄</span>
      <div class="dropdown">
        <a href="recrutement-ct-asp.html">Recrutement CT ASP</a>
        <a href="formation-au-pilotage.html">Formation au pilotage</a>
        <a href="manuel-de-linstructeur.html">Manuel de l'instructeur</a>
        <a href="manuel-du-ct.html">Manuel du CT</a>
        <a href="formation-parachutage.html">Formation Parachutage</a>
      </div>
    </li>
    <li><span>🗂️ Informations complémentaires ⌄</span>
      <div class="dropdown">
        <a href="referentiel-promotion.html">Référentiel promotion</a>
        <a href="commandement-212th.html">Commandement 212th</a>
        <a href="operateur-radio.html">Opérateur Radio</a>
        <a href="personnages-rp.html">Personnages RP</a>
        <a href="licence-pilote-flotte.html">Licence Pilote de la Flotte</a>
      </div>
    </li>
    <li><span>🗂️ Documents Spécialisations ⌄</span>
      <div class="dropdown">
        <a href="heavy-compagnie.html">Heavy Compagnie</a>
        <a href="compagnie-dolly.html">Compagnie Dolly</a>
        <a href="compagnie-fantome.html">Compagnie Fantôme</a>
        <a href="arc-rogue.html">ARC Rogue</a>
        <a href="jedi.html">Jedi</a>
      </div>
    </li>
    <li><a href="site-formation-pilotage.html">✈️ Site formation pilotage</a></li>
  </ul>`;
  var footerHTML = "212TH BATAILLON D'ATTAQUE — USAGE INTERNE UNIQUEMENT";

  var navSlot = document.getElementById("site-nav");
  if (navSlot) { navSlot.innerHTML = navHTML; navSlot.classList.add("nav"); }
  var footSlot = document.getElementById("site-footer");
  if (footSlot) { footSlot.innerHTML = footerHTML; footSlot.classList.add("footer"); }
});

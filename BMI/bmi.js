'use strict';

function rezultat() {
  const greutate = parseInt(document.getElementById('greutate').value);
  if (greutate === null || isNaN(greutate)) {
    alert('Va rugam sa introduceti greutatea');
    return;
  }
  if (greutate >= 321 || greutate <= 9) {
    alert('Va rugam sa introduceti greutatea intre 10 si 320');
    return;
  }
  const inaltime = parseInt(document.getElementById('inaltime').value);
  if (inaltime === null || isNaN(inaltime)) {
    alert('Va rugam sa introduceti inaltimea');
    return;
  }
  if (inaltime >= 221 || inaltime <= 29) {
    alert('Va rugam sa introduceti inaltimea intre 30 si 220');
    return;
  }
  const rezultat = greutate / (inaltime / 100) ** 2;
  document.getElementById('afisaj').innerHTML = rezultat.toFixed(2);
}

'use strict';

//const greutate = prompt('Ce greutate ai (in kilograme)?');
//const inaltime = prompt('Ce inaltime ai (in centimetri)?');

function rezultat() {
    const greutate = parseInt(document.getElementById("greutate").value);
    if (greutate === null || isNaN(greutate)) {
        alert("Va rugam sa introduceti greutatea");
        return;
    }
    if (greutate >= 321 || greutate <= 9) {
        alert("Va rugam sa introduceti greutatea intre 10 si 320");
        return;
    }
    const inaltime = parseInt(document.getElementById("inaltime").value);
    if (inaltime === null || isNaN(inaltime)) {
        alert("Va rugam sa introduceti inaltimea");
        return;
    }
    if (inaltime >= 221 || inaltime <= 29) {
        alert("Va rugam sa introduceti inaltimea intre 30 si 220");
        return;
    }
    const rezultat = greutate / ((inaltime / 100) ** 2);
    document.getElementById('afisaj').innerHTML = rezultat.toFixed(2);

}


/* function isNotValidParameter(param) {
    if (Number.isNaN(param) || param === 0) {
        return true;
    } else {
        return false;
    }
}

function calculateBmi() {
    const weight = Number(prompt('Ce greutate ai (in kg)?'));

    if (isNotValidParameter(weight)) {
        alert('Va rugam introduceti o greutate corecta!');
    } else {
        const height = Number(prompt('Ce inaltime ai (in metri)?'));

        if (isNotValidParameter(height)) {
            alert('Va rugam introduceti o inaltime corecta!');
        } else {
            const result = weight / height ** 2; //Math.pow(inaltime, 2);
            let label = 'Obese';
            let color = '#c00';

            if (result < 18.5) {
                label = 'Underweight';
                color = 'cyan';
            } else if (result < 25) {
                label = 'Normal';
                color = '#bada55';
            } else if (result < 30) {
                label = 'Overweight';
                color = 'yellow';
            }

            console.log('%c' + label, 'color: ' + color, result.toFixed(2));
            //console.log(`%c${label}`, `color: ${color}`, result.toFixed(2));

        }
    }
}
for (let i = 0; i < 3; i++) {
    calculateBmi()
} */
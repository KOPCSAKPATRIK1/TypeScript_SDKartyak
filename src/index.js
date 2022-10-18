"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let tomb = [
        {
            "nev": "Maxi Ultra",
            "meret": "128"
        },
        {
            "nev": "Maxi Ultra S",
            "meret": "256"
        },
        {
            "nev": "Maxi Ultra X",
            "meret": "512"
        },
        {
            "nev": "Átlagos SD kártya",
            "meret": "128"
        },
        {
            "nev": "Átlagos SD kártya 2",
            "meret": "256"
        },
        {
            "nev": "Átlagos SD kártya 2.1",
            "meret": "256"
        },
        {
            "nev": "Ólcsó microSD",
            "meret": "32"
        },
        {
            "nev": "Kevésbé olcsó microSD",
            "meret": "64"
        }
    ];
    (_a = document.getElementById('keresInput')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', () => {
        let row = document.getElementById('row');
        let keres = document.getElementById('keresInput').value;
        let div;
        while (row === null || row === void 0 ? void 0 : row.firstChild) {
            row.removeChild(row.firstChild);
        }
        if (keres.length >= 3) {
            for (let element of tomb) {
                if (element.nev.includes(keres)) {
                    div = document.createElement("div");
                    div.classList.add("card-body,");
                    div.classList.add("col-md-4");
                    let img = document.createElement('img');
                    img.src = 'kartya.png';
                    div.appendChild(img);
                    let h1 = document.createElement("h4");
                    h1.textContent = element.nev;
                    div.appendChild(h1);
                    let p = document.createElement("p");
                    p.textContent = "Meret: " + element.meret;
                    div.appendChild(p);
                    row === null || row === void 0 ? void 0 : row.appendChild(div);
                }
            }
        }
    });
});

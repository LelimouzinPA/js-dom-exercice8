"use strict";
const btn_add_input = document.getElementById("btn_add_input");
const form_input_modele = document.getElementById("form_input_modele");
const form_input_adds = document.getElementById("form_input_adds");

btn_add_input.addEventListener('click', function() {
    let nbre_add = Number(btn_add_input.dataset.nbre);
    let nbre_max = Number(btn_add_input.dataset.max);
    if (nbre_add < nbre_max) {
        btn_add_input.dataset.nbre = Number(btn_add_input.dataset.nbre) + 1;
        // -----------
        // on clone le div modele
        let form_input_clone = form_input_modele.cloneNode(true);
        form_input_clone.removeAttribute('id'); // on supprime l attribut id du clone (car un id est unique)
        // -----------
        // bouton de suppression de la ligne
        let button = document.createElement("button");
        button.type = "button";
        button.classList.add("minus");
        button.textContent = "-";
        button.addEventListener( // le bouton "-" supprime tout le div
            "click",
            function(e) {
                form_input_adds.removeChild(e.target.parentElement);
                e.preventDefault();
                btn_add_input.dataset.nbre = Number(btn_add_input.dataset.nbre) - 1;
                btn_add_input.style.display = 'block';
            }
        );
        // -----------
        form_input_clone.appendChild(button);
        form_input_adds.appendChild(form_input_clone);
        // -----------
        // nombre maxi atteint
        if (nbre_add == nbre_max - 1) {
            btn_add_input.style.display = 'none';
        }
        // -----------
    }
});
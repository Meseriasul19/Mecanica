import React from "react";
import "./Teorie.css";

export const Teorie = () => {
  return (
    <div className="cinematica-teorie">

        <div className="cinematica-punct-material">
          <h1>Cinematica punctului material</h1>

          <div className="description-box">

            <div className="description-text"> 
              <h3>TRAIECTORIE</h3>
              <p>  = Locul geometric al pozitiilor succesive ale punctului material in miscare se numeste traiectorie</p>
            </div>

            <div className="description-text"> 
              <p className="info">Traiectoria unui punct material poate fi o curba, un arc de curba sau o succesiune de arce de curba</p>
            </div>

            <div className="description-text"> 
              <p>Miscarea unui punct material se numeste rectilinie daca punctul se deplaseaza pe o dreapta, rectilinie uniforma daca viteza este constanta (v = v<sub>0</sub> = const) sau rectilinie uniform variata daca acceleratia este constanta (a = a<sub>0</sub> = const).</p>
            </div>

            <div className="description-text"> 
              <p>Miscarea unui punct material se numeste circulara daca punctul se deplaseaza pe un cerc. Pozitia punctului este definit de un unghi, format de raza vectoare cu axa de referinta O<sub>x</sub>, iar viteza sa este caracterizata de derivata in raport cu timpul a unghiului, numita viteza unghiulara.</p>
            </div>
          </div>

        </div>

        <div className="cinematica-solid">
          <h1>Cinematica solidului rigid</h1>

          <div className="description-box">

            <div className="description-text-solid"> 
              <h3>Tipuri de miscari</h3>
              <hr></hr>
              <p><b>TRANSLATIE</b> = miscarea in cazul in care orice dreapta a corpului rigid ramane paralela cu ea insasi in tot timpul miscarii (disanta dintre doua puncte ramane constanta)</p>
              <p><b>ROTATIE</b> = miscarea in cazul in care doua puncte raman fixe in tot timpul miscarii</p>
              <p>Cele doua puncte definesc o axa, numita <b>axa de rotatie</b></p>
              <p><b>PLAN-PARALELA</b> = miscarea in cazul in care trei puncte necoliniare raman intr-un plan fix din spatiu, in tot timpul miscarii</p>
            </div>

          </div>

        </div>

    </div>
  );
};
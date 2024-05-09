import React from "react";
import "./Home.css";

export const Home = () => {

  

  return (
      <div className="home">
        <div className="description">
          <h1>GForce</h1>

          <div className="description-box">
            <div className="description-text"> 
              <p>
              GForce este o platformă educațională interactivă dedicată înțelegerii și practicării conceptelor de mecanică într-un mod vizual și interactiv. Cu   GForce, elevii și studenții pot explora și înțelege teoria mecanicii prin intermediul simulărilor practice.
              </p>
            </div>
          </div>

          <div className="description-box">
            <div className="description-text"> 
              <p>
              Platforma se axeaza pe ramura cinematica a mecanicii, care exclude fortele exterioare, luand in considerare doar spatiul si timpul. Sunt utilizate, de asemenea, notiunile derivate ale acestora, precum viteza, acceleratia, viteza unghiulara si acceleratia unghiulara.
              </p>
            </div>
          </div>

        </div>

        <div className="cinematica">

          <h1>Cinematica - Introducere</h1>

          <div className="description-box">

            <div className="description-text"> 
              <p>
                <em>Miscarea unui corp</em> reprezinta modificarea in timp a pozitiei sale in raport cu un anumit <b>reper</b>. Aceasta miscare depinde de reperul ales, astfel un om aflat intr-un vagon de tren in miscare se va misca in raport cu Pamantul, dar acelasi om va fi in repaus in raport cu trenul.
              </p>
            </div>

          </div>

          <img className="arrow" src="\src\assets\arrow-left.svg"></img>

        </div>

        <div className="all-gears">
          <div className="gear"></div>
          <div className="gear2"></div>
        </div>

        <p className="pointA">A</p>
        <p className="pointB">B</p>

      </div>
  );
};
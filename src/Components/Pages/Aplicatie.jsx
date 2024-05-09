import React from "react";
import { useState } from "react";
import Bm from "../Exercises/Biela-manivela/Bm.jsx";
import "./Aplicatie.css";

export const Aplicatie = () => {

  const [selectedSubSection, setSelectedSubSection] = useState(null);
  const [corpuriSectionActive, setCorpuriSectionActive] = useState(false);
  const [isHoveringOA, setisHoveringOA] = useState(false);
  const [isHoveringAB, setisHoveringAB] = useState(false);
  const [isHoveringB, setisHoveringB] = useState(false);
  const [isHoveringv1, setisHoveringv1] = useState(false);
  const [TrajectoryA, setTrajectoryA] = useState(false);
  const [velocityA, setvelocityA] = useState(false);
  const [velocityB, setvelocityB] = useState(false);
  const [angle, setAngle] = useState(1/3);
  const [angleIsChanged, setAngleIsChanged] = useState(false);


  const handleAngleChange = (event) => {
    setAngle(parseFloat(event.target.value)); 
    setAngleIsChanged(true);
  };

  const clickedTrajectoryA = () => {
    setTrajectoryA(!TrajectoryA);
  };

  const clickedVa = () => {
    setvelocityA(!velocityA);
  };

  const clickedVb = () => {
    setvelocityB(!velocityB);
  };


  const handleMouseOverOA = () => {
    setisHoveringOA(true);
  };

  const handleMouseOutOA = () => {
    setisHoveringOA(false);
  };

  const handleMouseOverAB = () => {
    setisHoveringAB(true);
  };

  const handleMouseOutAB = () => {
    setisHoveringAB(false);
  };

  const handleMouseOverB = () => {
    setisHoveringB(true);
  };

  const handleMouseOutB = () => {
    setisHoveringB(false);
  };

  const handleMouseOverv1 = () => {
    setisHoveringv1(true);
  };

  const handleMouseOutv1 = () => {
    setisHoveringv1(false);
  };

  const handleSectionClick = (section) => {
    setSelectedSubSection(section);
  };

  const renderSubSection = () => {
    switch (selectedSubSection) {

      case "corp1":
        return (
        <div className="info-corp">
          <div className="date">
            <h2>Date:</h2>
            <h3>OA</h3>
          </div>
          <div className="study">
            <h2>Studiul cinematic:</h2>
            <h3>Miscare: ROTATIE</h3>
            <div className="angle">
              <h3>Deplasare: θ = π * </h3>
              <input
                  type="number"
                  value={angle} 
                  onInput={handleAngleChange} 
                />
              </div>
            <h3
            onMouseOver={handleMouseOverv1}
            onMouseOut={handleMouseOutv1}>
              Viteza: ω<sub>1</sub>
            </h3>
            <h3>Acceleratie: ε<sub>1</sub></h3>
          </div>
        </div>
        );

      case "corp2":
        return(
        <div className="info-corp">
          <div className="date">
            <h2>Date:</h2>
            <h3>AB</h3>
          </div>
          <div className="study">
            <h2>Studiul cinematic:</h2>
            <h3>Miscare: PLAN-PARALELA</h3>
            <h3>Deplasare: θ<sub>2</sub></h3>
            <h3>Viteza: ω<sub>2</sub></h3>
            <h3>Acceleratie: ε<sub>2</sub></h3>
          </div>
        </div>
        );

      case "corp3":
        return (
        <div className="info-corp">
          <div className="study">
            <h2>Studiul cinematic:</h2>
            <h3>Miscare: TRANSLATIE</h3>
            <h3>Deplasare: x<sub>3</sub></h3>
            <h3>Viteza: v<sub>3</sub></h3>
            <h3>Acceleratie: a<sub>3</sub></h3>
          </div>
        </div>
        );

      default:
        return null;
    }
  }; 

  const [selectedSection, setSelectedSection] = useState(null);

  const handleSubMenuClick = (section) => {
    setSelectedSection(section);
    setSelectedSubSection(null); // Resetăm secțiunea submeniului când selectăm o altă secțiune din meniu
    if (section === "corpuri") {
      setCorpuriSectionActive(true);
    } else {
      setCorpuriSectionActive(false);
    }
  };

  const renderSection = () => {
    switch (selectedSection) {

      case "corpuri":
        return (
        <div className="corpuri">
          <div>
            <h1 
            onMouseOver={handleMouseOverOA}
            onMouseOut={handleMouseOutOA}
            onClick={() => handleSectionClick("corp1")}>
              Corp1: bara OA
            </h1>
          </div>
          <div>
            <h1
            onMouseOver={handleMouseOverAB}
            onMouseOut={handleMouseOutAB}
            onClick={() => handleSectionClick("corp2")}>
              Corp2: bara AB
            </h1>
          </div>
          <div>
            <h1
            onMouseOver={handleMouseOverB}
            onMouseOut={handleMouseOutB} 
            onClick={() => handleSectionClick("corp3")}>
              Corp3: B
            </h1>
          </div>
        </div>
        );

      case "traiectorii":
        return(
        <>
        <div className="trajectory">
          <div className="bg-circle">
          <div onClick={clickedTrajectoryA} className={TrajectoryA ? "circle clicked" : "circle"}></div>
          </div>
          <div className="A">
            A: C(O, OA)
          </div>
        </div>
        <hr></hr>
        </>
        );

      case "viteze":
        return (
          <>

        <div className="repr">
          Reprezentari:
        </div>

        <hr></hr>

        <div className="repr-v">

          <div className="V">
            <div className="bg-circleVa">
              <div onClick={clickedVa} className={velocityA ? "circleVa clicked" : "circleVa"}></div>
            </div>
            <div className="Va">
              V<sub>A</sub> = viteza punctului A
            </div>
          </div>

          <hr></hr>

          <div className="V">
            <div className="bg-circleVb">
              <div onClick={clickedVb} className={velocityB ? "circleVb clicked" : "circleVb"}></div>
            </div>
            <div className="Vb">
              V<sub>B</sub> = viteza punctului B
            </div>
          </div>

          <hr></hr>

        </div>

        <div className="rez">
          Rezolvare:
        </div>

        <hr></hr>
          
        <div>
          V<sub>A</sub> = ω<sub>1</sub> * AO
        </div>
        <hr></hr>
        <div>
          V<sub>A</sub> = ω<sub>2</sub> * IO 
        </div>
        <hr></hr>
        <div>
          V<sub>B</sub> = ω<sub>2</sub> * IB 
        </div>
        <hr></hr>
        <div>
          a<sub>A</sub> = ε<sub>1</sub> * AO
        </div>
        <hr></hr>
        <div>
          a<sub>B</sub> = ε<sub>2</sub> * IB 
        </div>
        <hr></hr>
        <div>
        ω<sub>2</sub> = ω<sub>1</sub> * AO /  IO
        </div>
        <hr></hr>
        <div className="cir">
          I = centrul instantaneu de rotatie (se afla la intersectia axei de rotatie cu planul fix al miscarii)
        </div>
        <div className="cir-info">
          !!!Pozitia CIR-ului se poate afla prin trasarea unor perpendiculare pe vitezele corpului
        </div>
        </>
        );

      default:
        return (
          <div className="info-mec">
            <h1>Mecanismul biela-manivela</h1>
            <p> = transforma miscarea de rotatie in miscare de translatie (mișcare liniară) și/sau invers (viceversa). Cel mai răspândit mecanism de acest gen se întâlnește în motoarele cu ardere internă.</p>
            <img src="src\assets\engine.png"></img>
          </div>
        );
    }
  }; 

  return (
    <div className="main">
      <div className="menu">
        
        <div className="submenu">
          <ul>
            <li onClick={() => handleSubMenuClick("corpuri")}>
              <img className="icon" src="src\assets\corpuri.svg" alt=""></img>
              <h3>Corpuri</h3>
            </li>
            <li onClick={() => handleSubMenuClick("traiectorii")}>
              <img className="icon" src="src\assets\down-arrow.svg" alt=""></img>
              <h3>Traiectorii</h3>
            </li>
            <li onClick={() => handleSubMenuClick("viteze")}>
              <img className="icon" src="src\assets\sprint.svg" alt=""></img>
              <h3>viteze si acceleratii</h3>
            </li>
          </ul>
        </div>

        <div className="mainmenu">
          {renderSection()}
          {corpuriSectionActive && renderSubSection()}
        </div>

      </div>
      <div>
        {isHoveringOA && !angleIsChanged && <p className="o">O</p>}
        {isHoveringOA && !angleIsChanged && <p className="a">A</p>}
        {isHoveringAB && !angleIsChanged && <p className="a">A</p>}
        {isHoveringAB && !angleIsChanged && <p className="b">B</p>}
        {isHoveringB && !angleIsChanged && <p className="b">B</p>}
        {isHoveringv1 && !angleIsChanged && <p className="v1">ω<sub>1</sub></p>}
        <Bm angle={angle} isHoveringOA={isHoveringOA} isHoveringAB={isHoveringAB} isHoveringB={isHoveringB} isHoveringv1={isHoveringv1} TrajectoryA={TrajectoryA} velocityA={velocityA} velocityB={velocityB}/> 
      </div>
    </div>
  );
};
import React from "react";
import { useRef, useEffect, useState } from 'react';
import PropTypes from "prop-types";

function Bm({angle, isHoveringOA, isHoveringAB, isHoveringB, isHoveringv1, TrajectoryA, velocityA, velocityB}) {

    const canvasRef = useRef(null);
   

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 900, 800);

    var anglevalue = angle * Math.PI;
    var OA = 200;
    var AB = 350;
    var r = 5; //raza articulatiilor
    var L = 80; //lungimea corpului
    var l = 40; //latimea corpului
    
    const drawElements = () => {

      //axa y

      ctx.setLineDash([7, 4]);
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(250, 400-r);
      ctx.lineTo(250, 20);
      ctx.stroke();

      ctx.setLineDash([0]);
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(250,20);
      ctx.lineTo(240,30);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(250,20);
      ctx.lineTo(260,30);
      ctx.stroke();

    //reazemul
    ctx.beginPath();
    ctx.arc(250, 400, r, 0, Math.PI * 2); 
    ctx.lineWidth = 2; 
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(250-r,400+r);
    ctx.lineTo(250-r-10,400+r+15);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(250+r,400+r);
    ctx.lineTo(250+r+10,400+r+15);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(250-r-20,400+r+15);
    ctx.lineTo(250+r+20,400+r+15);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r-15,400+r+15);
    ctx.lineTo(250-r-20,400+r+15+5);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r-10,400+r+15);
    ctx.lineTo(250-r-15,400+r+15+5);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r-5,400+r+15);
    ctx.lineTo(250-r-10,400+r+15+5);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r,400+r+15);
    ctx.lineTo(250-r-5,400+r+15+5);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r+5,400+r+15);
    ctx.lineTo(250-r,400+r+15+5);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r+10,400+r+15);
    ctx.lineTo(250-r+5,400+r+15+5);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r+15,400+r+15);
    ctx.lineTo(250-r+10,400+r+15+5);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r+20,400+r+15);
    ctx.lineTo(250-r+15,400+r+15+5);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250-r+25,400+r+15);
    ctx.lineTo(250-r+20,400+r+15+5);
    ctx.stroke();

    //axa x

    ctx.setLineDash([7, 4]);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(250+r,400);
    ctx.lineTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) - L/2, 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) + L/2, 400);
    ctx.lineTo(880, 400);
    ctx.stroke();

    ctx.setLineDash([0]);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(880,400);
    ctx.lineTo(870,390);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(880,400);
    ctx.lineTo(870,410);
    ctx.stroke();

    //bara OA

    if (isHoveringOA) {    
      ctx.strokeStyle = "rgb(255, 221, 64)";
    }
    

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(250,400);
    ctx.lineTo(250 + Math.cos(anglevalue) * OA , 400 - OA * Math.sin(anglevalue));
    ctx.stroke();

    ctx.strokeStyle = "black";
    

    //bara AB

    if (isHoveringAB) { 
      ctx.strokeStyle = "rgb(255, 221, 64)";
    }

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(250 + Math.cos(anglevalue) * OA , 400 -  OA * Math.sin(anglevalue));
    ctx.lineTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))), 400);
    ctx.stroke();

    ctx.strokeStyle = "black";

    //articulatiile

    ctx.beginPath();
    ctx.arc(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))), 400, r, 0, Math.PI * 2);  
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250 + Math.cos(anglevalue) * OA, 400 - OA * Math.sin(anglevalue), r, 0, Math.PI * 2);  
    ctx.stroke();


    //corpul

    if (isHoveringB) { 
      ctx.strokeStyle = "rgb(255, 221, 64)";
    }

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) - L/2 , 400 + l/2);
    ctx.lineTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) - L/2 , 400 - l/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) + L/2, 400 + l/2);
    ctx.lineTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) + L/2 , 400 - l/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) - L/2 , 400 - l/2);
    ctx.lineTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) + L/2 , 400 - l/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) - L/2 , 400 + l/2);
    ctx.lineTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))) + L/2 , 400 + l/2);
    ctx.stroke();

    ctx.strokeStyle = "black";

    
    if(isHoveringv1){
      ctx.strokeStyle = "rgb(255, 221, 64)";

      ctx.beginPath();
      ctx.arc(250, 400, r*3, Math.PI * 2, 0.7 , true); 
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(250+r*3 - 2,400+r*3 - 5);
      ctx.lineTo(250+r*3 - 15,400+r*3 - 10);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(250+r*3 - 2,400+r*3 - 5);
      ctx.lineTo(250+r*3 - 7,400+r*3 + 10);
      ctx.stroke();

      ctx.strokeStyle = "black";
    }
    };

    drawElements();

    const unghi = () => {
      //unghiul
      if (anglevalue*Math.PI >= Math.PI * 2) {
        anglevalue = anglevalue % (Math.PI * 2); // Scad 2π din unghiul angle
        ctx.clearRect(0, 0, 800, 500); // Ștergerea canvasului pentru redesenare

        ctx.beginPath();
        ctx.arc(250, 400, r*7, Math.PI * 2, Math.PI * 2 - anglevalue, true); // Desenare arc
        ctx.stroke();

        drawElements();
      }

      else {
        ctx.beginPath();
        ctx.arc(250, 400, r*7, Math.PI * 2, Math.PI * 2 - anglevalue, true); 
        ctx.stroke();

        drawElements();
      }
    };

    

    //viteza unghiulara


    if(TrajectoryA) {
      ctx.setLineDash([7, 4]);
      ctx.beginPath();
      ctx.arc(250, 400, OA, Math.PI * 2, 0 , true); 
      ctx.strokeStyle = "rgb(0, 248, 0)";
      ctx.stroke();

      ctx.setLineDash([0]);
      ctx.strokeStyle = "black";
     
    }

    else {
      ctx.clearRect(0, 0, 900, 800);
      unghi();
      drawElements();
    }

    ctx.strokeStyle = "black";

    //vitezele

    if(velocityA){

    //Va

    ctx.strokeStyle = "rgb(255, 165, 0)";

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(250 + Math.cos(anglevalue) * OA , 400 -  OA * Math.sin(anglevalue));
    ctx.lineTo(250 + ( OA - 50 * Math.tan(anglevalue ) ) * Math.cos(anglevalue), 400 - (OA *  Math.sin(anglevalue) + 50 *  Math.cos(anglevalue)));
    ctx.stroke();


    //săgetile
    const arrowLength = 20; // Lungimea săgeții
    const arrowAngle = Math.PI / 3; // Unghiul săgeții

    const arrowX = 250 + ( OA - 50 * Math.tan(anglevalue)) * Math.cos(anglevalue); // Coordonata x a capătului săgeții
    const arrowY = 400 - (OA *  Math.sin(anglevalue) + 50 *  Math.cos(anglevalue)); // Coordonata y a capătului săgeții

    const arrowEndX = arrowX - arrowLength * Math.cos(anglevalue + arrowAngle); // Coordonata x a capătului săgeții
    const arrowEndY = arrowY + arrowLength * Math.sin(anglevalue + arrowAngle); // Coordonata y a capătului săgeții

    const arrowStartX = arrowX + arrowLength * Math.cos(anglevalue - arrowAngle); // Coordonata x a capătului săgeții
    const arrowStartY = arrowY - arrowLength * Math.sin(anglevalue - arrowAngle); // Coordonata y a capătului săgeții

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(arrowEndX, arrowEndY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(arrowStartX, arrowStartY);
    ctx.stroke();

    }

    if(velocityB && (angle%2*Math.PI<Math.PI) && (angle%2*Math.PI!=0)){

      ctx.strokeStyle = "rgb(255, 165, 0)";

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))), 400);
      ctx.lineTo(190 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))), 400);
      ctx.stroke();

      //săgetile
      const arrowLength = 20; // Lungimea săgeții
      const arrowAngle = Math.PI / 6; // Unghiul săgeții

      const arrowX = 190 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))); // Coordonata x a capătului săgeții
      const arrowY = 400; // Coordonata y a capătului săgeții

      const arrowEndX = arrowX + arrowLength * Math.cos( arrowAngle); // Coordonata x a capătului săgeții
      const arrowEndY = arrowY - arrowLength * Math.sin(arrowAngle); // Coordonata y a capătului săgeții

      const arrowStartX = arrowX + arrowLength * Math.cos(arrowAngle); // Coordonata x a capătului săgeții
      const arrowStartY = arrowY + arrowLength * Math.sin(arrowAngle); // Coordonata y a capătului săgeții

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(arrowEndX, arrowEndY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(arrowStartX, arrowStartY);
      ctx.stroke();

    }

    else if(velocityB && (angle%2*Math.PI>Math.PI)){
      ctx.strokeStyle = "rgb(255, 165, 0)";

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(250 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))), 400);
      ctx.lineTo(310 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))), 400);
      ctx.stroke();

      //săgetile
      const arrowLength = 20; // Lungimea săgeții
      const arrowAngle = Math.PI / 6; // Unghiul săgeții

      const arrowX = 310 + Math.cos(anglevalue) * OA + Math.sqrt((AB*AB) - (OA*OA*Math.sin(anglevalue)*Math.sin(anglevalue))); // Coordonata x a capătului săgeții
      const arrowY = 400; // Coordonata y a capătului săgeții

      const arrowEndX = arrowX - arrowLength * Math.cos( arrowAngle); // Coordonata x a capătului săgeții
      const arrowEndY = arrowY - arrowLength * Math.sin(arrowAngle); // Coordonata y a capătului săgeții

      const arrowStartX = arrowX - arrowLength * Math.cos(arrowAngle); // Coordonata x a capătului săgeții
      const arrowStartY = arrowY + arrowLength * Math.sin(arrowAngle); // Coordonata y a capătului săgeții

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(arrowEndX, arrowEndY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(arrowStartX, arrowStartY);
      ctx.stroke();
    }

    ctx.strokeStyle = "black";

   

  }, [angle, isHoveringOA, isHoveringAB, isHoveringB, isHoveringv1, TrajectoryA, velocityA, velocityB]);

  return <canvas ref={canvasRef} width={900} height={800} />;
}

Bm.propTypes = {
    angle: PropTypes.number.isRequired, 
    isHoveringOA: PropTypes.bool.isRequired,
    isHoveringAB: PropTypes.bool.isRequired,
    isHoveringB: PropTypes.bool.isRequired,
    isHoveringv1: PropTypes.bool.isRequired,
    TrajectoryA: PropTypes.bool.isRequired,
    velocityA: PropTypes.bool.isRequired,
    velocityB: PropTypes.bool.isRequired,
  };

export default Bm;
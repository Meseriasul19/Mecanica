import React from "react";
import { useRef, useEffect, useState } from 'react';

function NewtonCrandle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Your drawing code here

    //Linia de sus
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(190, 0);
    ctx.lineTo(670, 0);
    ctx.stroke();

    //bila1
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(270, 0);
    ctx.lineTo(270, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(270, 340, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    //miscare bila1

    var angle = Math.PI/2;

    const drawBalldown = () => {
      if (angle >= Math.PI / 2) {
        const x = 270 + 300 * Math.cos(angle); 
        const y =  40 + 300 * Math.sin(angle);
    
        // Șterge bila și segmentul de ata
        ctx.clearRect(x - 40, y - 40, 80, 80); // Șterge bila
        const startX = 270; // Coordonata x a punctului de plecare
        const startY = 0; // Coordonata y a punctului de plecare
        const endX = x; // Coordonata x a punctului de sosire
        const endY = y; // Coordonata y a punctului de sosire
        const rectX = Math.min(startX, endX) - 50; // Coordonata x a dreptunghiului de ștergere
        //const rectY = Math.min(startY, endY) - 50; // Coordonata y a dreptunghiului de ștergere
        const rectWidth = Math.abs(endX - startX) + 50; // Lățimea dreptunghiului de ștergere
        const rectHeight = Math.abs(endY - startY) + 100; // Înălțimea dreptunghiului de ștergere
        ctx.clearRect(rectX, 5, rectWidth, rectHeight); // Șterge segmentul de ata
    
        // Desenează linia
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(startX, startY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Desenează bila
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);  
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();
        
        angle -= 0.01; // Scade unghiul pentru a face bila să coboare
        requestAnimationFrame(drawBalldown);
      }
    };

    const drawBallup = () => {
      if(angle<2){
        ctx.beginPath();
        ctx.arc(350, 340, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();
      }

      if (angle <= 3*Math.PI/4) {
      const x = 270 + 300 * Math.cos(angle); 
      const y =  40 + 300 * Math.sin(angle);
      ctx.clearRect(x-40, y-40, 85, 85); //sterge bila

      const startX = 300; // Coordonata x a punctului de plecare
      const startY = 0; // Coordonata y a punctului de plecare
      const endX = x; // Coordonata x a punctului de sosire
      const endY = y; // Coordonata y a punctului de sosire
      ctx.clearRect(Math.min(startX, endX), startY, Math.abs(endX - startX), Math.abs(endY - startY)); //sterge ata

      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.moveTo(190, 0);
      ctx.lineTo(670, 0);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(270, 0);
      ctx.lineTo(x, y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);  
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      angle += 0.01; 
      requestAnimationFrame(drawBallup);
      }
      else drawBalldown();
    };

    drawBallup();

    //bila2
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(350, 0);
    ctx.lineTo(350, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(350, 340, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    //bila3
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(430, 0);
    ctx.lineTo(430, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(430, 340, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    //bila4
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(510, 0);
    ctx.lineTo(510, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(510, 340, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    //bila5
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(590, 0);
    ctx.lineTo(590, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(590, 340, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    

    // Cleanup function if needed
    return () => {
      // Cleanup code here
    };
  }, []); // Empty dependency array to run the effect only once after the initial render

  return <canvas ref={canvasRef} width={860} height={420} />;
}

export default NewtonCrandle;
// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume and surface area of a cone
 */
function coneConversion() {
  // input that allows the function to get radius and height from the user
  let heightAmount = parseFloat(document.getElementById('height-input').value);
  let radiusAmount = parseFloat(document.getElementById('radius-input').value);

    //process that does the calculation of surface area and volume
  let surfaceArea1 = Math.pow(radiusAmount, 2) + Math.pow(heightAmount, 2);
  let surfaceArea2 = Math.sqrt(surfaceArea1) + radiusAmount;
  let surfaceArea3 = surfaceArea2 * Math.PI * radiusAmount;
  let volumeCone = heightAmount / 3 * Math.PI * Math.pow(radiusAmount, 2);

  // output surface area and volume towards the website
  document.getElementById('surface-area').innerHTML = 'The surface area of the cone is: ' + surfaceArea3.toFixed(2)  + "cm²";
  document.getElementById('volume-cone').innerHTML = 'The volume of the cone is: ' + volumeCone.toFixed(2) + "cm³";
  
}
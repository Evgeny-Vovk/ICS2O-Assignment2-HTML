// Created by: Evgeny
// Created on: mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const lengthA = parseInt(document.getElementById('length-a').value)
  const lengthB = parseInt(document.getElementById('length-b').value)

  // process
  const area = lengthA * lengthB * math.PI

  // output
  document.getElementById('area').innerHTML = '<p>Area is: ' + area + ' cm².</p>'
}

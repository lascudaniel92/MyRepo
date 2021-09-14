'use strict';
let input = document.getElementById('input');
let output = document.getElementById('output');
let x = document.getElementById('base');

function getchars() {
  let textareavalue = input.value;
  let result = '';
  let base = '';
  if (x.value && x.value >= 2 && x.value <= 36) {
    base = x.value;
    for (let i = 0; i < textareavalue.length; i++) {
      result += textareavalue.charCodeAt(i).toString(base) + ' ';
    }
  } else {
    result = textareavalue;
  }

  output.value = result;
}

input.addEventListener('keyup', getchars);
input.addEventListener('change', getchars);
x.addEventListener('keyup', getchars);
x.addEventListener('change', getchars);

function convertToBinary() {}

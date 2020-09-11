const englishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function calculate() {
    
    const input = document.getElementById("input").value.toLowerCase();
    const output = document.getElementById("output");
    let alphabet = document.getElementById("alphabet").value.split("");
    let alphabetMap = new Map();
    let shift = Number(document.getElementById("shift").value) % englishAlphabet.length;
    let cipher = "";

    if (alphabet.length == 0) {
        alphabet = englishAlphabet;
    }

    alphabet.forEach((letter, index) => {
        alphabetMap.set(letter, index);
    });

    if (shift < 0) {
        shift += englishAlphabet.length
    }

    [...input].forEach((letter) => {
        if (alphabetMap.has(letter)) {
            const cipherPos = (alphabetMap.get(letter) + shift) % alphabet.length;
            cipher += alphabet[cipherPos];
        } else {
            cipher += letter;
        }
    });

    output.innerText = cipher;
}

// https://jsfiddle.net/cferdinandi/mqwwpL6u/
var autoExpand = function(field) {

    // Reset field height
    field.style.height = 'inherit';
  
    // Get the computed styles for the element
    var computed = window.getComputedStyle(field);
  
    // Calculate the height
    var height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
      parseInt(computed.getPropertyValue('padding-top'), 10) +
      field.scrollHeight +
      parseInt(computed.getPropertyValue('padding-bottom'), 10) +
      parseInt(computed.getPropertyValue('border-bottom-width'), 10);
  
    field.style.height = height + 'px';
  
  };
  
  document.addEventListener('input', function(event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
  }, false);
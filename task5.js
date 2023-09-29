// Skriv en funktion som tar emot längd,
//  bredd och höjd för en låda och returnerar volymen

// TIPS: Volym = längd * bredd * höjd

// console.log( getVolume(2, 3, 4) )
// // Ska returnera 24
// console.log( getVolume(2))
// // Ska returnera 0

function inputPromptSplit() {
  alert("Skriv in måtten på lådan så räknar jag ut volymen.");
  let userInput = prompt("Skriv längd, bredd och höjd, exempelvis 20*20*20:");

  let stringVolumeInput = userInput.split("*");

  let intVolumeInput = stringVolumeInput.map(Number);

  let product = 1;
  function volumeCalc(item = 1) {
    product *= item;
    return product;
  }

  if (intVolumeInput.length != 3) {
    alert("Vänligen skriv in måtten korrekt enligt anvisningen.");
    inputPromptSplit();
  } else {
    intVolumeInput.forEach(volumeCalc);
    alert(volumeCalc());
    inputPromptSplit();
  }
}

inputPromptSplit();

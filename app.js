// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  // check for buttons exist
  if (document.querySelectorAll('.button') !== null) {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', processForm))
  }

  // optionally update when fields update
  // tbd
  document.getElementById(`name`).addEventListener(`change`, function (eventData) {
    let nameOutput = document.getElementById(`nameOutput`);
    // console.log(eventData);
    nameOutput.innerText = eventData.target.value;

  });

  document.getElementById(`type`).addEventListener(`change`, function (eventData) {
    let nameOutput = document.getElementById(`nameOutput`);
    // console.log(eventData);
    let info = document.getElementById(`info`);
    info.innerText = eventData.target.value;
    changeCert(eventData.target.value);
    });

  // process form Data
  document.getElementById("myForm").addEventListener("submit", function (eventData) {

    eventData.preventDefault();
    console.log(eventData.target);
    var formData = new FormData(eventData.target);
    formData = Object.fromEntries(formData);
    // output as an object
    // console.log(Object.fromEntries(formData));

    let nameOutput = document.getElementById(`nameOutput`);
    let info = document.getElementById(`info`);
    nameOutput.innerText = eventData.target.value;
    info.innerText = formData.name;

    // ...or iterate through the name-value pairs
    /*for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);*/
    // }
  });
  // Log readiness to console
  console.log("Ready");
 
 // let info = document.getElementById(`info`);
  //info.classList.add(`test`);

  
  
  function changeCert(value){
    let certificate = document.getElementById(`certificate`);
    certificate.classList = "";
    switch(value){
      case `A`:
        certificate.classList.add(`number1`);
        break;
      case `B`:
        certificate.classList.add(`number2`);
        break;
      case `C`:
        certificate.classList.add(`number3`);
        break;
      case `D`:
        certificate.classList.add(`number4`);
        break;
    }
  }
});




function processForm(form) {

}
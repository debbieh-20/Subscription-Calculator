//select your elements
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
//default value for the duration drop-down list
var subDuration = 1;

//create change event listeners
subTypeElement.addEventListener ("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener ("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function() {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }

  var total = subDuration * monthlyCost;
    result.innerText = `You haved chosen a ${subDuration} month ${subType} plan for $${total}.`;
};












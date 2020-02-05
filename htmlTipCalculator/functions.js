function getService() {
  const service = document.querySelectorAll("#service")[0].value;
  lowerCaseString = service.toLowerCase();
  //santize function here.
  return lowerCaseString;
}

function getServicePercent() {
  service = getService();
  console.log(service);
  if (service === "great") {
    return 0.2;
  }
  if (service === "good") {
    return 0.15;
  }
  if (service === "bad") {
    return 0.1;
  }
}

function getBill() {
  const baseBill = document.querySelectorAll("#baseBill")[0].value;
  numberedBill = Math.abs(baseBill);

  return numberedBill;
}

function getTotalBill() {
  const servicePercent = getServicePercent();
  const baseBill = getBill();
  let totalBill = baseBill * servicePercent;
  totalBill = totalBill + baseBill;
  //sanitize baseBill here? Single purpose is becoming fuzzy.
  alert("total bill is: " + totalBill);
}




function generateQRCode() {
  let number = document.getElementById("website").value;
  nunmber = number.replace(/ /g, "");
  if (number) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, "https://wa.me/+6" + number);
    var a = document.createElement("a");
    var linkText = document.createTextNode(" Open in Whatsapp ");
    a.appendChild(linkText);
    a.title = "Open In WahtsApp";
    a.href = "https://wa.me/+6" + number;
    document.getElementById("urlLink").appendChild(a);
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Please enter a valid number");
  }
}

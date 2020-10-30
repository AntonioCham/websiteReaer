function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function(){
var result = document.getElementById('result');
var lastResult, countResults = 0;

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });

function onScanSuccess(qrCodeMessage){
    if (qrCodeMessage !== lastResult) {
        ++countResults;
        lastResult = qrCodeMessage;
        result.innerHTML += `<div>[${countResults}] - ${qrCodeMessage}</div>`;
        
        // Optional: To close the QR code scannign after the result is found
        html5QrcodeScanner.clear();
    }
}

function onScanError(errorMessage){
    console.log(`QR error  = ${error}`);
}


html5QrcodeScanner.render(onScanSuccess, onScanError);
});
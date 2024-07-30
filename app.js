
const QRInput = document.getElementById("QRInput");
const QRBtn = document.getElementById("QRBtn");
const QRCode = document.getElementById("QRCode");

async function fetchData(){
    try{
        let URLInput = QRInput.value;

        let URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${URLInput}`;

        const response = await fetch(URL);

        if(!response.ok){
            throw new Error("Cannot Fetch Data");
        }
        if (QRCode.hasChildNodes()){
            QRCode.removeChild(QRCode.firstChild);
        }

        const QRCodeImg = document.createElement("img");

        QRCodeImg.src = URL;

        QRCode.appendChild(QRCodeImg);

        
    }
    catch(error){
        console.log(error);
    }
}
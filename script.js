let output = document.getElementById("output");
let outputImg = document.getElementById("output_img");
let userInput = document.getElementById("user_input");
let downloadButton = document.getElementById("download");

function generate() {
    outputImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=498x498&data=" + userInput.value;
}

function down() {
    fetch(outputImg.src).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = outputImg.src.replace('/.*[\\\/1/','');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() =>{
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    }) ;
}
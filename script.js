let output = document.getElementById("output");
let output_img = document.getElementById("output_img");
let user_input = document.getElementById("user_input");

function generate() {
    output_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=498x498&data=" + user_input.value;
}

function down() {
    var link = document.createElement('a');
    link.href = 'images.jpg';
    link.download = 'qrcode.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
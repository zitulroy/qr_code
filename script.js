const urlInput =
    document.getElementById("urlInput");

const generateBtn =
    document.getElementById("generateBtn");

const downloadBtn =
    document.getElementById("downloadBtn");

const canvas =
    document.getElementById("qrCanvas");

generateBtn.addEventListener(
    "click",
    generateQR
);

function generateQR() {
    const url =
        urlInput.value.trim();

    if (!url) {
        alert("Please enter a URL.");

        return;
    }

    QRCode.toCanvas(
        canvas,
        url,
        {
            width: 300
        },
        function (error) {
            if (error) {
                console.error(error);

                return;
            }

            downloadBtn.classList.remove(
                "hidden"
            );
        }
    );
}

downloadBtn.addEventListener(
    "click",
    downloadQR
);

function downloadQR() {
    const link =
        document.createElement("a");

    link.download = "qrcode.png";

    link.href =
        canvas.toDataURL("image/png");

    link.click();
}
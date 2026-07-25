function copyCryptoAddress() {

    const cryptoAddress =
        document.getElementById("cryptoAddress").innerText;


    const copyMessage =
        document.getElementById("copyMessage");


    navigator.clipboard.writeText(cryptoAddress)

        .then(() => {


            copyMessage.innerText =
                "✓ Wallet address copied!";


            setTimeout(() => {

                copyMessage.innerText = "";

            }, 3000);


        })

        .catch(() => {


            copyMessage.innerText =
                "Unable to copy the address.";


        });

}



function showDonationMessage() {


    alert(

        "Thank you for wanting to help an animal! " +

        "Our donation system is currently being prepared."

    );


}document.addEventListener("DOMContentLoaded", function () {
    const cryptoAddress = document
        .getElementById("cryptoAddress")
        .textContent
        .trim();

    new QRCode(document.getElementById("cryptoQrCode"), {
        text: cryptoAddress,
        width: 180,
        height: 180
    });
});
$(document).ready(function () {
    $.getJSON("/data/data_pulsa.json", function (data) {
        var itemCards = "";

        // Looping data load by src /data/data_pulsa.json
        $.each(data.pulsa, function (index, pulsa) {
            // Html for card view data
            itemCards += `
            <div class="col-6 col-sm-6 pulsa-item mb-4" data-bs-toggle="modal" data-bs-target="#pulsaDetailsModal" onclick="showPulsaDetails(${pulsa.id})">
                <div class="card">
                    <a href="#" class="text-decoration-none ripple">
                        <div class="card-body">
                            <h5>${pulsa.pulsa}</h5>
                            <span>${pulsa.total}</span>
                        </div>
                    </a>
                </div>
            </div>
            `;
        });

        $("#itemCards").html(itemCards);
    });

    $("#orderForm").on("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            var pulsaId = parseInt($("#pulsaId").val(), 10);
            submitOrder(pulsaId);
        }
    });
});

// Show detail data by id
function showPulsaDetails(pulsaId) {
    $.getJSON("/data/data_pulsa.json", function (data) {
        var pulsa = data.pulsa.find(function (item) {
            return item.id === pulsaId;
        });

        $("#pulsaPrice").text(currency + pulsa.total);
        $("#pulsaId").val(pulsaId);
        $("#pulsaDetailsModal").modal("show");
    });
}

// Submit input order to WhatsApp
function submitOrder(pulsaId) {
    var user = $("#orderUser").val();
    var noTlp = $("#noTlp").val();
    var payment = $("#paymentMethod option:selected").val(); // Get the selected value from the <select> element
    var provider = $('input[name="provider"]:checked').val();

    $.getJSON("/data/data_pulsa.json", function (data) {
        // Find the pulsa based on pulsaId
        var pulsa = data.pulsa.find(function (item) {
            return item.id === pulsaId;
        });

        if (user !== "") {
            /* Final WhatsApp URL */
            var walink = "https://api.whatsapp.com/send";
            var phone = whatsAppNumber;
            var header = pulsaHeader;
            var walinkUser = "*User*: " + user;
            var walinkNoTlp = "*No Telp*: " + noTlp;
            var walinkProvider = "*Provider*: " + provider;
            var walinkPrice = "*Pulsa*:" + currency + pulsa.pulsa;
            var walinkTotal = "*Total*:" + currency + pulsa.total;

            /* Construct WhatsApp URL */
            var blanter_whatsapp = walink + "?phone=" + phone + "&text=" + encodeURIComponent(header + "\n\n" + walinkUser + "\n" + walinkNoTlp + "\n" + walinkProvider + "\n" + walinkPrice + "\n" + walinkTotal);

            /* Open WhatsApp window */
            window.open(blanter_whatsapp, "_blank");

            /* If success ridirect to success page*/
            setTimeout(function () {
                window.location.href = "/info/transaction-success.html";
            }, 1000); // Change the delay time as desired
        } else {
            setTimeout(function () {
                window.location.href = "/services/pulsa.html";
            }, 1000); // Change the delay time as desired
        }
    });
}


// Form input validate
function validateForm() {
    var user = $("#orderUser").val().trim();
    var noTlp = $("#noTlp").val().trim();
    var provider = $('input[name="provider"]:checked').val().trim();

    if (user === "") {
        alert("Please enter your name.");
        return false;
    }

    if (noTlp === "") { // Check if no payment method is selected
        alert("Please enter your number phone.");
        return false;
    }

    if (provider === "") { // Check if no payment method is selected
        alert("Please select your provider.");
        return false;
    }

    return true;
}




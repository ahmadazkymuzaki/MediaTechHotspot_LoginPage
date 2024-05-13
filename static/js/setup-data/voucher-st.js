$(document).ready(function () {
    $.getJSON("/data/data_voucher.json", function (data) {
        var itemCards = "";

        // Looping data load by src /data/data_voucher.json
        $.each(data.voucher, function (index, voucher) {
            // Html for card view data
            itemCards += `
                <div class="col-6 col-sm-6 pulsa-item mb-4" data-bs-toggle="modal" data-bs-target="#voucherDetailsModal" onclick="showVoucherDetails(${voucher.id})">
                    <div class="card">
                        <a href="#" class="text-decoration-none ripple">
                            <div class="card-body">
                                <h5>${voucher.total}</h5>
                                <span>${voucher.limit}</span>
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
            var voucherId = parseInt($("#voucherId").val(), 10);
            submitOrder(voucherId);
        }
    });
});

// Show detail data by id
function showVoucherDetails(voucherId) {
    $.getJSON("/data/data_voucher.json", function (data) {
        var voucher = data.voucher.find(function (item) {
            return item.id === voucherId;
        });

        $("#voucherLimit").text(voucher.limit);
        $("#voucherDevices").text(voucher.devices);
        $("#voucherData").text(voucher.data);
        $("#voucherPrice").text(currency + voucher.total);
        $("#voucherId").val(voucherId);
        $("#voucherDetailsModal").modal("show");
    });
}

// Submit input order to WhatsApp
function submitOrder(voucherId) {
    var user = $("#orderUser").val();
    var payment = $("#paymentMethod option:selected").val(); // Get the selected value from the <select> element

    $.getJSON("/data/data_voucher.json", function (data) {
        // Find the voucher based on voucherId
        var voucher = data.voucher.find(function (item) {
            return item.id === voucherId;
        });

        if (user !== "") {
            /* Final WhatsApp URL */
            var walink = "https://api.whatsapp.com/send";
            var phone = whatsAppNumber;
            var header = voucherHeader;
            var walinkUser = "*User*: " + user;
            var walinkData = "*Voucher*: " + voucher.data;
            var walinkLimit = "*Limit*: " + voucher.limit;
            var walinkPrice = "*Price*:" + currency + voucher.total;

            /* Construct WhatsApp URL */
            var blanter_whatsapp = walink + "?phone=" + phone + "&text=" + encodeURIComponent(header + "\n\n" + walinkUser + "\n" + walinkData + "\n" + walinkLimit + "\n" + walinkPrice);

            /* Open WhatsApp window */
            window.open(blanter_whatsapp, "_blank");

            /* If success ridirect to success page*/
            setTimeout(function () {
                window.location.href = "/info/transaction-success.html";
            }, 1000); // Change the delay time as desired
        } else {
            setTimeout(function () {
                window.location.href = "/services/voucher.html";
            }, 1000); // Change the delay time as desired
        }
    });
}


// Form input validate
function validateForm() {
    var user = $("#orderUser").val().trim();

    if (user === "") {
        alert("Please enter your name.");
        return false;
    }

    return true;
}




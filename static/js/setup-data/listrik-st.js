$(document).ready(function () {
    $.getJSON("/data/data_listrik.json", function (data) {
        var itemCards = "";

        // Looping data load by src /data/data_listrik.json
        $.each(data.listrik, function (index, listrik) {
            // Html for card view data
            itemCards += `
            <div class="col-6 col-sm-6 pulsa-item mb-4" data-bs-toggle="modal" data-bs-target="#listrikDetailsModal" onclick="showListrikDetails(${listrik.id})">
                <div class="card">
                    <a href="#" class="text-decoration-none ripple">
                        <div class="card-body">
                            <h5>${listrik.listrik}</h5>
                            <span>${listrik.total}</span>
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
            var listrikId = parseInt($("#listrikId").val(), 10);
            submitOrder(listrikId);
        }
    });

});

// Show detail data by id
function showListrikDetails(listrikId) {
    $.getJSON("/data/data_listrik.json", function (data) {
        var listrik = data.listrik.find(function (item) {
            return item.id === listrikId;
        });

        $("#listrikPrice").text(currency + listrik.total);
        $("#listrikId").val(listrikId);
        $("#listrikDetailsModal").modal("show");
    });
}

// Submit input order to WhatsApp
function submitOrder(listrikId) {
    var user = $("#orderUser").val();
    var noMeter = $("#noMeter").val();
    var type = $('input[name="listrikType"]:checked').val();

    $.getJSON("/data/data_listrik.json", function (data) {
        // Find the listrik based on listrikId
        var listrik = data.listrik.find(function (item) {
            return item.id === listrikId;
        });

        if (user !== "") {
            /* Final WhatsApp URL */
            var walink = "https://api.whatsapp.com/send";
            var phone = whatsAppNumber;
            var header = listrikHeader;
            var walinkUser = "*User*: " + user;
            var walinkNoMeter = "*No Meter*: " + noMeter;
            var walinktype = "*Type*: " + type;
            var walinkPrice = "*Price*:" + currency + listrik.total;

            /* Construct WhatsApp URL */
            var blanter_whatsapp = walink + "?phone=" + phone + "&text=" + encodeURIComponent(header + "\n\n" + walinkUser + "\n" + walinkNoMeter + "\n" + walinktype + "\n" + walinkPrice);

            /* Open WhatsApp window */
            window.open(blanter_whatsapp, "_blank");

            /* If success ridirect to success page*/
            setTimeout(function () {
                window.location.href = "/info/transaction-success.html";
            }, 1000); // Change the delay time as desired
        } else {
            setTimeout(function () {
                window.location.href = "/services/listrik.html";
            }, 1000); // Change the delay time as desired
        }
    });
}


// Form input validate
function validateForm() {
    var user = $("#orderUser").val().trim();
    var noMeter = $("#noMeter").val().trim();
    var type = $('input[name="listrikType"]:checked').val().trim();

    if (user === "") {
        alert("Please enter your name.");
        return false;
    }

    if (noMeter === "") {
        alert("Please enter your mo meter.");
        return false;
    }

    if (type === "") {
        alert("Please select a your type.");
        return false;
    }

    return true;
}




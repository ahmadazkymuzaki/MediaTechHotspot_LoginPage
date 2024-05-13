// ---------------------------------------------------------------------------------------------
/* USER AREA!
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Attention: Please note the symbols in this code: 🔧
* ❌ = This code should not be changed.
* ⚠️ = Dangerous areas, it is recommended that you do not change the region code if you do not 
        understand it.
*-----------------------------------------------------------------------------------------------


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* Logo settings 🔧 
*-----------------------------------------------------------------------------------------------
* Please changes with your logo
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var newFavicon = "../favicon-pondenet.svg";
var newThemeColor = "#0572E6";

// Update favicon
$("#favicon").attr("href", newFavicon);

// Update theme color
$("#themeColor").attr("content", newThemeColor);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* WhatsApp config here 🔧 
*-----------------------------------------------------------------------------------------------
* Please changes with your data like :
* -> whatsAppNumber(Required)
* -> voucherHeder(Optional)
* -> listrikHeader(Optional)
* -> pulsaHeader(Optional)
* -> pdamHeader(Optional)
* -> introWa(Optional) in menu chat -> Text intro in chat menu
* -> noteUserOrder(Optional) -> This is view in detail product like detail voucher etc.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var whatsAppNumber = "6285161110211";
var voucherHeader = "ORDER: *Voucher*";
var listrikHeader = "ORDER: *Pulsa Listrik*";
var pulsaHeader = "ORDER: *Pulsa*";
var noteUserOrder = `Mohon lengkapi form pesanan anda dengan benar.
pastikan anda berada di dekat area jaringan WIFI yang sama.`;


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* Currency config here, please select which one.
* according to your country. you just copy your currency symbol into the var field.
* var currency = "REPLACE_WITH_YOUR_CYRRENCY";  🔧 
*-----------------------------------------------------------------------------------------------
* Please change to your country's currency, select a currency with the same symbol as your 
* country if your country's time zone does not support it.
*
* Currency Symbols
*----------------------
* Symbol meaning :
*  ⚠️ = Unvalidated
*  ❌ = Not Support
*  ✔️ = Support
*
* ar-SA (Arabic - Saudi Arabia): ﷼ (SAR)⚠️
* bn-BD (Bangla - Bangladesh): ৳ (BDT)❌
* bn-IN (Bangla - India): ₹ (INR)⚠️
* cs-CZ (Czech - Czech Republic): Kč (CZK)⚠️
* da-DK (Danish - Denmark): kr (DKK) ✔️
* de-AT (Austrian German): € (EUR)⚠️
* de-CH (Swiss German): CHF (CHF)⚠️
* de-DE (Standard German - Germany): € (EUR)✔️
* el-GR (Modern Greek): € (EUR)✔️
* en-AU (Australian English): $ (AUD)✔️
* en-CA (Canadian English): $ (CAD)✔️
* en-GB (British English): £ (GBP)✔️
* en-IE (Irish English): € (EUR)✔️
* en-IN (Indian English): ₹ (INR)✔️
* en-NZ (New Zealand English): $ (NZD)✔️
* en-US (US English): $ (USD)✔️
* en-ZA (English - South Africa): R (ZAR)❌
* es-AR (Argentine Spanish): $ (ARS)✔️
* es-CL (Chilean Spanish): $ (CLP)✔️
* es-CO (Colombian Spanish): $ (COP)✔️
* es-ES (Castilian Spanish - Spain): € (EUR)✔️
* es-MX (Mexican Spanish): $ (MXN)✔️
* es-US (American Spanish): $ (USD)✔️
* fi-FI (Finnish - Finland): € (EUR)❌
* fr-BE (Belgian French): € (EUR)❌
* fr-CA (Canadian French): $ (CAD)❌
* fr-CH (Swiss French): CHF (CHF)❌
* fr-FR (Standard French - France): € (EUR)❌
* he-IL (Hebrew - Israel): ₪ (ILS)✔️
* hi-IN (Hindi - India): ₹ (INR)✔️
* hu-HU (Hungarian - Hungary): Ft (HUF)❌
* id-ID (Indonesian - Indonesia): Rp (IDR)✔️
* it-CH (Swiss Italian): CHF (CHF)❌
* it-IT (Standard Italian - Italy): € (EUR)✔️
* ja-JP (Japanese - Japan): ¥ (JPY)✔️
* ko-KR (Korean - Republic of Korea): ₩ (KRW)✔️
* nl-BE (Belgian Dutch): € (EUR)✔️
* nl-NL (Standard Dutch - Netherlands): € (EUR)✔️
* no-NO (Norwegian - Norway): kr (NOK)❌
* pl-PL (Polish - Poland): zł (PLN)❌
* pt-BR (Brazilian Portuguese): R$ (BRL)✔️
* pt-PT (European Portuguese - Portugal): € (EUR)✔️
* ro-RO (Romanian - Romania): lei (RON)✔️
* ru-RU (Russian - Russian Federation): ₽ (RUB)❌
* sk-SK (Slovak - Slovakia): € (EUR)❌
* sv-SE (Swedish - Sweden): kr (SEK)❌
* ta-IN (Indian Tamil): ₹ (INR)✔️
* ta-LK (Sri Lankan Tamil): රු (LKR)✔️
* th-TH (Thai - Thailand): ฿ (THB)✔️
* tr-TR (Turkish - Turkey): ₺ (TRY)✔️
* zh-CN (Mainland China - simplified characters): ¥ (CNY)✔️
* zh-HK (Hong Kong - traditional characters): HK$ (HKD)✔️
* zh-TW (Taiwan - traditional characters): NT$ (TWD)✔️
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// Indonesia Currency
var currency = "Rp";
var currencyCountry = "id-ID";


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* Banner settings 🔧 
*-----------------------------------------------------------------------------------------------
* Please changes with your image, makesure image size width: 342px height:142px
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var banner1 = "../static/img/food-page/banner/banner-1.svg";
var banner2 = "../static/img/food-page/banner/banner-2.svg";
var banner3 = "../static/img/food-page/banner/banner-3.svg";


// ---------------------------------------------------------------------------------------------






















// DANGER AREA!//❌

// Function to note data Do not change the code below if you do not understand.⚠️
$("#noteUserOrder").text(noteUserOrder); //❌
$(".noteUserOrder").text(noteUserOrder); //❌

$(".banner1").attr("src", banner1);
$(".banner2").attr("src", banner2);
$(".banner3").attr("src", banner3);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please It is recommended to change this line of code if you do not understand it ⚠️
*-----------------------------------------------------------------------------------------------
* Live Search for food content 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

$(document).ready(function () {
    // select notFound row
    var notFound = $("#notFoundItem")
    // make it hidden by default
    notFound.hide()

    $("#myInputSearch").on("keyup search", function () {
        var value = $(this).val().toLowerCase()

        // select all items
        var allItems = $("#foodCards .col-6")

        // get list of matched items, (do not toggle them)
        var matchedItems = $("#foodCards .col-6").filter(function () {
            return $(this).text().toLowerCase().indexOf(value) > -1
        });


        // hide all items first
        allItems.toggle(false)

        // then show matched items
        matchedItems.toggle(true)

        // if no item matched then show notFound row, otherwise hide it
        if (matchedItems.length == 0) notFound.show()
        else notFound.hide()

        // Show what user input in form search
        $("#results").html($("#myInputSearch").val());
    });
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please It is recommended to change this line of code if you do not understand it ⚠️
*-----------------------------------------------------------------------------------------------
* Example starter JavaScript for disabling form submissions if there are invalid fields
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


//=======================================================
// Custom CSS Radio button
//=======================================================
$('.js-check :radio').change(function () {
    var check_attr_name = $(this).attr('name');
    if ($(this).is(':checked')) {
        $('input[name=' + check_attr_name + ']').closest('.js-check').removeClass('active');
        $(this).closest('.js-check').addClass('active');
        // item.find('.radio').find('span').text('Add');

    } else {
        item.removeClass('active');
        // item.find('.radio').find('span').text('Unselect');
    }
});


$('.js-check :checkbox').change(function () {
    var check_attr_name = $(this).attr('name');
    if ($(this).is(':checked')) {
        $(this).closest('.js-check').addClass('active');
        // item.find('.radio').find('span').text('Add');
    } else {
        $(this).closest('.js-check').removeClass('active');
        // item.find('.radio').find('span').text('Unselect');
    }
});



//=======================================================
// Slider Settings
//=======================================================

$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
});



//=======================================================
// Loader 
//=======================================================

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 50);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}


// Offcanas custom
$(document).ready(function () {
    $('.open-offcanvas1').click(function () {
        $('.offcanvas1').addClass('open');
    });

    $('.close-offcanvas1').click(function () {
        $('.offcanvas1').removeClass('open');
    });
});
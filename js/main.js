/*===============
   MENU OVERLAY
==================*/

function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
}

/*===============
   MAP
==================*/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(10.872412, 76.287393),
        zoom: 5,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

}

/*===============
  SCROLL UP
==================*/

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollup").style.display = "block";
    } else {
        document.getElementById("scrollup").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*===============
  PROGRESS BAR
==================*/

 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });
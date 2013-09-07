// Global variable that will tell us whether PhoneGap is ready
var isPhoneGapReady = false;
// Default all phone types to false
var isAndroid = false;
var isBlackberry = false;
var isIphone = false;
var isWindows = false;
// Store the device's uuid
var deviceUUID;
// Store the current network status
var isConnected = false;
var isHighSpeed;
var internetInterval;
var currentUrl;
function init(url) {
    if (typeof url != 'string') {
        currentUrl = location.href; } else {
            currentUrl = url; }
    if (isPhoneGapReady) {
        onDeviceReady();
    } else {
        // Add an event listener for deviceready
        document.addEventListener("deviceready", onDeviceReady, false); }
}
function onDeviceReady() {
    // set to true
    isPhoneGapReady = true;
    deviceUUID = device.uuid;
    // detect the device's platform
    deviceDetection();
    // detect for network access
    networkDetection();
    // execute any events at start up
    executeEvents();
    // execute a callback function
    executeCallback();
}
function executeEvents() {
    if (isPhoneGapReady) {
    // attach events for online and offline detection
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);
    // set a timer to check the network status
        internetInterval = window.setInterval(function() {
            if (navigator.network.connection.type != Connection.NONE) {
                onOnline();
            } else {
                onOffline();
            }
        }, 5000);
    }
}

function executeCallback() {
    if (isPhoneGapReady) {
        // get the name of the current html page
        var pages = currentUrl.split("/");
        var currentPage = pages[pages.length - 1].
        slice(0, pages[pages.length - 1].indexOf(".html"));
        // capitalize the first letter and execute the function
        currentPage = currentPage.charAt(0).toUpperCase() +
        currentPage.slice(1);
        if (typeof window['on' + currentPage + 'Load'] == 'function') {
            window['on' + currentPage + 'Load']();
        }
    }
}

function deviceDetection() {
    if (isPhoneGapReady) {
        switch (device.platform) {
            case "Android":
                isAndroid = true;
                break;
            case "Blackberry":
                isBlackberry = true;
                break;
            case "iPhone":
                isIphone = true;
                break;
            case "WinCE":
                isWindows = true;
            break;
        }
    }
}

function networkDetection() {
    if (isPhoneGapReady) {
    // as long as the connection type is not none,
    // the device should have Internet access
        if (navigator.network.connection.type != Connection.NONE) {
            isConnected = true;
        }
    // determine if this connection is high speed or not
        switch (navigator.network.connection.type) {
            case Connection.UNKNOWN:
            case Connection.CELL_2G:
                isHighSpeed = false;
                break;
            default:
                isHighSpeed = true;
                break;
        }
    }
}

function onOnline() {
    isConnected = true;
}

function onOffline() {
    isConnected = false;
}

// This gets called by jQuery mobile when the page has loaded
$(document).bind("pageload", function(event, data) {
    init(data.url);
});

// Set an onload handler to call the init function
window.onload = init;





function initialize(lat,lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
    center: latlng,
    zoom: 10,
    mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.ROADMAP],
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
    };
    var map_gpx = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    var map_gpx2 = new google.maps.Map(document.getElementById('map_canvas_2'), myOptions);
    
}


function onDeviceReady(){
    //alert("Dispositivo listo. API PhoneGap");
    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
/*    $("#test1").gmap3({
                      map:{
                      options:{
                      mapTypeId : google.maps.MapTypeId.ROADMAP,
                      center: [-37.76, 144.925],
                      zoom: 12
                      }
                      },
                      kmllayer:{
                      options:{
                      url: "http://cap-mobi.msystems.info/kml/melbourne_gpx_green_2.kml",
                      preserveViewport: true
                      }
                      }
                      });*/
}

function locateCurrentPosition(){
    //alert("Getting position");
    var options = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    $("#popupMapOpt").popup("close");
    //alert("Getting position --> DONE");
}
function onSuccess(position)
{
    //initialize(position.coords.latitude, position.coords.longitude);
    //init2();
    //init3();
    //alert("Posicion "+position.coords.latitude+", "+position.coords.longitude)
    //            var currPosition = new google.map.LatLng(position.coords.latitude, position.coords.longitude);
    //            $("#test1").setCenter(currPosition);
    //            var marcador = new google.maps.Marker({
    //                                                  position: currPosition,
    //                                                  map: map
    //            })
    
    $("#test1").gmap3({
                      map:{
                      options:{
                      center:[position.coords.latitude, position.coords.longitude],
                      zoom: 12
                      }
                      },
                      marker:{
                      values:[
                              {latLng:[position.coords.latitude, position.coords.longitude],
                              data:"Paris !",
                              options:{icon: "http://cap-mobi.msystems.info/kml/imag/Black_PIn_50.png"}
                              }
                              ]
                      }
                      });
    
};
function onError(error)
{
    alert(
          'code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function init2(){
    $('#map_canvas_3').gmap();
    $('#map_canvas_3').gmap('option', 'zoom', 5);
    $('#map_canvas_3').gmap('loadKML','indonesia71', 'http://cap.msystems.info/gpx/CyclingIndonesia_71.kml');
}

function init3(){
    $('#map_canvas_4').gmap();
    $('#map_canvas_4').gmap('option', 'zoom', 5);
    $('#map_canvas_4').gmap('loadKML','indonesiaKotaBandug', 'http://cap.msystems.info/gpx/CyclingIndonesia_KotaBandung.kml');
}

var categoryData = {
animals: {
name: "Animals",
description: "All your favorites from aardvarks to zebras.",
items: [ {name: "Pets"},
        {name: "Farm Animals"},
        {name: "Wild Animals"} ]
},
colors: {
name: "Colors",
description: "Fresh colors from the magic rainbow.",
items: [ {name: "Blue"},
        {name: "Green"},
        {name: "Orange"},
        {name: "Purple"},
        {name: "Red"},
        {name: "Yellow"},
        {name: "Violet"} ]
},
vehicles: {
name: "Vehicles",
description: "Everything from cars to planes.",
items: [ {name: "Cars"},
        {name: "Planes"},
        {name: "Construction"} ]
}
};


var map3Data = {
    li1: {
        name: "Capital City Trail",
        description: "Capital City Trail",
        icon: "Lite_icon_50.png",
        url: "http://cap-mobi.msystems.info/kml/melbourne_gpx_green_2.kml",
        parentRideList: "lite"
    },
    li2: {
        name: "Gardiners Creek Trail",
        description: "Gardiners Creek Trail",
        icon: "Lite_icon_50.png",
        url: "http://cap-mobi.msystems.info/kml/AlpeDHuezMap.kml",
        parentRideList: "lite"
    }
};

var mapData = {
    e1: {
        name: "Alpe D'Huez",
        description: "Alpe D'Huez.",
        icon: "Epic_icon_50.png",
        url: "http://cap-mobi.msystems.info/index.php?m=2&r=18",
        parentRideList: "epic"
    },
e2: {
name: "Arthurs Seat",
description: "Arthurs Seat",
icon: "Epic_icon_50.png",
url: "http://cap-mobi.msystems.info/index.php?m=1&r=4",
parentRideList: "epic"
},
e3: {
name: "Gaps Loop",
description: "Gaps Loop",
icon: "Epic_icon_50.png",
url: "http://cap-mobi.msystems.info/index.php?m=7&r=3",
parentRideList: "epic"
}
};
var categoryData = {
lite: {
name: "Lite 0 - 20 KM",
description: "Yellow",
icon: "Lite_icon_50.png",
items: [ {name: "Capital City Trail", url:"#showGMap3?map=li1"},
        {name: "Gardiners Creek Trail", url:"#showGMap3?map=li2"},
        {name: "Happy Valley Rail Trail", url:"#showMap?map=ea3"},
        {name: "Merri Creek Trail", url:"#showMap?map=ea4"},
        {name: "Port Phillip Bay Trail", url:"#showMap?map=ea5"},
        {name: "Quay to Cove", url:"#showMap?map=ea6"},
        {name: "Tour de Angkor", url:"#showMap?map=ea7"},
        {name: "Williamstown Bay Ride", url:"#showMap?map=ea8"},
        {name: "Wye River Beach ride", url:"#showMap?map=ea9"}]
},
easy: {
name: "Easy 20 - 40 KM",
description: "Red",
icon: "Easy_icon_50.png",
items: [ {name: "Capital City Trail", url:"#showMap?map=ea1"},
        {name: "Gardiners Creek Trail", url:"#showMap?map=ea2"},
        {name: "Happy Valley Rail Trail", url:"#showMap?map=ea3"},
        {name: "Merri Creek Trail", url:"#showMap?map=ea4"},
        {name: "Port Phillip Bay Trail", url:"#showMap?map=ea5"},
        {name: "Quay to Cove", url:"#showMap?map=ea6"},
        {name: "Tour de Angkor", url:"#showMap?map=ea7"},
        {name: "Williamstown Bay Ride", url:"#showMap?map=ea8"},
        {name: "Wye River Beach ride", url:"#showMap?map=ea9"}]
},
interm: {
name: "Intermediate 40 - 60 KM",
description: "Red",
icon: "Inter_icon_50.png",
items: [ {name: "13th Beach", url:"#showMap?map=i1"},
        {name: "Beach Road Ride", url:"#showMap?map=i2"},
        {name: "Erskine Falls Loop", url:"#showMap?map=i3"},
        {name: "Harcourt Valey Loop", url:"#showMap?map=i4"},
        {name: "Lilydale to Warburton", url:"#showMap?map=i5"},
        {name: "Main Yarra Trail", url:"#showMap?map=i6"},
        {name: "Shipwreck Loop", url:"#showMap?map=i7"},
        {name: "Silverband Loop", url:"#showMap?map=i8"},
        {name: "Yarra Boulevard", url:"#showMap?map=i9"}]
},
diffi: {
name: "Difficult 60 - 100 KM",
description: "Red",
icon: "Diff_icon_50.png",
items: [ {name: "3 Gorges", url:"#showMap?map=d1"},
        {name: "Cinque Terre Loop", url:"#showMap?map=d2"},
        {name: "Flanders", url:"#showMap?map=d3"},
        {name: "Great Ocean Road Ride", url:"#showMap?map=d4"},
        {name: "Hepburn Springs Loop", url:"#showMap?map=d5"},
        {name: "Mount Alexander Loop", url:"#showMap?map=d6"},
        {name: "Mount Macedon Loop", url:"#showMap?map=d7"},
        {name: "Mount William", url:"#showMap?map=d8"},
        {name: "Port Fairy Loop", url:"#showMap?map=d9"},
        {name: "The Chestnut", url:"#showMap?map=d10"},
        {name: "Zumsteins", url:"#showMap?map=d11"}]
},
epic: {
name: "EPIC 100+ KM",
description: "Double black",
icon: "Epic_icon_50.png",
items: [ {name: "Alpe D'Huez", url:"#showMap?map=e1"},
        {name: "Arthurs Seat", url:"#showMap?map=e2"},
        {name: "Gaps Loop", url:"#showMap?map=e3"},
        {name: "Goldfields Loop", url:"#showMap?map=e4"},
        {name: "Hell of the South", url:"#showMap?map=e5"},
        {name: "Hotham", url:"#showMap?map=e6"},
        {name: "Kinglake", url:"#showMap?map=e7"},
        {name: "Mount Baw Baw", url:"#showMap?map=e8"},
        {name: "Surf Coast Loop", url:"#showMap?map=e9"}]
}
};


// Listen for any attempts to call changePage().
$(document).bind( "pagebeforechange", function( e, data ) {
    if ( typeof data.toPage === "string" ) {
        var u = $.mobile.path.parseUrl( data.toPage ),
            sm = /^#showMap/;
            sm3 = /^#showGMap3/;
            sr = /^#showRides/;
        if ( u.hash.search(sr) !== -1 ) {
            showRides( u, data.options );
            e.preventDefault();
        } else if ( u.hash.search(sm) !== -1 ) {
            showMap( u, data.options );
            e.preventDefault();
        } else if ( u.hash.search(sm3) !== -1 ) {
            setTimeout(function(){
                $('#test').gmap3('destroy').remove();
            }, 10);
            showMap2( u, data.options );
            e.preventDefault();
        }
    }
});


// Load the data for a specific category, based on
// the URL passed in. Generate markup for the items in the
// category, inject it into an embedded page, and then make
// that page the current active page.
function showMap( urlObj, options )
{
    var mapName = urlObj.hash.replace( /.*map=/, "" ),
    mapId = mapData[ mapName ],
    pageSelector = urlObj.hash.replace( /\?.*$/, "" );
    
    if ( mapId ) {
        var $page = $( pageSelector ),
        $header = $page.children( ":jqmData(role=header)" ),
        $content = $page.children( ":jqmData(role=content)" ),
        markup = "<div style='padding:0 0 0 0; width:100%; height:400px; background:lightgrey' alt='Loading...'><object type='text/html' data='"+mapId.url+"' style='width:100%; height:100%;' scrolling='no'></object></div>";
        markup += "<a href='#showRides?ride="+mapId.parentRideList+"' data-transition='fade'><img src='img/"+mapId.icon+"' border='0' style='position:absolute; top:0px; left:10px;' width='50px' height='50px' /></a>";
        markup += "<img src='img/locator_32.png' onClick='locateCurrentPosition();' border='0' style='position:absolute; top:5px; left:250px;' width='32px' height='32px' />";
        $header.find( "h1" ).html( mapId.name );
        $content.html( markup );
        $page.page();
        options.dataUrl = urlObj.href;
        $.mobile.changePage( $page, options );
    }
}


function showRides( urlObj, options )
{
    var categoryName = urlObj.hash.replace( /.*ride=/, "" ),
    category = categoryData[ categoryName ],
    pageSelector = urlObj.hash.replace( /\?.*$/, "" );
    
    if ( category ) {
        var $page = $( pageSelector ),
        $header = $page.children( ":jqmData(role=header)" ),
        $content = $page.children( ":jqmData(role=content)" ),
        markup = "<center><h3><font font-face='MyriadProCond' style='color:#fff'>" + category.description + "</font></h3></center><ul data-role='listview' data-inset='true' style='font-family:MyriadProCond, AsapBold, Tahoma'>",
        cItems = category.items,
        numItems = cItems.length;
        for ( var i = 0; i < numItems; i++ ) {
            markup += "<li style='font-family:MyriadProCond, AsapBold, Tahoma'><a href='"+cItems[i].url+"' id='ride_"+i+"' data-transition='slide'>" + cItems[i].name + "</a></li>";
        }
        //markup += "</ul><a href='#inicio' data-role='button'> Back </a>";
        $header.find( "h1" ).html( category.name + "<a href='#inicio' data-transition='fade'><img src='img/"+category.icon+"' border='0' style='position:absolute; top:0px; left:10px;' width='50px' height='50px' /></a>");
        //alert("HTML Header: "+$header.html);
        //$header.html("<font font-face='MyriadPro-Cond' font-size='+1' style='color:#fff'>"+category.name+"</font></center>");
        $content.html( markup );
        $page.page();
        $content.find( ":jqmData(role=listview)" ).listview();
        options.dataUrl = urlObj.href;
        $.mobile.changePage( $page, options );
    }
}



function showMap2( urlObj, options )
{
    var mapName = urlObj.hash.replace( /.*map=/, "" ),
    mapId = map3Data[ mapName ],
    pageSelector = urlObj.hash.replace( /\?.*$/, "" );
    
    if ( mapId ) {
/*        $("#test1").gmap3({
            map:{
                options:{
                    mapTypeId : google.maps.MapTypeId.ROADMAP,
                    center: [-37.76, 144.925],
                    zoom: 10
                }
            },
            kmllayer:{
                options:{
                    url: mapId.url,
                    preserveViewport: true
                }
            }
        });
*/

        $('#test1').gmap({'center': '57.7973333,12.0502107', 'zoom': 10, 'disableDefaultUI':true, 'callback': function() {
                              var self = this;
                              self.addMarker({'position': this.get('map').getCenter() }).click(function() {
                                                                                               self.openInfoWindow({ 'content': 'Hello World!' }, this);
                                                                                               });
                              }});

        $('#test1').gmap('refresh');


        $("#gmapHeader1").find("a")
            .attr("data-iconpos", "notext")
            .attr("data-role", "button")
            .attr("data-icon","back")
            .attr("data-inline","true")
            .attr("class","ui-btn-left")
            .attr("href", "#showRides?ride="+mapId.parentRideList);
        $('#gmapHeader1').trigger('create');
        $("#gmapHeader2").find("a")
            .attr("data-iconpos", "notext")
            .attr("data-role", "button")
            .attr("data-icon", "search")
            .attr("data-inline" ,"true")
            .attr("class","ui-btn-right")
            .attr("href","javascript:locateCurrentPosition();");
        $('#gmapHeader2').trigger('create');

        var $page = $( pageSelector ),
        $header = $page.children( ":jqmData(role=header)" );
//        $content = $page.children( ":jqmData(role=content)" ),
//        markup = "<div style='padding:0 0 0 0; width:100%; height:400px; background:lightgrey' alt='Loading...'><object type='text/html' data='"+mapId.url+"' style='width:100%; height:100%;' scrolling='no'></object></div>";
//        markup += "<a href='#showRides?ride="+mapId.parentRideList+"' data-transition='fade'><img src='img/"+mapId.icon+"' border='0' style='position:absolute; top:0px; left:10px;' width='50px' height='50px' /></a>";
//        markup += "<img src='img/locator_32.png' onClick='locateCurrentPosition();' border='0' style='position:absolute; top:5px; left:250px;' width='32px' height='32px' />";
        $header.find( "h1" ).html( mapId.name );
        //headerHTML = "<h1>"+mapId.name+"</h1>";
//        headerHTML = "<a href='#showRides?ride="+mapId.parentRideList+"' class='ui-btn-left' data-role='button' data-icon='back' data-iconpos='notext' data-inline='true'>back</a>";
//        headerHTML += "<a href='#popupMapOpt' data-rel='popup' class='ui-btn-right' data-role='button' data-inline='true' data-icon='bars' data-theme='a' data-transition='pop' data-iconpos='notext'>options</a>";
//        headerHTML += "<div data-role='popup' id='popupMapOpt' data-theme='none'><div data-role='collapsible-set' data-theme='a' data-content-theme='a' data-collapsed-icon='arrow-r' data-expanded-icon='arrow-d' style='margin:0; width:250px;'><ul data-role='listview'><li data-icon='search' data-iconpos='notext'><a href='javascript:locateCurrentPosition();' data-iconpos='notext'><h1>Get current location</h1></a></li><li data-icon='back'><a id='hrefBack' href='#showRides?ride="+mapId.parentRideList+"'><h1>Go back</h1></a></li></ul></div></div>";
        //$header.html(headerHTML);
//        $header.find( "div" ).html(headerHTML);
//        $content.html( markup );

        $page.page();
        options.dataUrl = urlObj.href;
        $.mobile.changePage( $page, options );
    }
}



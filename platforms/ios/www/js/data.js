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
        parentRideList: "lite",
        center: new google.maps.LatLng(-37.76, 144.925),
        zoom: 12
    },
    li2: {
        name: "Gardiners Creek Trail",
        description: "Gardiners Creek Trail",
        icon: "Lite_icon_50.png",
        url: "http://cap-mobi.msystems.info/kml/AlpeDHuezMap.kml",
        parentRideList: "lite",
        center: new google.maps.LatLng(45.19157000,5.71471),
        zoom: 9
    },
    li3: {
        name: "Happy Valley Rail Trail",
        description: "Happy Valley Rail Trail",
        icon: "Lite_icon_50.png",
        url: "http://cap-mobi.msystems.info/kml/AlpeDHuezMap.kml",
        parentRideList: "lite",
        center: new google.maps.LatLng(45.19157000,5.71471),
        zoom: 9
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
        {name: "Gardiners Creek Trail", url:"#showGMap4?map=li2"},
        {name: "Happy Valley Rail Trail", url:"#showGMap5?map=li3"},
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

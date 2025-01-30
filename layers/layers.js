ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2180").setExtent([640903.794777, 516573.251218, 647524.851240, 521052.793985]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    
        var lyr_wopy_pow = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
              url: "https://wody.isok.gov.pl/gpservices/KZGW/MZP20_Predkosc_WysokiePrawdopodPowodzi/MapServer/WMSServer?",
              attributions: 'Gugik',
              params: {
                "LAYERS": "5",
                "TILED": "true",
                "VERSION": "1.3.0"},
                projection: 'EPSG:3857'
            })),
            title: 'Wody powierzchniowe',
            opacity: 1.000000,
 
          });
 
 
        wms_layers.push([lyr_wopy_pow, 0]);




        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_siatka_qgis_2 = new ol.format.GeoJSON();
var features_siatka_qgis_2 = format_siatka_qgis_2.readFeatures(json_siatka_qgis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_siatka_qgis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_qgis_2.addFeatures(features_siatka_qgis_2);
var lyr_siatka_qgis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_qgis_2, 
                style: style_siatka_qgis_2,
                popuplayertitle: 'siatka_qgis',
                interactive: false,
    title: 'siatka_qgis<br />\
    <img src="styles/legend/siatka_qgis_2_0.png" /> -100 - -71<br />\
    <img src="styles/legend/siatka_qgis_2_1.png" /> -71 - -38<br />\
    <img src="styles/legend/siatka_qgis_2_2.png" /> -38 - -12<br />\
    <img src="styles/legend/siatka_qgis_2_3.png" /> -12 - 20<br />\
    <img src="styles/legend/siatka_qgis_2_4.png" /> 20 - 63<br />\
    <img src="styles/legend/siatka_qgis_2_5.png" /> 63 - 100<br />'
        });
var format_vmap_qgis_3 = new ol.format.GeoJSON();
var features_vmap_qgis_3 = format_vmap_qgis_3.readFeatures(json_vmap_qgis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_vmap_qgis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_qgis_3.addFeatures(features_vmap_qgis_3);
var lyr_vmap_qgis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_qgis_3, 
                style: style_vmap_qgis_3,
                popuplayertitle: 'vmap_qgis',
                interactive: false,
                title: '<img src="styles/legend/vmap_qgis_3.png" /> vmap_qgis'
            });
var format_sentinel_qgis_4 = new ol.format.GeoJSON();
var features_sentinel_qgis_4 = format_sentinel_qgis_4.readFeatures(json_sentinel_qgis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_sentinel_qgis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel_qgis_4.addFeatures(features_sentinel_qgis_4);
var lyr_sentinel_qgis_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel_qgis_4, 
                style: style_sentinel_qgis_4,
                popuplayertitle: 'sentinel_qgis',
                interactive: false,
                title: '<img src="styles/legend/sentinel_qgis_4.png" /> sentinel_qgis'
            });
var format_historyczna_qgis_5 = new ol.format.GeoJSON();
var features_historyczna_qgis_5 = format_historyczna_qgis_5.readFeatures(json_historyczna_qgis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_historyczna_qgis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historyczna_qgis_5.addFeatures(features_historyczna_qgis_5);
var lyr_historyczna_qgis_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historyczna_qgis_5, 
                style: style_historyczna_qgis_5,
                popuplayertitle: 'historyczna_qgis',
                interactive: false,
                title: '<img src="styles/legend/historyczna_qgis_5.png" /> historyczna_qgis'
            });

lyr_OpenStreetMap_0.setVisible(false);
lyr_GoogleSatellite_1.setVisible(true);
lyr_siatka_qgis_2.setVisible(false);
lyr_vmap_qgis_3.setVisible(true);
lyr_sentinel_qgis_4.setVisible(true);
lyr_historyczna_qgis_5.setVisible(true);
lyr_wopy_pow.setVisible(true);

var layersList = [
    lyr_OpenStreetMap_0,
    lyr_GoogleSatellite_1,
    lyr_wopy_pow,
    lyr_siatka_qgis_2,lyr_vmap_qgis_3,
    lyr_sentinel_qgis_4,
    lyr_historyczna_qgis_5,];


lyr_siatka_qgis_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID_1', 'AREA': 'AREA', 'proc_A': 'proc_A', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID_1', 'siatka_GRI': 'siatka_GRI', 'AREA_1': 'AREA_1', 'proc_B': 'proc_B', 'PERCENTA_1': 'PERCENTA_1', 'OBJECTID_2': 'OBJECTID_2', 'siatka_G_1': 'siatka_G_1', 'AREA_12': 'AREA_12', 'proc_C': 'proc_C', 'PERCENTA_2': 'PERCENTA_2', 'roznica_A_': 'roznica_A_', });
lyr_vmap_qgis_3.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obwod': 'obwod', 'wsp_zw': 'wsp_zw', });
lyr_sentinel_qgis_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obwod': 'obwod', 'wsp_zw': 'wsp_zw', });
lyr_historyczna_qgis_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Id': 'Id', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obwod': 'obwod', 'wsp_zw': 'wsp_zw', });
lyr_siatka_qgis_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'proc_A': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'siatka_GRI': 'TextEdit', 'AREA_1': 'TextEdit', 'proc_B': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'OBJECTID_2': 'Range', 'siatka_G_1': 'TextEdit', 'AREA_12': 'TextEdit', 'proc_C': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'roznica_A_': 'TextEdit', });
lyr_vmap_qgis_3.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obwod': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_sentinel_qgis_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obwod': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_historyczna_qgis_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Id': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obwod': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_siatka_qgis_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'OBJECTID': 'no label', 'GRID_ID_1': 'no label', 'AREA': 'no label', 'proc_A': 'no label', 'PERCENTAGE': 'no label', 'OBJECTID_1': 'no label', 'siatka_GRI': 'no label', 'AREA_1': 'no label', 'proc_B': 'no label', 'PERCENTA_1': 'no label', 'OBJECTID_2': 'no label', 'siatka_G_1': 'no label', 'AREA_12': 'no label', 'proc_C': 'no label', 'PERCENTA_2': 'no label', 'roznica_A_': 'no label', });
lyr_vmap_qgis_3.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obwod': 'no label', 'wsp_zw': 'no label', });
lyr_sentinel_qgis_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obwod': 'no label', 'wsp_zw': 'no label', });
lyr_historyczna_qgis_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Id': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obwod': 'no label', 'wsp_zw': 'no label', });
lyr_historyczna_qgis_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
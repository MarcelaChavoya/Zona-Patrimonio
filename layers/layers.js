ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32614").setExtent([487547.193087, 2120229.866355, 507104.974663, 2138377.876490]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Precipitacinmediaanualmm_1 = new ol.format.GeoJSON();
var features_Precipitacinmediaanualmm_1 = format_Precipitacinmediaanualmm_1.readFeatures(json_Precipitacinmediaanualmm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Precipitacinmediaanualmm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Precipitacinmediaanualmm_1.addFeatures(features_Precipitacinmediaanualmm_1);
var lyr_Precipitacinmediaanualmm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Precipitacinmediaanualmm_1, 
                style: style_Precipitacinmediaanualmm_1,
                interactive: true,
    title: 'Precipitación media anual (mm)<br />\
    <img src="styles/legend/Precipitacinmediaanualmm_1_0.png" /> 750 - 773<br />\
    <img src="styles/legend/Precipitacinmediaanualmm_1_1.png" /> 773 - 785<br />\
    <img src="styles/legend/Precipitacinmediaanualmm_1_2.png" /> 785 - 813<br />'
        });
var format_TemperaturamediaanualC_2 = new ol.format.GeoJSON();
var features_TemperaturamediaanualC_2 = format_TemperaturamediaanualC_2.readFeatures(json_TemperaturamediaanualC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_TemperaturamediaanualC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemperaturamediaanualC_2.addFeatures(features_TemperaturamediaanualC_2);
var lyr_TemperaturamediaanualC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TemperaturamediaanualC_2, 
                style: style_TemperaturamediaanualC_2,
                interactive: true,
    title: 'Temperatura media anual (°C)<br />\
    <img src="styles/legend/TemperaturamediaanualC_2_0.png" /> 16 - 16.1<br />\
    <img src="styles/legend/TemperaturamediaanualC_2_1.png" /> 16.1 - 16.2<br />\
    <img src="styles/legend/TemperaturamediaanualC_2_2.png" /> 16.2 - 16.3<br />'
        });
var format_Parcelas_3 = new ol.format.GeoJSON();
var features_Parcelas_3 = format_Parcelas_3.readFeatures(json_Parcelas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Parcelas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_3.addFeatures(features_Parcelas_3);
var lyr_Parcelas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelas_3, 
                style: style_Parcelas_3,
                interactive: true,
                title: '<img src="styles/legend/Parcelas_3.png" /> Parcelas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Precipitacinmediaanualmm_1.setVisible(true);lyr_TemperaturamediaanualC_2.setVisible(true);lyr_Parcelas_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Precipitacinmediaanualmm_1,lyr_TemperaturamediaanualC_2,lyr_Parcelas_3];
lyr_Precipitacinmediaanualmm_1.set('fieldAliases', {'mm': 'mm', });
lyr_TemperaturamediaanualC_2.set('fieldAliases', {'°C': '°C', });
lyr_Parcelas_3.set('fieldAliases', {'Núcleo agrario': 'Núcleo agrario', 'Paraje': 'Paraje', 'Perímetro': 'Perímetro', 'Área (ha)': 'Área (ha)', 'Tipo de suelo': 'Tipo de suelo', });
lyr_Precipitacinmediaanualmm_1.set('fieldImages', {'mm': '', });
lyr_TemperaturamediaanualC_2.set('fieldImages', {'°C': '', });
lyr_Parcelas_3.set('fieldImages', {'Núcleo agrario': '', 'Paraje': '', 'Perímetro': '', 'Área (ha)': '', 'Tipo de suelo': '', });
lyr_Precipitacinmediaanualmm_1.set('fieldLabels', {'mm': 'inline label', });
lyr_TemperaturamediaanualC_2.set('fieldLabels', {'°C': 'inline label', });
lyr_Parcelas_3.set('fieldLabels', {'Núcleo agrario': 'inline label', 'Paraje': 'inline label', 'Perímetro': 'inline label', 'Área (ha)': 'inline label', 'Tipo de suelo': 'inline label', });
lyr_Parcelas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
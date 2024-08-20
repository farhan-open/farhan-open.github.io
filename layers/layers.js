var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kab_Kaltim_2 = new ol.format.GeoJSON();
var features_Kab_Kaltim_2 = format_Kab_Kaltim_2.readFeatures(json_Kab_Kaltim_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kab_Kaltim_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kab_Kaltim_2.addFeatures(features_Kab_Kaltim_2);
var lyr_Kab_Kaltim_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kab_Kaltim_2, 
                style: style_Kab_Kaltim_2,
                popuplayertitle: "Kab_Kaltim",
                interactive: false,
                title: '<img src="styles/legend/Kab_Kaltim_2.png" /> Kab_Kaltim'
            });
var format_Akses_3 = new ol.format.GeoJSON();
var features_Akses_3 = format_Akses_3.readFeatures(json_Akses_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Akses_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Akses_3.addFeatures(features_Akses_3);
var lyr_Akses_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Akses_3, 
                style: style_Akses_3,
                popuplayertitle: "Akses",
                interactive: true,
    title: 'Akses<br />\
    <img src="styles/legend/Akses_3_0.png" /> 7 - 12,8<br />\
    <img src="styles/legend/Akses_3_1.png" /> 12,8 - 18,6<br />\
    <img src="styles/legend/Akses_3_2.png" /> 18,6 - 24,4<br />\
    <img src="styles/legend/Akses_3_3.png" /> 24,4 - 30,2<br />\
    <img src="styles/legend/Akses_3_4.png" /> 30,2 - 36<br />'
        });
var format_Harga_4 = new ol.format.GeoJSON();
var features_Harga_4 = format_Harga_4.readFeatures(json_Harga_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Harga_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Harga_4.addFeatures(features_Harga_4);
var lyr_Harga_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Harga_4, 
                style: style_Harga_4,
                popuplayertitle: "Harga",
                interactive: true,
    title: 'Harga<br />\
    <img src="styles/legend/Harga_4_0.png" /> 6 - 26<br />\
    <img src="styles/legend/Harga_4_1.png" /> 26 - 46<br />\
    <img src="styles/legend/Harga_4_2.png" /> 46 - 67<br />\
    <img src="styles/legend/Harga_4_3.png" /> 67 - 87<br />\
    <img src="styles/legend/Harga_4_4.png" /> 87 - 107<br />'
        });
var format_Fasilitas_5 = new ol.format.GeoJSON();
var features_Fasilitas_5 = format_Fasilitas_5.readFeatures(json_Fasilitas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_5.addFeatures(features_Fasilitas_5);
var lyr_Fasilitas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_5, 
                style: style_Fasilitas_5,
                popuplayertitle: "Fasilitas",
                interactive: true,
    title: 'Fasilitas<br />\
    <img src="styles/legend/Fasilitas_5_0.png" /> 23 - 82<br />\
    <img src="styles/legend/Fasilitas_5_1.png" /> 82 - 141<br />\
    <img src="styles/legend/Fasilitas_5_2.png" /> 141 - 201<br />\
    <img src="styles/legend/Fasilitas_5_3.png" /> 201 - 260<br />\
    <img src="styles/legend/Fasilitas_5_4.png" /> 260 - 319<br />'
        });
var format_Atraksi_6 = new ol.format.GeoJSON();
var features_Atraksi_6 = format_Atraksi_6.readFeatures(json_Atraksi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atraksi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atraksi_6.addFeatures(features_Atraksi_6);
var lyr_Atraksi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Atraksi_6, 
                style: style_Atraksi_6,
                popuplayertitle: "Atraksi",
                interactive: true,
    title: 'Atraksi<br />\
    <img src="styles/legend/Atraksi_6_0.png" /> 315 - 479<br />\
    <img src="styles/legend/Atraksi_6_1.png" /> 479 - 644<br />\
    <img src="styles/legend/Atraksi_6_2.png" /> 644 - 808<br />\
    <img src="styles/legend/Atraksi_6_3.png" /> 808 - 973<br />\
    <img src="styles/legend/Atraksi_6_4.png" /> 973 - 1137<br />'
        });
var format_Monetary_7 = new ol.format.GeoJSON();
var features_Monetary_7 = format_Monetary_7.readFeatures(json_Monetary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monetary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monetary_7.addFeatures(features_Monetary_7);
var lyr_Monetary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monetary_7, 
                style: style_Monetary_7,
                popuplayertitle: "Monetary",
                interactive: true,
    title: 'Monetary<br />\
    <img src="styles/legend/Monetary_7_0.png" /> 1 - 2,7<br />\
    <img src="styles/legend/Monetary_7_1.png" /> 2,7 - 4,3<br />\
    <img src="styles/legend/Monetary_7_2.png" /> 4,3 - 6<br />\
    <img src="styles/legend/Monetary_7_3.png" /> 6 - 7,6<br />\
    <img src="styles/legend/Monetary_7_4.png" /> 7,6 - 9,3<br />'
        });
var format_Frequency_8 = new ol.format.GeoJSON();
var features_Frequency_8 = format_Frequency_8.readFeatures(json_Frequency_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frequency_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frequency_8.addFeatures(features_Frequency_8);
var lyr_Frequency_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frequency_8, 
                style: style_Frequency_8,
                popuplayertitle: "Frequency",
                interactive: true,
    title: 'Frequency<br />\
    <img src="styles/legend/Frequency_8_0.png" /> 1 - 111<br />\
    <img src="styles/legend/Frequency_8_1.png" /> 111 - 221<br />\
    <img src="styles/legend/Frequency_8_2.png" /> 221 - 331<br />\
    <img src="styles/legend/Frequency_8_3.png" /> 331 - 441<br />\
    <img src="styles/legend/Frequency_8_4.png" /> 441 - 551<br />'
        });
var format_Recency_9 = new ol.format.GeoJSON();
var features_Recency_9 = format_Recency_9.readFeatures(json_Recency_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recency_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recency_9.addFeatures(features_Recency_9);
var lyr_Recency_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recency_9, 
                style: style_Recency_9,
                popuplayertitle: "Recency",
                interactive: true,
    title: 'Recency<br />\
    <img src="styles/legend/Recency_9_0.png" /> 7 - 24<br />\
    <img src="styles/legend/Recency_9_1.png" /> 24 - 40<br />\
    <img src="styles/legend/Recency_9_2.png" /> 40 - 57<br />\
    <img src="styles/legend/Recency_9_3.png" /> 57 - 73<br />\
    <img src="styles/legend/Recency_9_4.png" /> 73 - 90<br />'
        });
var format_Reputasi_10 = new ol.format.GeoJSON();
var features_Reputasi_10 = format_Reputasi_10.readFeatures(json_Reputasi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reputasi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reputasi_10.addFeatures(features_Reputasi_10);
var lyr_Reputasi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reputasi_10, 
                style: style_Reputasi_10,
                popuplayertitle: "Reputasi",
                interactive: true,
    title: 'Reputasi<br />\
    <img src="styles/legend/Reputasi_10_0.png" /> 4,23 - 4,34<br />\
    <img src="styles/legend/Reputasi_10_1.png" /> 4,34 - 4,46<br />\
    <img src="styles/legend/Reputasi_10_2.png" /> 4,46 - 4,57<br />\
    <img src="styles/legend/Reputasi_10_3.png" /> 4,57 - 4,69<br />\
    <img src="styles/legend/Reputasi_10_4.png" /> 4,69 - 4,8<br />'
        });
var format_Popularitas_11 = new ol.format.GeoJSON();
var features_Popularitas_11 = format_Popularitas_11.readFeatures(json_Popularitas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Popularitas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Popularitas_11.addFeatures(features_Popularitas_11);
var lyr_Popularitas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Popularitas_11, 
                style: style_Popularitas_11,
                popuplayertitle: "Popularitas",
                interactive: true,
    title: 'Popularitas<br />\
    <img src="styles/legend/Popularitas_11_0.png" /> 1192 - 1990<br />\
    <img src="styles/legend/Popularitas_11_1.png" /> 1990 - 2789<br />\
    <img src="styles/legend/Popularitas_11_2.png" /> 2789 - 3587<br />\
    <img src="styles/legend/Popularitas_11_3.png" /> 3587 - 4386<br />\
    <img src="styles/legend/Popularitas_11_4.png" /> 4386 - 5184<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Kab_Kaltim_2.setVisible(true);lyr_Akses_3.setVisible(false);lyr_Harga_4.setVisible(false);lyr_Fasilitas_5.setVisible(false);lyr_Atraksi_6.setVisible(false);lyr_Monetary_7.setVisible(false);lyr_Frequency_8.setVisible(false);lyr_Recency_9.setVisible(false);lyr_Reputasi_10.setVisible(false);lyr_Popularitas_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Kab_Kaltim_2,lyr_Akses_3,lyr_Harga_4,lyr_Fasilitas_5,lyr_Atraksi_6,lyr_Monetary_7,lyr_Frequency_8,lyr_Recency_9,lyr_Reputasi_10,lyr_Popularitas_11];
lyr_Kab_Kaltim_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Akses_3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', 'Positif': 'Positif', 'Negatif': 'Negatif', 'Netral': 'Netral', });
lyr_Harga_4.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', 'Positif': 'Positif', 'Negatif': 'Negatif', 'Netral': 'Netral', });
lyr_Fasilitas_5.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', 'Positif': 'Positif', 'Negatif': 'Negatif', 'Netral': 'Netral', });
lyr_Atraksi_6.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', 'Positif': 'Positif', 'Negatif': 'Negatif', 'Netral': 'Netral', });
lyr_Monetary_7.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', });
lyr_Frequency_8.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', });
lyr_Recency_9.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', });
lyr_Reputasi_10.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', });
lyr_Popularitas_11.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'DTW': 'DTW', 'Popularitas': 'Popularitas', 'Reputasi': 'Reputasi', 'Recency': 'Recency', 'Frequency': 'Frequency', 'Monetary': 'Monetary', });
lyr_Kab_Kaltim_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Akses_3.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', 'Positif': 'Range', 'Negatif': 'Range', 'Netral': 'Range', });
lyr_Harga_4.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', 'Positif': 'Range', 'Negatif': 'Range', 'Netral': 'Range', });
lyr_Fasilitas_5.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', 'Positif': 'Range', 'Negatif': 'Range', 'Netral': 'Range', });
lyr_Atraksi_6.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', 'Positif': 'Range', 'Negatif': 'Range', 'Netral': 'Range', });
lyr_Monetary_7.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', });
lyr_Frequency_8.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', });
lyr_Recency_9.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', });
lyr_Reputasi_10.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', });
lyr_Popularitas_11.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'DTW': 'TextEdit', 'Popularitas': 'Range', 'Reputasi': 'TextEdit', 'Recency': 'Range', 'Frequency': 'TextEdit', 'Monetary': 'TextEdit', });
lyr_Kab_Kaltim_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Akses_3.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'hidden field', 'Reputasi': 'hidden field', 'Recency': 'hidden field', 'Frequency': 'hidden field', 'Monetary': 'hidden field', 'Positif': 'inline label - visible with data', 'Negatif': 'inline label - visible with data', 'Netral': 'inline label - visible with data', });
lyr_Harga_4.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'hidden field', 'Reputasi': 'hidden field', 'Recency': 'hidden field', 'Frequency': 'hidden field', 'Monetary': 'hidden field', 'Positif': 'inline label - visible with data', 'Negatif': 'inline label - visible with data', 'Netral': 'inline label - visible with data', });
lyr_Fasilitas_5.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'hidden field', 'Reputasi': 'hidden field', 'Recency': 'hidden field', 'Frequency': 'hidden field', 'Monetary': 'hidden field', 'Positif': 'inline label - visible with data', 'Negatif': 'inline label - visible with data', 'Netral': 'inline label - visible with data', });
lyr_Atraksi_6.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'hidden field', 'Reputasi': 'hidden field', 'Recency': 'hidden field', 'Frequency': 'hidden field', 'Monetary': 'hidden field', 'Positif': 'inline label - visible with data', 'Negatif': 'inline label - visible with data', 'Netral': 'inline label - visible with data', });
lyr_Monetary_7.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'hidden field', 'Reputasi': 'hidden field', 'Recency': 'hidden field', 'Frequency': 'hidden field', 'Monetary': 'inline label - visible with data', });
lyr_Frequency_8.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'hidden field', 'Reputasi': 'hidden field', 'Recency': 'hidden field', 'Frequency': 'inline label - visible with data', 'Monetary': 'hidden field', });
lyr_Recency_9.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'hidden field', 'Reputasi': 'hidden field', 'Recency': 'inline label - visible with data', 'Frequency': 'hidden field', 'Monetary': 'hidden field', });
lyr_Reputasi_10.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'hidden field', 'Reputasi': 'inline label - visible with data', 'Recency': 'hidden field', 'Frequency': 'hidden field', 'Monetary': 'hidden field', });
lyr_Popularitas_11.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'DTW': 'inline label - visible with data', 'Popularitas': 'inline label - visible with data', 'Reputasi': 'hidden field', 'Recency': 'hidden field', 'Frequency': 'hidden field', 'Monetary': 'hidden field', });
lyr_Popularitas_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1379061.712432, 7476910.887114, 1395251.632455, 7488500.232579]);
var wms_layers = [];


        var lyr_Baggrundskort_0 = new ol.layer.Tile({
            'title': 'Baggrundskort',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Kommuneplan_1 = new ol.format.GeoJSON();
var features_Kommuneplan_1 = format_Kommuneplan_1.readFeatures(json_Kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_1.addFeatures(features_Kommuneplan_1);
var lyr_Kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_1, 
                style: style_Kommuneplan_1,
                popuplayertitle: 'Kommuneplan',
                interactive: false,
                title: '<img src="styles/legend/Kommuneplan_1.png" /> Kommuneplan'
            });
var format_Strandbeskyttelse_2 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_2 = format_Strandbeskyttelse_2.readFeatures(json_Strandbeskyttelse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_2.addFeatures(features_Strandbeskyttelse_2);
var lyr_Strandbeskyttelse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_2, 
                style: style_Strandbeskyttelse_2,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/Strandbeskyttelse_2.png" /> Strandbeskyttelse'
            });
var format_Skovomrde_3 = new ol.format.GeoJSON();
var features_Skovomrde_3 = format_Skovomrde_3.readFeatures(json_Skovomrde_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skovomrde_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skovomrde_3.addFeatures(features_Skovomrde_3);
var lyr_Skovomrde_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skovomrde_3, 
                style: style_Skovomrde_3,
                popuplayertitle: 'Skovområde',
                interactive: true,
                title: '<img src="styles/legend/Skovomrde_3.png" /> Skovområde'
            });
var format_Lokalplanvedtaget_4 = new ol.format.GeoJSON();
var features_Lokalplanvedtaget_4 = format_Lokalplanvedtaget_4.readFeatures(json_Lokalplanvedtaget_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanvedtaget_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanvedtaget_4.addFeatures(features_Lokalplanvedtaget_4);
var lyr_Lokalplanvedtaget_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanvedtaget_4, 
                style: style_Lokalplanvedtaget_4,
                popuplayertitle: 'Lokalplan vedtaget',
                interactive: true,
    title: 'Lokalplan vedtaget<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_0.png" /> 1024399<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_1.png" /> 1053515<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_2.png" /> 1061002<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_3.png" /> 1061022<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_4.png" /> 1061038<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_5.png" /> 1061103<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_6.png" /> 1061140<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_7.png" /> 1061206<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_8.png" /> 1061209<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_9.png" /> 1061210<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_10.png" /> 1061715<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_11.png" /> 1061734<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_12.png" /> 1061739<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_13.png" /> 1061746<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_14.png" /> 1061756<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_15.png" /> 1061757<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_16.png" /> 1061824<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_17.png" /> 1061829<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_18.png" /> 1062026<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_19.png" /> 1062121<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_20.png" /> 1070479<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_21.png" /> 1071381<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_22.png" /> 1074662<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_23.png" /> 1074664<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_24.png" /> 1074675<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_25.png" /> 1075214<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_26.png" /> 1075219<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_27.png" /> 1075387<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_28.png" /> 1075393<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_29.png" /> 1075552<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_30.png" /> 1075553<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_31.png" /> 1075577<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_32.png" /> 1075593<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_33.png" /> 1075598<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_34.png" /> 1075609<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_35.png" /> 1075669<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_36.png" /> 1075682<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_37.png" /> 1075695<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_38.png" /> 1075708<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_39.png" /> 1075710<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_40.png" /> 1075718<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_41.png" /> 1075751<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_42.png" /> 1075752<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_43.png" /> 1075779<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_44.png" /> 1075795<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_45.png" /> 1075800<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_46.png" /> 1075801<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_47.png" /> 1075815<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_48.png" /> 1075877<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_49.png" /> 1075893<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_50.png" /> 1075897<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_51.png" /> 1075900<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_52.png" /> 1075902<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_53.png" /> 1075905<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_54.png" /> 1075907<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_55.png" /> 1075908<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_56.png" /> 1076004<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_57.png" /> 1076010<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_58.png" /> 1076019<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_59.png" /> 1076041<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_60.png" /> 1076064<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_61.png" /> 1076086<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_62.png" /> 1076094<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_63.png" /> 1076107<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_64.png" /> 1076114<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_65.png" /> 1076115<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_66.png" /> 1076126<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_67.png" /> 1076129<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_68.png" /> 1076287<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_69.png" /> 1076379<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_70.png" /> 1076865<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_71.png" /> 1076868<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_72.png" /> 1076874<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_73.png" /> 1076892<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_74.png" /> 1076902<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_75.png" /> 1076939<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_76.png" /> 1076961<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_77.png" /> 1076968<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_78.png" /> 1077070<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_79.png" /> 1077082<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_80.png" /> 1077085<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_81.png" /> 1077086<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_82.png" /> 1077558<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_83.png" /> 1077565<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_84.png" /> 1078074<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_85.png" /> 1078075<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_86.png" /> 1078077<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_87.png" /> 1078184<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_88.png" /> 1078227<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_89.png" /> 1078229<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_90.png" /> 1078231<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_91.png" /> 1078248<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_92.png" /> 1078275<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_93.png" /> 1078279<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_94.png" /> 1078289<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_95.png" /> 1078346<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_96.png" /> 1078464<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_97.png" /> 1078465<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_98.png" /> 1078468<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_99.png" /> 1079122<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_100.png" /> 1079123<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_101.png" /> 1079666<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_102.png" /> 1079671<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_103.png" /> 1081381<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_104.png" /> 1084485<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_105.png" /> 1084491<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_106.png" /> 1084492<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_107.png" /> 1103890<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_108.png" /> 1109560<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_109.png" /> 1328884<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_110.png" /> 1359145<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_111.png" /> 1369547<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_112.png" /> 1374739<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_113.png" /> 1792902<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_114.png" /> 1869505<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_115.png" /> 2136388<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_116.png" /> 2186492<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_117.png" /> 2269185<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_118.png" /> 2641209<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_119.png" /> 2702963<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_120.png" /> 2702964<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_121.png" /> 2702965<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_122.png" /> 2702968<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_123.png" /> 2702969<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_124.png" /> 2702993<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_125.png" /> 2978253<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_126.png" /> 3016098<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_127.png" /> 3016099<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_128.png" /> 3016105<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_129.png" /> 3186913<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_130.png" /> 3188617<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_131.png" /> 3188619<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_132.png" /> 3812280<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_133.png" /> 3964626<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_134.png" /> 3964627<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_135.png" /> 3964812<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_136.png" /> 9419556<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_137.png" /> 9431987<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_138.png" /> 9431989<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_139.png" /> 9431990<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_140.png" /> 9431991<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_141.png" /> 9431992<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_142.png" /> 9431993<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_143.png" /> 9431994<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_144.png" /> 9690454<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_145.png" /> 9717080<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_146.png" /> 9731022<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_147.png" /> 9732835<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_148.png" /> 9732862<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_149.png" /> 9753254<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_150.png" /> 10353005<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_151.png" /> 10456675<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_152.png" /> 10478656<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_153.png" /> 10840028<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_154.png" /> 10900534<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_155.png" /> 10906517<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_156.png" /> 10985743<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_157.png" /> 11021467<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_158.png" /> 11126774<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_159.png" /> 11159816<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_160.png" /> 11176926<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_161.png" /> 11185105<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_162.png" /> 11198619<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_163.png" /> 11228193<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_164.png" /> 11240317<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_165.png" /> 11252419<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_166.png" /> 11307736<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_167.png" /> 11307768<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_168.png" /> 11317442<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_169.png" /> 11347122<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_170.png" /> <br />' });
var format_Lokalplanforslag_5 = new ol.format.GeoJSON();
var features_Lokalplanforslag_5 = format_Lokalplanforslag_5.readFeatures(json_Lokalplanforslag_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanforslag_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanforslag_5.addFeatures(features_Lokalplanforslag_5);
var lyr_Lokalplanforslag_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanforslag_5, 
                style: style_Lokalplanforslag_5,
                popuplayertitle: 'Lokalplan forslag',
                interactive: true,
                title: '<img src="styles/legend/Lokalplanforslag_5.png" /> Lokalplan forslag'
            });
var format_Industrikvarter_6 = new ol.format.GeoJSON();
var features_Industrikvarter_6 = format_Industrikvarter_6.readFeatures(json_Industrikvarter_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrikvarter_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrikvarter_6.addFeatures(features_Industrikvarter_6);
var lyr_Industrikvarter_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrikvarter_6, 
                style: style_Industrikvarter_6,
                popuplayertitle: 'Industrikvarter',
                interactive: true,
                title: '<img src="styles/legend/Industrikvarter_6.png" /> Industrikvarter'
            });
var format_Frededeomrder_7 = new ol.format.GeoJSON();
var features_Frededeomrder_7 = format_Frededeomrder_7.readFeatures(json_Frededeomrder_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_7.addFeatures(features_Frededeomrder_7);
var lyr_Frededeomrder_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_7, 
                style: style_Frededeomrder_7,
                popuplayertitle: 'Fredede områder',
                interactive: true,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_7_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_7_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_7_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_7_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_7_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_7_5.png" /> <br />' });
var format_Togstation_8 = new ol.format.GeoJSON();
var features_Togstation_8 = format_Togstation_8.readFeatures(json_Togstation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstation_8.addFeatures(features_Togstation_8);
var lyr_Togstation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstation_8, 
                style: style_Togstation_8,
                popuplayertitle: 'Togstation',
                interactive: true,
                title: '<img src="styles/legend/Togstation_8.png" /> Togstation'
            });
var format_Tankstation_9 = new ol.format.GeoJSON();
var features_Tankstation_9 = format_Tankstation_9.readFeatures(json_Tankstation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tankstation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tankstation_9.addFeatures(features_Tankstation_9);
var lyr_Tankstation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tankstation_9, 
                style: style_Tankstation_9,
                popuplayertitle: 'Tankstation',
                interactive: true,
                title: '<img src="styles/legend/Tankstation_9.png" /> Tankstation'
            });
var format_SuperMarked_10 = new ol.format.GeoJSON();
var features_SuperMarked_10 = format_SuperMarked_10.readFeatures(json_SuperMarked_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuperMarked_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuperMarked_10.addFeatures(features_SuperMarked_10);
var lyr_SuperMarked_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuperMarked_10, 
                style: style_SuperMarked_10,
                popuplayertitle: 'Super Marked',
                interactive: true,
                title: '<img src="styles/legend/SuperMarked_10.png" /> Super Marked'
            });
var format_Pizzaria_11 = new ol.format.GeoJSON();
var features_Pizzaria_11 = format_Pizzaria_11.readFeatures(json_Pizzaria_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pizzaria_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pizzaria_11.addFeatures(features_Pizzaria_11);
var lyr_Pizzaria_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pizzaria_11, 
                style: style_Pizzaria_11,
                popuplayertitle: 'Pizzaria',
                interactive: true,
                title: '<img src="styles/legend/Pizzaria_11.png" /> Pizzaria'
            });
var format_Mosk_12 = new ol.format.GeoJSON();
var features_Mosk_12 = format_Mosk_12.readFeatures(json_Mosk_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosk_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosk_12.addFeatures(features_Mosk_12);
var lyr_Mosk_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosk_12, 
                style: style_Mosk_12,
                popuplayertitle: 'Moské',
                interactive: true,
                title: '<img src="styles/legend/Mosk_12.png" /> Moské'
            });
var format_Lge_13 = new ol.format.GeoJSON();
var features_Lge_13 = format_Lge_13.readFeatures(json_Lge_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lge_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lge_13.addFeatures(features_Lge_13);
var lyr_Lge_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lge_13, 
                style: style_Lge_13,
                popuplayertitle: 'Læge',
                interactive: true,
                title: '<img src="styles/legend/Lge_13.png" /> Læge'
            });
var format_Legeplads_14 = new ol.format.GeoJSON();
var features_Legeplads_14 = format_Legeplads_14.readFeatures(json_Legeplads_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_14.addFeatures(features_Legeplads_14);
var lyr_Legeplads_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_14, 
                style: style_Legeplads_14,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_14.png" /> Legeplads'
            });
var format_Kirke_15 = new ol.format.GeoJSON();
var features_Kirke_15 = format_Kirke_15.readFeatures(json_Kirke_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirke_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirke_15.addFeatures(features_Kirke_15);
var lyr_Kirke_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirke_15, 
                style: style_Kirke_15,
                popuplayertitle: 'Kirke',
                interactive: true,
                title: '<img src="styles/legend/Kirke_15.png" /> Kirke'
            });
var format_Idrt_16 = new ol.format.GeoJSON();
var features_Idrt_16 = format_Idrt_16.readFeatures(json_Idrt_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Idrt_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Idrt_16.addFeatures(features_Idrt_16);
var lyr_Idrt_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Idrt_16, 
                style: style_Idrt_16,
                popuplayertitle: 'Idræt',
                interactive: true,
                title: '<img src="styles/legend/Idrt_16.png" /> Idræt'
            });
var format_Folkeskole_17 = new ol.format.GeoJSON();
var features_Folkeskole_17 = format_Folkeskole_17.readFeatures(json_Folkeskole_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskole_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskole_17.addFeatures(features_Folkeskole_17);
var lyr_Folkeskole_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskole_17, 
                style: style_Folkeskole_17,
                popuplayertitle: 'Folkeskole',
                interactive: true,
                title: '<img src="styles/legend/Folkeskole_17.png" /> Folkeskole'
            });
var format_Brnehave_18 = new ol.format.GeoJSON();
var features_Brnehave_18 = format_Brnehave_18.readFeatures(json_Brnehave_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehave_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehave_18.addFeatures(features_Brnehave_18);
var lyr_Brnehave_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehave_18, 
                style: style_Brnehave_18,
                popuplayertitle: 'Børnehave',
                interactive: true,
                title: '<img src="styles/legend/Brnehave_18.png" /> Børnehave'
            });
var group_Teknisk = new ol.layer.Group({
                                layers: [lyr_Strandbeskyttelse_2,lyr_Skovomrde_3,lyr_Lokalplanvedtaget_4,lyr_Lokalplanforslag_5,lyr_Industrikvarter_6,lyr_Frededeomrder_7,],
                                fold: "open",
                                title: 'Teknisk'});

lyr_Baggrundskort_0.setVisible(true);lyr_Kommuneplan_1.setVisible(true);lyr_Strandbeskyttelse_2.setVisible(true);lyr_Skovomrde_3.setVisible(true);lyr_Lokalplanvedtaget_4.setVisible(true);lyr_Lokalplanforslag_5.setVisible(true);lyr_Industrikvarter_6.setVisible(true);lyr_Frededeomrder_7.setVisible(true);lyr_Togstation_8.setVisible(true);lyr_Tankstation_9.setVisible(true);lyr_SuperMarked_10.setVisible(true);lyr_Pizzaria_11.setVisible(true);lyr_Mosk_12.setVisible(true);lyr_Lge_13.setVisible(true);lyr_Legeplads_14.setVisible(true);lyr_Kirke_15.setVisible(true);lyr_Idrt_16.setVisible(true);lyr_Folkeskole_17.setVisible(true);lyr_Brnehave_18.setVisible(true);
var layersList = [lyr_Baggrundskort_0,lyr_Kommuneplan_1,group_Teknisk,lyr_Togstation_8,lyr_Tankstation_9,lyr_SuperMarked_10,lyr_Pizzaria_11,lyr_Mosk_12,lyr_Lge_13,lyr_Legeplads_14,lyr_Kirke_15,lyr_Idrt_16,lyr_Folkeskole_17,lyr_Brnehave_18];
lyr_Kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Strandbeskyttelse_2.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_Skovomrde_3.set('fieldAliases', {'fid': 'fid', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'tempID': 'tempID', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringFra': 'registreringFra', 'registreringTil': 'registreringTil', 'virkningsaktoer': 'virkningsaktoer', 'virkningFra': 'virkningFra', 'virkningTil': 'virkningTil', 'planNoejagtighed': 'planNoejagtighed', 'planStedfaestelsesmetode': 'planStedfaestelsesmetode', 'vertikalNoejagtighed': 'vertikalNoejagtighed', 'vertikalStedfaestelsesmetode': 'vertikalStedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'anvendelse': 'anvendelse', 'ejerSkov': 'ejerSkov', 'underMinimumSkov': 'underMinimumSkov', });
lyr_Lokalplanvedtaget_4.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plantype': 'plantype', 'plannr': 'plannr', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanforslag_5.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_Industrikvarter_6.set('fieldAliases', {'FID': 'FID', 'Industri': 'Industri', });
lyr_Frededeomrder_7.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Togstation_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tankstation_9.set('fieldAliases', {'tankstatio': 'tankstatio', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_SuperMarked_10.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'by': 'by', 'åbningsti': 'åbningsti', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Pizzaria_11.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'telefonnum': 'telefonnum', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Mosk_12.set('fieldAliases', {'Moské': 'Moské', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lge_13.set('fieldAliases', {'læge': 'læge', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Legeplads_14.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kirke_15.set('fieldAliases', {'Kirke': 'Kirke', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'Åbningsti': 'Åbningsti', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Idrt_16.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskole_17.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Brnehave_18.set('fieldAliases', {'Børnehave': 'Børnehave', 'Adresse': 'Adresse', 'By': 'By', 'Antal bør': 'Antal bør', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'TextEdit', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Strandbeskyttelse_2.set('fieldImages', {'fid': 'Hidden', 'forretningshaendelse': 'Hidden', 'senesteSagLokalId': 'Hidden', 'forretningsproces': 'Hidden', 'id.namespace': 'Hidden', 'id.lokalId': 'Hidden', 'paataenktHandling': 'Hidden', 'registreringFra': 'Hidden', 'virkningFra': 'Hidden', 'virkningsaktoer': 'Hidden', 'temaFladeID': 'Hidden', 'tematype': 'Hidden', 'jordstykkeLokalId': 'Hidden', });
lyr_Skovomrde_3.set('fieldImages', {'fid': 'Hidden', 'id.namespace': 'Hidden', 'id.lokalId': 'Hidden', 'tempID': 'Hidden', 'status': 'Hidden', 'geometristatus': 'Hidden', 'registreringsspecifikation': 'Hidden', 'dataansvar': 'Hidden', 'forretningshaendelse': 'Hidden', 'forretningsomraade': 'Hidden', 'forretningsproces': 'Hidden', 'registreringsaktoer': 'Hidden', 'registreringFra': 'Hidden', 'registreringTil': 'Hidden', 'virkningsaktoer': 'Hidden', 'virkningFra': 'Hidden', 'virkningTil': 'Hidden', 'planNoejagtighed': 'Hidden', 'planStedfaestelsesmetode': 'Hidden', 'vertikalNoejagtighed': 'Hidden', 'vertikalStedfaestelsesmetode': 'Hidden', 'applikation': 'Hidden', 'kommentar': 'Hidden', 'anvendelse': 'Hidden', 'ejerSkov': 'Hidden', 'underMinimumSkov': 'Hidden', });
lyr_Lokalplanvedtaget_4.set('fieldImages', {'fid': 'Hidden', 'planid': 'TextEdit', 'plantype': 'TextEdit', 'plannr': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanforslag_5.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_Industrikvarter_6.set('fieldImages', {'FID': 'Hidden', 'Industri': 'TextEdit', });
lyr_Frededeomrder_7.set('fieldImages', {'fid': 'Hidden', 'Temakode': 'Hidden', 'Temanavn': 'Hidden', 'Objekt_id': 'Hidden', 'Version_id': 'Hidden', 'Systid_fra': 'Hidden', 'Systid_til': 'Hidden', 'Oprettet': 'Hidden', 'Oprindkode': 'Hidden', 'Oprindelse': 'Hidden', 'Statuskode': 'Hidden', 'Status': 'Hidden', 'Off_kode': 'Hidden', 'Offentlig': 'Hidden', 'CVR_kode': 'Hidden', 'CVR_navn': 'Hidden', 'Bruger_id': 'Hidden', 'Link': 'Hidden', 'Shape_area': 'Hidden', 'Shape_leng': 'Hidden', 'Fred_tkode': 'Hidden', 'Fred_tnavn': 'Hidden', 'Reg_nr': 'Hidden', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Hidden', 'Aendrbegr': 'Hidden', 'Aar_fredn': 'Hidden', 'Gyldig_fra': 'Hidden', 'Gyldig_til': 'Hidden', });
lyr_Togstation_8.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Tankstation_9.set('fieldImages', {'tankstatio': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_SuperMarked_10.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'by': 'TextEdit', 'åbningsti': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Pizzaria_11.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'telefonnum': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Mosk_12.set('fieldImages', {'Moské': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Lge_13.set('fieldImages', {'læge': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Legeplads_14.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Kirke_15.set('fieldImages', {'Kirke': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'Åbningsti': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Idrt_16.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Folkeskole_17.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Brnehave_18.set('fieldImages', {'Børnehave': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Antal bør': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Kommuneplan_1.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'kommunenavn': 'no label', });
lyr_Strandbeskyttelse_2.set('fieldLabels', {});
lyr_Skovomrde_3.set('fieldLabels', {});
lyr_Lokalplanvedtaget_4.set('fieldLabels', {'planid': 'inline label - always visible', 'plantype': 'no label', 'plannr': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Lokalplanforslag_5.set('fieldLabels', {'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'anvgen': 'no label', 'datovedt': 'no label', 'doklink': 'no label', });
lyr_Industrikvarter_6.set('fieldLabels', {'Industri': 'inline label - visible with data', });
lyr_Frededeomrder_7.set('fieldLabels', {'Fred_navn': 'no label', });
lyr_Togstation_8.set('fieldLabels', {'Name': 'no label', });
lyr_Tankstation_9.set('fieldLabels', {'tankstatio': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_SuperMarked_10.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'by': 'no label', 'åbningsti': 'no label', 'Hjemmeside': 'no label', });
lyr_Pizzaria_11.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'telefonnum': 'no label', 'Hjemmeside': 'no label', });
lyr_Mosk_12.set('fieldLabels', {'Moské': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_Lge_13.set('fieldLabels', {'læge': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', });
lyr_Legeplads_14.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', });
lyr_Kirke_15.set('fieldLabels', {'Kirke': 'no label', 'adresse': 'no label', 'by': 'no label', 'hjemmeside': 'no label', 'Åbningsti': 'no label', });
lyr_Idrt_16.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Folkeskole_17.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Brnehave_18.set('fieldLabels', {'Børnehave': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Antal bør': 'no label', });
lyr_Brnehave_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
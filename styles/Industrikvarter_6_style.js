var size = 0;
var placement = 'point';

var style_Industrikvarter_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "19.5px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Industri") !== null) {
        labelText = String(feature.get("Industri"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(150,150,150,0.628)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

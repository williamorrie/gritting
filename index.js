let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: new google.maps.LatLng(54.897, -6.666),
    mapTypeId: "terrain",
    zoom: 9,
  });
  map.data.loadGeoJson(
      "https://services1.arcgis.com/i8LHQZrSk9zIffRU/ArcGIS/rest/services/Public_Gritting/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=OBJECTID&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=7000&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token="
      );
  map.data.loadGeoJson(
      "https://services5.arcgis.com/1ZHcUS1lwPTg4ms0/arcgis/rest/services/Milepost_Audit_2021_view__layer/FeatureServer/0/query?f=pgeojson&cacheHint=true&maxRecordCountFactor=4&resultOffset=0&resultRecordCount=4000&where=((mile_post_condition IS NULL) OR (mile_post_condition NOT LIKE '%wobble%' AND mile_post_condition NOT LIKE '%missing%')) AND (visit_date IS NOT NULL) AND (Region IS NOT NULL)&orderByFields=objectid&outFields=milepost_painting,objectid,sign_type&spatialRel=esriSpatialRelIntersects"
      );
  const image = "https://maps.google.com/mapfiles/kml/shapes/marina.png";
  map.data.setStyle({strokeColor:'red',
                     icon: image});
};

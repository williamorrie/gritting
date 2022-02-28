/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 54.897, lng: -6.644 },
    zoom: 9,
  });
  map.data.loadGeoJson(
      "https://services1.arcgis.com/i8LHQZrSk9zIffRU/ArcGIS/rest/services/Public_Gritting/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=OBJECTID&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=7000&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token="
      );
  
//   map.data.loadGeoJson(
//       "https://services5.arcgis.com/1ZHcUS1lwPTg4ms0/arcgis/rest/services/Milepost_Audit_2021_view__layer/FeatureServer/0/query?f=pgeojson&cacheHint=true&maxRecordCountFactor=4&resultOffset=0&resultRecordCount=4000&where=((mile_post_condition IS NULL) OR (mile_post_condition NOT LIKE '%wobble%' AND mile_post_condition NOT LIKE '%missing%')) AND (visit_date IS NOT NULL) AND (Region IS NOT NULL)&orderByFields=objectid&outFields=milepost_painting,objectid,sign_type&spatialRel=esriSpatialRelIntersects"
//   );

  map.data.setStyle({strokeColor:'red'});
}
export { initMap };

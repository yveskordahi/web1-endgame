<template>
    <div class="WorldMapww2">
      <h1>{{ msg }}</h1>
      <h1>Les pertes de la seconde guerre mondiale dans le monde</h1>
      <div class="subtitle">
        <p class="subtitle__info"> Alors que les victimes de la 1ère guerre mondiale étaient essentiellement des militaires,
          les pertes de la 2e guerre mondiale se répartissent globalement à part à peu près égale entre civils et militaires.
             Cela est dû à la guerre-éclair qui a surpris les pays envahis et mélangé aux soldats les populations civiles de l'exode, ainsi qu'aux bombardements massifs des villes.
             Mais elle est surtout dûe aux crimes de guerre et aux crimes contre l'humanité pertpétrés par les nazis.</p>
      </div>
    <div class="mapww1__container">
      <div id="chartdiv"></div>
    </div>
    <router-link class="items__link" to="/Slider_colonieSoldierww2"><img class="next__page-arrow"  src="../../assets/Img/back.svg" alt="arrow"></router-link>
    <router-link class="items__link" to="/Summary"><img class="next__page-arrow"  src="../../assets/Img/next.svg" alt="arrow"></router-link>
    </div>
</template>
  
<script>
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

  export default {
    name: 'MapWW2',
    props: {
      msg: String
    },
    mounted() {
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
   
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    var mapData = [
      // { "id":"DZ", "name":"Algeria", "value":28000, "color":chart.colors.getIndex(2) },
      // { "id":"AM", "name":"Armenia", "value":1000000, "color":chart.colors.getIndex(1) },
      // { "id":"AU", "name":"Australia", "value":61928, "color":"#8aabb0" },
      // { "id":"AT", "name":"Austria-Hungary", "value":1567000, "color":chart.colors.getIndex(1) },
      // { "id":"BE", "name":"Belgium", "value":104987, "color":chart.colors.getIndex(1) },
      // { "id":"BG", "name":"Bulgaria", "value":187000, "color":chart.colors.getIndex(1) },
      // { "id":"CA", "name":"Canada", "value":66944, "color":chart.colors.getIndex(4) },
      // { "id":"DK", "name":"Denmark", "value":722, "color":chart.colors.getIndex(1) },
      // { "id":"FR", "name":"France", "value":1697800, "color":chart.colors.getIndex(1) },
      // { "id":"DE", "name":"Germany", "value":2462897, "color":chart.colors.getIndex(1) },
      // { "id":"GR", "name":"Greece", "value":176000 , "color":chart.colors.getIndex(1) },
      // { "id":"IT", "name":"Italia", "value":1240010 , "color":chart.colors.getIndex(1) },
      // { "id":"IN", "name":"british India", "value":74000 , "color":chart.colors.getIndex(1) },
      // { "id":"JP", "name":"Japan", "value":14000 , "color": chart.colors.getIndex(0) },
      // { "id":"LU", "name":"Luxembourg", "value":0, "color":chart.colors.getIndex(1) },
      // { "id":"ME", "name":"Montenegro", "value":3000, "color":chart.colors.getIndex(1) },
      // { "id":"MA", "name":"Morocco", "value":12000, "color":chart.colors.getIndex(2) },
      // { "id":"NZ", "name":"New Zealand", "value":18050, "color":"#8aabb0" },
      // { "id":"NO", "name":"Norway", "value":1892, "color":chart.colors.getIndex(1) },
      // { "id":"PL", "name":"Poland", "value":1130000, "color":chart.colors.getIndex(1) },
      // { "id":"PT", "name":"Portugal", "value":89222 , "color":chart.colors.getIndex(1) },
      // { "id":"RO", "name":"Romania", "value":680000 , "color":chart.colors.getIndex(1) },
      // { "id":"RU", "name":"Russia", "value":3311000 , "color":chart.colors.getIndex(1) },
      // { "id":"SN", "name":"Senegal", "value":30000, "color":chart.colors.getIndex(2) },
      // { "id":"RS", "name":"Serbia", "value":1250000, "color":chart.colors.getIndex(1) },
      // { "id":"ZA", "name":"South Africa", "value":9463, "color":chart.colors.getIndex(2) },
      // { "id":"SE", "name":"Sweden", "value":877, "color":chart.colors.getIndex(1) },
      // { "id":"TN", "name":"Tunisia", "value":10500, "color":chart.colors.getIndex(2) },
      // { "id":"TR", "name":"Empire Ottoman", "value":5000000, "color":chart.colors.getIndex(1) },
      // { "id":"GB", "name":"United Kingdom", "value":994138, "color":chart.colors.getIndex(1) },
      // { "id":"US", "name":"United States", "value":117465, "color":chart.colors.getIndex(4) }
  { "id":"AL", "name":"Albania", "value":30000, "color":chart.colors.getIndex(1) },
  { "id":"DZ", "name":"Algeria", "value":5000, "color":chart.colors.getIndex(2) },
  { "id":"AM", "name":"Armenia", "value":180000, "color":chart.colors.getIndex(1) },
  { "id":"AU", "name":"Australia", "value":40500, "color":"#8aabb0" },
  { "id":"AT", "name":"Austria", "value":380000, "color":chart.colors.getIndex(1) },
  { "id":"AZ", "name":"Azerbaijan", "value":300000, "color":chart.colors.getIndex(1) },
  { "id":"BY", "name":"Belarus", "value":2300000, "color":chart.colors.getIndex(1) },
  { "id":"BE", "name":"Belgium", "value":88000, "color":chart.colors.getIndex(1) },
  { "id":"BG", "name":"Bulgaria", "value":25000, "color":chart.colors.getIndex(1) },
  { "id":"CA", "name":"Canada", "value":45400, "color":chart.colors.getIndex(4) },
  { "id":"CN", "name":"China", "value":10000000, "color": chart.colors.getIndex(0) },
  { "id":"DK", "name":"Denmark", "value":3200, "color":chart.colors.getIndex(1) },
  { "id":"EE", "name":"Estonia", "value":80000, "color":chart.colors.getIndex(1) },
  { "id":"FI", "name":"Finland", "value":97000, "color":chart.colors.getIndex(1) },
  { "id":"FR", "name":"France", "value":600000, "color":chart.colors.getIndex(1) },
  { "id":"DE", "name":"Germany", "value":6900000, "color":chart.colors.getIndex(1) },
  { "id":"GR", "name":"Greece", "value":335000, "color":chart.colors.getIndex(1) },
  { "id":"HU", "name":"Hungary", "value":580000, "color":chart.colors.getIndex(1) },
  { "id":"IN", "name":"British India", "value":2587000, "color": chart.colors.getIndex(0) },
  { "id":"ID", "name":"Indonesia", "value":3000000, "color": chart.colors.getIndex(0) },
  { "id":"IR", "name":"Iran", "value":200, "color": chart.colors.getIndex(0) },
  { "id":"IQ", "name":"Iraq", "value":500, "color": chart.colors.getIndex(0) },
  { "id":"IT", "name":"Italy", "value":450000, "color":chart.colors.getIndex(1) },
  { "id":"JP", "name":"Japan", "value":3120000, "color": chart.colors.getIndex(0) },
  { "id":"KZ", "name":"Kazakhstan", "value":660000, "color": chart.colors.getIndex(0) },
  { "id":"KR", "name":"Korea, Rep.", "value":483000, "color": chart.colors.getIndex(0) },
  { "id":"KG", "name":"Kyrgyzstan", "value":120000, "color": chart.colors.getIndex(0) },
  { "id":"LV", "name":"Latvia", "value":260000, "color":chart.colors.getIndex(1) },
  { "id":"LT", "name":"Lithuania", "value":375000, "color":chart.colors.getIndex(1) },
  { "id":"LU", "name":"Luxembourg", "value":2000, "color":chart.colors.getIndex(1) },
  { "id":"MN", "name":"Mongolia", "value":300, "color": chart.colors.getIndex(0) },
  { "id":"MA", "name":"Morocco", "value":1500, "color":chart.colors.getIndex(2) },
  { "id":"NL", "name":"Netherlands", "value":301000, "color":chart.colors.getIndex(1) },
  { "id":"NZ", "name":"New Zealand", "value":11900, "color":"#8aabb0" },
  { "id":"PL", "name":"Poland", "value":5820000, "color":chart.colors.getIndex(1) },
  { "id":"PT", "name":"Portugal", "value":70000, "color":chart.colors.getIndex(1) },
  { "id":"RO", "name":"Romania", "value":800000, "color":chart.colors.getIndex(1) },
  { "id":"RU", "name":"Russia", "value":13950000, "color":chart.colors.getIndex(1) },
  { "id":"SK", "name":"Slovak Republic", "value":300000, "color":chart.colors.getIndex(1) },
  { "id":"SE", "name":"Sweden", "value":600, "color":chart.colors.getIndex(1) },
  { "id":"CH", "name":"Switzerland", "value":100, "color":chart.colors.getIndex(1) },
  { "id":"TJ", "name":"Tajikistan", "value":120000, "color": chart.colors.getIndex(0) },
  { "id":"TR", "name":"Turkey", "value":200, "color":chart.colors.getIndex(1) },
  { "id":"TM", "name":"Turkmenistan", "value":100000, "color": chart.colors.getIndex(0) },
  { "id":"GB", "name":"United Kingdom", "value":450900, "color":chart.colors.getIndex(1) },
  { "id":"US", "name":"United States", "value":418500, "color":chart.colors.getIndex(4) },
  { "id":"UZ", "name":"Uzbekistan", "value":550000, "color": chart.colors.getIndex(0) },
    ];
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.nonScalingStroke = true;
    polygonSeries.strokeWidth = 0.5;
    polygonSeries.calculateVisualCenter = true;
    
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.data = mapData;
    imageSeries.dataFields.value = "value";
    
    var imageTemplate = imageSeries.mapImages.template;
    imageTemplate.nonScaling = true
    
    var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";
    
    
    imageSeries.heatRules.push({
      "target": circle,
      "property": "radius",
      "min": 4,
      "max": 30,
      "dataField": "value"
    })
    
    imageTemplate.adapter.add("latitude", function(latitude, target) {
      var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
      if(polygon){
        return polygon.visualLatitude;
       }
       return latitude;
    })
    
    imageTemplate.adapter.add("longitude", function(longitude, target) {
      var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
      if(polygon){
        return polygon.visualLongitude;
       }
       return longitude;
    })
    // }); // end am4core.ready()
      }
}
</script>
  

<style scoped lang="scss">
  h1 {
  padding: 15px;
  color: white;
  margin-bottom: 0;
  opacity: 0;
  animation: opacity 2s ease .3s forwards;

  @media screen and (max-width: 600px) {
    font-size: 22px;
    margin-top: 30px;
  }
}

  .subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .subtitle__info {
      margin: 0;
      width: 40%;
      line-height: 1.5;
      font-size: 16px;
      color: #b6b6b6;
      opacity: 0;
      animation: opacity 2s ease .3s forwards;

      @media screen and (max-width: 1450px) {
          width: 75%;
      }

      @media screen and (max-width: 900px) {
          width: 90%;
      }
    }
    }

  .mapww1__container {
    display: flex;
    justify-content: center;
  }

  #chartdiv {
    margin-top: 30px;
    width: 80%;
    height: 600px;
    margin-bottom: 30px;
    opacity: 0;
    animation: opacity 2s ease .3s forwards;

    @media screen and (max-width: 1250px) {
      margin-top: 0px;
      width: 90%;
      height: 300px;
    }
  }

  .items__link {
    color: white;
    text-decoration: none;
    opacity: 0;
    animation: opacity 2s ease .3s forwards;
  }

  .next__page-arrow {
    width: 30px;
    padding: 10px;
  }
</style>
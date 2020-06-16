<template>
    <div class="AgeSoldier">
      <h1>{{ msg }}</h1>
      <h1>35% des morts parmi la “classe 14</h1>
      <div class="subtitle">
        <p class="subtitle__info">La guerre 14-18 a surtout fauché toute une génération d’hommes qui avaient une vingtaine d’années au moment de l’entrée en guerre. </p>
      </div>
      <div class="chartAgeSoldier__container">
        <div id="chartdivAgeSoldier"></div>
      </div>
      <router-link class="items__link" to="/Slider_battleww1"><img class="next__page-arrow"  src="../assets/Img/back.svg" alt="arrow"></router-link>
    <router-link class="items__link" to="/Consequenceww1"><img class="next__page-arrow"  src="../assets/Img/next.svg" alt="arrow"></router-link>
    </div>
</template>
  
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
// import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

  export default {
    name: 'MapWW1',
    props: {
      msg: String
    },
    mounted() {
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartdivAgeSoldier", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0;

    chart.data = [
    {
        country: "Age: 15-18 ans",
        value: 15
    },
    {
        country: "Age: 19-22 ans",
        value: 35
    },
    {
        country: "Age: 23-26 ans",
        value: 25
    },
    {
        country: "Age: 26-30 ans",
        value: 15
    },
    {
        country: "Age: +30 ans",
        value: 10
    }
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;  

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    chart.legend = new am4charts.Legend();
    }
}
</script>
  

<style scoped lang="scss">
  
    .AgeSoldier {
      margin-top: 100px;

      @media screen and (max-width: 600px) {
        margin-top: 30px;
      }
    }

  h1 {
  padding: 15px;
  color: white;
  margin-bottom: 0;

  @media screen and (max-width: 600px) {
    font-size: 22px
  }
}

.chartAgeSoldier__container {
    display: flex;
    justify-content: center;
    opacity: 0;
    animation: opacity 1.5s ease .3s forwards;
}

#chartdivAgeSoldier {
  margin-top: 10px;
  width: 50%;
  height: 500px;

  @media screen and (max-width: 1250px) {
    width: 50%;
    height: 400px;
  }

  @media screen and (max-width: 900px) {
    margin-top: 30px;
    width: 80%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 340px;
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
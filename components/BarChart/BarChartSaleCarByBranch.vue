<script>
// Load speperate modules with destructure assign
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ["chartData"],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // scales: {
        //   xAxes: [{}],
        //   yAxes: [{}],
        // },
        scales: {
          xAxes: [
            {
              bar: {
                categoryPercentage: 0.5,
                barPercentage: 1,
              },
            },
          ],
          yAxes: [
            {
              bar: {
                categoryPercentage: 0.5,
                barPercentage: 1,
              },
              ticks: {
                beginAtZero: true,
                // stepSize: 1,
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var currentValue = dataset.data[tooltipItem.index];
              // return "สนใจ " + dataset.label + " " + "(" + currentValue + ")";
              return (
                dataset.label +
                " " +
                Number(currentValue).toLocaleString("th-TH", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                }) +
                " (คัน)"
              );
            },
            title: function (tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            },
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {},
};
</script>
    
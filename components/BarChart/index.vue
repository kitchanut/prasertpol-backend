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
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options, { type: "horizontalBar" });
  },
  watch: {},
};
</script>

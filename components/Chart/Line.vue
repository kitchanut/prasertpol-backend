<!-- <template>
  <div>
    <line-chart :chart-data="data" :options="options"></line-chart>
  </div>
</template> -->

<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  props: ["dataChart"],
  extends: Line,
  mixins: [reactiveProp],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
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
    const annotation = {
      type: "line",
      borderColor: "lightGreen",
      borderDashOffset: 0,
      borderWidth: 10,
      drawTime: "beforeDatasetsDraw",
      label: {
        enabled: false,
        backgroundColor: "green",
        borderWidth: 0,
        drawTime: "afterDatasetsDraw",
        color: "white",
        content: (ctx) => ["Average of dataset", "is: "],
        textAlign: "center",
      },
      scaleID: "y",
      value: (ctx) => 200000,
      enter(ctx, event) {
        toggleLabel(ctx, event);
      },
      leave(ctx, event) {
        toggleLabel(ctx, event);
      },
    };
    // this.options.plugins.annotation.annotations = annotation;
    this.renderChart(this.dataChart, this.options);
  },
  watch: {},
};
</script>

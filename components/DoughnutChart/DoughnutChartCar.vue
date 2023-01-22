<script>
// Load speperate modules with destructure assign
import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
let totalValue = 0;
export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  // props: ["chartData", "middleText"],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    middleText: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat(
                ((currentValue / total) * 100).toFixed(1)
              );
              return "จำนวน " + currentValue + " (" + percentage + "%)";
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
    // console.log(this.middleText);
    const self = this;
    this.addPlugin({
      id: "my-plugin",
      beforeDraw: function (chart) {
        var width = chart.chart.width;
        var height = chart.chart.height;
        var fontSize = (height / 300).toFixed(2);
        var ctx = chart.chart.ctx;

        ctx.restore();
        ctx.fillStyle = "#ff9999";
        ctx.font = fontSize + "em athiti";
        ctx.textBaseline = "middle";

        var text = self.middleText == 0 ? "" : self.middleText;
        var textX = Math.round((width - ctx.measureText(text).width) / 2);
        var textY = height / 1.85;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    });
    this.renderChart(this.chartData, this.options);
  },
  methods: {},
  watch: {},
};
</script>

(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{656:function(e,t,n){"use strict";n.r(t);var r=n(500),c=r.d.reactiveProp,o={extends:r.a,mixins:[c],props:["chartData"],data:function(){return{options:{legend:{display:!1},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{bar:{categoryPercentage:.5,barPercentage:1}}],yAxes:[{bar:{categoryPercentage:.5,barPercentage:1},ticks:{beginAtZero:!0,stepSize:1}}]},tooltips:{callbacks:{label:function(e,data){var t=data.datasets[e.datasetIndex],n=t.data[e.index];return t.label+" ("+n+") คัน"},title:function(e,data){return data.labels[e[0].index]}}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},watch:{}},d=n(42),component=Object(d.a)(o,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1123:function(t,e,n){"use strict";n.r(e);n(16),n(5);var d=n(491),l=d.d.reactiveProp,r={extends:d.b,mixins:[l],props:{chartData:{type:Object,default:null},middleText:{type:Number,default:0}},data:function(){return{options:{legend:{display:!0},responsive:!0,maintainAspectRatio:!1,tooltips:{callbacks:{label:function(t,data){var e=data.datasets[t.datasetIndex],n=e._meta[Object.keys(e._meta)[0]].total,d=e.data[t.index];return"จำนวน "+d+" ("+parseFloat((d/n*100).toFixed(1))+"%)"},title:function(t,data){return data.labels[t[0].index]}}}}}},mounted:function(){var t=this;this.addPlugin({id:"my-plugin",beforeDraw:function(e){var n=e.chart.width,d=e.chart.height,l=(d/300).toFixed(2),r=e.chart.ctx;r.restore(),r.fillStyle="#ff9999",r.font=l+"em athiti",r.textBaseline="middle";var text=0==t.middleText?"":t.middleText,o=Math.round((n-r.measureText(text).width)/2),c=d/1.85;r.fillText(text,o,c),r.save()}}),this.renderChart(this.chartData,this.options)},methods:{},watch:{}},o=n(38),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{542:function(t,e,n){"use strict";n.r(e);var o=n(500),l=o.d.reactiveProp,r={extends:o.a,mixins:[l],props:["chartData"],data:function(){return{options:{legend:{display:!1},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{}],yAxes:[{ticks:{min:0,stepSize:1}}]},tooltips:{callbacks:{label:function(t,data){return data.datasets[t.datasetIndex].data[t.index]+" คน"},title:function(t,data){return data.labels[t[0].index]}}}}}},mounted:function(){this.addPlugin({id:"my-plugin",beforeDraw:d}),this.renderChart(this.chartData,this.options)},watch:{}},d={id:"horizontalLine",afterDraw:function(t){var e,n,line,style,o=t.scales["y-axis-0"],canvas=t.chart,l=canvas.ctx;if(t.options.horizontalLine)for(n=0;n<t.options.horizontalLine.length;n++)style=(line=t.options.horizontalLine[n]).style?line.style:"#080808",e=line.y?o.getPixelForValue(line.y):0,l.lineWidth=3,e&&(window.chart=t,l.beginPath(),l.moveTo(0,e),l.lineTo(canvas.width,e),l.strokeStyle=style,l.stroke()),line.text&&(l.fillStyle=style,l.fillText(line.text,0,e+l.lineWidth));else;}},c=r,h=n(42),component=Object(h.a)(c,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);
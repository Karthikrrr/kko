const canvas=d3.select(".can");

const svg=canvas.append("svg")
.attr('width',600)
.attr('width',600);

//   var group = svg.append("g")
//  .attr("trasform","translate(1,40)");

 var group = svg.append("g")
 .attr("transform", "translate(1, 40)  ");

group.append('rect')
.attr('height',100)
.attr('width',200)
.attr('fill','blue')
.attr('x',20)
.attr('y',20);

group.append('circle')
.attr('r',50)
.attr('cx',500)
.attr('cy',100)
.attr('fill','pink');

group.append("line")
.attr('x1',370)
.attr('y1',240)
.attr('y1',130)
.attr('y2',132)
.attr("stroke",'red');


svg.append('text')
.attr('x',202)
.attr('y',400)
.attr('fill','red')
.text('ausdihasd');
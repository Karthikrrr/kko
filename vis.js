const data=[
{name:mohan,score:12},
{name:rohit,score:12},
{name:sharma,score:12}

];


const width=800;
const height=400;
const margin={top:50,bottom:50,right:50}

const svg=d3.select('#d3-container')
.append('svg')
.attr('height',height-margin.top-margin.botton)
.attr('width',width-marign.left-margin.right)
.attr('viewBox',[0,0,width,height]);

const x=d3.scaleBand()
.domain(d3.range(data.length))
.range([margin.left,width-margin.right])
.padding(0.1)


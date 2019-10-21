drawSankeyChart('sankeyChart', sankeyJson);

function drawSankeyChart(chartContainerID, dataJson){

	var data = [];
	for(var i=0;i<dataJson.length;i++){
		var item = dataJson[i];
		data.push({
				"source":item[3],	
				"target":item[0],
				"value":item[4],
				"region":item[2]
			})
	}
	var $container = $("#" + chartContainerID);
	var w = $container.width() , h = $container.height(), r1 = w / 1.8, r0 = r1 - 105;

	var units = "$";

	var margin = {top: 10, right: 10, bottom: 10, left: 10},
		width = 800 - margin.left - margin.right,
		height = 600 - margin.top - margin.bottom,
		diameter = 500;

	var formatNumber = d3.format(",.0f"),    // zero decimal places
		format = function(d) { return units + " " + formatNumber(d)},
		color = d3.scale.category20b();
		  
	// Set the sankey diagram properties

	// append the svg canvas to the page
	var svg = d3.select("#" + chartContainerID)
	    .append("div")
		.classed("svg-container", true)
		.append("svg")
		.attr("preserveAspectRatio", "xMinYMin meet")
		.attr("viewBox", "0 0 "+w*1.18+" "+w/1.6 )
		//.attr("id","svg1")
		//.style("padding-left","9%")
		.append("g")
		.attr("transform", "translate(" + diameter / 1.8 + "," + diameter / 10 + ")");
			
		  
	var sankey = d3.sankey()
		.nodeWidth(36)
		.nodePadding(60)
		.size([w, height]);

	var path = sankey.link();

	// load the data (using the timelyportfolio csv method)
	//d3.csv("sankey.csv", function(error, data) 
	//set up graph in same style as original example but empty
	 graph = {"nodes" : [], "links" : []};
	 
	 for(var i=0;i<data.length;i++){
		graph.nodes.push({ "name": data[i].source });
		graph.nodes.push({ "name": data[i].target });
		graph.links.push({ "source": data[i].source,
							"target": data[i].target,
							"value": +data[i].value,
							"region":data[i].region });
	 }

	// return only the distinct / unique nodes
	graph.nodes = d3.keys(d3.nest()
		 .key(function (d) { return d.name; })
		 .map(graph.nodes));

	// loop through each link replacing the text with its index from node
	graph.links.forEach(function (d, i) {
		graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
		graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
	});

	 //now loop through each nodes to make nodes an array of objects
	 // rather than an array of strings
	graph.nodes.forEach(function (d, i) {
		graph.nodes[i] = { "name": d };
	});

	sankey.nodes(graph.nodes)
		  .links(graph.links)
		  .layout(32);

	// add in the links
	var link = svg.append("g").selectAll(".link")
		.data(graph.links)
		.enter().append("path")
		.attr("class", "link")
		.attr("d", path)
		.style("stroke-width", function(d) { return Math.max(1, d.dy); })
		.sort(function(a, b) { return b.dy - a.dy; })
		.style("stroke",function(d){ return d.region ==="US"? "crimson" :"cornflowerblue" } )
	  

	// add the link titles
	link.append("title")
		.text(function(d) {
			return d.source.name + " <-- " + 
				d.target.name + "\n" +'Total Sales: '+format(d.value)+"\n" + d.region.toUpperCase(); })
		.attr("class", "hoverinfo");

	// add in the nodes
	var node = svg.append("g").selectAll(".node")
		.data(graph.nodes)
		.enter().append("g")
		.attr("class", "node")
		.attr("transform", function(d) { 
		  return "translate(" + d.x + "," + d.y + ")"; })
		.call(d3.behavior.drag()
		.origin(function(d) { return d; })
		.on("dragstart", function() { 
		  this.parentNode.appendChild(this); })
		.on("drag", dragmove));

	// add the rectangles for the nodes
	node.append("rect")
		.attr("height", function(d) { return d.dy; })
		.attr("width", sankey.nodeWidth())
		.style("fill", function(d) { 
			return d.color = (d.name === "Internet Sales" ? "#5f9ea0" : (d.name === "Reseller Sales" ? "#E26A6A" : color(d.name.replace(/ .*/, "")))) 
		})
		/*.style("stroke", function(d) { 
		  return d3.rgb(d.color).darker(2); })*/
		.append("title")
		.text(function(d) { 
			return d.name + "\n" + format(d.value); })
		.attr("class", "hoverinfo");

	// add in the title for the nodes
	node.append("text")
		//.attr("x", -6)
		.attr("x",170)
		.attr("y", function(d) { return d.dy / 2; })
		.attr("dy", ".35em")
		.attr("text-anchor", "end")
		.attr("transform", null)

		.text(function(d) { return d.name; })
		.style("font-size","18px")
		.filter(function(d) { return d.x < w / 2; })
		.attr("x", -150 + sankey.nodeWidth())
		.attr("text-anchor", "start");

	// the function for moving the nodes
	function dragmove(d) {
		d3.select(this).attr("transform", 
			"translate(" + d.x + "," + (
					d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
				) + ")");
		sankey.relayout();
		link.attr("d", path);
	}

}
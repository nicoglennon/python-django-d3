var data = [30, 86, 168, 281, 303, 565];

$(document).ready(function() {

  // define the div for the hover
  var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

    // call D3
    d3.select(".chart")
      .selectAll("div")
      .data(data)
        .enter()
        .append("div")
        .style("width", function(d) { return d + "px"; })
        .style("height", "25px")
        .text(function(d) { return "$" + d; })

        // add hover effects to each bar
        .on('mouseover', function(d) {
          console.log("mouseover!");
          div.transition()    
                .duration(200)    
                .style("opacity", .9);    
            div .html('<p>$' + d + '</p>')  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");  
            })
        .on("mouseout", function(d) {  
            console.log("out!") ;
            div.transition()    
                .duration(500)    
                .style("opacity", 0); 
        });            
  }
);


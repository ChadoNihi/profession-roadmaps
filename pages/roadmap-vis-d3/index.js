document.addEventListener('DOMContentLoaded', function() {
  drawRoadmap('/data/example.json');
});

function drawRoadmap(jsonPath) {
  d3.json(jsonPath, (err, json)=> {
    if (err) {
      console.error(err);
      return;
    }
    else {
      const roadmap = json.roadmap,
            profTitle = json.profession;

      const svg = d3.select("body")
                     .append("svg")
                     .attr("width", 1200)
                     .attr("height", 800),
            margin = 20;

      
    }
  })
}

Chart.defaults.global.defaultFontFamily = "Poppins";
let ctx = document.querySelector("#revenueChart");
ctx.height = 53;

let revChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [

      
      
      
      
      
      
      





"jan 08",
"jan 09",
"jan 10",
"jan 11",
"jan 12",
"jan 13",
"jan 14",
"jan 15",
"jan 16",
"jan 17"	    
     
    ],
    datasets: [
      {
        label: "positive",
        borderColor: "red",
        backgroundColor: "rgba(235, 247, 245, 0.5)",
        data: [3455, 2502, 4120, 5151, 5476, 6051, 6153, 5525, 3963, 4574]
      },
      {
        label: "recovered",
        borderColor: "green",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [69, 102, 358, 483, 1933, 4636, 4083, 4240, 3303, 5396]
      },
	   {
        label: "death",
        borderColor: "black",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [4, 2, 4, 4, 4, 7, 5, 8, 7, 10]
      } 
    ]
  },
  options: {
    responsive: true,
    tooltips: {
      intersect: false,
      node: "index"
    }
  }
});

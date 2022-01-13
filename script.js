Chart.defaults.global.defaultFontFamily = "Poppins";
let ctx = document.querySelector("#revenueChart");
ctx.height = 53;

let revChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [

      
      
      
      
      
      
      

"jan 04",
"jan 05",
"jan 06",
"jan 07",
"jan 08",
"jan 09",
"jan 10",
"jan 11",
"jan 12",
"jan 13"
     
    ],
    datasets: [
      {
        label: "positive",
        borderColor: "red",
        backgroundColor: "rgba(235, 247, 245, 0.5)",
        data: [1059, 1615, 2400, 2828, 3455, 2502, 4120, 5151, 5476, 6051]
      },
      {
        label: "recovered",
        borderColor: "green",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [21, 29, 56, 46, 69, 102, 358, 483, 1933, 4636]
      },
	   {
        label: "death",
        borderColor: "black",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [3, 1, 1, 3, 4, 2, 4, 4, 4, 7]
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

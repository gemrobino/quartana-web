// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx1 = document.getElementById("myPieChart-ThreadsRatings");
var myPieChart1 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ["5-stars", "4-stars", "3-stars","2-stars","1-star"],
    datasets: [{
      data: [18253, 3786, 3177, 2298, 12921],
      backgroundColor: ['#58D68D', '#3498DB', '#36b9cc', '#EB984E', '#D98880'],
      hoverBackgroundColor: ['#138D75', '#2e59d9', '#2E86C1','#D35400', '#D35400'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

var ctx2 = document.getElementById("myPieChart-ThreadsSources");
var myPieChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["App Store", "Google Play"],
    datasets: [{
      data: [3748,36687],
      backgroundColor: ['#58D68D', '#3498DB'],
      hoverBackgroundColor: ['#138D75', '#2e59d9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

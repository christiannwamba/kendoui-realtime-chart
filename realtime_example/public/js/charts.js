let socket;

function init () {
 socket = io.connect("http://localhost:3000");
 socket.on('updateChart', (data) => {
	            function createChart() {
	            $("#chart").kendoChart({
	                dataSource: {
	                    data: data
	                },
	                title: {
	                    align: "left",
	                    text: "Comments per day"
	                },
	                legend: {
	                    visible: false
	                },
	                seriesDefaults: {
	                    type: "column",
	                    labels: {
	                        visible: true,
	                        background: "transparent"
	                    }
	                },
	                series: [{
	                    field: "value",
	                    categoryField: "day",
	                    colorField: "userColor"
	                }],
	                valueAxis: {
	                    max: 28,
	                    majorGridLines: {
	                        visible: false
	                    },
	                    visible: false
	                },
	                categoryAxis: {
	                    majorGridLines: {
	                        visible: false
	                    },
	                    line: {
	                        visible: false
	                    }
	                }
	            });
	        }
		     $(document).ready(createChart);
		     $(document).bind("kendo:skinChange", createChart);
	        });       
}
    
$(init);



function init(){
     const blogComments = [ {
                        "blog": "My blog",
                        "day": "Day 1",
                        "value": 3,
                        "userColor": "#ffd600"
                    }, {
                        "blog": "My blog",
                        "day": "Day 2",
                        "value": 7,
                        "userColor": "#ffd600"
                    }, {
                        "blog": "My blog",
                        "day": "Day 3",
                        "value": 12,
                        "userColor": "#ffd600"
                    }, {
                        "blog": "My blog",
                        "day": "Day 4",
                        "value": 15,
                        "userColor": "#ffd600"
                    }, {
                        "blog": "My blog",
                        "day": "Day 5",
                        "value": 6,
                        "userColor": "#ffd600"
                    } ];

        function createChart() {
            $("#chart").kendoChart({
                dataSource: {
                    data: blogComments
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
}
$(init);
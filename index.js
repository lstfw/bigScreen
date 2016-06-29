(function($){
    $(function(){
        var myChart = echarts.init(document.getElementById('timeout-box'));
        var option = {
            backgroundColor:'#fff',
            tooltip : {
                trigger: 'axis'
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['11:30','12:30','13:30','14:30','15:30','16:30','17:30','18:30','19:30','20:30'],
                    axisLabel: {
                        interval:0,
                        rotate:45
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[1, 3, 5, 4, 3, 5, 2, 1, 3, 2 ]
                },{
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[1, 3, 5, 4, 3, 5, 2, 1, 3, 2 ]
                },{
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[1, 3, 5, 4, 3, 5, 2, 1, 3, 2 ]
                },{
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[1, 3, 5, 4, 3, 5, 2, 1, 3, 2 ]
                }

            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);



        var myChart2 = echarts.init(document.getElementById('timeout-box2'));

        var option2 = {
            backgroundColor:'#fff',

            tooltip: {
                trigger: 'item'
            },


            xAxis: [
                {
                    type: 'category',
                    show: true,
                    data : ['11:30','12:30','13:30','14:30','15:30','16:30','17:30','18:30','19:30','20:30'],
                    axisLabel: {
                        interval:0,
                        rotate:45
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: true
                }
            ],
            series: [
                {
                    name: 'ECharts例子个数统计',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var data  = params.data
                                if(data > 100){
                                    return '#ff0101'
                                }else if(data < 5){
                                    return '#ffd800'

                                }else{
                                    return '#29bd01'
                                }
                            },
                            label: {
                                show: true,
                                position: 'top'
                            }
                        }
                    },
                    data:[1, 3, 5, 4, 3, 5, 2, 1, 3, 2 ]

                }
            ]
        };
        // 为echarts对象加载数据
        myChart2.setOption(option2);





        var myChart3 = echarts.init(document.getElementById('timeout-box3'));

        var option3 = {
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'item'
            },


            xAxis: [
                {
                    type: 'category',
                    show: true,
                    data : ['11:30','12:30','13:30','14:30','15:30','16:30','17:30','18:30','19:30','20:30'],
                    axisLabel: {
                        interval:0,
                        rotate:45
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: true
                }
            ],
            series: [
                {
                    name: 'ECharts例子个数统计',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var data  = params.data
                                if(data > 100){
                                    return '#ff0101'
                                }else if(data < 5){
                                    return '#ffd800'

                                }else{
                                    return '#29bd01'
                                }
                            },
                            label: {
                                show: true,
                                position: 'top'
                            }
                        }
                    },
                    data:[1, 3, 5, 4, 3, 5, 2, 1, 3, 2 ]
                }
            ]
        };
        // 为echarts对象加载数据
        myChart3.setOption(option3);


        var myChart4 = echarts.init(document.getElementById('timeout-box4'));

        var option4 = {
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'item'
            },


            xAxis: [
                {
                    type: 'category',
                    show: true,
                    data : ['11:30','12:30','13:30','14:30','15:30','16:30','17:30','18:30','19:30','20:30'],
                    axisLabel: {
                        interval:0,
                        rotate:45
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: true
                }
            ],
            series: [
                {
                    name: 'ECharts例子个数统计',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var data  = params.data
                                if(data > 100){
                                    return '#ff0101'
                                }else if(data < 5){
                                    return '#ffd800'

                                }else{
                                    return '#29bd01'
                                }
                            },
                            label: {
                                show: true,
                                position: 'top'
                            }
                        }
                    },
                    data:[1, 3, 5, 4, 1000, 5, 2, 1, 3, 2 ]

                }
            ]
        };
        // 为echarts对象加载数据
        myChart4.setOption(option4);

        var trade = echarts.init(document.getElementById('trade'));

        var trade_option = {
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'item'
            },


            xAxis: [
                {
                    type: 'category',
                    show: true,
                    data : ['双色球','七乐彩','福彩3D','快乐8','快3','PK拾'],
                    axisLabel: {
                        interval:0
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: true
                }
            ],
            series: [
                {
                    name: 'ECharts例子个数统计',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var data  = params.data
                                if(data > 100){
                                    return '#ff0101'
                                }else if(data < 5){
                                    return '#ffd800'

                                }else{
                                    return '#29bd01'
                                }
                            },
                            label: {
                                show: true,
                                position: 'top'
                            }
                        }
                    },
                    data:[1, 3, 5, 4, 333.333, 5 ]

                }
            ]
        };
        // 为echarts对象加载数据
        trade.setOption(trade_option);

        var channel = echarts.init(document.getElementById('channel'));

        var channel_option = {
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'item'
            },


            xAxis: [
                {
                    type: 'category',
                    show: true,
                    data : ['300','301','400','900','901','903'],
                    axisLabel: {
                        interval:0
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: true
                }
            ],
            series: [
                {
                    name: 'ECharts例子个数统计',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var data  = params.data
                                if(data > 100){
                                    return '#ff0101'
                                }else if(data < 5){
                                    return '#ffd800'

                                }else{
                                    return '#29bd01'
                                }

                            },
                            label: {
                                show: true,
                                position: 'top'
                            }
                        }
                    },
                    data:[1, 3, 5, 4, 333.333, 5 ]

                }
            ]
        };
        // 为echarts对象加载数据
        channel.setOption(channel_option);







    })






})(jQuery)
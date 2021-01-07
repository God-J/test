
var p = document.getElementsByTagName("p");

var temp = 0


 // 点击事件
for(var i=0;i<p.length;i++) {

    function click_item(obj) {

        for (var ii = 0; ii < p.length; ii++) {

            p[ii].parentNode.className = "item2"

        }


        obj.style.borderBottom = "solid rgb(83, 199, 37) 3px";
        obj.style.fontSize = "18px"
        console.log(obj.className)


        for (var i = 0; i < p.length; i++) {
            if (p[i] === obj) {
                continue
            }
            p[i].style.borderBottom = "";
            p[i].style.fontSize = "15px"

        }


    }

    // 曲线图
    var xhr = new XMLHttpRequest();//第一步：新建对象
    xhr.open('GET', 'https://edu.telking.com/api/?type=month', true);//第二步：打开连接  将请求参数写在url中
    xhr.send();//第三步：发送请求  将请求参数写在URL中

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = xhr.responseText;//获取到json字符串，解析
            res = JSON.parse(res)
            console.log(res.data.xAxis)


            var myChart = echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '曲线图数据展示',
                    padding: [10, 20, 500, 500],
                    // textAlign:'left'

                },
                tooltip: {},
                legend: {
                    // data:['销量']
                },
                xAxis: {
                    data: res.data.xAxis
                },
                yAxis: {},
                series: [{
                    // name: '销量',
                    type: 'line',
                    // symbol: 'none',
                    smooth: true,
                    label: {
                        show: true
                    },
                    data: res.data.series
                }]
            };
            myChart.setOption(option);
        }
    };

    // 饼状图
    var ds = new XMLHttpRequest();//第一步：新建对象
    ds.open('GET', 'https://edu.telking.com/api/?type=week', true);//第二步：打开连接  将请求参数写在url中
    ds.send();//第三步：发送请求  将请求参数写在URL中

    ds.onreadystatechange = function () {
        if (ds.readyState == 4 && ds.status == 200) {
            var res = ds.responseText;//获取到json字符串，解析
            res = JSON.parse(res)
            console.log(res.data.series[0])


            var myChart1 = echarts.init(document.getElementById('sec'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '饼状图数据展示',
                    padding: [20, 20, 100, 230],
                },

                series: [{

                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        {value: res.data.series[0], name: res.data.xAxis[0]},
                        {value: res.data.series[1], name: res.data.xAxis[1]},
                        {value: res.data.series[2], name: res.data.xAxis[2]},
                        {value: res.data.series[3], name: res.data.xAxis[3]},
                        {value: res.data.series[4], name: res.data.xAxis[4]},
                        {value: res.data.series[5], name: res.data.xAxis[5]},
                        {value: res.data.series[6], name: res.data.xAxis[6]}
                    ]
                }]
            };
            myChart1.setOption(option);
        }
    };

    // 柱状图
    var zh = new XMLHttpRequest();//第一步：新建对象
    zh.open('GET', 'https://edu.telking.com/api/?type=week', true);//第二步：打开连接  将请求参数写在url中
    zh.send();//第三步：发送请求  将请求参数写在URL中

    zh.onreadystatechange = function () {
        if (zh.readyState == 4 && zh.status == 200) {
            var res = zh.responseText;//获取到json字符串，解析
            res = JSON.parse(res)
            console.log(res.data.series[0])


            var myChart2 = echarts.init(document.getElementById('third'));

            //  指定图表的配置项和数据
            var option = {
                title: {
                    text: '柱状图数据展示',
                    padding: [20, 20, 100, 230],
                },
                tooltip: {},
                // legend: {
                //     data:['销量']
                // },
                xAxis: {
                    data: res.data.xAxis
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: res.data.series
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart2.setOption(option);

        }
    };
}



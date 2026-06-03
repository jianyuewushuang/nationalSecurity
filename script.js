tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1E88E5',
                secondary: '#1E68E5',
                dark: '#1e293b',
                light: '#f8fafc'
            }
        }
    }
}

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?47d43d2af9218267e052c5cf9dfe97e7";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

function initCharts() {
    // 国家安全领域关注度图表
    if (document.getElementById('securityChart')) {
        const securityChart = echarts.init(document.getElementById('securityChart'));
        securityChart.setOption({
            title: {
                text: '国家安全主要领域关注度',
                left: 'center',
                top: 0,
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '10%',
                top: '35%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['网络安全', '能源安全', '经济安全', '边疆安全', '认知安全'],
                axisLabel: {
                    interval: 0,
                    rotate: 30
                }
            },
            yAxis: {
                type: 'value',
                name: '关注度指数'
            },
            series: [{
                name: '关注度',
                type: 'bar',
                barWidth: '60%',
                itemStyle: {
                    color: function(params) {
                        const colors = ['#1E88E5', '#1E68E5', '#1E78E5', '#1E58E5', '#1E48E5'];
                        return colors[params.dataIndex];
                    }
                },
                label: {
                    show: true,
                    position: 'top'
                },
                data: [85, 70, 65, 60, 55]
            }]
        });
        window.addEventListener('resize', function() { securityChart.resize(); });
    }

    // 核心要义图表
    if (document.getElementById('coreChart')) {
        const coreChart = echarts.init(document.getElementById('coreChart'));
        coreChart.setOption({
            title: {
                text: '总体国家安全观价值层级',
                left: 'center',
                top: 0,
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: 0,
                top: '10%',
                data: ['人民安全', '政治安全', '经济安全', '军事安全', '文化安全']
            },
            series: [{
                name: '价值层级',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    formatter: '{b}: {d}%'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 35, name: '人民安全' },
                    { value: 25, name: '政治安全' },
                    { value: 20, name: '经济安全' },
                    { value: 10, name: '军事安全' },
                    { value: 10, name: '文化安全' }
                ],
                color: ['#1E88E5', '#1E68E5', '#1E78E5', '#1E48E5', '#1E58E5']
            }]
        });
        window.addEventListener('resize', function() { coreChart.resize(); });
    }

    // 国家安全体系图表
    if (document.getElementById('systemChart')) {
        const systemChart = echarts.init(document.getElementById('systemChart'));
        systemChart.setOption({
            title: {
                text: '国家安全体系领域分布',
                left: 'center',
                top: 0,
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['核心领域', '拓展领域', '新兴领域'],
                right: 0,
                top: '10%'
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '10%',
                top: '35%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['政治', '经济', '军事', '文化', '网络', '生态', '资源', '核', '生物', '太空']
            },
            yAxis: {
                type: 'value',
                name: '重要性指数'
            },
            series: [
                {
                    name: '核心领域',
                    type: 'bar',
                    stack: 'total',
                    emphasis: { focus: 'series' },
                    data: [90, 85, 80, 70, 0, 0, 0, 0, 0, 0],
                    color: '#1E88E5'
                },
                {
                    name: '拓展领域',
                    type: 'bar',
                    stack: 'total',
                    emphasis: { focus: 'series' },
                    data: [0, 0, 0, 0, 75, 65, 60, 55, 0, 0],
                    color: '#1E68E5'
                },
                {
                    name: '新兴领域',
                    type: 'bar',
                    stack: 'total',
                    emphasis: { focus: 'series' },
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 50, 45],
                    color: '#1E48E5'
                }
            ]
        });
        window.addEventListener('resize', function() { systemChart.resize(); });
    }

    // 演进特征图表
    if (document.getElementById('evolutionChart')) {
        const evolutionChart = echarts.init(document.getElementById('evolutionChart'));
        evolutionChart.setOption({
            title: {
                text: '安全观演进对比',
                left: 'center',
                top: 0,
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['传统安全观', '非传统安全观'],
                right: 0,
                top: '10%'
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '10%',
                top: '35%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['安全主体', '威胁来源', '应对方式', '价值取向']
            },
            yAxis: {
                type: 'value',
                name: '契合度(%)'
            },
            series: [
                {
                    name: '传统安全观',
                    type: 'bar',
                    barWidth: '35%',
                    data: [90, 80, 75, 85],
                    itemStyle: { color: '#1E88E5' }
                },
                {
                    name: '非传统安全观',
                    type: 'bar',
                    barWidth: '35%',
                    data: [60, 95, 90, 70],
                    itemStyle: { color: '#1E48E5' }
                }
            ]
        });
        window.addEventListener('resize', function() { evolutionChart.resize(); });
    }

    // 国家安全与民族复兴关系图表
    if (document.getElementById('relationChart')) {
        const relationChart = echarts.init(document.getElementById('relationChart'));
        relationChart.setOption({
            title: {
                text: '国家安全体系现代化进程',
                left: 'center',
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            tooltip: { trigger: 'axis' },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
                top: '35%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['2012', '2017', '2022', '2024'],
                axisLine: { lineStyle: { color: '#ccc' } }
            },
            yAxis: {
                type: 'value',
                name: '覆盖率(%)',
                axisLine: { show: true, lineStyle: { color: '#ccc' } },
                splitLine: { lineStyle: { color: '#f0f0f0' } }
            },
            series: [{
                name: '安全治理覆盖率',
                type: 'line',
                smooth: true,
                data: [65, 78, 89, 93.6],
                itemStyle: { color: '#1E88E5' },
                label: { show: true, formatter: '{c}%', color: '#1E88E5' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(30, 136, 229, 0.5)' },
                        { offset: 1, color: 'rgba(30, 136, 229, 0.1)' }
                    ])
                }
            }]
        });
        window.addEventListener('resize', function() { relationChart.resize(); });
    }

    // 国际秩序变革图表
    if (document.getElementById('internationalChart')) {
        const internationalChart = echarts.init(document.getElementById('internationalChart'));
        internationalChart.setOption({
            title: {
                text: '国际安全环境影响因素',
                left: 'center',
                textStyle: { fontSize: 16, fontWeight: 'bold' }
            },
            tooltip: { trigger: 'item' },
            legend: { orient: 'vertical', right: 0, top: '10%' },
            series: [{
                name: '影响因素',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                label: { show: true, formatter: '{b}: {d}%' },
                emphasis: { label: { show: true, fontWeight: 'bold' } },
                labelLine: { show: true },
                data: [
                    { value: 35, name: '地缘政治风险', itemStyle: { color: '#1E88E5' } },
                    { value: 25, name: '经济科技竞争', itemStyle: { color: '#1E68E5' } },
                    { value: 20, name: '全球治理赤字', itemStyle: { color: '#1E48E5' } },
                    { value: 15, name: '文化价值冲突', itemStyle: { color: '#1E78E5' } },
                    { value: 5, name: '其他因素', itemStyle: { color: '#1E58E5' } }
                ]
            }]
        });
        window.addEventListener('resize', function() { internationalChart.resize(); });
    }

    // 贸易数据图表
    if (document.getElementById('tradeChart')) {
        const tradeChart = echarts.init(document.getElementById('tradeChart'));
        tradeChart.setOption({
            title: { text: '中美贸易变化趋势', left: 'center', top: 0, textStyle: { fontSize: 16, fontWeight: 'bold' } },
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '30%', containLabel: true },
            xAxis: { type: 'category', data: ['2024年', '2025年'], axisLine: { lineStyle: { color: '#ccc' } } },
            yAxis: { type: 'value', name: '百分比(%)', axisLine: { show: true, lineStyle: { color: '#ccc' } }, splitLine: { lineStyle: { color: '#f0f0f0' } } },
            series: [{
                name: '贸易额变化',
                type: 'bar',
                barWidth: '40%',
                data: [0, -15.6],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: '#1E88E5'},
                        {offset: 1, color: '#1E48E5'}
                    ])
                },
                label: { show: true, position: 'top', formatter: '{c}%', color: '#1E88E5' }
            }]
        });
        window.addEventListener('resize', function() { tradeChart.resize(); });
    }

    // 安全威胁对比图表
    if (document.getElementById('securityThreatChart')) {
        const securityThreatChart = echarts.init(document.getElementById('securityThreatChart'));
        securityThreatChart.setOption({
            title: { text: '安全威胁特征对比', left: 'center', top: 0, textStyle: { fontSize: 16, fontWeight: 'bold' } },
            tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
            legend: { orient: 'vertical', right: 10, top: '10%', data: ['军事冲突', '网络攻击', '生物威胁', '金融渗透', '其他'] },
            series: [{
                name: '威胁类型',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: { show: true, formatter: '{b}: {c}%' },
                emphasis: { label: { show: true, fontSize: '18', fontWeight: 'bold' } },
                labelLine: { show: true },
                data: [
                    {value: 35, name: '军事冲突'},
                    {value: 25, name: '网络攻击'},
                    {value: 20, name: '生物威胁'},
                    {value: 15, name: '金融渗透'},
                    {value: 5, name: '其他'}
                ],
                itemStyle: {
                    color: function(params) {
                        const colors = ['#1E88E5', '#1E68E5', '#1E48E5', '#1E78E5', '#1E58E5'];
                        return colors[params.dataIndex];
                    }
                }
            }]
        });
        window.addEventListener('resize', function() { securityThreatChart.resize(); });
    }

    // 科技领域图表
    if (document.getElementById('techChart')) {
        const techChart = echarts.init(document.getElementById('techChart'));
        techChart.setOption({
            title: { text: '新兴科技安全领域', left: 'center', top: 0, textStyle: { fontSize: 16, fontWeight: 'bold' } },
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '30%', containLabel: true },
            xAxis: { type: 'value', axisLine: { lineStyle: { color: '#ccc' } }, splitLine: { lineStyle: { color: '#f0f0f0' } } },
            yAxis: { type: 'category', data: ['人工智能', '生物技术', '太空科技', '深海探测', '核技术'], axisLine: { show: true, lineStyle: { color: '#ccc' } } },
            series: [{
                name: '关注度',
                type: 'bar',
                data: [85, 70, 65, 60, 55],
                itemStyle: {
                    color: function(params) {
                        const colors = ['#1E88E5', '#1E68E5', '#1E48E5', '#1E78E5', '#1E58E5'];
                        return colors[params.dataIndex];
                    }
                },
                label: { show: true, position: 'right', formatter: '{c}', color: '#333', fontWeight: 'bold' }
            }]
        });
        window.addEventListener('resize', function() { techChart.resize(); });
    }

    // 法治体系图表
    if (document.getElementById('legalChart')) {
        const legalChart = echarts.init(document.getElementById('legalChart'));
        legalChart.setOption({
            title: { text: '国家安全法治建设重点领域', left: 'center', top: 0, textStyle: { fontSize: 16, fontWeight: 'bold' } },
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '30%', containLabel: true },
            xAxis: { type: 'category', data: ['网络', '数据', '人工智能', '生物', '太空', '深海'], axisLine: { lineStyle: { color: '#ccc' } } },
            yAxis: { type: 'value', name: '立法优先级', axisLine: { show: true, lineStyle: { color: '#ccc' } }, splitLine: { lineStyle: { color: '#f0f0f0' } } },
            series: [{
                name: '优先级',
                type: 'bar',
                barWidth: '40%',
                data: [85, 80, 75, 70, 65, 60],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: '#1E88E5'},
                        {offset: 1, color: '#1E48E5'}
                    ])
                },
                label: { show: true, position: 'top', color: '#1E88E5' }
            }]
        });
        window.addEventListener('resize', function() { legalChart.resize(); });
    }

    // 能力建设图表
    if (document.getElementById('abilityChart')) {
        const abilityChart = echarts.init(document.getElementById('abilityChart'));
        abilityChart.setOption({
            title: { text: '国家安全能力建设要素', left: 'center', top: 0, textStyle: { fontSize: 16, fontWeight: 'bold' } },
            tooltip: { trigger: 'item' },
            legend: { orient: 'vertical', right: 0, top: '10%', data: ['风险监测', '危机应对', '综合保障', '基层基础'] },
            series: [{
                name: '能力要素',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                label: { show: true, formatter: '{b}: {c}%' },
                emphasis: { label: { show: true, fontSize: '18', fontWeight: 'bold' } },
                labelLine: { show: true },
                data: [
                    {value: 30, name: '风险监测', itemStyle: {color: '#1E88E5'}},
                    {value: 25, name: '危机应对', itemStyle: {color: '#1E68E5'}},
                    {value: 25, name: '综合保障', itemStyle: {color: '#1E48E5'}},
                    {value: 20, name: '基层基础', itemStyle: {color: '#1E78E5'}}
                ]
            }]
        });
        window.addEventListener('resize', function() { abilityChart.resize(); });
    }

    // 发展安全平衡图表
    if (document.getElementById('balanceChart')) {
        const balanceChart = echarts.init(document.getElementById('balanceChart'));
        balanceChart.setOption({
            title: { text: '发展与安全平衡关系', left: 'center', top: 0, textStyle: { fontSize: 16, fontWeight: 'bold' } },
            tooltip: { trigger: 'axis', axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } } },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '30%', containLabel: true },
            xAxis: [{ type: 'category', boundaryGap: false, data: ['经济', '科技', '生态', '资源', '民生'] }],
            yAxis: [
                { type: 'value', name: '发展水平', axisLine: { show: true, lineStyle: { color: '#1E88E5' } } },
                { type: 'value', name: '安全水平', axisLine: { show: true, lineStyle: { color: '#1E48E5' } } }
            ],
            series: [
                {
                    name: '发展水平',
                    type: 'line',
                    smooth: true,
                    lineStyle: { width: 3, color: '#1E88E5' },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(30, 136, 229, 0.3)' },
                            { offset: 1, color: 'rgba(30, 136, 229, 0.1)' }
                        ])
                    },
                    emphasis: { focus: 'series' },
                    data: [80, 90, 85, 70, 95]
                },
                {
                    name: '安全水平',
                    type: 'line',
                    yAxisIndex: 1,
                    smooth: true,
                    lineStyle: { width: 3, color: '#1E48E5' },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(30, 72, 229, 0.3)' },
                            { offset: 1, color: 'rgba(30, 72, 229, 0.1)' }
                        ])
                    },
                    emphasis: { focus: 'series' },
                    data: [75, 85, 80, 90, 80]
                }
            ]
        });
        window.addEventListener('resize', function() { balanceChart.resize(); });
    }

    // 国际合作图表
    if (document.getElementById('globalChart')) {
        const globalChart = echarts.init(document.getElementById('globalChart'));
        globalChart.setOption({
            title: { text: '国际安全合作重点领域', left: 'center', top: 0, textStyle: { fontSize: 16, fontWeight: 'bold' } },
            radar: {
                indicator: [
                    { name: '反恐合作', max: 100 },
                    { name: '网络安全', max: 100 },
                    { name: '公共卫生', max: 100 },
                    { name: '气候变化', max: 100 },
                    { name: '极地治理', max: 100 },
                    { name: '外层空间', max: 100 }
                ],
                radius: '65%',
                axisName: { color: '#333' },
                splitArea: { areaStyle: { color: ['rgba(30, 136, 229, 0.1)'] } }
            },
            series: [{
                name: '合作程度',
                type: 'radar',
                data: [{
                    value: [90, 85, 80, 75, 70, 65],
                    name: '合作现状',
                    areaStyle: { color: 'rgba(30, 136, 229, 0.3)' },
                    lineStyle: { color: '#1E88E5' },
                    itemStyle: { color: '#1E88E5' }
                }]
            }]
        });
        window.addEventListener('resize', function() { globalChart.resize(); });
    }

    // 核心概念图表
    if (document.getElementById('coreConceptChart')) {
        const coreConceptChart = echarts.init(document.getElementById('coreConceptChart'));
        coreConceptChart.setOption({
            title: { text: '总体国家安全观核心维度', left: 'center', textStyle: { fontSize: 16, fontWeight: 'bold' } },
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '25%', containLabel: true },
            xAxis: { type: 'category', data: ['总体性', '人民性', '发展性', '协同性'], axisLine: { lineStyle: { color: '#ccc' } } },
            yAxis: { type: 'value', name: '重要性(%)', axisLine: { show: true, lineStyle: { color: '#ccc' } }, splitLine: { lineStyle: { color: '#f0f0f0' } } },
            series: [{
                name: '核心维度',
                type: 'bar',
                barWidth: '40%',
                data: [80, 85, 75, 70],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: '#1E88E5'},
                        {offset: 1, color: '#1E48E5'}
                    ])
                },
                label: { show: true, position: 'top', formatter: '{c}%', color: '#1E88E5' }
            }]
        });
        window.addEventListener('resize', function() { coreConceptChart.resize(); });
    }

    // 数字化趋势图表
    if (document.getElementById('digitalTrendChart')) {
        const digitalTrendChart = echarts.init(document.getElementById('digitalTrendChart'));
        digitalTrendChart.setOption({
            title: { text: '国家安全治理现代化演进方向', left: 'center', textStyle: { fontSize: 16, fontWeight: 'bold' } },
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            legend: { data: ['技术成熟度', '应用需求'], right: 0, top: '10%' },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '30%', containLabel: true },
            xAxis: { type: 'category', data: ['智慧预防', '韧性预防', '协同预防'], axisLine: { lineStyle: { color: '#ccc' } } },
            yAxis: { type: 'value', name: '发展指数', axisLine: { show: true, lineStyle: { color: '#ccc' } }, splitLine: { lineStyle: { color: '#f0f0f0' } } },
            series: [
                {
                    name: '技术成熟度',
                    type: 'bar',
                    barWidth: '30%',
                    data: [75, 60, 55],
                    itemStyle: { color: '#1E88E5' },
                    label: { show: true, position: 'top', color: '#1E88E5' }
                },
                {
                    name: '应用需求',
                    type: 'bar',
                    barWidth: '30%',
                    data: [85, 75, 65],
                    itemStyle: { color: '#1E58E5' },
                    label: { show: true, position: 'top', color: '#1E58E5' }
                }
            ]
        });
        window.addEventListener('resize', function() { digitalTrendChart.resize(); });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initCharts();
});
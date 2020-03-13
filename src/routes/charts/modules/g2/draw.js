import G2 from '@antv/g2'

export default function drawG2(option) {
  const chart = new G2.Chart({
    container: option.el,
    width: option.width || 600,
    height: option.height || 300,
    forceFit: true
  })

  chart.source(option.data);
  // Step 3：由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
  chart
    .interval()
    .position('genre*sold')
    .color('genre');
  // Step 4: 渲染图表
  chart.render()
}


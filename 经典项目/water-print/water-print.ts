export function createImgBase({
  // 宽度
  width = 200,
  // 高度
  height = 100,
  // 水印内容
  content = '',
  // 水印颜色
  color = 'rgba(20,28,40, 0.06)',
  // 偏转角度（deg）
  rotateDegree = 20,
  // X轴偏移量
  x = 50,
  // Y轴偏移量
  y = 100,
}): string {
  const canvas = document.createElement('canvas');
  // 因为要实现文字交错效果，所以这里生成两倍宽度的图片
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // X轴阴影距离，负值表示往上，正值表示往下
    // ctx.shadowOffsetX = 2;
    // Y轴阴影距离，负值表示往左，正值表示往右
    // ctx.shadowOffsetY = 2;
    // 阴影的模糊程度
    // ctx.shadowBlur = 2;
    ctx.fillStyle = color;
    ctx.rotate(-rotateDegree * Math.PI/180)
    ctx.textAlign = 'center';
    ctx.font = `300 20px "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif`;
    ctx.fillText(content, x, height);
  }
  return canvas.toDataURL('image/png');
}

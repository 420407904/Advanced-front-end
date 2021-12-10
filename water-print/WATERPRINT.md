# 水印
实现原理就是动态生成一个cavas后转成base64的图片放在全局最上层，加一个css样式    
z-index: 90000;
pointer-events: none;
function createImgBase(options) {
  const canvas = document.createElement("canvas");
  const text = options.content;
  canvas.width = options.width * 2;
  canvas.height = options.height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.font = options.font;
    ctx.fillStyle = options.color;
    ctx.rotate(options.rotateDegree);
    ctx.textAlign = "left";
    ctx.fillText(text, options.x, options.y);
  }
  return canvas.toDataURL("image/png");
}
/**
 * 生成水印
 * @param {String} className 水印类名
 * @param {Number} width 宽度
 * @param {Number} height 高度
 * @param {String} content 内容
 * @param {String} font 字体
 * @param {String} color 自定义样式: 如字体颜色(使用RGBA)
 * @param {Number} rotate 翻转角度
 * @param {String} position 水印定位方式
 * @param {Number} top 距离顶部位置
 * @param {Number} left 距离左部位置
 * @param {Number} zIndex 水印层级
 */
function genWaterMark({
  className = "watermarked",
  width = 340,
  height = 240,
  content = "水印",
  font = "14px PingFang SC, sans-serif",
  color = "rgba(156, 162, 169, 0.3)",
  rotate = -14,
  position = "absolute",
  top = 0,
  left = 0,
  zIndex = 1000,
}) {
  const option = {
    width,
    height,
    content,
    font,
    color,
    rotateDegree: (rotate * Math.PI) / 180,
  };

  // 为了实现交错水印的效果，此处生成两张位置不同的水印 固定相对位置
  const dataUri1 = createImgBase({
    ...option,
    x: 100,
    y: 140,
  });
  const dataUri2 = createImgBase({
    ...option,
    x: 400,
    y: 340,
  });

  let defaultStyle = document.createElement("style");
  defaultStyle.innerHTML = `.${className}:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    ${top || top === 0 ? `top: ${top}px;` : ""}
    ${left || left === 0 ? `left: ${left}px;` : ""}
    background-repeat: repeat;
    pointer-events: none;
  }`;

  let styleEl = document.createElement("style");
  styleEl.innerHTML = `.${className}:after
  {
    ${position ? `position: ${position}` : ""};
    ${zIndex ? `z-index:${zIndex}` : ""};
    background-image: url(${dataUri1}), url(${dataUri2});
    background-size: ${option.width * 2}px ${option.height}px;
  }`;
  document.head.appendChild(defaultStyle);
  document.head.appendChild(styleEl);
}

// 公共方法提取
function addObserve(mutation, container) {
  mutation.observe(container, {
    // 这里只需要监听属性
    attributes: true,
  })
}

/**
 * 防止删除类名
 * @param {String} className 类名
 */
function addListioner(className) {
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  const containerList = document.querySelectorAll(`.${className}`);
  if (MutationObserver) {
    // PS domTreeList是不可以直接遍历的
    [...containerList].forEach(container => {
      let mo = new MutationObserver(function () {
        // 防止删除水印类名
        const classList = container.classList;
        if (![classList].includes(className)) {
          // 如果classList中不存在水印的类名，就重新add进去
          container.classList.add(className);
          // 防止重复触发
          mo.disconnect();
          // 重新开始观察
          addObserve(mo, container);
        }
      });
      addObserve(mo, container);
    })
  }
}

// const resize = () => {
//   const threshold = 200;
//   const width = window.outerWidth - window.innerWidth > threshold;
//   const height = window.outerHeight - window.innerHeight > threshold;
//   if (width || height) {
//     console.log('控制台打开了，用户准备破解水印了！！！');
//   }
// }
// resize();
// window.addEventListener('resize', resize);

// // 阻止 F12 事件
// document.addEventListener('keydown', event => {
// 	return 123 !== event.keyCode || (event.returnValue = false);
// });

// // 阻止鼠标右键事件
// document.addEventListener('contextmenu', event => {
// 	return event.returnValue = false;
// });
<template>
  <PageWrapper title="cavas绘图">
    <div class="p-2 bg-white flex flex-wrap">
      <ImgWrapper>
        <template #content>
          <div class="flex justify-center">
            <canvas width="350" height="350" ref="cas"></canvas>
          </div>
        </template>
      </ImgWrapper>
      <ImgWrapper>
        <template #content>
          <div class="flex justify-center">
            <canvas width="350" height="350" ref="circle"></canvas>
          </div>
        </template>
      </ImgWrapper>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import ImgWrapper from '/@/views/components/ImgWrapper.vue';
  import { PageWrapper } from '/@/components/Page';
  import { ref, onMounted } from 'vue';
  import headerImg from '/@/assets/images/header.jpg';
  import wechat from '/@/assets/images/wechat.jpg';

  // 画个海报
  const cas = ref<any>(null);
  const drawPoster = () => {
    let ctx = cas.value.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 350, 350);

    // 绘制图片
    let img = new Image();
    img.src = headerImg;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 350, 200);
      // 给图片添加文本
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 20px Arial';
      ctx.fillText('hello', 10, 20);
    };

    // 底部部分
    ctx.fillStyle = '#000000';
    ctx.font = '20px Arial';
    ctx.fillText('Umbrella', 10, 220);
    ctx.font = 'bold 30px Arial';
    ctx.fillText('冰美式', 10, 260);
    ctx.font = '20px Arial';
    ctx.fillText('￥66', 10, 300);

    // 二维码
    let qrcode = new Image();
    qrcode.src = wechat;
    qrcode.onload = () => {
      ctx.drawImage(qrcode, 200, 220, 100, 100);
    };
  };

  // 绘制圆圈百分比加载
  const circle = ref<any>(null);
  let circleCtx: any;
  let centerX;
  let centerY;
  let rad; // 圆分为100份
  let speed;
  const circleCtxInit = () => {
    circleCtx = circle.value.getContext('2d');
    console.log('hahah', circleCtx);
    centerX = circleCtx.width;
    centerY = circleCtx.height;
    rad = (Math.PI * 2) / 100; // 圆分为100份
    speed = 0.1;
  };

  // 绘制文本
  const drawCircleText = (n) => {
    circleCtx.fillStyle = '#F47C7C';
    circleCtx.font = '40px Arial';
    circleCtx.textAlign = 'center';
    circleCtx.textBaseline = 'middle';
    circleCtx.fillText(n.toFixed(0) + '%', centerX, centerY);
    console.log('绘制文本');
  };

  // 绘制蓝色外圈
  const drawBlueCircle = (n) => {
    circleCtx.beginPath();
    circleCtx.strokeStyle = '#49f';
    circleCtx.lineWidth = 12;
    circleCtx.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
    circleCtx.stroke();
    console.log('绘制蓝色外圈');
  };

  // 绘制白色外圈
  const drawWhiteCiecle = () => {
    circleCtx.beginPath();
    circleCtx.strokeStyle = '#A5DEF1';
    circleCtx.lineWidth = 12;
    circleCtx.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
    circleCtx.stroke();
    circleCtx.closePath();
    console.log('绘制白色外圈');
  };

  const drawCircelLoading = () => {
    console.log('111');
    window.requestAnimationFrame(drawCircelLoading);
    circleCtx.clearRect(0, 0, circleCtx.width, circleCtx.height);

    drawWhiteCiecle();
    drawCircleText(speed);
    drawBlueCircle(speed);

    if (speed > 100) speed = 0;
    speed += 0.1;
    console.log('结束');
  };

  onMounted(() => {
    drawPoster();
    circleCtxInit();
    setTimeout(() => {
      drawCircelLoading();
    }, 1000);
  });
</script>

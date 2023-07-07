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

  // 画个环形动画
  const circle = ref<HTMLCanvasElement>();
  const circleInit = () => {
    let ctx = circle.value!.getContext('2d');
    getGradient(ctx);
    drawOutCircle(ctx);
    drawTextInner(ctx);
    circleInterval(ctx);
  };

  // 绘制浅色外圈
  const drawOutCircle = (ctx) => {
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#F0F0F0';
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.stroke();
  };

  // 绘制中间文本
  const drawTextInner = (ctx, num = 0) => {
    ctx.clearRect(60, 90, 100, 50);
    ctx.fillStyle = '#000000';
    ctx.font = '20px Arial';
    ctx.fillText(num + 's', 85, 110);
  };

  let my_gradient1;
  let my_gradient2;
  const getGradient = (ctx) => {
    my_gradient1 = ctx.createLinearGradient(100, 20, 180, 180);
    my_gradient1.addColorStop(0, '#66B3FF');
    my_gradient1.addColorStop(1, '#46A3FF');
    my_gradient2 = ctx.createLinearGradient(100, 180, 0, 0);
    my_gradient2.addColorStop(0, '#46A3FF');
    my_gradient2.addColorStop(1, '#2894FF');
  };

  // 绘制进度圈
  const drawPendingCircle = (ctx, num) => {
    if (num === 0) {
      return;
    }

    if (num <= 15) {
      ctx.strokeStyle = my_gradient1;
      ctx.beginPath();
      ctx.arc(100, 100, 80, 1.5 * Math.PI, (1.5 + (0.5 / 15) * num) * Math.PI, false);
      ctx.stroke();
      return;
    }

    if (num > 15 && num <= 30) {
      ctx.strokeStyle = my_gradient1;
      ctx.beginPath();
      ctx.arc(100, 100, 80, 2 * Math.PI, ((0.5 * (num - 15)) / 15) * Math.PI, false);
      ctx.stroke();
      return;
    }

    // 超过180
    ctx.strokeStyle = my_gradient2;
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0.5 * Math.PI, (0.5 + (1 / 30) * (num - 30)) * Math.PI, false);
    ctx.stroke();
  };

  let circleTimer;
  const circleInterval = (ctx) => {
    let num = 0;
    circleTimer = setInterval(() => {
      num++;
      drawTextInner(ctx, num);
      drawPendingCircle(ctx, num);
      if (num === 60) {
        clearInterval(circleTimer);
      }
    }, 1000);
  };

  onMounted(() => {
    drawPoster();
    circleInit();
  });
</script>

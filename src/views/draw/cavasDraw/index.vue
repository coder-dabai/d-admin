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
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import ImgWrapper from '/@/views/components/ImgWrapper.vue';
  import { PageWrapper } from '/@/components/Page';
  import { ref, onMounted } from 'vue';
  import headerImg from '/@/assets/images/header.jpg';
  import wechat from '/@/assets/images/wechat.jpg';

  const cas = ref<any>(null);
  const init = () => {
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

  onMounted(() => {
    init();
  });
</script>

<template>
  <div> citys </div>
</template>
<script lang="ts" setup>
  import { getCitys } from '/@/api/citys/city';

  const init = () => {
    getCitys({}).then((res: any) => {
      console.log(res);
    });
  };
  init();
</script>

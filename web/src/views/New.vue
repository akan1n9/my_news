<template>
  <el-row>
    <el-col :span="17" :offset="1">
      <div>
        <h2>{{ currentNews.title }}</h2>

        <div class="time">
          {{ whichTime(currentNews.editTime) }}
        </div>

        <el-divider>
          <el-icon>
            <star-filled />
          </el-icon>
        </el-divider>

        <div v-html="currentNews.content"></div></div
    ></el-col>
    <el-col :span="4" :offset="1" :pull="1">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>最近新闻</span>
          </div>
        </template>
        <div
          v-for="item in topNews"
          :key="item._id"
          class="text item"
          style="padding: 14px"
          @click="handleChange(item._id)"
        >
          <span>{{ item.title }}</span>
          <div class="bottom">
            <time class="time">{{ whichTime(item.editTime) }}</time>
          </div>
        </div>
      </el-card></el-col
    >
  </el-row>
</template>
<script setup>
import { onMounted, ref, watchEffect, onBeforeUnmount } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import moment from "moment";
import { StarFilled } from "@element-plus/icons-vue";
const route = useRoute();
const router = useRouter();
const currentNews = ref({});
const topNews = ref({});

// watchEffect函数接受一个函数作为参数，并在该函数内部访问响应式数据。当响应式数据发生变化时，Vue会自动追踪哪些数据被访问，并在这些数据发生变化时重新运行函数。
const stop = watchEffect(async () => {
  //   console.log(route);
  if(!route.params.id)return
  const res1 = await axios.get(`/webapi/news/list/${route.params.id}`);
  const res2 = await axios.get(`/webapi/news/toplist?limit=4`);
  currentNews.value = res1.data.data[0];
  topNews.value = res2.data.data;
});
onBeforeUnmount(()=>{
    stop()
})
const whichTime = (time) => {
  return moment(time).format("lll");
};

const handleChange = (id) => {
    router.push(`/news/${id}`)
}
</script>
<style scoped lang="scss">
.el-row {
  margin-top: 30px;
}

.time {
  font-size: 13px;
  color: gray;
}
</style>
<template>
  <div>
    <el-page-header content="新闻管理" icon="" title="创建新闻" />

    <el-form
      ref="newsFormRef"
      :model="newsForm"
      :rules="newsFormRules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="标题" prop="title">
        <el-input style="width: 63.5%" v-model="newsForm.title" />
      </el-form-item>

      <el-form-item label="内容" prop="content">
        <editor @event="handleChange" />
      </el-form-item>

      <el-form-item label="类别" prop="category">
        <el-select
          v-model="newsForm.category"
          class="m-2"
          placeholder="Select"
          style="width: 30%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="封面" prop="cover">
        <Upload :avatar="newsForm.cover" @roiechange="handleUploadChange" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">添加新闻</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from "vue";
import Editor from "@/components/editor/Editor";
import { useRouter } from "vue-router";
import Upload from "@/components/upload/Upload";
import upload from "@/util/upload";
const router = useRouter();

const newsFormRef = ref();
const newsForm = reactive({
  title: "",
  content: "",
  category: 1, //1最新动态 2典型案例 3通知公告
  cover: "",
  file: null,
  isPublish: 0,
  author:''
});

const newsFormRules = reactive({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  content: [{ required: true, message: "请输入内容", trigger: "blur" }],
  category: [{ required: true, message: "请选择类别", trigger: "blur" }],
  cover: [{ required: true, message: "请上传图片", trigger: "blur" }],
});

const handleChange = (data) => {
  newsForm.content = data;
};

const options = [
  {
    label: "最新动态",
    value: 1,
  },
  {
    label: "典型案例",
    value: 2,
  },
  {
    label: "通知公告",
    value: 3,
  },
];

const handleUploadChange = (file) => {
  newsForm.cover = URL.createObjectURL(file);
  newsForm.file = file;
};

const submitForm = () => {
  newsFormRef.value.validate(async (valid) => {
    if (valid) {
      // console.log(newsForm);
      //后台通信,
      await upload('adminapi/news/add', newsForm)

      router.push(`/news-manage/newslist`)
    }
  });
};
</script>
<style lang="scss" scoped>
.el-form {
  margin-top: 50px;
}
</style>
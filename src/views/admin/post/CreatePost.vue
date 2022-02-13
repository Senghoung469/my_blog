<template>
  <div>
    <Navbar />
    <div class="w-3/4 mx-auto pl-5 pr-5 mt-8">
      <div class="grid lg:grid-cols-12 md:grid-cols-12 gap-x-1 gap-y-1">
        <div class="lg:col-span-3 sm:col-span-12">
          <Sidebar />
        </div>
        <div class="lg:col-span-9 sm:col-span-12">
          <div class="p-5 bg-white">
            <div class="flex justify-between items-center">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="150px"
                class="w-11/12"
              >
                <el-form-item label="Activity Title" prop="title">
                  <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="Activity Description" prop="desc">
                  <el-input
                    type="textarea"
                    rows="8"
                    v-model="ruleForm.desc"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Activity Content" prop="conten">
                  <ckeditor
                    :editor="editor"
                    v-model="editorData"
                    :config="editorConfig"
                    accept="image/x-png,image/gif,image/jpeg"
                  ></ckeditor>
                </el-form-item>
                <el-form-item label="Activity Thumbnail" prop="region">
                  <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false"
                    :multiple="true"
                  >
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{ file }">
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                        alt=""
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <i class="el-icon-zoom-in"></i>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <i class="el-icon-download"></i>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <i class="el-icon-delete"></i>
                        </span>
                      </span>
                    </div>
                  </el-upload>
                  <el-dialog :visible.sync="this.dialogVisible">
                    <img width="100%" :src="this.dialogImageUrl" />
                  </el-dialog>
                </el-form-item>
                <el-form-item label="Instant Public" prop="delivery">
                  <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="button"
                    class="
                      rounded-md
                      bg-gray-800
                      text-white
                      hover:bg-black hover:text-white
                      focus:bg-gray-800
                      focus:text-white
                      focus:border-transparent
                      mt-5
                      mb-5
                    "
                    @click="submitForm('ruleForm')"
                    >Create</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadAdapter from "../../../UploadAdapter";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: null,
      editorConfig: {
        extraPlugins: [this.uploader],
        language: "en",
      },
      ruleForm: {
        title: "",
        desc: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "Please input Activity title",
            trigger: "blur",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const auth = localStorage.getItem("user_active");
      console.log(auth[6])
      // Prints "name Jean-Luc Picard" followed by "rank Captain"
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    uploader(editor) {
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return new UploadAdapter(loader);
      };
    },
  },
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

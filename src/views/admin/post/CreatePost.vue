<template>
  <div>
    <Navbar />
    <div class="w-full mx-auto pl-5 pr-5">
      <div class="grid grid-cols-12 gap-x-1">
        <div class="col-span-2 flex-shrink">
          <Sidebar />
        </div>
        <div class="col-span-10">
          <div class="rounded shadow h-full p-5 leading-6 bg-white">
            <div class="flex justify-between">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="150px"
                class="demo-ruleForm w-11/12"
              >
                <el-form-item label="Activity title" prop="title">
                  <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="Activity description" prop="desc">
                  <el-input type="textarea" rows="4" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="Activity content" prop="conten">
                  <ckeditor
                    :editor="editor"
                    v-model="editorData"
                    :config="editorConfig"
                  ></ckeditor>
                </el-form-item>
                <el-form-item label="Activity thumbnail" prop="region">
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
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" />
                  </el-dialog>
                </el-form-item>
                <el-form-item label="Activity tag" required>
                  <el-select
                    v-model="value"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="Choose tags for your article"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Instant public" prop="delivery">
                  <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')"
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
import UploadAdapter from '../../../UploadAdapter';
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "insertTable",
          "|",
          "imageUpload",
          "mediaEmbed",
          "|",
          "undo",
          "redo",
        ],
        table: {
          toolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
        extraPlugins: [this.uploader],
        language: "en",
      },
      ruleForm: {
        title: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "Please input Activity title",
            trigger: "blur",
          }
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
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

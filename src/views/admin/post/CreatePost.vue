<template>
  <div>
    <Navbar />
    <div>
      <el-dialog
        title="Add Category"
        :visible.sync="dialogFormVisibleCategory"
        class="w-3/4 mx-auto rounded-sm"
      >
        <el-form
          :model="categoryValidateForm"
          ref="categoryValidateForm"
          label-width="100px"
        >
          <el-form-item
            label="Name"
            prop="name"
            :rules="[{ required: true, message: 'Name is required' }]"
          >
            <el-input
              type="text"
              v-model="categoryValidateForm.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input
              type="textarea"
              rows="4"
              v-model="categoryValidateForm.description"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="button"
              class="
                bg-indigo-800
                text-white text-sm
                hover:bg-indigo-800 hover:text-white
                focus:bg-indigo-700 focus:text-white focus:border-transparent
                rounded
                font-sans
                outline-none
                py-2
                px-5
              "
              @click="submitFormCategory('categoryValidateForm')"
              >Add</el-button
            >
            <el-button @click="resetFormCategory('categoryValidateForm')"
              >Reset</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <div>
      <el-dialog
        title="Add Tag"
        :visible.sync="dialogFormVisibleTag"
        class="w-3/4 mx-auto rounded-sm"
      >
        <el-form
          :model="tagValidateForm"
          ref="tagValidateForm"
          label-width="100px"
        >
          <el-form-item
            label="Name"
            prop="name"
            :rules="[{ required: true, message: 'Name is required' }]"
          >
            <el-input
              type="text"
              v-model="tagValidateForm.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="button"
              class="
                bg-indigo-800
                text-white text-sm
                hover:bg-indigo-800 hover:text-white
                focus:bg-indigo-700 focus:text-white focus:border-transparent
                rounded
                font-sans
                outline-none
                py-2
                px-5
              "
              @click="submitFormTag('tagValidateForm')"
              >Add</el-button
            >
            <el-button @click="resetFormTag('tagValidateForm')"
              >Reset</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <div class="w-3/4 mx-auto pl-5 pr-5 mt-8">
      <div class="grid lg:grid-cols-12 md:grid-cols-12 gap-x-1 gap-y-1">
        <div class="lg:col-span-3 sm:col-span-12 md:col-span-12">
          <Sidebar />
        </div>
        <div class="lg:col-span-9 sm:col-span-12 md:col-span-12">
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
                    rows="5"
                    v-model="ruleForm.description"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Category" prop="category_id">
                  <div class="grid grid-cols-12 gap-x-2">
                    <div class="col-span-11">
                      <el-select
                        v-model="ruleForm.category_id"
                        placeholder="Select Category"
                        class="w-full"
                        no-data-text="No data"
                      >
                        <el-option
                          v-for="item in categories"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id"
                        >
                          <span style="float: left">{{ item.name }}</span>
                          <span
                            style="
                              float: right;
                              color: #8492a6;
                              font-size: 13px;
                            "
                            >{{ item.id }}</span
                          >
                        </el-option>
                      </el-select>
                    </div>
                    <div class="col-span-1">
                      <button
                        type="button"
                        @click.prevent="loadFormCategory()"
                        class="
                          cursor-pointer
                          bg-gray-100
                          text-indigo-700 text-sm
                          hover:bg-indigo-100 hover:text-indigo-700
                          focus:bg-indigo-100
                          focus:text-indigo-500
                          focus:border-transparent
                          rounded-sm
                          font-medium
                          outline-none
                          py-2
                          px-2
                        "
                      >
                        new
                      </button>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item label="Keyword" prop="tag">
                  <div class="grid grid-cols-12 gap-x-2">
                    <div class="col-span-11">
                      <el-select
                        v-model="ruleForm.tag_id"
                        multiple
                        filterable
                        remote
                        no-data-text="No data"
                        no-match-text="No matching data"
                        reserve-keyword
                        placeholder="Please enter a keyword"
                        :loading="loading"
                        class="w-full"
                      >
                        <el-option
                          v-for="item in tags"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div class="col-span-1">
                      <button
                        type="button"
                        @click.prevent="loadFormTag()"
                        class="
                          cursor-pointer
                          bg-gray-100
                          text-indigo-700 text-sm
                          hover:bg-indigo-100 hover:text-indigo-700
                          focus:bg-indigo-100
                          focus:text-indigo-500
                          focus:border-transparent
                          rounded-sm
                          font-medium
                          outline-none
                          py-2
                          px-2
                        "
                      >
                        new
                      </button>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item label="Activity Content" prop="conten">
                  <ckeditor
                    :editor="editor"
                    v-model="ruleForm.content"
                    :config="editorConfig"
                    accept="image/x-png,image/gif,image/jpeg"
                  ></ckeditor>
                </el-form-item>
                <el-form-item label="Activity Thumbnail">
                  <el-input type="file" @change="changeThumbnail" />
                </el-form-item>
                <el-form-item label="Instant Public" prop="status">
                  <el-switch v-model="ruleForm.status"></el-switch>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="button"
                    class="
                      bg-indigo-800
                      text-white text-sm
                      hover:bg-indigo-800 hover:text-white
                      focus:bg-indigo-700
                      focus:text-white
                      focus:border-transparent
                      rounded
                      font-sans
                      outline-none
                      py-2
                      px-4
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
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      editor: ClassicEditor,
      loading: false,
      tags: null,
      categories: null,
      dialogFormVisibleCategory: false,
      dialogFormVisibleTag: false,
      editorConfig: {
        toolbar: {
          items: [
            "undo",
            "redo",
            "bold",
            "italic",
            "blockQuote",
            "link",
            // "uploadImage",
            "imageUpload",
            "heading",
            "imageTextAlternative",
            "toggleImageCaption",
            "imageStyle:inline",
            "imageStyle:alignLeft",
            "imageStyle:alignRight",
            "imageStyle:alignCenter",
            "imageStyle:alignBlockLeft",
            "imageStyle:alignBlockRight",
            "imageStyle:block",
            "imageStyle:side",
            "imageStyle:wrapText",
            "imageStyle:breakText",
            "indent",
            "outdent",
            "numberedList",
            "bulletedList",
            "mediaEmbed",
            "insertTable",
            "tableColumn",
            "tableRow",
            "mergeTableCells",
          ],
          shouldNotGroupWhenFull: false,
        },
        extraPlugins: [this.uploader],
        language: "en",
      },
      ruleForm: {
        user_id: 1,
        title: null,
        description: null,
        category_id: null,
        tag_id: null,
        content: null,
        status: true,
        thumbnail: null,
      },
      categoryValidateForm: {
        name: null,
        description: null,
      },
      tagValidateForm: {
        name: null,
      },
      rules: {
        title: [
          {
            required: true,
            message: "Please input Activity title",
            trigger: "blur",
          },
        ],
        category_id: [
          {
            required: true,
            message: "Please select Activity category",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    // Load categories
    this.$axios
      .get(`${process.env.VUE_APP_ROOT_API}/categories`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        this.categories = response.data.data;
      });
    // Load tags
    this.$axios
      .get(`${process.env.VUE_APP_ROOT_API}/tags`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        this.tags = response.data.data;
      });
  },
  methods: {
    changeThumbnail(e) {
      this.ruleForm.thumbnail = e.target.files[0];
      console.log(this.ruleForm.thumbnail);
    },
    // handleRemove(file) {
    //   return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    // },
    // handlePictureCardPreview(file) {
    //   this.dialogImageUrl = file.url;
    //   this.dialogVisible = true;
    // },
    // handleDownload(file) {
    //   console.log(file);
    // },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // Upload file
          this.$axios
            .post(
              `${process.env.VUE_APP_ROOT_API}/uploader`,
              { image: this.ruleForm.thumbnail },
              {
                headers: {
                  Authorization:
                    "Bearer " + localStorage.getItem("access_token"),
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
              console.log(response);
            });
          // End Upload file
          this.$axios
            .post(`${process.env.VUE_APP_ROOT_API}/post`, this.ruleForm, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            })
            .then(() => {
              console.log("success");
            });
        } else {
          console.log("error submit!!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // Submit categories form
    submitFormCategory(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              `${process.env.VUE_APP_ROOT_API}/category`,
              this.categoryValidateForm,
              {
                headers: {
                  Authorization:
                    "Bearer " + localStorage.getItem("access_token"),
                },
              }
            )
            .then(() => {
              this.resetFormCategory(formName);
              this.dialogFormVisibleCategory = false;
              // Load categories
              this.$axios
                .get(`${process.env.VUE_APP_ROOT_API}/categories`, {
                  headers: {
                    Authorization:
                      "Bearer " + localStorage.getItem("access_token"),
                  },
                })
                .then((response) => {
                  this.ruleForm.categories = response.data.data;
                });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetFormCategory(formName) {
      this.$refs[formName].resetFields();
    },
    // Submit tags form
    submitFormTag(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(`${process.env.VUE_APP_ROOT_API}/tag`, this.tagValidateForm, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            })
            .then(() => {
              this.resetFormTag(formName);
              this.dialogFormVisibleTag = false;
              // Load tags
              this.$axios
                .get(`${process.env.VUE_APP_ROOT_API}/tags`, {
                  headers: {
                    Authorization:
                      "Bearer " + localStorage.getItem("access_token"),
                  },
                })
                .then((response) => {
                  this.tags = response.data.data;
                });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetFormTag(formName) {
      this.$refs[formName].resetFields();
    },
    uploader(editor) {
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return new UploadAdapter(loader);
      };
    },
    // Load form categories
    loadFormCategory() {
      this.dialogFormVisibleCategory = true;
    },
    // Load form tag
    loadFormTag() {
      this.dialogFormVisibleTag = true;
    },
  },
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

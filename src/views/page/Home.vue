<template>
  <div>
    <Navbar />
    <div class="lg:w-3/4 sm:w-11/12 mx-auto shadow-sm bg-white p-2 mt-8">
      <el-carousel indicator-position="outside" :interval="5000">
        <el-carousel-item>
          <div class="grid lg:grid-cols-12 gap-x-4">
            <div class="lg:col-span-6 sm:col-span-6">
              <img
                src="https://www.itsolutionstuff.com/upload/laravel-7-http-client.png"
              />
            </div>
            <div class="lg:col-span-6 sm:col-span-6 pr-5">
              <h1 class="text-xl text-indigo-800 font-bold mb-4">
                Angular 13 Google Maps Integration Example3
              </h1>
              <p class="font-serif text-gray-500 text-justify leading-6">
                When developing a web application, it is generally a good idea
                to split it into two tiers. A middle-tier API interacts with the
                database, and a web tier usually consists of a front-end SPA or
                MPA. This way, a web application is more loosely coupled, making
                it easier to manage and debug in the long run.
              </p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div
      class="
        grid
        lg:w-3/4
        sm:w-11/12
        mx-auto
        lg:grid-cols-12
        sm:grid-cols-12
        mt-2
        lg:gap-x-2
      "
    >
      <div class="lg:col-span-8 sm:col-span-12 space-y-4">
        <div
          class="
            grid
            lg:grid-cols-12
            rounded-l-md
            lg:gap-x-2
            p-5
            shadow-sm
            bg-white
            cursor-pointer
          "
          v-for="post in posts.data"
          :key="post.id"
          @click.prevent="detailPost(post.id)"
        >
          <div class="lg:col-span-4 sm:col-span-4">
            <img
              class="lg:w-full sm:w-full rounded object-cover lg:rounded-l-md"
              src="https://www.itsolutionstuff.com/upload/laravel-8-ajax-image-upload.png"
            />
          </div>
          <div class="lg:col-span-7 sm:col-span-4">
            <h1 class="text-xl text-indigo-800 font-bold">
              {{ post.title }}
            </h1>
            <p
              class="
                text-sm text-justify
                font-serif
                text-gray-500
                mt-4
                leading-5
              "
            >
              {{ post.description }}
            </p>
          </div>
        </div>
        <div class="mt-10 flex justify-end">
          <el-pagination
            background
            layout="prev, pager, next"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :total="posts.total"
            :page-size="posts.per_page"
          >
          </el-pagination>
        </div>
        <div>
          <h1
            class="
              text-2xl
              font-bold
              text-indigo-800
              font-serif
              flex
              justify-center
              mt-10
              mb-2
              leading-10
              tracking-wide
            "
          >
            Featured Post
          </h1>
          <hr class="h-1 bg-indigo-800 rounded-full mb-2" />
        </div>
        <div class="grid mb-10 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="
              w-full
              bg-white
              shadow-sm
              p-5
              rounded-md
              transition-all
              duration-500
              hover:border-indigo-800
              border-b-4
              cursor-pointer
            "
          >
            <div>
              <img
                class="object-cover"
                src="https://www.itsolutionstuff.com/upload/laravel-7-http-client.png"
              />
              <hr />
            </div>
            <div>
              <h1 class="text-md text-indigo-800 font-bold mt-2">
                How to add on Change Event on Dropdown in Angular?
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-4 sm:col-span-12 md:col-span-12">
        <div class="w-full shadow-sm bg-white p-4">
          <h1 class="text-center font-bold text-gray-500 mt-2">Our Follower</h1>
          <div class="flex justify-center space-x-1">
            <router-link to="#" class="text-center text-gray-500 text-sm">
              <img
                class="shadow-md rounded-full"
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
              />
            </router-link>
            <router-link to="#">
              <img
                class="shadow-md rounded-full"
                src="https://img.icons8.com/color/48/000000/youtube-music.png"
              />
            </router-link>
            <router-link to="#">
              <img
                class="shadow-md rounded-full"
                src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
              />
            </router-link>
          </div>
        </div>
        <div class="w-full shadow-sm bg-white p-2 mt-1">
          <div>
            <input
              type="text"
              class="
                w-full
                outline-none
                p-2
                border-2
                rounded-sm
                border-gray-300
                text-gray-500 text-sm
                font-medium
                focus:border-indigo-800
              "
              placeholder="search..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  data() {
    return {
      currentPage1: 1,
      posts: null,
    };
  },
  mounted() {
    // Load Posts
    this.$axios
      .get(`${process.env.VUE_APP_ROOT_API}/posts`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        this.posts = response.data;
      });
  },
  methods: {
    handleSizeChange(val) {
      // Load Post
      this.$axios
        .get(`${process.env.VUE_APP_ROOT_API}/posts?page=${val}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          this.posts = response.data;
        });
    },
    handleCurrentChange(val) {
      // Load Post
      this.$axios
        .get(`${process.env.VUE_APP_ROOT_API}/posts?page=${val}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          this.posts = response.data;
        });
    },
    detailPost(post_id) {
      this.$router.push({
        name: "Detail",
        params: { id: post_id },
      });
    },
  },
  components: {
    Navbar,
  },
};
</script>
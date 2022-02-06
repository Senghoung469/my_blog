<template>
  <div>
    <Navbar />
    <div class="w-3/4 mx-auto shadow-sm bg-white p-2">
      <el-carousel indicator-position="outside" :interval="5000">
        <el-carousel-item>
          <div class="grid grid-cols-12">
            <div class="col-span-6">
              <img
                src="https://www.itsolutionstuff.com/upload/laravel-8-ajax-image-upload.png"
              />
            </div>
            <div class="col-span-6 ml-32">
              <h1>Angular Simple Pagination Example | ngx-pagination</h1>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="grid grid-cols-12">
            <div class="col-span-5">
              <img
                src="https://www.itsolutionstuff.com/upload/laravel-7-http-client.png"
              />
            </div>
            <div class="col-span-7 ml-32">
              <h1>Angular Simple Pagination Example | ngx-pagination</h1>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="w-3/4 mx-auto grid grid-cols-12 mt-2 gap-x-2 gap-y-10">
      <div class="col-span-9">
        <div class="grid grid-cols-12 shadow-sm bg-white rounded-l-md p-2">
          <div class="col-span-4 mt-2">
            <img
              class="w-64 object-cover rounded-l-md"
              src="https://www.itsolutionstuff.com/upload/angular-dropdown-select.png"
            />
          </div>
          <div class="col-span-7">
            <h1 class="text-xl text-indigo-800 font-bold">
              Angular 13 Google Maps Integration Example
            </h1>
            <p class="text-sm text-justify font-serif text-gray-500 mt-3">
              I am going to explain to you an example of angular 13 google maps
              example. This article goes into detail on how to add google map in
              angular 13. you can understand the concept of angular 13 google
              map example. it's a simple example of angular 13 agm core google
              maps example
            </p>
          </div>
        </div>
        <div class="mt-10 flex justify-end">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="500"
            :page-size="10"
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
        <div class="grid grid-cols-3 mb-10 gap-4">
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
      <div class="col-span-3">
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
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
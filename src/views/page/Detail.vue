<template>
  <div>
    <Navbar />
    <div class="w-3/4 mx-auto grid grid-cols-12 gap-x-2 mt-8">
      <div class="col-span-8">
        <div class="bg-white p-2 mb-20">
          <div>
            <img
              class="object-cover w-full"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--MrNHOyis--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/csc5lxfqxmlsymn63o4r.png"
            />
          </div>
          <div class="p-5">
            <h1 class="text-xl text-indigo-900 font-bold mt-4 mb-2">
              {{ post.title }}
            </h1>
            <div class="flex text-sm text-gray-500 space-x-4">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              Chit Senghoung
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              {{ this.$moment(post.created_at).format("DD-MMMM-YYYY") }}
            </div>
            <p class="font-serif text-gray-500 leading-7 text-justify mt-4">
              {{ post.description }}
            </p>
            <hr class="h-1 bg-gray-200 rounded-full mb-10 mt-4" />
            <div class="space-y-5 leading-6" v-html="post.content" />
          </div>
          <hr class="h-1 rounded-full mb-4 mt-4" />
          <div class="grid grid-cols-12 mb-10 gap-4">
            <div class="col-span-3 flex justify-center">
              <div class="rounded-full">
                <img
                  class="
                    rounded-full
                    w-36
                    object-cover
                    border-4 border-indigo-800
                  "
                  src="https://miro.medium.com/fit/c/176/176/1*vyODBphrmao45EDDW4PCmw.jpeg"
                />
              </div>
            </div>
            <div class="col-span-9 space-y-2">
              <h1 class="text-xl font-medium text-indigo-800">Hardik Savani</h1>
              <p class="text-sm leading-5 text-justify pr-5 text-indigo-900">
                I'm a full-stack developer, entrepreneur and owner of Aatman
                Infotech. I live in India and I love to write tutorials and tips
                that can help to other artisan. I am a big fan of PHP, Laravel,
                Angular, Vue, Node, Javascript, JQuery, Codeigniter and
                Bootstrap from the early stage. I believe in consistency.
              </p>
              <h1 class="text-lg font-medium text-indigo-800 mt-5">
                Follow Me:
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div class="w-full bg-gray-100 mt-1 mb-1 rounded-t-sm p-2">
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
        <div class="bg-white">
          <div class="text-white rounded-t-sm">
            <h1
              class="
                rounded-t-md
                text-center
                font-medium font-sans
                text-md text-white text-lg
              "
            >
              Popular Posts
            </h1>
          </div>
          <div class="rounded-b-md font-medium">
            <div
              class="
                flex
                text-indigo-800
                justify-center
                space-x-4
                transition-all
                duration-800
                hover:bg-gray-50 hover:text-indigo-700
                w-full
                cursor-pointer
                mt-2
                p-2
              "
            >
              <svg
                class="w-6 h-6 text-indigo-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Laravel 5.6 - Dynamic Ajax Autocomplete using Vue.js
            </div>
            <div
              class="
                flex
                text-indigo-800
                justify-center
                space-x-4
                transition-all
                duration-800
                hover:bg-gray-50 hover:text-indigo-700
                w-full
                cursor-pointer
                mt-2
                p-2
              "
            >
              <svg
                class="w-6 h-6 text-indigo-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Laravel 5.6 - Dynamic Ajax Autocomplete using Vue.js
            </div>
          </div>
        </div>
        <div class="w-full">
          <img
            class="w-full object-cover mt-1"
            src="https://tpc.googlesyndication.com/simgad/13927149296568684491?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qk1dRplBiRFO4pFlSqowIgmV0MP1w"
          />
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
      post: null,
    };
  },
  mounted() {
    // Load Post
    this.$axios
      .get(`${process.env.VUE_APP_ROOT_API}/post/${this.$route.params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        this.post = response.data;
      });
  },
  components: {
    Navbar,
  },
};
</script>
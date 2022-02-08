<template>
  <div>
    <nav
      class="
        flex
        fixed
        w-full
        justify-between
        items-center
        p-2
        pr-8
        pl-8
        bg-white
        font-normal
        tracking-wide
        z-20
      "
      v-if="this.width > 768"
    >
      <div>
        <a href="#" class="text-md">
          <img
            src="https://www.codecheef.org/user/img/website-logo.png?ezimgfmt=rs:258x66/rscb2/ng:webp/ngcb2"
          />
        </a>
      </div>
      <div class="space-x-5 flex items-center font-medium text-gray-500">
        <div>
          <router-link to="#">Laravel8</router-link>
        </div>
        <div>
          <router-link to="#">Vue</router-link>
        </div>
        <div>
          <router-link to="#">How-to</router-link>
        </div>
        <div>
          <router-link to="#">Tutorial</router-link>
        </div>
      </div>
    </nav>
    <nav v-else></nav>
    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize(e) {
      this.width = window.innerWidth;
    },
  },
};
</script>
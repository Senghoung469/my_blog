<template>
  <div>
    <Navbar />
    <div class="w-3/4 mx-auto pl-16 pr-16 mt-8">
      <div class="grid grid-cols-12 gap-x-2">
        <div class="col-span-3">
          <Sidebar />
        </div>
        <div class="col-span-9">
          <div class="w-full bg-white">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
export default {
  components: {
    Sidebar,
    Navbar,
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

<template>
  <div>
    <Navbar />
    <div class="w-full mx-auto pl-16 pr-16">
      <div class="grid grid-cols-12 gap-x-2">
        <div class="col-span-2">
          <Sidebar />
        </div>
        <div class="col-span-10">
          <div class="w-full bg-white h-96 rounded shadow">
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

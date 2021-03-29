<template>
  <div class="flex bg-layout-body">
    <SidebarComponent />
    <div class="flex-1">
      <HeaderComponent />
      <ContentComponent />
    </div>
  </div>
</template>

<script>
import "@/panel/assets/styles/tailwind.css";
import "@/panel/assets/styles/fontawesome.css";

import ContentComponent from "@/panel/layouts/Content";
import HeaderComponent from "@/panel/layouts/Header";
import SidebarComponent from "@/panel/layouts/Sidebar";

export default {
  components: {
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
  },
};
</script>
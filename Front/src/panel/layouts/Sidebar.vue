<template>
  <div class="flex-none w-44 min-h-screen bg-layout-sidebar shadow-lg">
    <!-- Logo -->
    <router-link to="/">
      <div class="flex justify-center items-center h-28">
        <img class="w-36" src="@/panel/assets/images/logo.png" alt="logo" />
      </div>
    </router-link>
    <!-- Menu -->
    <div>
      <ul>
        <li class="h-10">
          <router-link
            v-bind:to="{ name: 'home' }"
            active-class="bg-theme-primary bg-opacity-10 border-l-4 border-theme-primary"
            class="flex items-center w-full h-full px-5"
            ><i class="fa fa-home text-theme-primary"></i>
            <span class="text-theme-primary ml-5">Home</span></router-link
          >
        </li>
        <li class="h-10">
          <router-link
            v-bind:to="{ name: 'user' }"
            active-class="bg-theme-primary bg-opacity-10 border-l-4 border-theme-primary"
            class="flex items-center w-full h-full px-5"
            ><i class="fa fa-user text-theme-primary"></i>
            <span class="text-theme-primary ml-5">Usuários</span></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
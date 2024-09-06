<script setup lang="ts">
import {onMounted} from "vue";
import {RouterView} from "vue-router";
import {useAuthStore} from "./store/auth";

const auth = useAuthStore();

onMounted(async () => {
  await auth.login();
});
</script>

<template>
  <div>
    <div>
      <button v-if="auth.authenticated" @click="auth.logout">Logout</button>
    </div>

    <RouterView />
  </div>
</template>

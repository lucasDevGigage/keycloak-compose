<script setup lang="ts">
import {onMounted, ref} from "vue";
import {auth} from "./auth";

const data = ref();

onMounted(async () => {
  const client = await auth();

  data.value = await client?.loadUserInfo();
});
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>

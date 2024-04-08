<template>
  <div class="not-found">
    <h1 class="text-h3 text-primary">Page Not Found</h1>
    <v-divider class="mt-2 mb-4"></v-divider>
    <p class="mb-4">The page you were looking for does not exist.</p>
    <v-btn class="text-subtitle-2" color="primary" variant="outlined" to="/">Return to Home Page</v-btn>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.not-found {
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: start;
}
</style>
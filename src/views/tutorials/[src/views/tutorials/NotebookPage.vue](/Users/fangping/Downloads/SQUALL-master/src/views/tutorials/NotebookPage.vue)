<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
})

const notebookUrl = computed(() => {
  return `${import.meta.env.BASE_URL}tutorials/${props.filename}`
})
</script>

<template>
  <section class="notebook-page">
    <h2>{{ title }}</h2>

    <iframe
      class="notebook-frame"
      :src="notebookUrl"
      :title="title"
    />
  </section>
</template>

<style scoped>
.notebook-page {
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
}

h2 {
  margin-bottom: 16px;
  font-size: 24px;
  color: #2c3e50;
}

.notebook-frame {
  width: 100%;
  flex: 1;
  min-height: 700px;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  background: #fff;
}
</style>

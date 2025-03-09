<script setup>
  import { ref } from "vue"

  const showPassword = ref(false)
  const profileImage = ref(null)

  const handleFileUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
          profileImage.value = URL.createObjectURL(file)
      }
  }
</script>

<template>

</template>

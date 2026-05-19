<script setup lang="ts">

</script>

<template>
    <div class="header-image">
        <NuxtImg
            placeholder
            src="/images/band_2025_music_festival_liffre.jpg"
        />
    </div>
</template>

<style scoped>
.header-image {
    display: flex;
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16/9;
}

.header-image > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>
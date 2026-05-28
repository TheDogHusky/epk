<script setup lang="ts">
import { PhotoAlbum } from 'vue-photo-album';

const photos = [{
    src: "/images/band_2025_music_festival_liffre_2.jpg",
    width: 5184,
    height: 3456
}, {
    src: "/images/band_2025_music_festival_liffre_3.jpg",
    width: 3456,
    height: 5184
}, {
    src: "/images/band_2025_music_festival_liffre_4.jpg",
    width: 3456,
    height: 5184
}, {
    src: "/images/band_2025_music_festival_liffre_5.jpg",
    width: 3456,
    height: 5184
}, {
    src: "/images/press/5.jpg",
    width: 3456,
    height: 5184
}, {
    src: "/images/press/6.jpg",
    width: 3456,
    height: 5184
}];
</script>

<template>
    <ClientOnly>
        <div class="press-photos">
            <h2>Press Photos</h2>
            <PhotoAlbum :photos="photos" layout="rows" />
        </div>
    </ClientOnly>
</template>

<style scoped>

</style>
<script setup lang="ts">
import { PhotoAlbum, type PhotoClickPayload } from 'vue-photo-album';

const { $t } = useI18n();
const { width } = useWindowSize();
const rows = computed(() => width.value < 728 ? 2 : 3);

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
}/*, {
    src: "/images/press/5.jpg",
    width: 3456,
    height: 5184
}, {
    src: "/images/press/6.jpg",
    width: 3456,
    height: 5184
}*/];

const onPhotoClick = (payload: PhotoClickPayload) => {
    open(payload.photo.src);
};
</script>

<template>
    <section class="press-photos">
        <div class="press-photos-texts">
            <h2>{{ $t("sections.press.title") }}</h2>
            <p class="italic info-p">{{ $t("sections.press.tip") }}</p>
        </div>
        <PhotoAlbum :photos="photos" layout="rows" :spacing="16" :row-constraints="{ maxPhotos: rows }" @click="onPhotoClick" />
    </section>
</template>

<style scoped>
.press-photos {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
}

.press-photos-texts {
    display: flex;
    flex-direction: column;
    gap: 0;
}

:deep(.photo-album__photo) {
    transform: none;
    transition: transform 0.25s ease-in-out;
}

:deep(.photo-album__photo:hover) {
    transform: scale(1.01);
}
</style>
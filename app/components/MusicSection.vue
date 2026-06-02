<script setup lang="ts">
import type { TMusicFlow } from "vue-music-flow";

const { $t } = useI18n();

const makeSongData = (name: string, code: string, id: number) => {
    return {
        id,
        audio: "/songs/" + code + ".mp3",
        artist: "Adam Billard",
        artwork: "/songs/" + code + ".webp",
        album: name,
        title: name,
        original: {
            source: "/songs/" + code + ".mp3"
        }
    }
};

const tracks: TMusicFlow[] = [
    makeSongData("I Don't Wanna Suffer Again", "idwsa", 1),
    makeSongData("I Want A Girlfriend", "iwag", 2),
    makeSongData("Destroying Me Quit", "dmq", 3),
    makeSongData("Time To Cry", "ttc", 4)
];

const { onPlayAsPlaylist, isTrackPlaying } = useMusicFlow();
</script>

<template>
    <section class="music-section">
        <h2>{{ $t("sections.music.title") }}</h2>
        <ul class="musics">
            <li class="music" v-for="track in tracks" :key="track.id">
                <div class="music-info">
                    <NuxtImg class="music-img" :src="track.artwork" />
                    {{ track.title }}
                </div>
                <button class="music-button" type="button" @click="onPlayAsPlaylist(tracks, track)">
                    <Icon v-if="isTrackPlaying(track.id)" name="i-lucide-pause" />
                    <Icon v-else name="i-lucide-play" />
                </button>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.music-section {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
}

.musics {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
    list-style: none;
}

.music {
    display: flex;
    flex-direction: row;
    gap: var(--gap-md);
    background-color: var(--color-orange-300);
    justify-content: space-between;
    padding: var(--padding-md);
}

.music-info {
    display: flex;
    flex-direction: row;
    gap: var(--gap-md);
    justify-items: flex-start;
    align-items: flex-start;
}

.music-img {
    width: var(--2xl);
    height: var(--2xl);
}

.music-button {
    display: flex;
    flex-direction: row;
    width: var(--2xl);
    height: var(--2xl);
    justify-content: center;
    align-items: center;
    border-radius: 0;
    background-color: var(--color-orange-500);
    color: var(--color-stone-100);
    border: none;
    font-size: var(--font-lg);
    cursor: pointer;
    transform: none;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, transform 0.1s ease;
}

.music-button:hover {
    background-color: var(--color-orange-600);
    color: var(--color-stone-50);
}

.music-button:active {
    transform: scale(0.95);
}

:deep(.vue-music-flow > div > div > div > div > img) {
    margin-left: 10px;
}
</style>
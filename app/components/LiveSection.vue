<script setup lang="ts">

</script>

<template>
    <section class="live-section">
        <h2>{{ $t("sections.live.title") }}</h2>
        <ScriptYouTubePlayer video-id="SVLUpN5woic" />
    </section>
</template>

<style scoped>
.live-section {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
}
</style>
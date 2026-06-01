<script setup lang="ts">
</script>
<template>
    <MainContainer>
        <MusicFlow
            :options="{
                autoplay: true
            }"
            style="position: fixed;"
        />
        <Header />
        <slot />
        <Footer />
    </MainContainer>
</template>

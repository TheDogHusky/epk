<script setup lang="ts">
</script>
<template>
    <MainContainer>
        <MusicFlow
            :options="{
                autoplay: true
            }"
            style="position: fixed;z-index:1000;"
        />
        <Header />
        <slot />
        <Footer />
    </MainContainer>
</template>

<script setup lang="ts">
const copyrightYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <p>
            &copy; {{ copyrightYear }} Adam Billard - All right reserved
        </p>
        <Socials placement="footer" />
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>
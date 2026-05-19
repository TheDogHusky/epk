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
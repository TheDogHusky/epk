<script setup lang="ts">

</script>

<template>
<section class="contact-section">
    <h2>Contact</h2>
    <p>
        You can contact me by <a class="link" target="_blank" rel="external" href="mailto:contact@classydev.fr">email</a> or on my <a class="link" target="_blank" rel="external" href="https://classydev.fr/en/#contact">main website</a>.
    </p>
</section>
</template>

<style scoped>
.contact-section {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
}

:global(.link) {
    color: var(--color-orange-500);
    text-decoration: none;
    transition: color 0.25s ease-in-out;
}

:global(.link:hover) {
    color: var(--color-orange-600);
    text-decoration: underline;
}
</style>
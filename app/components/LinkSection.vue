<script setup lang="ts">

</script>

<template>
    <section class="links-section">
        <h2>Liens Utiles</h2>
        <ul class="links">
            <li>
                <a class="link" target="_blank" rel="external" href="/files/technical-sheet.pdf">
                    <Icon name="i-lucide-file-down" />
                    Technical Sheet
                </a>
            </li>
            <li>
                <a class="link" target="_blank" rel="external" href="https://music.classydev.fr">
                    <Icon name="i-lucide-arrow-up-right" />
                    Portfolio
                </a>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.links-section {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
}

.links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.links > li, .links > li > a {
    display: flex;
    flex-direction: row;
    gap: var(--gap-md);
}
</style>
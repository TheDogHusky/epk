<script setup lang="ts">
const { $t } = useI18n();
</script>

<template>
<section class="contact-section">
    <h2>{{ $t("sections.contact.title") }}</h2>
    <i18n-t keypath="sections.contact.content">
        <template #email>
            <a class="link" target="_blank" rel="external" href="mailto:contact@classydev.fr">{{ $t("sections.contact.email") }}</a>
        </template>

        <template #mainWebsite>
            <a class="link" target="_blank" rel="external" href="https://classydev.fr/en/#contact">{{ $t("sections.contact.mainWebsite") }}</a>
        </template>
    </i18n-t>
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
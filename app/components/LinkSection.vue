<script setup lang="ts">
const { $t, getLocale } = useI18n();
const locale = computed(() => getLocale());
</script>

<template>
    <section class="links-section">
        <h2>{{ $t("sections.links.title") }}</h2>
        <ul class="links">
            <li>
                <a v-if="locale === 'en'" class="link" target="_blank" rel="external" href="/files/technical-rider-en.pdf">
                    <Icon name="i-lucide-file-down" />
                    {{ $t("sections.links.sheet") }}
                </a>
                <a v-else class="link" target="_blank" rel="external" href="/files/technical-rider-fr.pdf">
                    <Icon name="i-lucide-file-down" />
                    {{ $t("sections.links.sheet") }}
                </a>
            </li>
            <li>
                <a class="link" target="_blank" rel="external" href="https://music.classydev.fr">
                    <Icon name="i-lucide-arrow-up-right" />
                    {{ $t("sections.links.portfolio") }}
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
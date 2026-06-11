<script setup lang="ts">
const { $t } = useI18n();
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError,
});

const title = computed(() => {
    return props.error?.status === 404 ? $t("error.notFound") : $t("error.unexpected");
});
const message = computed(() => {
    return props.error?.status === 404 ? $t("error.notFoundMessage") : $t("error.unexpectedMessage");
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
    <main>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <Button @click="handleError">{{ $t("error.goHome") }}</Button>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
}
</style>
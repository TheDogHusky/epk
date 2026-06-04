<script setup lang="ts">
const { $switchLocale, getLocale } = useI18n();
const props = defineProps<{
    placement: "header" | "footer";
}>();

const locale = computed(() => getLocale());

const classes = computed(() => {
    return "language-selector " + props.placement;
});
</script>

<template>
    <div :class="classes">
        <button v-if="locale === 'fr'" type="button" class="language" @click="() => $switchLocale('en')">
            <Icon name="i-flag-us-4x3" />
        </button>
        <button v-else type="button" class="language" @click="() => $switchLocale('fr')">
            <Icon name="i-flag-fr-4x3" />
        </button>
    </div>
</template>

<style scoped>
.language-selector {
    display: flex;
    flex-direction: row;
    gap: var(--gap-md);
    width: fit-content;
}

.language-selector.header {
    position: absolute;
    top: var(--lg);
    right: var(--lg);
}

.language {
    --flag-color: var(--color-orange-500);

    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: var(--2xl);
    height: var(--2xl);
    border: none;
    cursor: pointer;
    color: var(--color-stone-950);
    background-color: transparent;
    transform: none;
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, transform 0.1s ease-in-out;
}

.language:hover {
    color: var(--color-stone-100);
    background-color: var(--flag-color);
}

.language:active {
    transform: scale(0.95);
}
</style>
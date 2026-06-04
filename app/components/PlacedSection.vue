<script setup lang="ts">
import type { CleanTranslation } from "@i18n-micro/types";

const props = defineProps<{
    layout: "left" | "right";
    image: string;
    title: string | CleanTranslation;
    description: string | CleanTranslation;
}>();

const sectionClasses = computed(() => {
    return {
        "page-section": true,
        "right": props.layout === "right",
    };
});
</script>

<template>
    <section :class="sectionClasses">
        <div class="page-section-image">
            <NuxtImg
                :src="props.image"
            />
        </div>
        <div class="page-section-content">
            <h2>{{ props.title }}</h2>
            <p v-if="props.description">
                {{ props.description }}
            </p>
            <slot
                v-else
                name="content"
            />
        </div>
    </section>
</template>

<style scoped>
.page-section {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: left;
    align-items: flex-start;
    gap: var(--gap-lg);
}

.page-section-image {
    width: 30rem;
}

.page-section-image > img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
}

.page-section.right {
    flex-direction: row-reverse;
    text-align: right;
}

.page-section-content {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    gap: var(--gap-lg);
}

.page-section-content > p {
    white-space: pre-line;
}

.page-section.right .page-section-content {
    justify-content: flex-end;
}

@media screen and (max-width: 880px) {
    .page-section {
        flex-direction: column;
    }

    .page-section.right .page-section-content {
        justify-content: left;
    }

    .page-section.right {
        flex-direction: column;
        text-align: left;
    }

    .page-section-image {
        width: 12rem;
    }
}
</style>

<template>
    <div class="w-full page-container">
        <slot />
    </div>
</template>

<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
}
</style>
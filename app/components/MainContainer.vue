<template>
    <main class="main-container">
        <slot />
    </main>
</template>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
    justify-content: stretch;
    align-items: flex-start;
    padding: var(--padding-lg);
    background-color: var(--color-orange-100);
    max-width: 65%;
}
</style>

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
    width: 1200px;
}

@media screen and (max-width: 1260px) {
    .main-container {
        width: 900px;
    }
}

@media screen and (max-width: 900px) {
    .main-container {
        width: 600px;
    }
}

@media screen and (max-width: 720px) {
    .main-container {
        width: 90%;
    }
}

@media screen and (max-width: 620px) {
    .main-container {
        width: 100%;
    }
}
</style>

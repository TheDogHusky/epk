<template>
    <button type="button" class="btn">
        <slot />
    </button>
</template>

<style scoped>
.btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    width: fit-content;
    padding: .5rem;
    background-color: var(--color-orange-500);
    color: var(--color-stone-100);
    border: none;
    font-size: var(--font-lg);
    cursor: pointer;
    transform: none;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, transform 0.1s ease;
}

.btn:hover {
    background-color: var(--color-orange-600);
    color: var(--color-stone-50);
}

.btn:active {
    transform: scale(0.95);
}
</style>
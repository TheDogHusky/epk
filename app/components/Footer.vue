<script setup lang="ts">
const copyrightYear = new Date().getFullYear();
const { $t } = useI18n();
</script>

<template>
    <footer>
        <div class="left">
            <p>
                {{ $t("copyright", { date: copyrightYear }) }}
            </p>
            <LanguageSelector placement="footer" />
        </div>
        <Socials placement="footer" />
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.left {
    display: flex;
    flex-direction: row;
    gap: var(--gap-md);
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 900px) {
    footer {
        flex-direction: column;
    }
}

@media screen and (max-width: 510px) {
    :global(.socials.footer) {
        gap: var(--gap-md);
    }
}
</style>
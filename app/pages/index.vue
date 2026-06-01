<script setup lang="ts">
import ContactSection from "~/components/ContactSection.vue";
import LinkSection from "~/components/LinkSection.vue";

const { $t } = useI18n();
</script>

<template>
    <PageContainer>
        <h1>Adam Billard</h1>
        <PlacedSection
            layout="left"
            image="/images/adam_selfie.jpg"
            title="A propos"
            description="lorem lorem"
        />
        <PressPhotos />
        <MusicSection />
        <LiveSection />
        <ContactSection />
        <LinkSection />
    </PageContainer>
</template>

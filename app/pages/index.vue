<script setup lang="ts">
const { $t } = useI18n();
</script>

<template>
    <PageContainer>
        <LanguageSelector placement="header" />
        <h1>Adam Billard</h1>
        <PlacedSection
            layout="left"
            image="/images/adam_selfie.jpg"
            :title="$t('sections.about.title')"
            :description="$t('sections.about.content')"
        />
        <PressPhotos />
        <MusicSection />
        <LiveSection />
        <ContactSection />
        <LinkSection />
    </PageContainer>
</template>

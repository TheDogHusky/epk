<script setup lang="ts">
const { $t } = useI18n();

useSeoMeta({
    title: $t("index.title"),
    description: $t("index.description"),
    ogTitle: $t("index.ogTitle"),
    ogDescription: $t("index.ogDescription"),
    ogImage: "/images/adam_selfie.jpg"
});

useSchemaOrg([
    definePerson({
        name: 'Adam Billard',
        givenName: 'Adam',
        familyName: 'Billard',

        image: '/images/adam_selfie.jpg',
        description: () => $t("nuxtSiteConfig.description") as string,
        jobTitle: () => $t("job"),

        email: "contact@classydev.fr",
        sameAs: [
            "https://www.youtube.com/@adambillardofficial",
            "https://www.instagram.com/adambillardmusic",
            "https://twitter.com/ClassyCraft3r",
            "https://open.spotify.com/intl-fr/artist/6X7S0mL7hoLfO4KvZ5JKfC",
            "https://music.amazon.fr/artists/B0CJ7MBCMK/adam-billard",
            "https://music.apple.com/us/artist/adam-billard/1707702995",
            "https://www.deezer.com/artist/56376872",
            "https://distrokid.com/hyperfollow/adambillard",
            "https://www.classydev.fr",
            "https://music.classydev.fr"
        ]
    })
]);
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="var(--color-orange-400)" />
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps<{
    placement: 'header' | 'footer' | 'body'
}>();

const items = [{
    name: 'Instagram',
    icon: 'i-simple-icons-instagram',
    link: 'https://instagram.com/adambillardmusic'
}, {
    name: 'TikTok',
    icon: 'i-simple-icons-tiktok',
    link: 'https://www.tiktok.com/@adambillardmusic'
}, {
    name: 'E-Mail',
    icon: 'i-lucide-mail',
    link: 'mailto:contact@classydev.fr'
}, {
    name: 'YouTube',
    icon: 'i-simple-icons-youtube',
    link: 'https://www.youtube.com/@adambillardofficial'
}, {
    name: 'Spotify',
    icon: 'i-simple-icons-spotify',
    link: 'https://open.spotify.com/intl-fr/artist/6X7S0mL7hoLfO4KvZ5JKfC'
}, {
    name: 'Amazon Music',
    icon: 'i-simple-icons-amazonmusic',
    link: 'https://music.amazon.fr/artists/B0CJ7MBCMK/adam-billard'
}, {
    name: 'Apple Music',
    icon: 'i-simple-icons-applemusic',
    link: 'https://music.apple.com/us/artist/adam-billard/1707702995'
}, {
    name: 'Deezer',
    icon: 'i-simple-icons-deezer',
    link: 'https://www.deezer.com/artist/56376872'
}, {
    name: 'DistroKid',
    icon: 'i-lucide-link',
    link: 'https://distrokid.com/hyperfollow/adambillard'
}];

const containerClasses = computed(() => {
    return "socials " + props.placement;
});

const itemClasses = (name: string) => {
    return "socials-item " + name.trim().toLowerCase().replace(/\s+/g, '-');
}
</script>

<template>
    <ul :class="containerClasses">
        <li
            class="socials-item-container"
            v-for="item in items"
            :key="item.name"
        >
            <a :class="itemClasses(item.name)" :href="item.link" target="_blank" rel="external">
                <Icon :name="item.icon" />
                <span v-if="placement === 'body'">{{ item.name }}</span>
            </a>
        </li>
    </ul>
</template>

<style scoped>
.socials {
    display: flex;
    flex-direction: row;
    gap: var(--gap-lg);
    justify-content: center;
    align-items: center;
    list-style: none;
}

.socials-item {
    --social-color: var(--color-orange-500);
    --social-text-color: var(--color-stone-950);

    display: flex;
    flex-direction: row;
    gap: var(--gap-md);
    padding: var(--padding-md);
    border-radius: 50%;
    background-color: transparent;
    color: var(--social-color);
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
}

.socials-item:hover {
    background-color: var(--social-color);
    color: var(--social-text-color);
}

/* variants */
.instagram {
    --social-color: #E4405F;
}

.youtube {
    --social-color: #fa1111;
}

.tiktok {
    --social-color: #000000;
    --social-text-color: var(--color-orange-50);
}

.spotify {
    --social-color: #2c856b;
}

.amazon-music {
    --social-color: #0DBFF5;
}

.deezer {
    --social-color: #a237ff;
}

.apple-music {
    --social-color: #ff4e6b;
}
</style>

<script setup>
/**
 * Shared UI - Social Share Buttons Component
 */
import { SOCIAL_ICONS, SOCIAL_SHARE_URLS } from '~/src/shared/config'

const props = defineProps({
  social: {
    type: Array,
    default: () => ['odnoklassniki', 'twitter', 'telegram', 'vk', 'facebook'],
  },
})

const share = (network) => {
  const shareUrl = window.location.href
  const shareText = 'Поделиться статьёй'
  
  const urlBuilder = SOCIAL_SHARE_URLS[network]
  if (urlBuilder) {
    const url = urlBuilder(shareUrl, shareText)
    window.open(url, '_blank')
  }
}

const getIconName = (networkName) => {
  return SOCIAL_ICONS[networkName.toLowerCase()] || ''
}
</script>

<template>
  <div v-for="(network, index) in social" :key="index">
    <button
      class="button is-rounded"
      :title="network"
      @click="() => share(network.toLowerCase())"
    >
      <span class="icon">
        <Icon :name="getIconName(network)" />
      </span>
    </button>
  </div>
</template>

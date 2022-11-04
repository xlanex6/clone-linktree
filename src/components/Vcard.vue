<script setup>
const isAppleMobile = ['iPad', 'iPhone', 'iPod'].includes(navigator.userAgentData.platform)
const fileRender = isAppleMobile ? '/alx.ics' : '/alx.vcard'
</script>

<template>
	
	<li class="bg-neutral-500  flex justify-center w-full rounded-lg py-2 hover:cursor-pointer">
		<a href="/vcard" class="hover:cursor-pointer h-16 grid content-center text-white text-3xl">
			VCARD
			<!-- <Icon class="h-16 w-16 text-white" name="mdi:abacus"/> -->
			</a>
		</li>

</template>

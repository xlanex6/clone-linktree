<script setup>
const isAppleMobile = ['iPad', 'iPhone', 'iPod'].includes(navigator.userAgentData.platform)
const fileRender = isAppleMobile ? '/alx.ics' : '/alx.vcard'

import VCard from 'vcard-creator'
import { saveAs } from 'file-saver';

  const myVard = new VCard()
  myVard
    .addEmail('alexduval71@gmail.com')
    .addName("DUVAL", 'Alex')
    .addPhoneNumber('+33620512354', 'WORK')
    .addJobtitle('Web Developer')
    .addRole('CTO as Service')
    .addURL('http://www.alexduval.fr')
  
const vcard = myVard.toString()

function pdfFinish() {
      const url = window.URL.createObjectURL(new Blob([vcard]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Alex.vcard') //or any other extension
      document.body.appendChild(link)
      link.click()
}


</script>

<template>
	
	<li class="bg-neutral-500  flex justify-center w-full rounded-lg py-2 hover:cursor-pointer">
		<button @click="pdfFinish" class="hover:cursor-pointer h-16 grid content-center text-white text-3xl">
			VCARD
			<!-- <Icon class="h-16 w-16 text-white" name="mdi:abacus"/> -->
		</button>
		</li>

</template>

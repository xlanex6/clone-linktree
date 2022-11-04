import VCard from 'vcard-creator'

export function get() {
  
  const myVard = new VCard()
  myVard
    .addEmail('alexduval71@gmail.com')
    .addName("DUVAL", 'Alex')
    .addPhoneNumber('+33620512354', 'WORK')
    .addJobtitle('Web Developer')
    .addRole('CTO as Service')
    .addURL('http://www.alexduval.fr')
  
  const vcard = myVard.toString()
  
  return new Response(vcard, {
    status: 200,
    headers: {
      'content-type':'text/vcard'
    }
  })
}

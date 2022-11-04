import VCard from 'vcard-creator'

export async function get({  }) {
  
  const myVard = new VCard()
  myVard
    .addEmail('alexduval71@gmail.com')
    .addName("DUVAL", 'Alex')
    .addPhoneNumber('+33620512354', 'WORK')
    .addJobtitle('Web Developer')
    .addRole('CTO as Service')
    .addURL('http://www.alexduval.fr')
    .setFormat('vcalendar')
  
  return {
    body: myVard.toString(),
    encoding: 'binary'
  }
}

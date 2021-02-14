const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', async message => {
  if (message.content === '$샘플 마폭시') {
  const embed = new Discord.MessageEmbed()
  .setTitle('구애안경 마폭시 샘플')
  .setDescription('**포켓몬**: 번치코\n**특성**: 불요의검\n**성격**: 겁쟁이\n**노력치**: A 252 B 252 C 6\n**기술**: 폭포오르기/뛰어오르다/파워힙/지진\n**추가 설명**: 특성이 젖은접시이기 때문에 앞에서 비를 깔아주면 좋습니다. 하품으로 재우고 바다회오리 데미지를 계속 줄 수도 있고 바다회오리로 상대 HP가 반보다 적게 남았을때 소금물로 큰 타격을 입힐 수도 있습니다. 방어대신 철벽을 채용하여 물리몬 앞에서 죽지 않고 계속 살아 바다회오리 데미지를 줄 수도 있습니다. 또 약점인 풀타입에게 얼다바람으로 딜을 줄 수 있고, 뒤에 상대의 포켓몬과 동속인 포켓몬이 있을시 얼다바람으로 스피드를 낮추고 동속전을 하지 않고 자신이 선공하게 할 수도 있습니다.') 
  .setColor('RED') 
  .setFooter(`${message.author.username}님! 이 글은 블로그에도 포스팅되었어요! (위 파란 글씨를 누르면 자동으로 연결합니다!)`)
  .setURL('https://blog.naver.com/taekim1121/222234392103')
  message.channel.send(embed)
  }
}) 
  
client.login(token);



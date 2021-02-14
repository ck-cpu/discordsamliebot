const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', async message => {
  if (message.content === '$샘플 시드라') {
  const embed = new Discord.MessageEmbed()
  .setTitle('진화의휘석 시드라 샘플')
  .setDescription('**포켓몬**: 시드라\n**특성**: 독가시\n**성격**: 대담 또는 차분\n**노력치**: H 252/B 252/C 또는 D 252\n**기술**: 폭포오르기/뛰어오르다/파워힙/지진\n\n**추가 설명**: 대포무노포로 50%로 명중률을 낮출수 있고 얼다바람으로 딜을 조금씩 주면서 스핏을 깎을 수 있으며 상대가 랭크업 포켓몬이면 클리어스모그로 랭크를 되돌려 얼다바람과 대포무노포의 조합으로 반대로 기점을 잡을 수 있습니다. \n물리몬 앞에서 활약합니다. \n사슬묶기로 구애아이템을 가진 포켓몬이 쓸 기술이 없어 발버둥을 쓰게 할 수도 있습니다.') 
  .setColor('BLUE') 
  .setFooter(`${message.author.username}님! 이 글은 블로그에도 포스팅되었어요! (위 파란 글씨를 누르면 자동으로 연결합니다!)`)
  .setURL('https://m.blog.naver.com/0814box14/222233687318')
  message.channel.send(embed)
  }
}) 

client.login(token);



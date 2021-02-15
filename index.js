const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', async message => {
  if (message.content === '$샘플 시드라') {
  const embed = new Discord.MessageEmbed()
  .setTitle('현재 `시드라` 샘플은 2개 있어요!')
  .setDescription('**$샘플 시드라 (번호)를 써주시면 볼 수 있습니다!**') 
  .setColor('BLUE') 
  .setFooter(`EX) $샘플 시드라 1`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 시드라 1') {
  const embed = new Discord.MessageEmbed()
  .setTitle('진화의휘석 시드라 샘플 1')
  .setDescription('**포켓몬**: 시드라\n**특성**: 독가시\n**성격**: 대담 또는 차분\n**도구**: 진화의휘석\n**노력치**: H 252/B 252/C 또는 D 6\n**기술**: 폭포오르기/뛰어오르다/파워힙/지진\n\n**추가 설명**: 대포무노포로 50%로 명중률을 낮출수 있고 얼다바람으로 딜을 조금씩 주면서 스핏을 깎을 수 있으며 상대가 랭크업 포켓몬이면 클리어스모그로 랭크를 되돌려 얼다바람과 대포무노포의 조합으로 반대로 기점을 잡을 수 있습니다. \n물리몬 앞에서 활약합니다. \n사슬묶기로 구애아이템을 가진 포켓몬이 쓸 기술이 없어 발버둥을 쓰게 할 수도 있습니다.') 
  .setColor('BLUE') 
  .setFooter(`샘플의 관한 질문은 질문 채널에서 해주시면 감사하겠습니다.`)
  embed.setImage('https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0117_000_mf_n_00000000_f_n.png')
  .setURL('https://m.blog.naver.com/0814box14/222233687318')
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 시드라 2') {
  const embed = new Discord.MessageEmbed()
  .setTitle('진화의휘석 시드라 샘플 2')
  .setDescription('**포켓몬**: 시드라\n**특성**: 독가시\n**성격**: 대담 또는 차분\n**도구**: 진화의휘석\n**노력치**: H 252/B 252/C 또는 D 6\n**기술**: 바다회오리/방어/다이빙/대포무노포\n\n**추가 설명**: 고집 생구 리베로 에이스번의 무릎차기도 0.4%로 확 2타이며 고집 구애머리띠 고릴타의 그래스슬라이더도 확 2타로 버티는 엄청난 내구를 보여줍니다. \n그리고 특공 풀보정 누리레느의 에너지볼도 확 2타로 버팁니다.\n물공형 포켓몬 앞에서 그 포켓몬의 공격을 버티며 바다회오리를 써 도망치지 못하게 하고 매턴 데미지도 줍니다. \n에이스번 무릎차기, 비조도 무릎차기 같이 무차를 쓰는 포몬 앞에선 방어를 써 무릎차기를 막아 상대의 HP를 반이나 깎을 수도 있습니다. \n방어를 써 상대 바다회오리 데미지만 주고 턴을 넘기기도 하고 방어를 쓰면 다음 턴엔 명중률이 반으로 줄어드니 다이빙으로 상대 공격을 피하고 바다회오리 데미지를 주거나 다이빙으로 다맥턴을 소진 시킬 수도 있습니다. \n그리고 대포무노포로 50%로 명중률까지 낮춰 기점을 잡을 수 있습니다.') 
  .setColor('BLUE') 
  .setFooter(`샘플의 관한 질문은 질문 채널에서 해주시면 감사하겠습니다.`)
  embed.setImage('https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0117_000_mf_n_00000000_f_n.png')
  .setURL('https://m.blog.naver.com/0814box14/222233687318')
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 악식킹') {
  const embed = new Discord.MessageEmbed()
  .setTitle('현재 `악식킹` 샘플은 1개 있어요!')
  .setDescription('**$샘플 악식킹 (번호)를 써주시면 볼 수 있습니다!**') 
  .setColor('BLACK') 
  .setFooter(`EX) $샘플 시드라 1`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 악식킹 1') {
  const embed = new Discord.MessageEmbed()
  .setTitle('약점보험 악식킹 샘플 1')
  .setDescription('**포켓몬**: 악식킹\n**특성**: 비스트부스트\n**성격**: 냉정\n**도구**: 약점보험\n**노력치**: B 252/D 252/H 6\n**기술**: 악의파동/용성군/불대문자/타점 좋은 기술\n\n**추가 설명**: 이렇게 내구 넣으면 물리내구 7만 6천 특수내구 7만 6천입니다.\n다맥하면 따라큐 치근거리기 버팀\n그리고 트릭룸 요원 꼭 필요합니다.') 
  .setColor('BLACK') 
  .setFooter(`샘플의 관한 질문은 질문 채널에서 해주시면 감사하겠습니다.`)
  embed.setImage('https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0799_000_uk_n_00000000_f_n.png')
  message.channel.send(embed)
  }
})

client.login(token);



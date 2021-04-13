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
  .setFooter(`EX) $샘플 이상해씨 1`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 시드라 1') {
  const embed = new Discord.MessageEmbed()
  .setTitle('진화의휘석 시드라 샘플 1')
  .setDescription('**포켓몬**: 시드라\n**특성**: 독가시\n**성격**: 대담 또는 차분\n**도구**: 진화의휘석\n**노력치**: H 252 | B 252 | C 또는 D 6\n**기술**: 폭포오르기/뛰어오르다/파워힙/지진\n\n**추가 설명**: 대포무노포로 50%로 명중률을 낮출수 있고 얼다바람으로 딜을 조금씩 주면서 스핏을 깎을 수 있으며 상대가 랭크업 포켓몬이면 클리어스모그로 랭크를 되돌려 얼다바람과 대포무노포의 조합으로 반대로 기점을 잡을 수 있습니다. \n물리몬 앞에서 활약합니다. \n사슬묶기로 구애아이템을 가진 포켓몬이 쓸 기술이 없어 발버둥을 쓰게 할 수도 있습니다.') 
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
  .setDescription('**포켓몬**: 시드라\n**특성**: 독가시\n**성격**: 대담 또는 차분\n**도구**: 진화의휘석\n**노력치**: H 252 | B 252 | C 또는 D 6\n**기술**: 바다회오리/방어/다이빙/대포무노포\n\n**추가 설명**: 고집 생구 리베로 에이스번의 무릎차기도 0.4%로 확 2타이며 고집 구애머리띠 고릴타의 그래스슬라이더도 확 2타로 버티는 엄청난 내구를 보여줍니다. \n그리고 특공 풀보정 누리레느의 에너지볼도 확 2타로 버팁니다.\n물공형 포켓몬 앞에서 그 포켓몬의 공격을 버티며 바다회오리를 써 도망치지 못하게 하고 매턴 데미지도 줍니다. \n에이스번 무릎차기, 비조도 무릎차기 같이 무차를 쓰는 포몬 앞에선 방어를 써 무릎차기를 막아 상대의 HP를 반이나 깎을 수도 있습니다. \n방어를 써 상대 바다회오리 데미지만 주고 턴을 넘기기도 하고 방어를 쓰면 다음 턴엔 명중률이 반으로 줄어드니 다이빙으로 상대 공격을 피하고 바다회오리 데미지를 주거나 다이빙으로 다맥턴을 소진 시킬 수도 있습니다. \n그리고 대포무노포로 50%로 명중률까지 낮춰 기점을 잡을 수 있습니다.') 
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
  .setFooter(`EX) $샘플 이상해씨 1`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 악식킹 1') {
  const embed = new Discord.MessageEmbed()
  .setTitle('약점보험 악식킹 샘플 1')
  .setDescription('**포켓몬**: 악식킹\n**특성**: 비스트부스트\n**성격**: 냉정\n**도구**: 약점보험\n**노력치**: B 252 | D 252 | H 6\n**기술**: 악의파동/용성군/불대문자/오물폭탄 또는 오물웨이브\n\n**추가 설명**: 이렇게 내구 넣으면 물리내구 7만 6천 특수내구 7만 6천입니다.\n다맥하면 따라큐 치근거리기 버팀\n그리고 트릭룸 요원 꼭 필요합니다.') 
  .setColor('BLACK') 
  .setFooter(`샘플의 관한 질문은 질문 채널에서 해주시면 감사하겠습니다.`)
  embed.setImage('https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0799_000_uk_n_00000000_f_n.png')
  message.channel.send(embed)
  }
})

client.on('message', async message => {
  if (message.content === '$샘플 폴리곤2') {
  const embed = new Discord.MessageEmbed()
  .setTitle('현재 `폴리곤2` 샘플은 1개 있어요!')
  .setDescription('**$샘플 폴리곤 (번호)를 써주시면 볼 수 있습니다!**') 
  .setColor('#E3DDCB') 
  .setFooter(`EX) $샘플 이상해씨 1`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 폴리곤2 1') {
  const embed = new Discord.MessageEmbed()
  .setTitle('진화의휘석 폴리곤2 샘플 1')
  .setDescription('**포켓몬**: 폴리곤\n**특성**: 다운로드\n**성격**: 조심\n**도구**: 진화의휘석\n**노력치**: H 252 | B 252\n**개체값**: A, S 제외 4V\n**기술**: 10만볼트/트릭룸/트라이어택/사이코키네시스\n\n**추가 설명**: 폴리곤2 h, b만 넣어도 무릎차기 에 확2타 (생명의구슬 이어도)\n**같이 쓰면 좋은 포켓몬**: 차곡차곡') 
  .setColor('#E3DDCB') 
  .setFooter(`샘플의 관한 질문은 질문 채널에서 해주시면 감사하겠습니다.`)
  embed.setImage('https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0233_000_uk_n_00000000_f_n.png')
  message.channel.send(embed)
  }
})

client.on('message', async message => {
  if (message.content === '$샘플 가이오가') {
  const embed = new Discord.MessageEmbed()
  .setTitle('현재 `가이오가` 샘플은 1개 있어요!')
  .setDescription('**$샘플 가이오가 (번호)를 써주시면 볼 수 있습니다!**') 
  .setColor('BLUE') 
  .setFooter(`EX) $샘플 이상해씨 1`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 가이오가 1') {
  const embed = new Discord.MessageEmbed()
  .setTitle('돌격조끼 가이오가 샘플 1')
  .setDescription('**포켓몬**: 가이오가\n**특성**: 잔비\n**성격**: 겁쟁이\n**도구**: 돌격조끼\n**노력치**: C 252 | S 252 | B 6\n**개체값**: A 제외 5V\n**기술**: 해수스파우팅/눈보라/번개/원시의힘\n\n**추가 설명**: 선제 다이맥스를 전제로 하는 파티에서 사용되는 돌격조끼 가이오가입니다.\n가이오가를 대면에서 이길 수 있다고 생각하고 다이맥스하는 썬더나 이벨타르 등을 돌격조끼의 힘으로 이겨낼 수 있는 것이 특징입니다.\n눈보라는 냉동빔, 원시의힘은 파괴광선 등으로 바꿔도 됩니다.') 
  .setColor('BLUE') 
  .setFooter(`샘플의 관한 질문은 질문 채널에서 해주시면 감사하겠습니다.`)
  embed.setImage('https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0382_000_uk_n_00000000_f_n.png')
  message.channel.send(embed)
  }
})

client.on('message', async message => {
  if (message.content === '$샘플 암스타') {
  const embed = new Discord.MessageEmbed()
  .setTitle('현재 `암스타` 샘플은 1개 있어요!')
  .setDescription('**$샘플 암스타 (번호)를 써주시면 볼 수 있습니다!**') 
  .setColor('BLUE') 
  .setFooter(`EX) $샘플 이상해씨 1`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 암스타 1') {
  const embed = new Discord.MessageEmbed()
  .setTitle('먹다남은음식 암스타 샘플 1')
  .setDescription('**포켓몬**: 암스타\n**특성**: 잔비\n**성격**: 겁쟁이\n**도구**: 돌격조끼\n**노력치**: C 252 | S 252 | B 6\n**개체값**: A 제외 5V\n**기술**: 해수스파우팅/눈보라/번개/원시의힘\n\n**추가 설명**: 선제 다이맥스를 전제로 하는 파티에서 사용되는 돌격조끼 가이오가입니다.\n가이오가를 대면에서 이길 수 있다고 생각하고 다이맥스하는 썬더나 이벨타르 등을 돌격조끼의 힘으로 이겨낼 수 있는 것이 특징입니다.\n눈보라는 냉동빔, 원시의힘은 파괴광선 등으로 바꿔도 됩니다.') 
  .setColor('BLUE') 
  .setFooter(`샘플의 관한 질문은 질문 채널에서 해주시면 감사하겠습니다.`)
  embed.setImage('https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0382_000_uk_n_00000000_f_n.png')
  message.channel.send(embed)
  }
})

client.on('message', async message => {
  if (message.content === '$속보') {
  const embed = new Discord.MessageEmbed()
  .setTitle('속보')
  .setDescription('[속보] 백신 접종후 사망 3명 추가 총 5명…당국 "백신 연관성 조사"') 
  .setColor('RED') 
  message.channel.send(embed)
  }
}) 


client.on('message', async message => {
  if (message.content === '$제 1회 관리자투표 오전 9시 기준') {
  const embed = new Discord.MessageEmbed()
  .setTitle('제 1회 관리자투표')
  .setDescription('후보 1: 충이 | 후보 2: 엔리코 푸치 | 후보 3: 이름없음 \n \n **투표는 쿠키 dm으로 "4번 후보", "00이요"로 투표하시길 바랍니다.** \n \n 현재 투표 현황 \n 충이: 0% (0표) \n 엔리코 푸치: 0% (0표) \n 이름없음: 0% (0표) \n \n 마지막 업데이트: 2021년 4월 13일 오전 9시') 
  .setColor('BLACK') 
  .setFooter(`투표 시간: 4월 13일 오전 9시 ~ 4월 13일 오후 3시`)
  embed.setImage('https://media.discordapp.net/attachments/830794072502960158/831318435380068362/pokemon-go-shiny-900x506.jpg')
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$제 1회 관리자투표 오전 10시 기준') {
  const embed = new Discord.MessageEmbed()
  .setTitle('제 1회 관리자투표')
  .setDescription('후보 1: 충이 | 후보 2: 엔리코 푸치 | 후보 3: 이름없음 \n \n **투표는 쿠키 dm으로 "4번 후보", "00이요"로 투표하시길 바랍니다.** \n \n 현재 투표 현황 \n 충이: 25% (1표) \n 엔리코 푸치: 25% (1표) \n 이름없음: 50% (2표) \n \n 마지막 업데이트: 2021년 4월 13일 오전 10시') 
  .setColor('BLACK') 
  .setFooter(`투표 시간: 4월 13일 오전 9시 ~ 4월 13일 오후 3시`)
  embed.setImage('https://media.discordapp.net/attachments/830794072502960158/831318435380068362/pokemon-go-shiny-900x506.jpg')
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$제 1회 관리자투표 오전 11시 기준') {
  const embed = new Discord.MessageEmbed()
  .setTitle('제 1회 관리자투표')
  .setDescription('후보 1: 충이 | 후보 2: 엔리코 푸치 | 후보 3: 이름없음 \n \n **투표는 쿠키 dm으로 "4번 후보", "00이요"로 투표하시길 바랍니다.** \n \n 현재 투표 현황 \n 충이: 28.6% (2표) \n 엔리코 푸치: 14.3% (1표) \n 이름없음: 57.1% (4표) \n \n 마지막 업데이트: 2021년 4월 13일 오전 11시') 
  .setColor('BLACK') 
  .setFooter(`투표 시간: 4월 13일 오전 9시 ~ 4월 13일 오후 3시`)
  embed.setImage('https://media.discordapp.net/attachments/830794072502960158/831318435380068362/pokemon-go-shiny-900x506.jpg')
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$제 1회 관리자투표 오후 12시 기준') {
  const embed = new Discord.MessageEmbed()
  .setTitle('제 1회 관리자투표')
  .setDescription('후보 1: 충이 | 후보 2: 엔리코 푸치 | 후보 3: 이름없음 \n \n **투표는 쿠키 dm으로 "4번 후보", "00이요"로 투표하시길 바랍니다.** \n \n 현재 투표 현황 \n 충이: 33.3% (3표) \n 엔리코 푸치: 22.2% (2표) \n 이름없음: 44.4% (4표) \n \n 마지막 업데이트: 2021년 4월 13일 오후 12시') 
  .setColor('BLACK') 
  .setFooter(`투표 시간: 4월 13일 오전 9시 ~ 4월 13일 오후 3시`)
  embed.setImage('https://media.discordapp.net/attachments/830794072502960158/831318435380068362/pokemon-go-shiny-900x506.jpg')
  message.channel.send(embed)
  }
})

client.on('message', async message => {
  if (message.content === '$제 1회 관리자투표 오후 1시 기준') {
  const embed = new Discord.MessageEmbed()
  .setTitle('제 1회 관리자투표')
  .setDescription('후보 1: 충이 | 후보 2: 엔리코 푸치 | 후보 3: 이름없음 \n \n **투표는 쿠키 dm으로 "4번 후보", "00이요"로 투표하시길 바랍니다.** \n \n 현재 투표 현황 \n 충이: 38.5% (5표) \n 엔리코 푸치: 30.8% (4표) \n 이름없음: 30.8% (4표) \n \n 마지막 업데이트: 2021년 4월 13일 오후 1시') 
  .setColor('BLACK') 
  .setFooter(`투표 시간: 4월 13일 오전 9시 ~ 4월 13일 오후 3시`)
  embed.setImage('https://media.discordapp.net/attachments/830794072502960158/831318435380068362/pokemon-go-shiny-900x506.jpg')
  message.channel.send(embed)
  }
})

client.on('message', async message => {
  if (message.content === '$제 1회 관리자투표 최종 결과') {
  const embed = new Discord.MessageEmbed()
  .setTitle('제 1회 관리자투표')
  .setDescription('후보 1: 충이 | 후보 2: 엔리코 푸치 | 후보 3: 이름없음 \n \n **투표는 종료되었습니다.** \n \n 현재 투표 현황 \n 충이: 46.7% (7표) \n 엔리코 푸치: 26.7% (4표) \n 이름없음: 26.7% (4표) \n \n 마지막 업데이트: 2021년 4월 13일 오후 2시') 
  .setColor('BLACK') 
  .setFooter(`투표 시간: 4월 13일 오전 9시 ~ 4월 13일 오후 3시`)
  embed.setImage('https://media.discordapp.net/attachments/830794072502960158/831318435380068362/pokemon-go-shiny-900x506.jpg')
  message.channel.send(embed)
  }
})

client.login(token);



const state = {
    boards: [
      { key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527272335&di=4a9766cf1af71e88b205ad1c9721c260&imgtype=jpg&er=1&src=http%3A%2F%2Fpic34.photophoto.cn%2F20150128%2F0007020160374237_b.jpg'},
      { key: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=10a8458a9f3df8dcb23087c3ac7819ee/b7fd5266d0160924cb7fe966d40735fae6cd3470.jpg' },
      { key: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=210ce062070828387c00d446d9f0c264/37d12f2eb9389b5049b1ab2f8535e5dde7116e04.jpg' },
      { key: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=0f7b56751f30e924dba994632d610563/b8389b504fc2d5628d469b90e71190ef76c66c04.jpg' },
      { key: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=a1c233456e061d95694b3f6a1a9d61b4/9a504fc2d5628535ed1e985c90ef76c6a6ef63d4.jpg' },
      { key: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=e3e7c7d4a9014c080d3620f76b12696d/d4628535e5dde7119a2c098ba7efce1b9c1661d4.jpg' },
      { key: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=ad87d2795982b2b7b392319650c4a08a/e4dde71190ef76c6ab2cb1569d16fdfaae5167d4.jpg' },
    ],
    words:[
      '佛香阁是北京市颐和园的主体建筑，建筑在万寿山前山高20米的方形台基上，南对昆明湖，背靠智慧海，以它为中心的各建筑群严整而对称地向两翼展开，形成众星捧月之势，气派相当宏伟。佛香阁高41米，8面3层4重檐，阁内有8根巨大铁梨木擎天柱，结构相当复杂，为古典建筑精品。',
      '北京的佛香阁是一座宏伟的塔式宗教建筑，为全颐和园建筑布局的中心。"佛香"二字来源于佛教对佛的歌颂。该阁仿杭州的六和塔建造，兴建在20米的石造台基上，八面三层四重檐。高约40米（10.225+7.555+5.975+12.660=36.415米），内有八根铁梨木大柱，直贯顶部，下有20米高的石台基。阁上层榜曰 “式延风教”，中层榜曰“气象昭回”，下层榜曰“云外天香”，阁名 “佛香阁”。内供接引佛，每月望朔，慈禧在此烧香礼佛。',
      '佛香阁高41米，建筑在20米高的石造台基上，内有八根坚硬的铁梨木巨柱支撑，结构复杂，独具匠心，高台矗立，气势磅礴。它将东边的圆明园、畅春园，西边的静明园、静宜园以及万寿山周转十几里以内的优美风景提携于周围，把当时的“三山五园”巧妙地加成一体，使之成为一个大型皇家园林风景区。据说这座巨大的建筑物被英法联军烧毁后，1891年花了78万两银子重建，是颐和园最大的工程项目。登上佛香阁，周围数十里的景色尽收眼底。 佛香阁高41米，八面三层四重檐，建于万寿山前山的巨大石造台基上，这座台基，包山而筑。把佛香阁高高托举出山脊之上。仰视有高出云表之概，随处都能见到它的姿影。',
      '阁仗山雄，山因阁秀，万寿山在远处西山群峰的屏嶂和近处玉泉山的陪衬下，小中见大，气势非凡，苍松佛香阁与昆明湖翠柏，秀色葱茏。佛香阁面对的昆明湖又恰到好处地把这个画面全部倒映出来，山之葱茏，水之澄碧，天光接引，令人荡气舒怀。中国造园家们所津津乐道的造园手法--借景、在这里得到了完美的运用和体现。佛香阁建筑在60多米高的山坡上，阁高41米，8面、3层、4重檐，外形按武昌黄鹤楼设计。始建于乾隆时代， 供接引佛，第逢初一、十五，慈禧在此烧香礼佛。佛香阁是全园的中心建筑，为颐和园的标志， 也是中国古建筑精品之一，有很高的建筑艺术价值。阁前有八字形台阶直登台上，登上佛香阁， 可饱览昆明湖上风光和四周景色。佛香阁往上是颐和园制高建筑“智慧海”，俗称“无梁殿”。内部结构以纵横交错的拱券支撑顶部， 不用枋梁承重。该殿无木料，得以逃过1860年的大火，但殿中佛像及殿外壁上千余尊小佛像却被列强盗走。'
    ],
    locations:[
      '北京','北京-佛香阁','北京-海淀区','北京-颐和园'
    ],
    isClickrule: true,
    isClickrulr:false,
    isClickruly:false,
    isClickrulo:false
}

export default {
  state,
}
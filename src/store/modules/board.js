const state = {
    boards: [
      { key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527272335&di=4a9766cf1af71e88b205ad1c9721c260&imgtype=jpg&er=1&src=http%3A%2F%2Fpic34.photophoto.cn%2F20150128%2F0007020160374237_b.jpg',checked:false},
      { key: require('../../../static/images/img2.jpg'),checked:true},
      { key: require('../../../static/images/img3.jpg'),checked:false},
      { key: require('../../../static/images/img4.jpg'),checked:false},
      { key: require('../../../static/images/img5.jpg'),checked:false},
      { key: require('../../../static/images/img6.jpg'),checked:false},
      { key: require('../../../static/images/img7.jpg'),checked:false},
    ],
    words:[
      '佛香阁是北京市颐和园的主体建筑，建筑在万寿山前山高20米的方形台基上，南对昆明湖，背靠智慧海，以它为中心的各建筑群严整而对称地向两翼展开，形成众星捧月之势，气派相当宏伟。佛香阁高41米，8面3层4重檐，阁内有8根巨大铁梨木擎天柱，结构相当复杂，为古典建筑精品。',
      '北京的佛香阁是一座宏伟的塔式宗教建筑，为全颐和园建筑布局的中心。"佛香"二字来源于佛教对佛的歌颂。该阁仿杭州的六和塔建造，兴建在20米的石造台基上，八面三层四重檐。高约40米，内有八根铁梨木大柱，直贯顶部，下有20米高的石台基。阁上层榜曰 “式延风教”。',
      '佛香阁高41米，建筑在20米高的石造台基上，内有八根坚硬的铁梨木巨柱支撑，结构复杂，独具匠心，高台矗立，气势磅礴。它将东边的圆明园、畅春园，西边的静明园、静宜园以及万寿山周转十几里以内的优美风景提携于周围，把当时的“三山五园”巧妙地加成一体，使之成为一个大型皇家园林风景区 。',
      '阁仗山雄，山因阁秀，万寿山在远处西山群峰的屏嶂和近处玉泉山的陪衬下，小中见大，气势非凡，苍松佛香阁与昆明湖翠柏，秀色葱茏。佛香阁面对的昆明湖又恰到好处地把这个画面全部倒映出来，山之葱茏，水之澄碧，天光接引，令人荡气舒怀。中国造园家们所津津乐道的造园手法--借景、在这里得到了完美的运用和体现。'
    ],
    locations:[
      '北京','北京-佛香阁','北京-海淀区','北京-颐和园'
    ],
    goLink:'',
    goLinks:[require('../../../static/images/img2.jpg')],
    address:'',
    windowWidth:0,
    visitFont:'佛香阁是北京市颐和园的主体建筑，建筑在万寿山前山高20米的方形台基上，南对昆明湖，背靠智慧海，以它为中心的各建筑群严整而对称地向两翼展开，形成众星捧月之势，气派相当宏伟。佛香阁高41米，8面3层4重檐，阁内有8根巨大铁梨木擎天柱，结构相当复杂，为古典建筑精品。',
    isClickrule: true,
    isClickrulr:false,
    isClickruly:false,
    isClickrulo:false
}

export default {
  state,
}

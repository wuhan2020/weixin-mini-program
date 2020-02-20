Page({
  data: {
    longitude: "113.324520",
    latitude: "23.099994",
    show_top: false,
    show_glance: true,
    data_glance: {},
    input_focus: false,
    input_model: '搜索地点',
  },
  onLoad: function () {
    var data = {
      "status": true,
      "msg": "",
      "province": "河南省",
      "city": "信阳市",
      "district": "新县",
      "positions": [{
        "name": "新县人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "新县",
        "infected_people_total": 4,
        "infected_people_new": 4,
        "distance": 93.49675995932299,
        "rank": 11,
        "risk": "normal",
        "latitude": 31.628053,
        "longitude": 114.874736
      }, {
        "name": "信阳市第四人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "平桥区",
        "infected_people_total": 6,
        "infected_people_new": 6,
        "distance": 108.79635627360133,
        "rank": 6,
        "risk": "normal",
        "latitude": 32.097917,
        "longitude": 114.127168
      }, {
        "name": "信阳市第二人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "浉河区",
        "infected_people_total": 6,
        "infected_people_new": 6,
        "distance": 111.09991493768891,
        "rank": 5,
        "risk": "normal",
        "latitude": 32.119145,
        "longitude": 114.088781
      }, {
        "name": "信阳市第三人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "浉河区",
        "infected_people_total": 3,
        "infected_people_new": 3,
        "distance": 111.64425132028109,
        "rank": 14,
        "risk": "normal",
        "latitude": 32.123817,
        "longitude": 114.065101
      }, {
        "name": "信阳市中心医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "浉河区",
        "infected_people_total": 5,
        "infected_people_new": 5,
        "distance": 111.8306810209245,
        "rank": 9,
        "risk": "normal",
        "latitude": 32.125626,
        "longitude": 114.07407
      }, {
        "name": "信阳市第一人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "平桥区",
        "infected_people_total": 3,
        "infected_people_new": 3,
        "distance": 112.63522206263586,
        "rank": 13,
        "risk": "normal",
        "latitude": 32.132938,
        "longitude": 114.08355
      }, {
        "name": "信阳市第五人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "平桥区",
        "infected_people_total": 22,
        "infected_people_new": 22,
        "distance": 112.92492830083526,
        "rank": 1,
        "risk": "normal",
        "latitude": 32.129922,
        "longitude": 114.215484
      }, {
        "name": "固始县妇幼保健院",
        "province": "河南省",
        "city": "信阳市",
        "district": "光山县",
        "infected_people_total": 1,
        "infected_people_new": 1,
        "distance": 124.40052158889003,
        "rank": 18,
        "risk": "normal",
        "latitude": 31.996863,
        "longitude": 114.905401
      }, {
        "name": "光山县中医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "光山县",
        "infected_people_total": 1,
        "infected_people_new": 1,
        "distance": 124.64464640695178,
        "rank": 17,
        "risk": "normal",
        "latitude": 32.000825,
        "longitude": 114.903688
      }, {
        "name": "罗山县人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "罗山县",
        "infected_people_total": 9,
        "infected_people_new": 9,
        "distance": 125.9207820066571,
        "rank": 3,
        "risk": "normal",
        "latitude": 32.194514,
        "longitude": 114.510036
      }, {
        "name": "光山县人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "光山县",
        "infected_people_total": 18,
        "infected_people_new": 18,
        "distance": 126.02173094717696,
        "rank": 2,
        "risk": "normal",
        "latitude": 32.015188,
        "longitude": 114.905788
      }, {
        "name": "潢川县人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "潢川县",
        "infected_people_total": 8,
        "infected_people_new": 8,
        "distance": 144.14843983759937,
        "rank": 4,
        "risk": "normal",
        "latitude": 32.133086,
        "longitude": 115.039932
      }, {
        "name": "商城县人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "商城县",
        "infected_people_total": 6,
        "infected_people_new": 6,
        "distance": 145.3527172514105,
        "rank": 7,
        "risk": "normal",
        "latitude": 31.809673,
        "longitude": 115.391898
      }, {
        "name": "息县人民医院",
        "province": "河南省",
        "city": "信阳市",
        "district": "息县",
        "infected_people_total": 5,
        "infected_people_new": 5,
        "distance": 148.79837337178577,
        "rank": 8,
        "risk": "normal",
        "latitude": 32.341362,
        "longitude": 114.73292
      }],
      "special_positions": [{
        "name": "信阳市第五人民医院",
        "number": 22,
        "rank": 1
      }, {
        "name": "光山县人民医院",
        "number": 18,
        "rank": 2
      }, {
        "name": "罗山县人民医院",
        "number": 9,
        "rank": 3
      }, {
        "name": "潢川县人民医院",
        "number": 8,
        "rank": 4
      }, {
        "name": "信阳市第二人民医院",
        "number": 6,
        "rank": 5
      }]
    };
    var data_glance = {
      special_positions: data["special_positions"],
      positions: data["positions"],
      boundary: 5,
      days: 7,
      infected_total: 35,
      infected_today: 50,
      infected_position_total: 20,
      infected_passed_total: 200,
      infected_position_new: 20,
      infected_passed_new: 200,
    }
    this.setData({
      data_glance: data_glance,
    })
  },
  input_tap() {
    this.setData({
      input_focus: true,
      input_info: ''
    });
  },
  input_blur(e) {
    this.setData({
      input_info: e.detail.value || '输入'
    });
  },
  searchbar_click: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
  },
  button_location_click: function () {
    var that=this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                type: 'wgs84',
                success(res) {
                  that.setData({
                    longitude: res.longitude,
                    latitude: res.latitude
                  })
                }
              })
            },
            fail() {
              wx.showToast({
                title: '未获取到位置授权,将选择默认定位',
              })
            }
          })
        } else {
          wx.getLocation({
            type: 'wgs84',
            success(res) {
              that.setData({
                longitude: res.longitude,
                latitude: res.latitude
              })
            }
          })
        }
      }
    })
  },
  button_screen_click: function () {
  },
  hospital_detail_click: function () {
    console.log("should go to hospital detail page");
  },
  float_click: function () {
    console.log("should float");
  },
})
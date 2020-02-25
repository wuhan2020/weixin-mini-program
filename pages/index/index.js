Page({
  data: {
    longitude: "114.063411",
    latitude: "22.55899",
    context: null,
    show_top: false,
    show_glance: true,
    data_glance: {},
    markers:[],
    input_focus: false,
    input_model: '搜索地点',
  },
  onLoad: function () {
    var that=this;
    that.fetch_data();
  },
  fetch_data: function (){
    var that = this;
    var context = wx.createMapContext("map", that);
    var boundary = 200;
    wx.request({
      url: 'https://wechat-mini.opensource-service.cn/patient_detail/get_nearby_information',
      data: {
        longitude: that.data.longitude,
        latitude: that.data.latitude,
        distance: boundary
      },
      success(res) {
        var markers = []
        var data = res.data;
        var infected_position_total = 0;
        var infected_passed_total = 0;
        var infected_position_new = 0;
        var infected_passed_new = 0;
        var positions = data.positions;
        for (var index in positions) {
          var position = positions[index];
          var distance = position.distance;
          if (distance <= boundary) {
            infected_position_total += 1;
            infected_position_new += 1;
            infected_passed_total += position.infected_people_total;
            infected_passed_new += position.infected_people_new;
          }
          var marker = {
            id: position.rank,
            latitude: position.latitude,
            longitude: position.longitude,
            title: position.name
          }
          if (position.risk == "normal") {
            marker.iconPath = "/asserts/icons/risk_map_normal.png"
          }
          else if (position.risk == "high") {
            marker.iconPath = "/asserts/icons/risk_map_high.png"
          }
          else {
            marker.iconPath = "/asserts/icons/risk_map_extreme.png"
          }
          markers.push(marker);
        }
        var data_glance = {
          special_positions: data["special_positions"],
          positions: data["positions"],
          boundary: boundary,
          infected_position_total: infected_position_total,
          infected_passed_total: infected_passed_total,
          infected_position_new: infected_position_new,
          infected_passed_new: infected_passed_new,
        }
        that.setData({
          data_glance: data_glance,
          markers: markers
        })
        context.moveToLocation({
          longitude: that.data.longitude,
          latitude: that.data.latitude,
        })
      }
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
        console.log(res);
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        that.fetch_data();
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
                  that.fetch_data();
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
              that.fetch_data();
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
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
    var that=this;
    var boundary=150;
    wx.request({
      url: 'http://api.hypertrons.io:7002/patient_detail/get_nearby_information',
      data:{
        longitude:that.data.longitude,
        latitude:that.data.latitude,
        distance: boundary
      },
      success(res) {
        var data=res.data;
        var infected_position_total=0;
        var infected_passed_total=0;
        var infected_position_new=0;
        var infected_passed_new=0;
        var positions=data.positions;
        for(var index in positions){
          var position=positions[index];
          var distance=position.distance;
          if (distance <= boundary){
            infected_position_total+=1;
            infected_position_new+=1;
            infected_passed_total += position.infected_people_total;
            infected_passed_new += position.infected_people_new;
          }        
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
Page({
  data: {
    hospitals: [],
  },
  onLoad: function () {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                type: 'wgs84',
                success(res) {
                  wx.showToast({
                    title: res.errMsg,
                  })
                }
              })
            },
            fail(){
              wx.showToast({
                title: '未获取到位置授权,将选择默认定位',
              })
            }
          })
        }else{
          wx.getLocation({
            type: 'wgs84',
            success(res) {
              wx.showToast({
                title: res.errMsg,
              })
            }
          })
        }
      }
    })
    var hospitals=[
      {
        name:"安徽省第一人民医院",
        days:"5",
        number:"10",
        rank:"5"
      },
      {
        name: "安徽省第二人民医院",
        days: "3",
        number: "15",
        rank: "1"
      },
      {
        name: "安徽省第三人民医院",
        days: "5",
        number: "8",
        rank: "6"
      }
    ]
    this.setData({
      hospitals: hospitals
    })
  },
  searchbar_click: function () {
    console.log("should toast search page");
  },
  button_location_click: function () {
    console.log("should toast choose location page");
  },
  button_screen_click: function () {
    console.log("should toast screen page");
  },
  hospital_detail_click: function () {
    console.log("should go to hospital detail page");
  }
})

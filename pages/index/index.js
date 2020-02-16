Page({
  data: {
    show_top:false,
    input_focus: false,
    input_model: '搜索地点',
    input_info: '输入',
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
                  console.log(res)
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
              console.log(res)
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
    var show_top=this.data.show_top;
    this.setData({
      show_top: !show_top
    })
    console.log("should toast search page");
  },
  button_location_click: function () {
    var show_top = this.data.show_top;
    this.setData({
      show_top: !show_top
    })
    console.log("should toast choose location page");
  },
  button_screen_click: function () {
    console.log("should toast screen page");
  },
  hospital_detail_click: function () {
    console.log("should go to hospital detail page");
  },
  float_click: function () {
    console.log("should float");
  },
})

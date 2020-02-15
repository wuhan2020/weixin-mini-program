Page({
  data: {
    hospitals: [],
  },
  onLoad: function () {
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
      }
    ]
    this.setData({
      hospitals: hospitals
    })
  }
})

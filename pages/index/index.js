//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World WeChat demo!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    let self = this;
    wx.getSetting({
      withCredentials: true,
      lang: 'zh_CN',
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          })
        }
      }
    })
  },

  bindGetUserInfo(e) {
    if (e.detail.userInfo) {
      console.log(e.detail.userInfo);
      console.log('用户授权');
      wx.reLaunch({
        url: '/pages/home/home'
      });
    } else {
      console.log('用户拒绝授权');
    }
  }
})
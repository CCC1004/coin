//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/logs/logs",
      "selected": true,
      "iconPath": "/pages/template/imgs/f1.png",
      "selectedIconPath": "/pages/template/imgs/f1on.png",
      "text": "首页"
    },
    {
      "current": 1,
      "pagePath": "/pages/home/homePage",
      "selected": false,
      "iconPath": "/pages/template/imgs/f2.png",
      "selectedIconPath": "/pages/template/imgs/f2on.png",
      "text": "主页"
    },
    {
      "current": 2,
      "pagePath": "/pages/myself/myself",
      "selected": false,
      "iconPath": "/pages/template/imgs/f3.png",
      "selectedIconPath": "/pages/template/imgs/f3on.png",
      "text": "我的"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = id;
  otabbar[id]['selected'] = true;
  bindData[bindName] = otabbar;
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}
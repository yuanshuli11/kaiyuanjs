
  //根据名称获取function
  getFuncByName(eventNodeItem) {
      var item = {}
      // [{"func":"","eventNodeItem":"","btnText":""}]
      item["empty"] = {
          "func": function () { },
          "eventNodeItem": eventNodeItem,
          "btnText": "empty"
      }
      item["refuseXieyi"] = {
          "func": function (alterNewNode, context, eventNodeItem) {
              if (window.qg) {
                  qg.exitApplication()
              } else if (window.qq) {
                  qq.exitMiniProgram()
              } else {
                  cc.game.end()
              }
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              context.skipScene("Login")
          },
          "eventNodeItem": eventNodeItem,
          "btnText": "拒绝"
      }
      item["productedInfo"] = {
          "func": this.ProductedInfo,
          "eventNodeItem": eventNodeItem,
          "btnText": "免战牌提示"
      }
      item["banUserChat"] = {
          "func": this.banUserChat,
          "eventNodeItem": eventNodeItem,
          "btnText": "拉黑用户"
      }
      item["adTask"] = {
          "func": this.adTask,
          "eventNodeItem": eventNodeItem,
          "btnText": "翻倍奖励"
      }
      item["showCancelFunc"] = {
          "func": this.showCancelFunc,
          "eventNodeItem": eventNodeItem,
          "btnText": "撤销"
      }
      item["notifyMsgAd"] = {
          "func": this.NotifyMsgAd,
          "eventNodeItem": eventNodeItem,
          "btnText": "订阅通知"
      }
      item["chat"] = {
          "func": this.Chat,
          "eventNodeItem": eventNodeItem,
          "btnText": "聊天"
      }
      item["MoreAdPower"] = {
          "func": this.MoreAdPower,
          "eventNodeItem": eventNodeItem,
          "btnText": "观看广告"
      }
      item["cleanMember"] = {
          "func": this.CleanMember,
          "eventNodeItem": eventNodeItem,
          "btnText": "移除军团"
      }
      item["shanrangGroup"] = {
          "func": this.ShanrangGroup,
          "eventNodeItem": eventNodeItem,
          "btnText": "转让团长"
      }
      item["exitGroupConfirm"] = {
          "func": this.ExitGroupConfirm,
          "eventNodeItem": eventNodeItem,
          "btnText": "退出军团"
      }
      item["exitGroup"] = {
          "func": this.ExitGroup,
          "eventNodeItem": eventNodeItem,
          "btnText": "退出军团"
      }
      item["showMapDetailAlert"] = {
          "func": this.showMapDetailAlert,
          "eventNodeItem": eventNodeItem,
          "btnText": "查看地图"
      }
      item["changeName"] = {
          "func": this.ChangeName,
          "eventNodeItem": eventNodeItem,
          "btnText": "修改姓名"
      }
      item["handleRefuse"] = {
          "func": this.HandleRefuse,
          "eventNodeItem": eventNodeItem,
          "btnText": "拒绝"
      }
      item["handleAgree"] = {
          "func": this.HandleAgree,
          "eventNodeItem": eventNodeItem,
          "btnText": "同意"
      }
      item["memberDetail"] = {
          "func": this.MemberDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "审批"
      }
      item["skipExchange"] = {
          "func": this.SkipExchange,
          "eventNodeItem": eventNodeItem,
          "btnText": "进入市场"
      }
      item["searchArmy"] = {
          "func": this.SearchArmy,
          "eventNodeItem": eventNodeItem,
          "btnText": "开启搜索"
      }
      item["addGroup"] = {
          "func": this.AddGroup,
          "eventNodeItem": eventNodeItem,
          "btnText": "加入军团"
      }
      item["宣战中"] = {
          "func": function () { },
          "eventNodeItem": eventNodeItem,
          "btnText": "宣战中"
      }
      item["宣战"] = {
          "func": this.Xuanzhan,
          "eventNodeItem": eventNodeItem,
          "btnText": "宣战"
      }
      item["cancelApplyGroup"] = {
          "func": this.CancelApplyGroup,
          "eventNodeItem": eventNodeItem,
          "btnText": "撤销申请"
      }
      item["createGroup"] = {
          "func": this.CreateGroup,
          "eventNodeItem": eventNodeItem,
          "btnText": "创建军团"
      }
      item["showloseArmies"] = {
          "func": this.ShowloseArmies,
          "eventNodeItem": eventNodeItem,
          "btnText": "伤兵营"
      }
      item["defenseSetting"] = {
          "func": this.DefenseSettingV2,
          "eventNodeItem": eventNodeItem,
          "btnText": "战术设置"
      }
      item["recoverloseArmies"] = {
          "func": this.RecoverloseArmies,
          "eventNodeItem": eventNodeItem,
          "btnText": "治疗"
      }
      item["adArmyAcce"] = {
          "func": this.adArmyAcce,
          "eventNodeItem": eventNodeItem,
          "btnText": "广告加速"
      }
      item["addAttrOfficer"] = {
          "func": this.addAttrOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "更新"
      }
      item["showZhiWeiAlert"] = {
          "func": this.showZhiWeiAlert,
          "eventNodeItem": eventNodeItem,
          "btnText": "晋升"
      }
      item["addExpForOfficer"] = {
          "func": this.addExpForOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "经验手册"
      }
      item["zhiweiUpgrade"] = {
          "func": this.zhiweiUpgrade,
          "eventNodeItem": eventNodeItem,
          "btnText": "晋升"
      }
      item["junxianUpgrade"] = {
          "func": this.junxianUpgrade,
          "eventNodeItem": eventNodeItem,
          "btnText": "军衔晋升"
      }
      item["showJunxianAlert"] = {
          "func": this.showJunxianAlert,
          "eventNodeItem": eventNodeItem,
          "btnText": "军衔晋升"
      }
      item["cancelArmy"] = {
          "func": this.cancelArmy,
          "eventNodeItem": eventNodeItem,
          "btnText": "解散训练"
      }
      item["objectAcce"] = {
          "func": this.objectAcce,
          "eventNodeItem": eventNodeItem,
          "btnText": "普通加速"
      }
      item["acceAlert"] = {
          "func": this.acceAlert,
          "eventNodeItem": eventNodeItem,
          "btnText": "加速"
      }
      item["adPeople"] = {
          "func": this.adPeople,
          "eventNodeItem": eventNodeItem,
          "btnText": "广告召集"
      }
      item["accePropList"] = {
          "func": this.accePropList,
          "eventNodeItem": eventNodeItem,
          "btnText": "道具加速"
      }
      item["groupGoldTech"] = {
          "func": this.GroupGoldTech,
          "eventNodeItem": eventNodeItem,
          "btnText": "捐献黄金"
      }
      item["groupAdTech"] = {
          "func": this.GroupAdTech,
          "eventNodeItem": eventNodeItem,
          "btnText": "广告捐献"
      }
      item["adPropDetail"] = {
          "func": this.adPropDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "广告开箱"
      }
      item["clickAdPropDetail"] = {
          "func": this.clickAdPropDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "额外奖励"
      }
      item["showPropDetail"] = {
          "func": this.showPropDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "宝物详情"
      }
      item["showShopDetail"] = {
          "func": this.showShopDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "兑换宝物"
      }
      item["buyPropSubmit"] = {
          "func": this.buyPropSubmit,
          "eventNodeItem": eventNodeItem,
          "btnText": "兑换"
      }
      item["useTreasure"] = {
          "func": this.useTreasure,
          "eventNodeItem": eventNodeItem,
          "btnText": "使用"
      }
      item["exchangeProp"] = {
          "func": this.exchangeProp,
          "eventNodeItem": eventNodeItem,
          "btnText": "兑换"
      }
      item["useUserPropV2"] = {
          "func": this.useUserPropV2,
          "eventNodeItem": eventNodeItem,
          //   "btnText": "使用",
      }
      item["destroyBuildingConfirm"] = {
          "func": this.destroyBuildingConfirm,
          "eventNodeItem": eventNodeItem,
          "btnText": "拆除"
      }
      item["destroyBuilding"] = {
          "func": this.destroyBuilding,
          "eventNodeItem": eventNodeItem,
          "btnText": "拆除"
      }
      item["upgradeOfficer"] = {
          "func": this.upgradeOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "升级"
      }
      item["trainOfficer"] = {
          "func": this.accePropList,
          "eventNodeItem": eventNodeItem,
          "btnText": "培养军官"
      }
      item["skillDetail"] = {
          "func": this.skillDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "培养军官"
      }
      item["skillCancel"] = {
          "func": this.skillCancel,
          "eventNodeItem": eventNodeItem,
          "btnText": "遗忘技能"
      }
      item["handlerOfficer"] = {
          "func": this.handlerOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "操作"
      }
      item["flushAttrOfficer"] = {
          "func": this.flushAttrOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "洗点"
      }
      item["changeLoyalOfficer"] = {
          "func": this.changeLoyalOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "赏赐"
      }
      item["fireOfficer"] = {
          "func": this.fireOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "解雇"
      }
      item["ZhaomuCaptive"] = {
          "func": this.ZhaomuCaptive,
          "eventNodeItem": eventNodeItem,
          "btnText": "招募"
      }
      item["ReleaseOfficer"] = {
          "func": this.ReleaseOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "释放"
      }
      item["ShuhuiCaptive"] = {
          "func": this.ShuhuiCaptive,
          "eventNodeItem": eventNodeItem,
          "btnText": "赎回"
      }
      item["GiveUpShuhuiCaptive"] = {
          "func": this.GiveUpShuhuiCaptive,
          "eventNodeItem": eventNodeItem,
          "btnText": "放弃赎回"
      }
      item["unOfferOfficer"] = {
          "func": this.UnOfferOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "卸任"
      }
      item["offerOfficer"] = {
          "func": this.offerOfficer,
          "eventNodeItem": eventNodeItem,
          "btnText": "任命"
      }
      item["setBattleCfg"] = {
          "func": this.setBattleCfg,
          "eventNodeItem": eventNodeItem,
          "btnText": "更新设置"
      }
      item["buyResource"] = {
          "func": this.buyResource,
          "eventNodeItem": eventNodeItem,
          "btnText": "购买"
      }
      item["sellResource"] = {
          "func": this.sellResource,
          "eventNodeItem": eventNodeItem,
          "btnText": "出售"
      }
      item["sellSubmit"] = {
          "func": this.sellSubmit,
          "eventNodeItem": eventNodeItem,
          "btnText": "出售"
      }
      item["buySubmit"] = {
          "func": this.buySubmit,
          "eventNodeItem": eventNodeItem,
          "btnText": "购买"
      }
      item["collectBegin"] = {
          "func": this.collectBegin,
          "eventNodeItem": eventNodeItem,
          "btnText": "采集"
      }
      item["collectFinish"] = {
          "func": this.collectFinish,
          "eventNodeItem": eventNodeItem,
          "btnText": "采集完成"
      }
      item["giveUpAreaConfirm"] = {
          "func": this.giveUpAreaConfirm,
          "eventNodeItem": eventNodeItem,
          "btnText": "放弃野地"
      }
      item["giveUpArea"] = {
          "func": this.giveUpArea,
          "eventNodeItem": eventNodeItem,
          "btnText": "确定"
      }
      item["moveArmy"] = {
          "func": this.moveArmy,
          "eventNodeItem": eventNodeItem,
          "btnText": "派遣"
      }
      item["派遣"] = {
          "func": this.moveArmy,
          "eventNodeItem": eventNodeItem,
          "btnText": "派遣"
      }
      item["驻军"] = {
          "func": this.stayArmy,
          "eventNodeItem": eventNodeItem,
          "btnText": "驻军"
      }
      item["征服"] = {
          "func": this.battleArmy,
          "eventNodeItem": eventNodeItem,
          "btnText": "征服"
      }
      item["关闭"] = {
          "func": function (alterNewNode, context, eventNodeItem) {
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
          },
          "eventNodeItem": eventNodeItem,
          "btnText": "关闭"
      }
      item["掠夺"] = {
          "func": this.battle2Army,
          "eventNodeItem": eventNodeItem,
          "btnText": "奇袭"
      }
      item["侦查"] = {
          "func": this.battle3Army,
          "eventNodeItem": eventNodeItem,
          "btnText": "侦查"
      }
      item["计谋"] = {
          "func": this.jimou,
          "eventNodeItem": eventNodeItem,
          "btnText": "计谋"
      }
      item["行军计谋"] = {
          "func": this.xingjunjimou,
          "eventNodeItem": eventNodeItem,
          "btnText": "行军计谋"
      }
      item["进入野地"] = {
          "func": this.showMapDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "进入"
      }
      item["建造城市"] = {
          "func": this.createNewCityShow,
          "eventNodeItem": eventNodeItem,
          "btnText": "建造城市"
      }
      item["createCityButton"] = {
          "func": this.createNewCityButton,
          "eventNodeItem": eventNodeItem,
          "btnText": "建造"
      }
      item["运输"] = {
          "func": this.Yunshu,
          "eventNodeItem": eventNodeItem,
          "btnText": "运输"
      }
      item["派遣"] = {
          "func": this.moveArmy,
          "eventNodeItem": eventNodeItem,
          "btnText": "派遣"
      }
      item["changeCityName"] = {
          "func": this.changeCityName,
          "eventNodeItem": eventNodeItem,
          "btnText": "建造"
      }
      item["展示野地"] = {
          "func": this.showMapDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "进入"
      }
      item["展示城市"] = {
          "func": this.showCityDetail,
          "eventNodeItem": eventNodeItem,
          "btnText": "进入"
      }
      item["进入城市"] = {
          "func": this.enterCity,
          "eventNodeItem": eventNodeItem,
          "btnText": "进入"
      }
      item["moveCityInput"] = {
          "func": this.moveCityInput,
          "eventNodeItem": eventNodeItem,
          "btnText": "迁移城市"
      }
      item["活动迁城"] = {
          "func": this.activityMoveCity,
          "eventNodeItem": eventNodeItem,
          "btnText": "迁城"
      }
      item["moveToPlain"] = {
          "func": this.moveToPlain,
          "eventNodeItem": eventNodeItem,
          "btnText": "迁城"
      }
      item["destroyCityInput"] = {
          "func": this.destroyCityInput,
          "eventNodeItem": eventNodeItem,
          "btnText": "废弃城市"
      }
      item["destroyCity"] = {
          "func": this.destroyCity,
          "eventNodeItem": eventNodeItem,
          "btnText": "废弃城市"
      }
      item["moveCity"] = {
          "func": this.moveCity,
          "eventNodeItem": eventNodeItem,
          "btnText": "迁移城市"
      }
      item["迁城"] = {
          "func": this.moveMapCity,
          "eventNodeItem": eventNodeItem,
          "btnText": "迁城"
      }
      item["moveActivityCity"] = {
          "func": this.moveActivityCity,
          "eventNodeItem": eventNodeItem,
          "btnText": "迁移城市"
      }
      item["showBattleHandle"] = {
          "func": this.showBattleHandle,
          "eventNodeItem": eventNodeItem,
          "btnText": "指挥战斗"
      }
      item["stayArmyBack"] = {
          "func": this.stayArmyBack,
          "eventNodeItem": eventNodeItem,
          "btnText": "召回驻军"
      }
      item["sendArmyBack"] = {
          "func": this.sendArmyBack,
          "eventNodeItem": eventNodeItem,
          "btnText": "遣返驻军"
      }
      item["flushReport"] = {
          "func": this.flushReport,
          "eventNodeItem": eventNodeItem,
          "btnText": "刷新战斗"
      }
      item["collectPosition"] = {
          "func": this.collectPosition,
          "eventNodeItem": eventNodeItem,
          "btnText": "收藏"
      }
      return item
  }

  UserChatItem(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      eventNodeItem.alterNewNode = alter2Node
      if (eventNodeItem.forcusUserInfo) {
          alter2Node.InitAlert(`与${eventNodeItem.forcusUserInfo.name}的聊天`, "发送")
      } else if (eventNodeItem.chatItem) {
          alter2Node.InitAlert(`与${eventNodeItem.chatItem.a_user_id == window.UserData.user.info.user_id ? eventNodeItem.chatItem.b_name : eventNodeItem.chatItem.a_name}的聊天`, "发送")
      }

      var focusUserID = 0
      if (eventNodeItem.chatItem) {
          focusUserID = eventNodeItem.chatItem.focus_user_id
          for (var i = 0; i < eventNodeItem.chatItem.data.length; i++) {
              (function (item) {
                  let itemName = item.user_name
                  if (item.user_id == cc.props.userInfo.user_id) {
                      itemName = "我:"
                  }
                  alter2Node.addNewLine("wrap_text", itemName, { "text": `${item.time}\n\n${item.msg}` })

              })(eventNodeItem.chatItem.data[i])
          }
          alter2Node.addNewLine("wrap_text", "提示", { "text": `请文明交流，恶意辱骂玩家 一经查实 立即封号。 若您发现对方恶意骂人,请联系客服举报。` })
          alter2Node.ToBottom()
      } else {
          alter2Node.addNewLine("wrap_text", "提示", { "text": `给他先打个招呼吧! \n请文明交流，恶意辱骂玩家 一经查实 立即封号。` })
          focusUserID = eventNodeItem.forcusUserInfo.user_id
      }
      var msgNode = alter2Node.addNewLine("input_long", "消息", { "maxLength": 30, "value": "", "placeholder": "一次最多发送30个字符", "lineHeight": 30, "itemKey": "sendMsg" })

      alter2Node.OnButtonFunc = function () {
          if (msgNode.getValue() == "") {
              context.Toast("消息不能为空")
              return
          }
          context.api.SendMsg(cc, focusUserID, 50, msgNode.getValue(), function (res) {
              alter2Node.onButtonCancel()
              context.Toast("发送成功")
              if (eventNodeItem.chatItem && eventNodeItem.callback) {
                  // 说明是从消息列表来的
                  window.UserData.addChatItem(focusUserID, msgNode.getValue())
                  eventNodeItem.callback()
              }
              alter2Node.onButtonCancel()
          }, function (errMsg) {
              alter2Node.onButtonCancel()
              context.Toast(errMsg)
          })
      }
      if (eventNodeItem.chatItem) {
          alter2Node.AddButton(eventNodeItem.funcs["banUserChat"])
      }
      alter2Node.Alert()

  }
  banUserChat(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var banUserName = ""
      if (eventNodeItem.chatItem) {
          banUserName = eventNodeItem.chatItem.a_user_id == window.UserData.user.info.user_id ? eventNodeItem.chatItem.b_name : eventNodeItem.chatItem.a_name
      }
      var alter2Node = context.NewAlert2()
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.InitAlert("拉黑用户", "拉黑")
      alter2Node.addNewLine("wrap_text", "说明", { "text": `您确定要拉黑【${banUserName}】吗? 此操作不可撤销，请谨慎操作。\n 如果该用户和您的聊天包含恶意攻击,可联系客服举报。 客服将对恶意用户进行封号处理。` })

      alter2Node.OnButtonFunc = function (evt) {

          context.api.BanUserChat(cc, eventNodeItem.chatItem.id, function () {
              context.Toast("已拉黑")
          }, function (err) {
              context.Toast(err)
          })
          alter2Node.onButtonCancel()
      }

      alter2Node.Alert()
  }
  collectPosition(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.InitAlert("收藏坐标", "确定")
      alter2Node.addNewLine("text_mid", "当前坐标", { "text": `(${eventNodeItem.attr.lng},${eventNodeItem.attr.lat})` })
      var input = alter2Node.addNewLine("input_long", "坐标名", { "maxLength": 10, "value": eventNodeItem.attr.city, "lineHeight": 30, "itemKey": "name" })

      alter2Node.OnButtonFunc = function (evt) {
          var name = input.getValue()
          if (name == "") {
              name = eventNodeItem.attr.city
          }
          var data = {
              "name": name,
              "lat": eventNodeItem.attr.lat,
              "lng": eventNodeItem.attr.lng,
              "map_id": eventNodeItem.attr.id
          }
          context.api.CreatePositionCollect(cc, data, function (data) {
              context.Toast("收藏成功")
          }, function (err) {
              context.Toast(err)
          })
          alter2Node.onButtonCancel()
      }

      alter2Node.Alert()
  }
  //destroyBuildingConfirm destroyBuildingConfirm
  ExitGroupConfirm(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.InitAlert("退出军团", "确定")
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("wrap_text", "提示", { "text": `普通成员可以直接退出军团。` })
      alter2Node.addNewLine("wrap_text", "", { "text": `军团长退出请移步【解散军团】` })
      alter2Node.AddButtonFrom0(eventNodeItem.funcs["exitGroup"])

      alter2Node.Alert()
  }
  //免战牌提示
  ProductedInfo(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.InitAlert("提示", "确定")

      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("wrap_text", "", { "text": `您当前处于免战状态。\n免战时间截止为${cc.props.cityInfo.producted_text}\n` })
      alter2Node.addNewLine("wrap_text", "", { "text": `攻击其他玩家城市、野地会自动退出免战状态` })
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("wrap_text", "", { "text": `请谨慎操作` })

      alter2Node.OnButtonFunc = alter2Node.onButtonCancel

      alter2Node.Alert()
  }
  CleanMember(alterNewNode, context, eventNodeItem) {

      context.api.CleanMember(cc, eventNodeItem.attr.id, function (data) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          window.UserData.reloadGroupInfo()
          // context.reloadPage()
          alterNewNode.context.Toast("移除成功")
          alterNewNode.onButtonCancel()
      }, function (errorMsg) {
          alterNewNode.context.Toast(errorMsg)
          alterNewNode.onButtonCancel()
      })
  }
  ChangeName(alterNewNode, context, eventNodeItem) {
      context.api.UserPropV2(cc, {
          "prop_id": 380,
          "number": 1,
          "text": nameNode.getValue()
      }, function () {
          alterNewNode.context.Toast("修改成功")
      }, function (err) {
          alterNewNode.context.Toast(err)
      })
  }
  ExitGroup(alterNewNode, context, eventNodeItem) {
      context.api.ExitGroup(cc, function (data) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          alterNewNode.context.Toast("退出成功")
          window.UserData.reloadHomeInfo("user", null)
          window.UserData.reloadGroupInfo()
          window.UserData.user.info.group_id = 0
          alterNewNode.onButtonCancel()
      }, function (errorMsg) {
          alterNewNode.context.Toast(errorMsg)
          alterNewNode.onButtonCancel()
      })
  }
  MoreAdPower(alterNewNode, context, eventNodeItem) {
      context.Ad.ShowAd("Task", function () {
          context.api.moreAdPower(cc, function () {
              alterNewNode.onButtonCancel()
              if (eventNodeItem.callback) {
                  context.Toast("体力+5")
                  eventNodeItem.callback(context, eventNodeItem.data)
              }
          }, function (errorMsg) {
              alterNewNode.context.Toast(errorMsg)
              alterNewNode.onButtonCancel()
          })
      }, function (err) {
          alterNewNode.context.Toast(err)
      })
  }
  HandleRefuse(alterNewNode, context, eventNodeItem) {

      context.api.HandleGroupAgree(cc, eventNodeItem.attr.id, 99, function (data) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          // window.UserData.reloadHomeInfo()
          window.UserData.reloadGroupInfo()
          alterNewNode.context.Toast("操作成功")
          alterNewNode.onButtonCancel()
      }, function (errorMsg) {
          alterNewNode.context.Toast(errorMsg)
          alterNewNode.onButtonCancel()
      })
  }
  GroupGoldTech(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.goldNumber <= 100000) {
          context.Toast("至少捐献10万黄金")
          return
      }
      context.api.GroupGoldTech(cc, eventNodeItem.techType, eventNodeItem.goldNumber, function (data) {
          if (alterNewNode) {
              cc.props.cityRes.gold -= eventNodeItem.goldNumber
              alterNewNode.LoadView(data["tech_" + eventNodeItem.techType])
              alterNewNode.Alert()
          }
          alterNewNode.context.Toast("贡献成功")
      }, function (errorMsg) {
          alterNewNode.context.Toast(errorMsg)
          alterNewNode.onButtonCancel()
      })
  }
  NotifyMsgAd(alterNewNode, context, eventNodeItem) {

      context.Ad.ShowAd("Task", function () {
          context.api.setNotify(cc, 0, function (data) {
              context.Toast("订阅成功")
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              eventNodeItem.context.reloadPage()
          }, function (errorMsg) {
              alterNewNode.context.Toast(errorMsg)
              alterNewNode.onButtonCancel()
          })
      }, function (err) {
          alterNewNode.context.Toast(err)
      })
  }
  GroupAdTech(alterNewNode, context, eventNodeItem) {
      if (window.UserData.group.groupMyInfo.next_ad_time > context.getServerTime()) {
          alterNewNode.context.Toast("广告冷却中...")
          return
      }
      context.Ad.ShowAd("Task", function () {
          context.api.GroupAdTech(cc, eventNodeItem.techType, function (data) {
              if (window.UserData.group.groupMyInfo) {
                  window.UserData.group.groupMyInfo.next_ad_time = context.getServerTime() + 600
              }
              if (alterNewNode && data.group) {
                  alterNewNode.LoadView(data.group["tech_" + eventNodeItem.techType])
                  alterNewNode.Alert()
              } else if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              alterNewNode.context.Toast("贡献成功")
          }, function (errorMsg) {
              alterNewNode.context.Toast(errorMsg)
              alterNewNode.onButtonCancel()
          })
      }, function (err) {
          alterNewNode.context.Toast(err)
      })
  }
  HandleAgree(alterNewNode, context, eventNodeItem) {
      context.api.HandleGroupAgree(cc, eventNodeItem.attr.id, 30, function (data) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          window.UserData.reloadGroupInfo()
          alterNewNode.context.Toast("已同意")
          alterNewNode.onButtonCancel()
      }, function (errorMsg) {
          alterNewNode.context.Toast(errorMsg)
          alterNewNode.onButtonCancel()
      })
  }
  CancelApplyGroup(alterNewNode, context, eventNodeItem) {
      context.api.CancelApplyGroup(cc, function (data) {
          window.UserData.reloadGroupInfo()
          alterNewNode.context.Toast("已取消申请")
          alterNewNode.onButtonCancel()
      }, function (errorMsg) {
          alterNewNode.context.Toast(errorMsg)
          alterNewNode.onButtonCancel()
      })
  }
  //AddGroup AddGroup
  AddGroup(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }

      var reason = "申请加入军团"

      eventNodeItem.lock = true

      context.api.AddGroup(cc, eventNodeItem.attr.id, reason, function (res) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast("申请成功")
          eventNodeItem.lock = false
          context.reloadPage()
      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }
  //CreateGroup CreateGroup
  CreateGroup(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      var name = ""
      eventNodeItem.resultList.forEach((item, index) => {
          if (item.groupName && item.groupName != "") {
              name = item.groupName
          }
      })
      if (name == "") {
          eventNodeItem.context.Toast("军团名称不能为空")
          return
      }

      eventNodeItem.lock = true
      context.api.CreateGroup(cc, name, function (res) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          window.UserData.user.info.group_id = res.id

          eventNodeItem.context.Toast("创建成功")
          eventNodeItem.lock = false
          window.UserData.reloadHomeInfo("user", null)
          window.UserData.reloadGroupInfo()
          // context.reloadPage()
      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }
  //SkipExchange  进入交易所
  SkipExchange(alterNewNode, context, eventNodeItem) {
      context.skipScene("Exchange")

  }
  SearchArmy(alterNewNode, context, eventNodeItem) {
      var radius = 0
      if (eventNodeItem.attr.level == 11) {
          radius = 20
      } else if (eventNodeItem.attr.level == 12) {
          radius = 30
      }
      context.api.SearchAround(cc, eventNodeItem.context.cityInfo.id, radius, function (data) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          var alter2Node = context.NewAlert2()
          alter2Node.InitAlert("敌人信息", "关闭")
          var neweventNodeItem = context.newAlertItem()
          alter2Node.Alert()
          alter2Node.OnButtonFunc = function (eventNodeItem) {
              alter2Node.onButtonCancel()
          }

          alter2Node.addNewLine("text_mid", "统帅", { "text": `坐标/荣誉` })
          data.list.forEach((item, index) => {
              if (item.lng == context.cityInfo.lng && item.lat == context.cityInfo.lat) {
                  return
              }
              alter2Node.addNewLine("text_mid", item.name.substr(0, 6), { "text": `(${item.lng},${item.lat}) / ${item.honor}`, "cusButtonText": "查看" }, function (attr) {
                  alter2Node.onButtonCancel()
                  var fn = eventNodeItem.funcs['showMapDetailAlert'].func
                  fn(alter2Node, context, item.map_id)
              })
          })
      }, function (errorMsg) {
          console.log(errorMsg)
          alterNewNode.context.Toast(errorMsg)
          alterNewNode.onButtonCancel()
      })
  }

  //junxianUpgrade junxianUpgrade
  junxianUpgrade(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      eventNodeItem.lock = true
      context.api.JunxianUpgrade(cc, function (res) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast("晋级成功")
          eventNodeItem.lock = false
          context.reloadPage()
      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }

  showMapDetailAlert(alterNewNode, context, id, source_id) {
      if (source_id === undefined) {
          source_id = window.UserData.city.info.source_id
      }
      context.api.requestAPI(cc, "GET", "/map/getbyid?id=" + id + "&source_id=" + source_id, {}, function (res) {
          var alter2Node = context.NewAlert2()
          alter2Node.InitAlert(res.table.title, "")
          var loc = 0
          for (var i = 0; i < res.table.body.length; i++) {
              if (res.table.body[i].type == "areatext") {
                  alter2Node.addNewLine("wrap_text", res.table.body[i].key, { "text": res.table.body[i].value })
              } else if (res.table.body[i].type == "text") {
                  alter2Node.addNewLine("text_mid", res.table.body[i].key, { "text": res.table.body[i].value })
              } else if (res.table.body[i].type == "text_copy") {
                  //解决闭包问题
                  (function (resItem) {
                      alter2Node.addNewLine("text_mid", resItem.key, { "text": resItem.value, "cusButtonText": "复制" }, function (resItem) {
                          let f = ""
                          if (window.wx) {
                              f = function () {

                                  // console.log('复制---微信小游戏--cc.sys.platform=', cc.sys.platform);
                                  wx.setClipboardData({
                                      data: resItem.value,
                                      success: function (res) {
                                          console.log("success复制成功：", window.UserData.user.info.name);
                                          return true;
                                      }
                                  });

                                  return;
                              }
                          }
                      })
                  })(res.table.body[i])



              } else {
                  alter2Node.addNewLine(res.table.body[i].type, res.table.body[i].key, { "text": res.table.body[i].value })

              }
          }

          if (res.table.action.length > 0) {
              var eventNodeItem = {}
              eventNodeItem.context = context
              console.log("context", context)
              eventNodeItem.attr = res.detail
              if (res.cityInfo) {
                  eventNodeItem.attr.cityInfo = res.cityInfo
              }
              eventNodeItem.destUser = res.user
              eventNodeItem.funcs = context.AlertFunc.getFuncByName(eventNodeItem)
              for (var i = 0; i < res.table.action.length; i++) {
                  if (eventNodeItem.funcs[res.table.action[i].action]) {

                      alter2Node.AddButtonFrom0(eventNodeItem.funcs[res.table.action[i].action])
                  } else {
                      console.log("==缺少按钮", res.table.action[i].action)
                  }

              }
          }
          alter2Node.Alert()

      })

  }
  xingjunjimou(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }


      var alter2Node = context.NewAlert4()
      eventNodeItem.alterNewNode = alter2Node

      alter2Node.InitAlert("计谋", "使用")
      //获取计谋列表
      var plotItems = Array()
      var officerItems = Array()
      var plotMap = new Map()
      plotItems.push({ "text": "无", "value": 0, "default": true })
      officerItems.push({ "text": "无", "value": 0, "default": true })
      //军官
      var officerId = 0
      var officerNode = alter2Node.addNewLine("selector", "军官:", {
          "value": officerItems
      }, function (value) {
          if (value > 0) {
              officerId = value
          }
      })

      //计谋
      var descObjNode = null
      var plotId = 0
      var propNode = alter2Node.addNewLine("selector", "计谋:", {
          "value": plotItems
      }, function (value) {
          if (plotMap.has(value)) {
              plotId = value
              descObjNode.resetText("计谋说明:", { "text": plotMap.get(value) })
          } else {
              descObjNode.resetText("", { "text": "" })
          }
      })

      context.api.getBattleMarchPlot(cc, function (res) {

          for (var i = 0; i < res.plot.length; i++) {
              plotItems.push({ "text": res.plot[i].name + "（消耗" + res.plot[i].use + "信号弹）", "value": res.plot[i].uuid, "default": false })
              plotMap.set(res.plot[i].uuid, res.plot[i].desc)
          }
          // 设置下拉框的数据
          propNode.setSelector(plotItems)
          for (var i = 0; i < res.officer.length; i++) {
              officerItems.push({ "text": res.officer[i].officer_name + "（学识" + res.officer[i].officer_knowledge + "）", "value": res.officer[i].officer_id, "default": false })
          }
          // 设置下拉框的数据
          officerNode.setSelector(officerItems)

      }, function (errMsg) {
          alterNewNode.context.Toast(errMsg)
          alter2Node.onButtonCancel()
      })

      //todo 样式不对
      alter2Node.contentArea.node.getComponent(cc.Layout).updateLayout()
      alter2Node.contentArea.node.getComponent(cc.Layout).enabled = false
      officerNode.node.zIndex = 300
      propNode.node.zIndex = 200
      alter2Node.contentArea.node.getComponent(cc.Layout).updateLayout()

      //todo 样式不对
      descObjNode = alter2Node.addNewLine("wrap_text", "", { "text": "" })
      //使用计谋
      alter2Node.OnButtonFunc = function () {
          if (!officerId) {
              context.Toast("必须选择一个军官")
              return
          }
          var attr = new Object()

          attr.lng = window.UserData.city.info.lng
          attr.lat = window.UserData.city.info.lat
          attr.report_id = eventNodeItem.attr.report.id
          attr.plot_type = "to_march"
          context.api.UsePlotCity(cc, officerId, eventNodeItem.attr.report.user_id, plotId, attr, function (res) {
              context.Toast("使用成功")
              alter2Node.onButtonCancel()
              console.log(res)
          }, function (errorMsg) {
              context.Toast(errorMsg)
              alter2Node.onButtonCancel()
          })
      }

      alter2Node.Alert()
  }
  ShanrangGroup(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      var alter2Node = context.NewAlert2()
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.InitAlert("转让团长", "转让")

      alter2Node.addNewLine("wrap_text", "提示:", { "text": `确定把团长转让给${eventNodeItem.attr.user_name}吗` })
      alter2Node.addNewLine("wrap_text", "", { "text": `不可撤销，请谨慎操作。` })

      alter2Node.OnButtonFunc = function () {
          context.api.Shanrang(cc, eventNodeItem.attr.user_id, function (res) {
              alter2Node.context.Toast("转让成功")
              window.UserData.reloadGroupInfo()
              alter2Node.onButtonCancel()
          }, function (errorMsg) {
              alter2Node.context.Toast(errorMsg)
              alter2Node.onButtonCancel()
          })
      }


      alter2Node.Alert()
  }
  //计谋弹窗
  jimou(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      console.log(eventNodeItem)

      var alter2Node = context.NewAlert4()
      eventNodeItem.alterNewNode = alter2Node

      alter2Node.InitAlert("计谋", "使用")
      //获取计谋列表
      var plotItems = Array()
      var officerItems = Array()
      var plotMap = new Map()
      plotItems.push({ "text": "无", "value": 0, "default": true })
      officerItems.push({ "text": "无", "value": 0, "default": true })
      //军官
      var officerId = 0
      var officerNode = alter2Node.addNewLine("selector", "军官:", {
          "value": officerItems
      }, function (value) {
          if (value > 0) {
              officerId = value
          }
      })

      //计谋
      var descObjNode = null
      var plotId = 0
      var propNode = alter2Node.addNewLine("selector", "计谋:", {
          "value": plotItems
      }, function (value) {
          if (plotMap.has(value)) {
              plotId = value
              descObjNode.resetText("计谋说明:", { "text": plotMap.get(value) })
          } else {
              descObjNode.resetText("", { "text": "" })
          }
      })

      context.api.GetPlotList(cc, eventNodeItem.attr.user_id, eventNodeItem.attr.city_id, function (res) {

          for (var i = 0; i < res.plot.length; i++) {
              plotItems.push({ "text": res.plot[i].name + "（消耗" + res.plot[i].use + "信号弹）", "value": res.plot[i].uuid, "default": false })
              plotMap.set(res.plot[i].uuid, res.plot[i].desc)
          }
          // 设置下拉框的数据
          propNode.setSelector(plotItems)
          for (var i = 0; i < res.officer.length; i++) {
              officerItems.push({ "text": res.officer[i].officer_name + "（学识" + res.officer[i].officer_knowledge + "）", "value": res.officer[i].officer_id, "default": false })
          }
          // 设置下拉框的数据
          officerNode.setSelector(officerItems)

      }, function (errMsg) {
          alterNewNode.context.Toast(errMsg)
          alter2Node.onButtonCancel()
      })

      //todo 样式不对
      alter2Node.contentArea.node.getComponent(cc.Layout).updateLayout()
      alter2Node.contentArea.node.getComponent(cc.Layout).enabled = false
      officerNode.node.zIndex = 300
      propNode.node.zIndex = 200
      alter2Node.contentArea.node.getComponent(cc.Layout).updateLayout()

      //todo 样式不对
      descObjNode = alter2Node.addNewLine("wrap_text", "", { "text": "" })
      //使用计谋
      alter2Node.OnButtonFunc = function () {
          if (!officerId) {
              context.Toast("必须选择一个军官")
              return
          }
          var attr = new Object()

          attr.lng = window.UserData.city.info.lng
          attr.lat = window.UserData.city.info.lat
          attr.focus_lng = eventNodeItem.attr.lng
          attr.focus_lat = eventNodeItem.attr.lat
          attr.focus_city_id = eventNodeItem.attr.city_id

          context.api.UsePlotCity(cc, officerId, eventNodeItem.attr.user_id, plotId, attr, function (res) {
              context.Toast("使用成功")
              alter2Node.onButtonCancel()
              console.log(res)
          }, function (errorMsg) {
              context.Toast(errorMsg)
              alter2Node.onButtonCancel()
          })
      }

      alter2Node.Alert()
  }

  Xuanzhan(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      var alter2Node = context.NewAlert2()
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.InitAlert("宣战", "宣战")

      alter2Node.addNewLine("wrap_text", "提示:", { "text": `请问您确定对【${eventNodeItem.destUser.name}】宣战吗？\n本操作不可撤回，请谨慎选择。` })
      alter2Node.addNewLine("wrap_text", "", { "text": `同阵营玩家【4小时】后开战，战争状态持续【24小时】\n\n不同阵营玩家【2小时】后开战，战争状态持续【48小时】` })

      alter2Node.OnButtonFunc = function () {
          context.api.AddRelation(cc, eventNodeItem.destUser.user_id, "user", { "lng": window.UserData.city.info.lng, "lat": window.UserData.city.info.lat, "focus_lng": eventNodeItem.attr.lng, "focus_lat": eventNodeItem.attr.lat }, function (res) {
              alter2Node.context.Toast("宣战成功")
              alter2Node.onButtonCancel()
          }, function (errorMsg) {
              alter2Node.context.Toast(errorMsg)
              alter2Node.onButtonCancel()
          })
      }


      alter2Node.Alert()
  }

  RecoverloseArmies(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      var alter2Node = context.NewAlert2()
      eventNodeItem.alterNewNode = alter2Node

      alter2Node.InitAlert(eventNodeItem.attr.name, "治疗")
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("text", "", { "text": "" })
      var gold = Number(eventNodeItem.attr.name_type) * eventNodeItem.attr.lose_number * 2
      var food = Number(eventNodeItem.attr.name_type) * eventNodeItem.attr.lose_number * 5
      alter2Node.addNewLine("wrap_text", "说明", { "text": `治疗${eventNodeItem.attr.name}(${eventNodeItem.attr.lose_number})需要花费\n${gold}黄金\n${food}粮食\n确定治疗他们吗?` })

      alter2Node.OnButtonFunc = function () {
          context.api.recoverArmies(cc, eventNodeItem.attr.id, function (data) {
              alter2Node.context.Toast("治疗完成")
              alter2Node.onButtonCancel()
              eventNodeItem.funcs["showloseArmies"].func(alter2Node, alter2Node.context, eventNodeItem)
          }, function (errorMsg) {
              alterNewNode.context.Toast(errorMsg)
              alter2Node.onButtonCancel()
          })
      }

      alter2Node.Alert()
  }
  DefenseSettingV2(alterNewNode, context, eventNodeItem) {
      if (!cc.props.cityArmies) {
          context.Toast("需要首页刷新军队信息")
          return
      }
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var cfg = {
          "defense": {
              "name": "防守战术",
              "total": 0,
              "armies": {},
          },
          "battle1": {
              "name": "出征战术1",
              "total": 0,
              "armies": {},
          },
          "battle2": {
              "name": "出征战术2",
              "total": 0,
              "armies": {},
          },
          "battle3": {
              "name": "出征战术3",
              "total": 0,
              "armies": {},
          },
      }
      var commandBuildingLevel = 0
      var wallBuildingLevel = 0
      for (var i = 0; i < window.UserData.city.armyBuildings.length; i++) {
          var item = window.UserData.city.armyBuildings[i]
          if (item.name_type == "2") {
              commandBuildingLevel = item.level
          } else if (item.name_type == "18") {
              wallBuildingLevel = item.level
          } else {
              continue
          }
      }
      var cityComander = null
      for (var i = 0; i < window.UserData.city.officers.length; i++) {
          var item = window.UserData.city.officers[i]
          if (item.stu == 20) {
              cityComander = item
              break
          }
      }
      if (eventNodeItem.attr.attr && eventNodeItem.attr.attr.army_battle_setting) {
          for (let battlekey in eventNodeItem.attr.attr.army_battle_setting) {

              if (eventNodeItem.attr.attr.army_battle_setting[battlekey].total) {
                  cfg[battlekey].total = eventNodeItem.attr.attr.army_battle_setting[battlekey].total
              }
              for (let key in eventNodeItem.attr.attr.army_battle_setting[battlekey]["armies"]) {
                  cfg[battlekey]["armies"][key] = eventNodeItem.attr.attr.army_battle_setting[battlekey]["armies"][key]
              }
          }
      }
      var _this = this
      var alter2Node = context.NewAlert4()
      alter2Node.InitAlert("防守设置", "确定")
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.addNewLine("wrap_text", "提示", { "text": "只有设置防守战术后，被攻击城市才会出战。防守战术每30分钟可调整一次。" })
      var officerPower = cityComander ? cityComander.op + cityComander.equip_officer_power : 0
      var officerTech = cityComander ? cityComander.ok + cityComander.equip_officer_knowledge : 0
      alter2Node.addNewLine("text_mid", "", { "text": "" })

      var totleCanNum = (80000 + commandBuildingLevel * 10000 + (officerPower + officerTech) * 200) * (1 + 0.30 * wallBuildingLevel)
      totleCanNum = Math.floor(totleCanNum)
      var formulaNode = alter2Node.addNewLine("wrap_text", "说明:", { "text": "(80000 + 司令部等级*10000 + (市长军事+市长学识)*200)*(1+0.30*围墙等级)" })
      alter2Node.addNewLine("text_mid", "", { "text": "" })
      var realNode = alter2Node.addNewLine("wrap_text", "公式:", { "text": `(80000+${commandBuildingLevel}*10000+(${officerPower}+${officerTech})*200)*(1+0.30*${wallBuildingLevel})=${totleCanNum}` })

      alter2Node.addNewLine("text_mid", "", { "text": "" })

      var items = Array()
      for (let key in cfg) {
          if (key == "defense") {
              items.push({ "text": cfg[key].name, "value": key, "default": true })
          } else {
              items.push({ "text": cfg[key].name, "value": key, "default": false })
          }

      }
      var itemList = {}

      var resetFunc = function (cfgkey) {
          if (cfgkey == "defense") {
              formulaNode.resetText("说明:", { "text": "防守可出兵总数 = (80000 + 司令部等级*10000 + (市长军事+市长学识)*200)*(1+0.30*围墙等级)" })
              totleCanNum = (80000 + commandBuildingLevel * 10000 + (officerPower + officerTech) * 200) * (1 + 0.30 * wallBuildingLevel)
              totleCanNum = Math.floor(totleCanNum)
              realNode.resetText("公式", { "text": `(80000+${commandBuildingLevel}* 10000+(${officerPower}+${officerTech})*200)*(1+0.30*${wallBuildingLevel})=${totleCanNum}` })
          } else {
              formulaNode.resetText("说明:", { "text": "进攻可出兵总数 = (80000 + 司令部等级*10000 + (主将军事+主将学识)*200)" })
              totleCanNum = (80000 + commandBuildingLevel * 10000 + (officerPower + officerTech) * 200)
              realNode.resetText("公式", { "text": `(80000+${commandBuildingLevel}* 10000+(${officerPower}+${officerTech})*200)=${totleCanNum}` })
          }
          if (!cfg[cfgkey].total) {
              cfg[cfgkey].total = totleCanNum
          }
          for (var i = 0; i < cc.props.cityArmies.length; i++) {

              if (cfg[cfgkey]) {
                  _this.totalNode.setInputValue(cfg[cfgkey].total)
                  if (cfg[cfgkey]["armies"][cc.props.cityArmies[i].name_type]) {
                      cc.props.cityArmies[i].action = cfg[cfgkey]["armies"][cc.props.cityArmies[i].name_type].action
                      cc.props.cityArmies[i].pre_num = cfg[cfgkey]["armies"][cc.props.cityArmies[i].name_type].pre_num
                  } else {
                      cc.props.cityArmies[i].action = "goon"
                      cc.props.cityArmies[i].pre_num = 0
                  }
              }

              let d = {
                  "attr": cc.props.cityArmies[i],
                  "min": 0,
                  "max": cfg[cfgkey].total,
                  "canSlideFunc": function (oldValue, newValue, attr) {
                      let totalNum = 0
                      for (let nameType in itemList) {
                          if (itemList[nameType].attr.name_type == attr.name_type) {
                              totalNum += newValue
                          } else {
                              totalNum += itemList[nameType].getSliderValue()
                          }
                      }
                      var maxNum = cfg[cfgkey].total
                      if (_this.totalNode && Number(_this.totalNode.getValue())) {
                          maxNum = _this.totalNode.getValue()
                      }
                      if (totalNum > maxNum) {
                          context.Toast("已超过最大出兵数:" + maxNum);
                          return newValue - (totalNum - maxNum)
                      }
                      return newValue
                  }
              }

              if (itemList[cc.props.cityArmies[i].name_type]) {
                  itemList[cc.props.cityArmies[i].name_type].resetData(d)
              } else {
                  var objItem = alter2Node.addNewLine("battleSettingItem", `${cc.props.cityArmies[i].name}`, d)
                  itemList[cc.props.cityArmies[i].name_type] = objItem
              }

          }
      }
      var lastValue = "defense"

      this.SelectorNode = alter2Node.addNewLine("selector", "类型:", { "value": items }, function () {
          if (_this.SelectorNode.getValue() == lastValue) {
              return
          }
          lastValue = _this.SelectorNode.getValue()
          resetFunc(lastValue)
      })

      alter2Node.addNewLine("text_mid", "", { "text": "" })

      this.totalNode = alter2Node.addNewLine("input_long", "设置总数:", { "maxLength": 7, "showNumberKey": true, "value": cfg[lastValue].total, "lineHeight": 30 }, function (value) {
          var num = Number(value)
          if (!num) {
              return
          }
          for (let nameType in itemList) {
              itemList[nameType].data.max = num
              itemList[nameType].resetData(itemList[nameType].data)
          }

      })

      resetFunc(lastValue)

      alter2Node.contentArea.node.getComponent(cc.Layout).updateLayout()
      alter2Node.contentArea.node.getComponent(cc.Layout).enabled = false
      this.SelectorNode.node.zIndex = 300
      alter2Node.contentArea.node.getComponent(cc.Layout).updateLayout()

      alter2Node.OnButtonFunc = function () {
          var userCfg = {}
          let totalNum = 0
          for (let nameType in itemList) {
              itemList[nameType].attr.action = itemList[nameType].getValue();
              totalNum += itemList[nameType].getSliderValue()
              itemList[nameType].attr.pre_num = itemList[nameType].getSliderValue()
              if (!itemList[nameType].attr.pre_num || itemList[nameType].attr.pre_num <= 0) {
                  continue
              }
              userCfg[itemList[nameType].attr.name_type] = {}
              userCfg[itemList[nameType].attr.name_type]["name"] = itemList[nameType].attr.name
              userCfg[itemList[nameType].attr.name_type]["name_type"] = itemList[nameType].attr.name_type
              userCfg[itemList[nameType].attr.name_type]["action"] = itemList[nameType].attr.action
              userCfg[itemList[nameType].attr.name_type]["pre_num"] = itemList[nameType].attr.pre_num

          }


          if (totalNum != _this.totalNode.getValue()) {
              context.Toast("必须和出兵总数相等，当前" + totalNum);
              return
          }
          context.api.setDefenseCfg(cc, _this.totalNode.getValue(), lastValue, userCfg, function (res) {
              context.Toast("设置成功")
              window.UserData.reloadHomeInfo("buildings", null)
          }, function (errMsg) {
              context.Toast(errMsg)
          })
      }

      alter2Node.Alert()

  }
  DefenseSetting(alterNewNode, context, eventNodeItem) {
      if (!cc.props.cityArmies) {
          context.Toast("需要首页刷新军队信息")
          return
      }
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var cfg = {}

      if (eventNodeItem.attr.attr && eventNodeItem.attr.attr.army_setting) {
          for (let key in eventNodeItem.attr.attr.army_setting) {
              cfg[eventNodeItem.attr.attr.army_setting[key].name_type] = eventNodeItem.attr.attr.army_setting[key]
          }
      }

      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("战术设置", "确定")
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.addNewLine("wrap_text", "提示", { "text": "只有设置防守战术后，被攻击城市才会出战。\n 也可在此页设置出征战术。" })

      var itemList = []
      for (var i = 0; i < cc.props.cityArmies.length; i++) {
          if (cc.props.cityArmies[i].name_type == 3) {
              continue
          }
          if (cfg[cc.props.cityArmies[i].name_type]) {
              cc.props.cityArmies[i].action = cfg[cc.props.cityArmies[i].name_type].action
              cc.props.cityArmies[i].pre_num = cfg[cc.props.cityArmies[i].name_type].pre_num
          }
          let d = {
              "attr": cc.props.cityArmies[i],
              "min": 0,
              "max": 100,
              "canSlideFunc": function (oldValue, newValue, attr) {
                  let totalNum = 0

                  for (var i = 0; i < itemList.length; i++) {
                      if (itemList[i].attr.name_type == attr.name_type) {
                          totalNum += newValue
                      } else {
                          totalNum += itemList[i].getSliderValue()
                      }

                  }
                  if (totalNum > 100) {
                      context.Toast("请降低其他兵种比例");
                      return newValue - (totalNum - 100)
                  }
                  return newValue
              }
          }
          var objItem = alter2Node.addNewLine("battleSettingItem", `${cc.props.cityArmies[i].name}`, d)
          itemList.push(objItem)
      }
      alter2Node.OnButtonFunc = function () {
          var userCfg = {}
          let totalNum = 0

          for (var i = 0; i < itemList.length; i++) {
              itemList[i].attr.action = itemList[i].getValue();
              totalNum += itemList[i].getSliderValue()
              itemList[i].attr.pre_num = itemList[i].getSliderValue()
              if (itemList[i].attr.action != "sleep" && itemList[i].attr.pre_num <= 0) {
                  context.Toast(itemList[i].attr.name + "至少出战1%");
                  return
              }
              userCfg[itemList[i].attr.name_type] = itemList[i].attr;
          }

          if (totalNum != 100) {
              context.Toast("比例总和须为100%");
              return
          }
          context.api.setDefenseCfg(cc, userCfg, function (res) {
              context.Toast("设置成功")
              alter2Node.onButtonCancel()
              context.reloadPage()
          }, function (errMsg) {
              context.Toast(errMsg)
          })
      }

      alter2Node.Alert()

  }
  ShowloseArmies(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("伤兵营", "关闭")
      eventNodeItem.alterNewNode = alter2Node

      var snum = 0
      alter2Node.addNewLine("text", "", { "text": "" })
      context.api.cityArmies(cc, function (armies) {
          for (var i = 0; i < armies.length; i++) {
              if (armies[i].lose_number <= 0) {
                  continue
              }
              snum++
              (function (item) {
                  var neweventNodeItem = context.newAlertItem()
                  neweventNodeItem.attr = item
                  neweventNodeItem.alterNewNode = alter2Node
                  alter2Node.addNewLine("text_mid", `  ${armies[i].name}`, { "eventNodeItem": neweventNodeItem, "text": `${armies[i].lose_number}`, "cusButtonText": "治疗" }, eventNodeItem.funcs["recoverloseArmies"].func)


              })(armies[i])
          }
          if (snum == 0) {
              alter2Node.addNewLine("text", "", { "text": "" })
              alter2Node.addNewLine("wrap_text", "说明", { "text": "战斗过程中损失的军队，会有10%-30%左右的军队回到伤兵营。您可以使用黄金治疗他们。" })

          }
      }, function (errorMsg) {
          alterNewNode.context.Toast(errorMsg)
          alterNewNode.onButtonCancel()
      })

      alter2Node.OnButtonFunc = alter2Node.onButtonCancel

      alter2Node.Alert()
  }
  adTask(alterNewNode, context, eventNodeItem) {
      let id = eventNodeItem.attr.data.id
      context.Ad.ShowAd("Task", function () {
          context.api.finishTask(cc, id, 1, function (data) {
              context.reloadPage()
              alterNewNode.context.Toast("获得翻倍奖励!")
              alterNewNode.onButtonCancel()
          }, function (errorMsg) {
              alterNewNode.context.Toast(errorMsg)
              alterNewNode.onButtonCancel()
          })
      }, function (err) {
          alterNewNode.context.Toast(err)
      })
  }
  adArmyAcce(alterNewNode, context, eventNodeItem) {
      context.Ad.ShowAd("ArmyTrain", function () {
          context.api.MagicAcce(cc, eventNodeItem.attr.id, eventNodeItem.attr.type, function (res) {
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }

              eventNodeItem.context.Toast(res.msg)
              res.attr.index = eventNodeItem.attr.index
              eventNodeItem.attr = res.attr
              window.UserData.UpdateLocalObject(eventNodeItem.attr)
              // if (eventNodeItem.reloadPage) {
              //     eventNodeItem.reloadPage(res.attr)
              // } else {
              //     context.reloadPage()
              // }
          }, function (errMsg) {
              alterNewNode.context.Toast(errMsg)
          })
      }, function (err) {
          alterNewNode.context.Toast(err)
      })
  }
  //zhiweiUpgrade zhiweiUpgrade
  zhiweiUpgrade(alterNewNode, context, eventNodeItem) {

      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      eventNodeItem.lock = true
      context.api.ZhiweiUpgrade(cc, function (res) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast("晋级成功")
          eventNodeItem.lock = false
          context.reloadPage()
      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }
  showZhiWeiAlert(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("职位晋升", "关闭")
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("wrap_text", "下一级:", { "text": `${eventNodeItem.data.zhiwei_item.next.name}` })
      alter2Node.addNewLine("wrap_text", "军衔要求:", { "text": `${eventNodeItem.data.zhiwei_item.next.junxian_text}` })
      alter2Node.addNewLine("wrap_text", "条件:", { "text": `荣誉: ${eventNodeItem.data.zhiwei_item.next.honor} \n\n黄金: ${eventNodeItem.data.zhiwei_item.next.gold}` })
      alter2Node.addNewLine("wrap_text", "说明:", { "text": `职位是统帅软实力的综合体现之一，是晋级军衔的必要条件。` })
      if (eventNodeItem.data.honor >= eventNodeItem.data.zhiwei_item.next.honor && cc.props.cityRes.gold >= eventNodeItem.data.zhiwei_item.next.gold && cc.props.userInfo.junxian >= eventNodeItem.data.zhiwei_item.next.junxian) {
          alter2Node.setButton0(eventNodeItem, "晋升", eventNodeItem.funcs["zhiweiUpgrade"].func)
      } else {
          alter2Node.OnButtonFunc = alter2Node.onButtonCancel
          alter2Node.addNewLine("wrap_text", "当前", { "text": `荣誉: ${eventNodeItem.data.honor} \n\n黄金: ${cc.props.cityRes.gold}` })
      }

      alter2Node.Alert()
  }
  showJunxianAlert(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("军衔晋升", "关闭")
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("wrap_text", "下一级:", { "text": `${eventNodeItem.data.junxian_item.next.name}` })

      alter2Node.addNewLine("wrap_text", "职位要求:", { "text": `${eventNodeItem.data.junxian_item.next.zhiwei_text}` })
      if (eventNodeItem.data.junxian_item.next.needs) {
          var bw = ""
          for (var i = 0; i < eventNodeItem.data.junxian_item.next.needs.length; i++) {
              bw += `${eventNodeItem.data.junxian_item.next.needs[i].text} * ${eventNodeItem.data.junxian_item.next.needs[i].num}\n\n`
          }
          alter2Node.addNewLine("wrap_text", "需要宝物:", { "text": bw })
      }
      if (eventNodeItem.data.zhiwei >= eventNodeItem.data.junxian_item.next.zhiwei) {
          alter2Node.setButton0(eventNodeItem, "晋升", eventNodeItem.funcs["junxianUpgrade"].func)
      } else {
          alter2Node.addNewLine("wrap_text", "说明:", { "text": "当前职位不符，无法晋衔。" })
          alter2Node.OnButtonFunc = alter2Node.onButtonCancel
      }
      alter2Node.addNewLine("wrap_text", "扩张城市:", {
          "text": `下士 : 可以拥有 2 座城市。\n
上士 : 可以拥有 3 座城市\n
准尉 : 可以拥有 4 座城市\n
中尉 : 可以拥有 5 座城市\n
大尉 : 可以拥有 6 座城市\n
中校 : 可以拥有 7 座城市\n
少将 : 可以拥有 8 座城市\n
上将 : 可以拥有 9 座城市\n`})
      alter2Node.addNewLine("wrap_text", "军衔顺序:", { "text": `下士\n\n中士\n\n上士\n\n军士长\n\n准尉\n\n少尉\n\n中尉\n\n上尉\n\n大尉\n\n少校\n\n中校\n\n大校\n\n少将\n\n中将\n\n上将\n\n` })
      alter2Node.Alert()
  }
  acceAlert(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("时间加速", "确定")
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("wrap_text", "说明:", { "text": `普通加速可以加速30分钟，且只能加速一次。\n\n道具加速使用加速包，加速效果累加。` })
      eventNodeItem.ShowPropType = 3
      if (eventNodeItem.attr.has_acce == 0) {
          alter2Node.setButton0(eventNodeItem, "普通加速", eventNodeItem.funcs["objectAcce"].func)
          alter2Node.AddButton(eventNodeItem.funcs["accePropList"])

      } else {
          alter2Node.AddButtonFrom0(eventNodeItem.funcs["accePropList"])
      }


      alter2Node.Alert()
  }
  cancelArmy(alterNewNode, context, eventNodeItem) {
      context.api.MagicCancel(cc, eventNodeItem.attr.id, "army", function (res) {
          if (eventNodeItem.reloadPage) {
              eventNodeItem.reloadPage()
          } else {
              context.reloadPage()
          }
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
      })
  }
  //accePropList 可用加速道具列表
  accePropList(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.ShowPropType == 3 && eventNodeItem.attr && eventNodeItem.attr.building_end == -1) {
          eventNodeItem.context.Toast("建造完成")
          return
      }

      context.api.propListWithType(cc, eventNodeItem.ShowPropType, function (res) {

          var listInfo = []
          for (var i = 0; i < res.length; i++) {
              listInfo.push(res[i])
          }
          var alter2Node = eventNodeItem.context.NewAlert2()
          alter2Node.InitAlert("加速道具", "关闭");

          eventNodeItem.alterNewNode = alter2Node
          if (listInfo.length == 0) {
              alter2Node.addNewLine("nocontent", "", { "value": "<color=#000000>暂无任何宝物</c>" })
          } else {
              for (var i = 0; i < listInfo.length; i++) {
                  if (listInfo[i].detail.type != eventNodeItem.ShowPropType) {
                      continue
                  }

                  //解决闭包问题
                  (function (dataItem) {
                      if (eventNodeItem.ShowPropType == 3) {
                          alter2Node.addNewLine("text", "", { "text": `${dataItem.name} * ${dataItem.number}`, "data": dataItem, "editAction": "使用", "editAction2": "一键加速" }, function (event, attr) {
                              var data = {
                                  "id": attr.data.id,
                                  "number": 1,
                                  "type": eventNodeItem.attr.type,
                                  "object_id": eventNodeItem.attr.id
                              }
                              eventNodeItem.funcs["useUserPropV2"].func(alter2Node, context, eventNodeItem, data)
                          }, function (event, attr) {
                              var data = {
                                  "id": attr.data.id,
                                  "number": 1,
                                  "use_type": "yijian",
                                  "type": eventNodeItem.attr.type,
                                  "object_id": eventNodeItem.attr.id
                              }
                              console.log(data)
                              alter2Node.context.Toast("使用一键加速超出部分不返还")
                              eventNodeItem.funcs["useUserPropV2"].func(alter2Node, context, eventNodeItem, data)
                          })
                          return
                      }
                      alter2Node.addNewLine("text", "", { "text": `${dataItem.name} * ${dataItem.number}`, "data": dataItem, "editAction": "使用" }, function (event, attr) {
                          if (dataItem.prop_id == 260 || dataItem.prop_id == 261) {
                              eventNodeItem.propData = dataItem
                              eventNodeItem.funcs["addExpForOfficer"].func(alter2Node, context, eventNodeItem)
                              return
                          }
                          var data = {
                              "id": attr.data.id,
                              "number": 1,
                              "type": eventNodeItem.attr.type,
                              "object_id": eventNodeItem.attr.id
                          }
                          //调用加速接口
                          context.api.UserPropV2(cc, data, function (res) {

                              if (res && res.building_end) {
                                  eventNodeItem.attr.building_end = res.building_end
                              }

                              if (eventNodeItem.ShowPropType == 5) {
                                  if (res.attr) {
                                      eventNodeItem.attr = res.attr
                                  } else {
                                      eventNodeItem.context.Toast("培养失败")
                                  }
                                  eventNodeItem.funcs["handlerOfficer"].func(alterNewNode, context, eventNodeItem)
                                  window.UserData.reloadHomeInfo("cityOfficer", null)
                                  if (eventNodeItem.reloadPage) {
                                      eventNodeItem.reloadPage()
                                  } else {
                                      context.reloadPage()
                                  }
                              } else if (eventNodeItem.ShowPropType == 3) {
                                  if (res && eventNodeItem.attr.index >= 0) {
                                      res.attr.index = eventNodeItem.attr.index
                                      window.UserData.UpdateLocalObject(res.attr)
                                  } else {
                                      window.UserData.ReloadByType(res.attr.type)
                                  }
                                  if (res.attr.building_end > context.getServerTime()) {
                                      eventNodeItem.funcs["accePropList"].func(null, context, eventNodeItem)
                                  }


                              } else {
                                  if (res.attr) {
                                      eventNodeItem.attr = res.attr
                                  }
                                  eventNodeItem.funcs["accePropList"].func(null, context, eventNodeItem)
                              }
                              if (alter2Node) {
                                  alter2Node.onButtonCancel()
                              }


                          }, function (errMsg) {
                              eventNodeItem.context.Toast(errMsg)
                              eventNodeItem.lock = false
                          })
                      })
                  })(listInfo[i])

              }

          }
          if (eventNodeItem.attr.building_end) {
              var utils = require("utils");
              if (eventNodeItem.attr.building_end == -1) {
                  alter2Node.addNewLine("text_mid", "完成时间:", { "text": "已完成" });

              } else {
                  alter2Node.addNewLine("text_mid", "完成时间:", { "text": utils.formatUnix(eventNodeItem.attr.building_end) });

              }

          }
          alter2Node.Alert();
          alter2Node.OnButtonFunc = alter2Node.onButtonCancel
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
      }, function (errMsg) {
          context.Toast("错误:" + errMsg)
      })
  }
  //一键加速
  useUserPropV2(alter2Node, context, eventNodeItem, data) {
      context.api.UserPropV2(cc, data, function (res) {

          if (res && res.building_end) {
              eventNodeItem.attr.building_end = res.building_end
          }
          if (eventNodeItem.ShowPropType == 3) {
              if (res && eventNodeItem.attr.index >= 0) {
                  res.attr.index = eventNodeItem.attr.index
                  window.UserData.UpdateLocalObject(res.attr)
              } else {
                  window.UserData.ReloadByType(res.attr.type)
              }
              if (res.attr.building_end > context.getServerTime()) {
                  eventNodeItem.funcs["accePropList"].func(null, context, eventNodeItem)
              }


          } else {
              if (res.attr) {
                  eventNodeItem.attr = res.attr
              }
              eventNodeItem.funcs["accePropList"].func(null, context, eventNodeItem)
          }
          if (alter2Node) {
              alter2Node.onButtonCancel()
          }


      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }
  //ojbectAcce 对象加速
  objectAcce(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      eventNodeItem.lock = true
      context.api.MagicAcce(cc, eventNodeItem.attr.id, eventNodeItem.attr.type, function (res) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast(res.msg)
          if (res && eventNodeItem.attr.index >= 0) {
              res.attr.index = eventNodeItem.attr.index
              window.UserData.UpdateLocalObject(res.attr)
          } else {
              window.UserData.reloadHomeInfo("resource,buildings", null)
          }
          eventNodeItem.lock = false

      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }
  adPropDetail(alterNewNode, context, eventNodeItem) {
      if (!eventNodeItem.data.detail) {
          context.Toast("宝物已经不存在啦，请重新刷新页面")
          return
      }


      var alterNewNode = eventNodeItem.context.NewAlert2()
      eventNodeItem.alterNewNode = alterNewNode
      alterNewNode.InitAlert("广告奖励", "关闭");
      alterNewNode.addNewLine("text", "", { "text": "" });
      alterNewNode.addNewLine("text_mid", "名称", { "text": eventNodeItem.data.name });

      alterNewNode.addNewLine("wrap_text", "详情:", { "text": eventNodeItem.data.detail.desc });
      alterNewNode.addNewLine("wrap_text", "已获得:", { "text": eventNodeItem.res });


      alterNewNode.addNewLine("wrap_text", "", { "text": `===超级幸运,再来一“瓶”===` });
      alterNewNode.addNewLine("wrap_text", "", { "text": `浏览广告，再次获得X个${eventNodeItem.data.name}，一次广告最多5个宝箱` });
      eventNodeItem.data.has_show_reward = true
      alterNewNode.AddButtonFrom0(eventNodeItem.funcs["showPropDetail"])
      alterNewNode.AddButton(eventNodeItem.funcs["clickAdPropDetail"])

      alterNewNode.Alert();
  }
  adPeople(alterNewNode, context, eventNodeItem) {
      if (window.UserData.city.info.next_people_time > context.getServerTime()) {
          context.Toast(`冷却中(${window.UserData.city.info.next_people_time - context.getServerTime()}秒)`)
          return
      }
      context.Ad.ShowAd("LongAd", function () {
          context.api.AdPeople(cc, function (res) {
              window.UserData.reloadHomeInfo("city,resource", null)
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }

              context.Toast("召集成功")
          }, function (errorMsg) {
              alterNewNode.context.Toast(errorMsg)
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
          })
      }, function (err) {
          alterNewNode.context.Toast(err)
      })
  }
  clickAdPropDetail(alterNewNode, context, eventNodeItem) {
      context.Ad.ShowAd("LongAd", function () {
          context.api.AdOpen(cc, eventNodeItem.data.has_ad, function (res) {
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              eventNodeItem.data = res.prop
              eventNodeItem.res = res.attr
              eventNodeItem.funcs["showPropDetail"].func(null, context, eventNodeItem)

          }, function (errorMsg) {
              alterNewNode.context.Toast(errorMsg)
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
          })
      }, function (err) {
          alterNewNode.context.Toast(err)
      })
  }
  showShopDetail(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

      var alterNewNode = eventNodeItem.context.NewAlert2()
      eventNodeItem.alterNewNode = alterNewNode
      alterNewNode.InitAlert("兑换宝物", "关闭");
      alterNewNode.addNewLine("text", "", { "text": "" });
      alterNewNode.addNewLine("text_mid", "名称", { "text": eventNodeItem.data.name });

      alterNewNode.addNewLine("text_mid", "单价:", { "text": eventNodeItem.data.price + "钻石" });

      alterNewNode.addNewLine("text_mid", "钻石余额:", { "text": cc.props.userInfo.diamonds });

      let maxNum = Math.floor(cc.props.userInfo.diamonds / (eventNodeItem.data.price * eventNodeItem.discount / 100))
      alterNewNode.addNewLine("slider", `数量:`, {
          "max": maxNum, "callback": function (num) {
              var total = Math.ceil(num * eventNodeItem.data.price * eventNodeItem.discount / 100)
              billNode.setItemValue(`需要钻石: ` + total)
              eventNodeItem.buyNumber = num
          },
          "value": 1
      })
      var billNode = alterNewNode.addNewLine("wrap_text", "小记:", { "text": `` })
      alterNewNode.addNewLine("wrap_text", "详情:", { "text": eventNodeItem.data.desc });
      alterNewNode.AddButtonFrom0(eventNodeItem.funcs["buyPropSubmit"])

      alterNewNode.Alert();
  }
  buyPropSubmit(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      eventNodeItem.lock = true


      if (!eventNodeItem.buyNumber || eventNodeItem.buyNumber < 0) {
          eventNodeItem.context.Toast("使用数量错误")
          eventNodeItem.lock = false

          return
      }

      context.api.BuyProp(cc, eventNodeItem.data.uuid, eventNodeItem.buyNumber, function (res) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast("兑换成功")
          eventNodeItem.lock = false
          context.reloadPage()
      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }
  //addExpForOfficer
  addExpForOfficer(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      alter2Node.eventNodeItem = eventNodeItem
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("提示", "确定")
      var tips = `需要消耗一个${eventNodeItem.propData.name},${eventNodeItem.propData.detail.desc}\n确定为军官: ${_attr.on} 提升经验吗？ \n\nPs.军官在战斗、守城、采集时也可获得经验。`
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.addNewLine("input_long", "使用:", { "maxLength": 3, "showNumberKey": true, "value": 1, "lineHeight": 30, "itemKey": "use_number" })

      alter2Node.OnButtonFunc = function () {
          eventNodeItem.lock = true
          var data = {
              "prop_id": eventNodeItem.propData.prop_id,
              "number": 1,
              "object_id": eventNodeItem.attr.id
          }
          for (var i = 0; i < eventNodeItem.resultList.length; i++) {
              if (eventNodeItem.resultList[i].use_number && eventNodeItem.resultList[i].use_number > 0) {
                  data.number = Number(eventNodeItem.resultList[i].use_number)
              }
          }
          if (!data.number) {
              eventNodeItem.context.Toast("使用数量错误")
              eventNodeItem.lock = false

              return
          }

          context.api.UserPropV2(cc, data, function (res) {
              res.attr.index = eventNodeItem.attr.index
              eventNodeItem.attr = res.attr
              eventNodeItem.funcs["handlerOfficer"].func(alterNewNode, context, eventNodeItem)
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              eventNodeItem.context.Toast("使用成功")
              eventNodeItem.lock = false
              window.UserData.UpdateLocalOfficer(eventNodeItem.attr)
              //eventNodeItem.context.reloadPage()
              alter2Node.onButtonCancel()
          }, function (errMsg) {
              eventNodeItem.context.Toast(errMsg)
              eventNodeItem.lock = false
          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  showPropDetail(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      if (!eventNodeItem.data.detail) {
          context.Toast("宝物已经不存在啦，请重新刷新页面")
          return
      }
      var alterNewNode = eventNodeItem.context.NewAlert2()
      eventNodeItem.alterNewNode = alterNewNode
      let valueColor = ""
      if (eventNodeItem.data.detail.type == 10) {
          valueColor = context.levelColor[eventNodeItem.data.detail.level] ? context.levelColor[eventNodeItem.data.detail.level] : ""
      }
      alterNewNode.InitAlert("宝物详情", "关闭");
      alterNewNode.addNewLine("text_mid", "名称:", {
          "text": eventNodeItem.data.name,
          "valueColor": valueColor,
          "titleColor": valueColor,
      });
      alterNewNode.addNewLine("text_mid", "数量:", {
          "text": eventNodeItem.data.number,
          "valueColor": valueColor,
          "titleColor": valueColor,
      });
      if (eventNodeItem.data.detail.type == 10) {
          alterNewNode.addNewLine("text_mid", "品质:", {
              "text": eventNodeItem.data.detail.level_name,
              "valueColor": valueColor,
              "titleColor": valueColor,
          });
          alterNewNode.addNewLine("text_mid", "后勤:", {
              "text": `+${eventNodeItem.data.detail.enhance.officer_service}`,
              "valueColor": valueColor,
              "titleColor": valueColor,
          });
          alterNewNode.addNewLine("text_mid", "军事:", {
              "text": `+${eventNodeItem.data.detail.enhance.officer_power}`,
              "valueColor": valueColor,
              "titleColor": valueColor,
          });
          alterNewNode.addNewLine("text_mid", "学识:", {
              "text": `+${eventNodeItem.data.detail.enhance.officer_knowledge}`,
              "valueColor": valueColor,
              "titleColor": valueColor,
          });
          alterNewNode.addNewLine("text_mid", "级别:", {
              "text": "1级上可佩戴",
              "valueColor": valueColor,
              "titleColor": valueColor,
          });
          var equipType = "更高级别"
          switch (eventNodeItem.data.detail.level) {
              case 1:
                  equipType = "战魂觉醒(蓝色)"
                  break
              case 2:
                  equipType = "战至巅峰(紫色)"
                  break
              case 3:
                  equipType = "帝国之鹰(橙色)"
                  break
          }
          if (eventNodeItem.data.detail.level < 4) {
              eventNodeItem.data.detail.desc += `\n20个${eventNodeItem.data.detail.name}兑换一个${equipType}装备宝箱。\n该宝箱可随机开出一件${equipType}部件`
          }
      }

      //可以在宝物页直接使用
      if (eventNodeItem.data.detail.use_loc == "treasure" && eventNodeItem.data.number > 0) {
          if (eventNodeItem.data.last_number) {
              alterNewNode.addNewLine("input_long", "使用:", { "maxLength": 3, "showNumberKey": true, "value": eventNodeItem.data.last_number, "lineHeight": 30, "itemKey": "use_number" })

          } else {
              alterNewNode.addNewLine("input_long", "使用:", { "maxLength": 3, "showNumberKey": true, "value": 1, "lineHeight": 30, "itemKey": "use_number" })

          }
          alterNewNode.AddButton(eventNodeItem.funcs["useTreasure"])

      }

      if (eventNodeItem.data.detail.enhance && eventNodeItem.data.detail.enhance.exchange_v2) {
          alterNewNode.AddButton(eventNodeItem.funcs["exchangeProp"])
      }
      if (eventNodeItem.data && eventNodeItem.data.detail.type == 2 && eventNodeItem.res) {
          alterNewNode.addNewLine("wrap_text", "已获得:", { "text": eventNodeItem.res });
      }
      alterNewNode.addNewLine("wrap_text", "详情:", {
          "text": eventNodeItem.data.detail.desc,
          "valueColor": valueColor,
          "titleColor": valueColor,
      });
      if (eventNodeItem.data.detail.property == "need_selector" && eventNodeItem.data.detail.enhance.selector) {

          alterNewNode.addNewLine("selector", eventNodeItem.data.detail.enhance.selector_name + ":", {
              "value": eventNodeItem.data.detail.enhance.selector,
              "itemKey": "selectValue"
          }, function (value) { })

      }

      alterNewNode.OnButtonFunc = alterNewNode.onButtonCancel
      alterNewNode.Alert();
  }
  useTreasure(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      eventNodeItem.lock = true
      var data = {
          "id": eventNodeItem.data.id,
          "number": 1
      }
      for (var i = 0; i < eventNodeItem.resultList.length; i++) {
          if (eventNodeItem.resultList[i].use_number && eventNodeItem.resultList[i].use_number > 0) {
              data.number = Number(eventNodeItem.resultList[i].use_number)
          }
          if (eventNodeItem.resultList[i].selectValue && eventNodeItem.resultList[i].selectValue != "") {
              data.select_value = eventNodeItem.resultList[i].selectValue
          }
      }
      if (!data.number) {
          eventNodeItem.context.Toast("使用数量错误")
          eventNodeItem.lock = false
          return
      }

      if (eventNodeItem.data.detail.property == "need_selector" && !data.select_value) {
          eventNodeItem.context.Toast("请选择" + eventNodeItem.data.detail.enhance.selector_name)
          eventNodeItem.lock = false
          return
      }
      context.api.UserPropV2(cc, data, function (res) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          if (res.attr && eventNodeItem.data) {
              eventNodeItem.context.Toast(res.attr)
          } else {
              eventNodeItem.context.Toast("使用成功")
          }

          eventNodeItem.lock = false

          eventNodeItem.data = res.prop
          eventNodeItem.res = res.attr
          eventNodeItem.data.last_number = data.number
          if (eventNodeItem.data.prop_id == 241) {
              context.skipScene("Main")
              return
          } else if (cc.props.showAd == true && res.prop && res.prop.has_ad != "") {
              eventNodeItem.data.has_show_reward = false
              eventNodeItem.funcs["adPropDetail"].func(null, context, eventNodeItem)
          } else {
              eventNodeItem.funcs["showPropDetail"].func(null, context, eventNodeItem)
          }

          context.reloadPage()

      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }

  //exchangeProp exchangeProp
  exchangeProp(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      if (eventNodeItem.data.number <= 0) {
          context.Toast("数量不足")
          return
      }
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert(eventNodeItem.data.detail.name, "兑换")
      alter2Node.addNewLine("text", "", { "text": "" })
      let exchangeInfo = eventNodeItem.data.detail.enhance.exchange_v2
      let exchangeList = Array()
      let exchangeMap = {}
      let exchangeId = 0
      let exchangeItem = null
      let exchangeNumber = 1

      let maxNum = 0
      for (var i in eventNodeItem.data.detail.enhance.exchange_v2) {
          if (i == 0) {
              exchangeId = eventNodeItem.data.detail.enhance.exchange_v2[i].uuid
              exchangeItem = eventNodeItem.data.detail.enhance.exchange_v2[i]
              exchangeNumber = eventNodeItem.data.detail.enhance.exchange_v2[i].need_number
              exchangeList.push({ "text": eventNodeItem.data.detail.enhance.exchange_v2[i].name, "value": eventNodeItem.data.detail.enhance.exchange_v2[i].uuid, "default": true })


              maxNum = Math.floor(eventNodeItem.data.number / exchangeItem.to_number)
          } else {
              exchangeList.push({ "text": eventNodeItem.data.detail.enhance.exchange_v2[i].name, "value": eventNodeItem.data.detail.enhance.exchange_v2[i].uuid, "default": false })
          }
          exchangeMap[eventNodeItem.data.detail.enhance.exchange_v2[i].uuid] = eventNodeItem.data.detail.enhance.exchange_v2[i]
      }

      //  let textNode = alter2Node.addNewLine("wrap_text", "", { "text": `` })
      alter2Node.addNewLine("wrap_text", "现有数量", { "text": eventNodeItem.data.number })

      let timeNode = alter2Node.addNewLine("wrap_text", "", { "text": `` })
      alter2Node.addNewLine("wrap_text", "", { "text": `` })
      alter2Node.addNewLine("wrap_text", "", { "text": `` })

      let sliderNode = alter2Node.addNewLine("slider", `数量:`, {
          "max": eventNodeItem.data.number, "callback": function (num) {
              exchangeNumber = num * exchangeItem.need_number
              let toNumber = num * exchangeItem.to_number
              if (num == 0) {
                  timeNode.resetText("", {
                      "text": ``
                  })
              } else {
                  timeNode.resetText("说明:", {
                      "text": `${exchangeNumber}个${eventNodeItem.data.detail.name}兑换${toNumber}个${exchangeItem.name}\n该操作不可撤销,请谨慎选择。`
                  })
              }

          },
          "value": 1
      })
      var exchangeNode = alter2Node.addNewLine("selector", "兑换:", {
          "value": exchangeList
      }, function (value) {
          exchangeId = value
          if (exchangeMap[value]) {
              exchangeItem = exchangeMap[value]
              timeNode.resetText("说明:", {
                  "text": `${exchangeItem.need_number}个${eventNodeItem.data.detail.name}兑换${exchangeItem.to_number}个${exchangeItem.name}\n该操作不可撤销,请谨慎选择。\n最多可兑换${maxNum}个${exchangeItem.name}`
              })
              exchangeNumber = exchangeItem.need_number

              let max = Math.floor(eventNodeItem.data.number / exchangeItem.need_number)
              sliderNode.SetMax(max)
              if (max <= 0) {
                  sliderNode.SetValue(0)
              } else {
                  sliderNode.SetValue(1)
              }

          }
      })


      alter2Node.OnButtonFunc = function (evt) {
          if (eventNodeItem.data.number < exchangeNumber || exchangeNumber <= 0) {
              context.Toast("数量不足")
              return
          }
          var exchangeData = {
              id: eventNodeItem.data.id,
              to_uuid: exchangeNode.getValue(),
              number: exchangeNumber,
          }
          context.api.equipExchange(cc, exchangeData, function (data) {
              context.Toast("兑换成功")
              context.reloadPage()
          }, function (err) {
              context.Toast(err)
          })
          alter2Node.onButtonCancel()
      }

      alter2Node.Alert()

  }
  //destroyBuildingConfirm destroyBuildingConfirm
  destroyBuildingConfirm(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("提示", "确定")
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("content", "", { "text": `该操作不可撤销,请谨慎操作` })

      alter2Node.setButton0(eventNodeItem, "确定", eventNodeItem.funcs["destroyBuilding"].func)
      alter2Node.Alert()
  }
  //destroyBuilding destroyBuilding
  destroyBuilding(alterNewNode, context, eventNodeItem) {

      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      eventNodeItem.lock = true
      context.api.BuildingDestroy(cc, eventNodeItem.attr.id,eventNodeItem.attr.type, function (res) {
          if (res){
              res.index = eventNodeItem.attr.index
              eventNodeItem.attr = res
              window.UserData.UpdateLocalObject(eventNodeItem.attr)
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              eventNodeItem.context.Toast("拆除成功")
              eventNodeItem.lock = false
          }else{
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
               context.reloadPage()
          }
     
    
     

      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }
  //upgradeOfficer upgradeOfficer
  addAttrOfficer(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      var data = {}
      eventNodeItem.resultList.forEach((item, index) => {
          if (item.service && item.service > 0) {
              data.service = item.service
          } else if (item.know && item.know > 0) {
              data.know = item.know
          } else if (item.power && item.power > 0) {
              data.power = item.power
          } else if (item.officer_name && item.officer_name != eventNodeItem.attr.on) {
              data.name = item.officer_name
          }
      })
      if (Object.keys(data).length <= 0) {
          eventNodeItem.context.Toast("未做属性调整")
          return
      }
      eventNodeItem.lock = true
      context.api.updateOfficer(cc, eventNodeItem.attr.id, data, function (res) {
          res.index = eventNodeItem.attr.index
          eventNodeItem.attr = res
          eventNodeItem.funcs["handlerOfficer"].func(alterNewNode, context, eventNodeItem)
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast("更新成功")
          eventNodeItem.lock = false
          window.UserData.UpdateLocalOfficer(eventNodeItem.attr)
          //  eventNodeItem.context.reloadPage()
      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }
  //upgradeOfficer upgradeOfficer
  upgradeOfficer(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.lock) {
          eventNodeItem.context.Toast("点击太快啦")
          return
      }
      eventNodeItem.lock = true
      context.api.upgradeOfficer(cc, eventNodeItem.attr.id, function (res) {
          eventNodeItem.attr = res
          eventNodeItem.funcs["handlerOfficer"].func(alterNewNode, context, eventNodeItem)
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast("升级成功")
          eventNodeItem.lock = false
      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
          eventNodeItem.lock = false
      })
  }

  //skillCancel
  skillCancel(alterNewNode, context, eventNodeItem) {
      if (!eventNodeItem.skill) {
          return
      }
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("遗忘技能", "遗忘")
      var tips = eventNodeItem.skill.desc

      alter2Node.addNewLine("wrap_text", "名称", { "text": eventNodeItem.skill.name })

      alter2Node.addNewLine("wrap_text", "效果", { "text": tips })

      alter2Node.addNewLine("text_mid", "", { "text": "" })
      alter2Node.addNewLine("wrap_text", "提示", { "text": "您确定要遗忘该技能吗？\n该操作不可撤回，请谨慎操作。" })


      alter2Node.OnButtonFunc = function () {
          context.api.forgetSkill(cc, eventNodeItem.attr.id, eventNodeItem.skillLoc, function (res) {
              res.index = eventNodeItem.attr.index
              eventNodeItem.attr = res
              eventNodeItem.funcs["handlerOfficer"].func(alterNewNode, context, eventNodeItem)
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              eventNodeItem.context.Toast("遗忘成功")
              eventNodeItem.lock = false

              window.UserData.UpdateLocalOfficer(res)
              // eventNodeItem.context.reloadPage()
              alter2Node.onButtonCancel()
          }, function (errMsg) {
              eventNodeItem.context.Toast(errMsg)
              eventNodeItem.lock = false
          })
      }
      alter2Node.Alert()
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

  }
  //skillDetail
  skillDetail(alterNewNode, context, eventNodeItem) {
      if (!eventNodeItem.skill) {
          return
      }
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("技能详情", "确定")
      var tips = eventNodeItem.skill.desc

      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("wrap_text", "名称", { "text": eventNodeItem.skill.name })

      alter2Node.addNewLine("wrap_text", "效果", { "text": tips })
      alter2Node.addNewLine("wrap_text", "升级", { "text": "技能等级与军官等级相关 军官第1、20、40、60、80级时技能随之升级。" })
      alter2Node.OnButtonFunc = alter2Node.onButtonCancel
      alter2Node.AddButton(eventNodeItem.funcs["skillCancel"])
      alter2Node.Alert()
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

  }
  //changeLoyalOfficer
  changeLoyalOfficer(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("提示", "赏赐")
      let needGold = eventNodeItem.attr.l * 5 * (100 - eventNodeItem.attr.ly) * (100 - eventNodeItem.attr.ly)
      var tips = "当前军官忠诚度" + eventNodeItem.attr.ly + ",可以使用" + needGold + "黄金，确定赏赐军官: " + _attr.on + " 吗？ \n\n\n Ps.忠诚度低于50 会有一定几率被俘虏"

      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.OnButtonFunc = function () {
          eventNodeItem.lock = true
          var data = {
              "id": eventNodeItem.attr.id,
          }
          context.api.UpdateLoyal(cc, data, function (res) {
              res.index = eventNodeItem.attr.index
              eventNodeItem.attr = res
              eventNodeItem.funcs["handlerOfficer"].func(alterNewNode, context, eventNodeItem)
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              eventNodeItem.context.Toast("赏赐成功")
              eventNodeItem.lock = false
              //eventNodeItem.context.reloadPage()
              window.UserData.UpdateLocalOfficer(eventNodeItem.attr)
              alter2Node.onButtonCancel()
          }, function (errMsg) {
              eventNodeItem.context.Toast(errMsg)
              eventNodeItem.lock = false
          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //flushAttrOfficer
  flushAttrOfficer(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("提示", "洗点")
      var tips = "洗点需要消耗一个军官训练手册，确定对军官: " + _attr.on + " 进行洗点吗？ \n\n洗点后，军官属性重置。可以重新分配各类属性点。\n\n Ps.总属性超过100的军官才可以进行洗点"

      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.OnButtonFunc = function () {
          eventNodeItem.lock = true
          var data = {
              "prop_id": 270,
              "number": 1,
              "object_id": eventNodeItem.attr.id
          }
          context.api.UserPropV2(cc, data, function (res) {
              res.attr.index = eventNodeItem.attr.index
              eventNodeItem.attr = res.attr
              eventNodeItem.funcs["handlerOfficer"].func(alterNewNode, context, eventNodeItem)
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              eventNodeItem.context.Toast("洗点成功")
              eventNodeItem.lock = false
              //eventNodeItem.context.reloadPage()
              window.UserData.UpdateLocalOfficer(eventNodeItem.attr)
              alter2Node.onButtonCancel()
          }, function (errMsg) {
              eventNodeItem.context.Toast(errMsg)
              eventNodeItem.lock = false
          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //handlerOfficer
  handlerOfficer(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      eventNodeItem.alterNewNode = alter2Node
      alter2Node.InitAlert("操作军官", "关闭")
      alter2Node.addNewLine("input_flush", "姓名:", { "attr": _attr, "maxLength": 10, "value": _attr.on, "lineHeight": 30, "itemKey": "officer_name", "randType": "officer" })
      alter2Node.addNewLine("text_mid", "星级:", { "text": _attr.st + "星", "lineHeight": 30 })
      if (_attr.attr_num > 0) {
          var max = _attr.os + _attr.op + _attr.ok + _attr.attr_num
          var osObj = null
          var opObj = null
          var okObj = null
          var attrObj = null
          var cFunc = function (flag) {
              var finNum = max - (osObj.getValue() + opObj.getValue() + okObj.getValue())


              if (flag == "-") {
                  attrObj.setItemValue(" " + finNum)
                  return true
              }
              if (finNum < 0) {
                  eventNodeItem.context.Toast("剩余属性点为0")
                  return false
              }
              attrObj.setItemValue(" " + finNum)
              return true
          }
          osObj = alter2Node.addNewLine("attr_input", "后勤:", { "value": _attr.os, "lineHeight": 30, "itemKey": "service" }, cFunc)
          opObj = alter2Node.addNewLine("attr_input", "军事:", { "value": _attr.op, "lineHeight": 30, "itemKey": "power" }, cFunc)
          okObj = alter2Node.addNewLine("attr_input", "学识:", { "value": _attr.ok, "lineHeight": 30, "itemKey": "know" }, cFunc)
          attrObj = alter2Node.addNewLine("text_mid", "属性点:", { "text": " " + _attr.attr_num, "lineHeight": 30, "cusButtonText": "洗点", "eventNodeItem": eventNodeItem }, eventNodeItem.funcs["flushAttrOfficer"].func)

      } else {
          alter2Node.addNewLine("text_mid", "后勤:", { "text": _attr.os, "lineHeight": 30 })
          alter2Node.addNewLine("text_mid", "军事:", { "text": _attr.op, "lineHeight": 30 })
          alter2Node.addNewLine("text_mid", "学识:", { "text": _attr.ok, "lineHeight": 30 })
          alter2Node.addNewLine("text_mid", "属性点:", { "text": " " + _attr.attr_num, "lineHeight": 30, "cusButtonText": "洗点", "eventNodeItem": eventNodeItem }, eventNodeItem.funcs["flushAttrOfficer"].func)

      }

      alter2Node.addNewLine("text_mid", "忠诚:", { "text": " " + _attr.ly, "lineHeight": 30, "cusButtonText": "赏赐", "eventNodeItem": eventNodeItem }, eventNodeItem.funcs["changeLoyalOfficer"].func)

      alter2Node.addNewLine("text_mid", "级别:", { "text": _attr.l, "lineHeight": 30 })
      alter2Node.addNewLine("text_mid", "薪资:", { "text": _attr.we, "lineHeight": 30 })

      if (_attr.skill_1) {
          alter2Node.addNewLine("text_mid", "技能1:", { "text": _attr.skill_1.name + "(" + _attr.skill_level + "级)", "lineHeight": 30, "cusButtonText": "详情", "eventNodeItem": eventNodeItem, "skillLoc": "1", "skill": _attr.skill_1 }, function () {
              eventNodeItem.skillLoc = "1"
              eventNodeItem.skill = _attr.skill_1
              eventNodeItem.funcs["skillDetail"].func(alter2Node, eventNodeItem.context, eventNodeItem)
          })
      } else {
          alter2Node.addNewLine("text_mid", "技能1:", { "text": "未掌握", "lineHeight": 30, "cusButtonText": "", "eventNodeItem": eventNodeItem })
      }
      if (_attr.skill_2) {
          alter2Node.addNewLine("text_mid", "技能2:", { "text": _attr.skill_2.name + "(" + _attr.skill_level + "级)", "lineHeight": 30, "cusButtonText": "详情", "eventNodeItem": eventNodeItem, "skillLoc": "2", "skill": _attr.skill_2 }, function () {
              eventNodeItem.skillLoc = "2"
              eventNodeItem.skill = _attr.skill_2
              eventNodeItem.funcs["skillDetail"].func(alter2Node, eventNodeItem.context, eventNodeItem)
          })
      } else {
          alter2Node.addNewLine("text_mid", "技能2:", { "text": "未掌握", "lineHeight": 30, "cusButtonText": "", "eventNodeItem": eventNodeItem })
      }

      if (_attr.skill_3) {
          alter2Node.addNewLine("text_mid", "技能3:", { "text": _attr.skill_3.name + "(" + _attr.skill_level + "级)", "lineHeight": 30, "cusButtonText": "详情", "eventNodeItem": eventNodeItem, "skillLoc": "3", "skill": _attr.skill_2 }, function () {
              eventNodeItem.skillLoc = "3"
              eventNodeItem.skill = _attr.skill_3
              eventNodeItem.funcs["skillDetail"].func(alter2Node, eventNodeItem.context, eventNodeItem)
          })
      } else {
          alter2Node.addNewLine("text_mid", "技能3:", { "text": "未掌握", "lineHeight": 30, "cusButtonText": "", "eventNodeItem": eventNodeItem })
      }

      if (_attr.stu == 10) {
          //TODO 任命市长
          alter2Node.addNewLine("text_mid", "状态:", { "text": _attr.stu_text, "lineHeight": 30 })
          //alter2Node.addNewLine("text_mid", "状态:", { "text": _attr.stu_text ,"lineHeight":30,"cusButtonText":"任命"})
      } else if (_attr.stu == 20) {
          //TODO 卸任市长
          alter2Node.addNewLine("text_mid", "状态:", { "text": _attr.stu_text, "lineHeight": 30 })
      } else {
          alter2Node.addNewLine("text_mid", "状态:", { "text": _attr.stu_text, "lineHeight": 30 })
      }
      if (_attr.attr_times) {
          alter2Node.addNewLine("text_mid", "属性书", { "text": "已使用" + _attr.attr_times + "次", "lineHeight": 30 })

      } else {
          alter2Node.addNewLine("text_mid", "属性书", { "text": "已使用0次", "lineHeight": 30 })

      }

      alter2Node.AddButtonFrom0(eventNodeItem.funcs["addAttrOfficer"])


      if (_attr.l >= 200) {
          alter2Node.addNewLine("text_mid", "经验值:", { "text": `  (已满级)`, "lineHeight": 30 })
      } else {
          eventNodeItem.ShowPropType = 5
          if (_attr.stu == 10) {
              alter2Node.AddButtonFrom0(eventNodeItem.funcs["trainOfficer"])
          }

          if (_attr.exp >= _attr.next_exp) {
              alter2Node.addNewLine("text_mid", "经验值:", { "text": `  ${_attr.exp}/${_attr.next_exp}`, "lineHeight": 30, "cusButtonText": "升级", "eventNodeItem": eventNodeItem }, eventNodeItem.funcs["upgradeOfficer"].func)
          } else {
              alter2Node.addNewLine("text_mid", "经验值:", { "text": `  ${_attr.exp}/${_attr.next_exp}`, "lineHeight": 30 })
          }
      }

      alter2Node.Alert()
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }

  }
  //offerOfficer
  UnOfferOfficer(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("卸任市长", "卸任")
      var tips = "您确定卸任" + _attr.on + "吗？\n\n 卸任后所有市长加成都将取消"
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.addNewLine("content", "", { "text": "每点后勤属性提升0.2%资源产量和0.1%建筑速度\n\n每点学识属性提升0.1%科研速度\n\n每点军事属性提升0.1%军队训练速度。" })
      alter2Node.addNewLine("content", "", { "text": "每点军事属性提升0.1%军队训练速度。" })

      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.OfferOfficer(cc, _attr.id, 99, function (res) {
              alter2Node.onButtonCancel()
              alter2Node.context.reloadPage()
          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //offerOfficer
  offerOfficer(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("提示", "任命")
      var tips = "您确定任命" + _attr.on + "为市长吗？\n\n市长可以提升城市的资源产量、科研速度，也可以在敌人来袭时指挥防御。"
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.addNewLine("content", "", { "text": "每点后勤属性提升0.2%资源产量和0.1%建筑速度\n\n每点学识属性提升0.1%科研速度\n\n每点军事属性提升0.1%军队训练速度。" })
      alter2Node.addNewLine("content", "", { "text": "每点军事属性提升0.1%军队训练速度。" })

      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.OfferOfficer(cc, _attr.id, 0, function (res) {
              alter2Node.onButtonCancel()
              alter2Node.context.reloadPage()

          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //ShuhuiCaptive
  ShuhuiCaptive(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("提示", "赎回")

      var tips = "本操作不可撤销,您确定赎回" + _attr.on + "吗？ \n\n需要消耗10000钻石。"
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.addNewLine("content", "", { "text": "其中5000钻将转给对方玩家。 \n\n赎回截止时间:" + context.TimestampToTime(_attr.captive_time + 172800) })

      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.ShuhuiCaptive(cc, _attr.id, function (res) {
              if (_attr.locIndex && window.UserData.city.officers && _attr.locIndex <= window.UserData.city.officers.length - 1) {
                  window.UserData.city.officers[_attr.locIndex] = res
              }
              alter2Node.onButtonCancel()
              alter2Node.context.reloadPage()

          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //GiveUpShuhuiCaptive
  GiveUpShuhuiCaptive(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("放弃赎回", "放弃")

      var tips = "本操作不可撤销,您确定放弃赎回" + _attr.on + "吗？ \n\n"
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })

      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.GiveupShuhuiCaptive(cc, _attr.id, function (res) {
              if (_attr.locIndex && window.UserData.city.officers && _attr.locIndex <= window.UserData.city.officers.length - 1) {
                  res.locDelete = true
                  window.UserData.city.officers[_attr.locIndex] = res
              }
              alter2Node.onButtonCancel()
              alter2Node.context.reloadPage()

          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //ZhaomuCaptive
  ZhaomuCaptive(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("提示", "招募")
      let needGold = eventNodeItem.attr.l * 5 * (100 - eventNodeItem.attr.ly) * (100 - eventNodeItem.attr.ly) / 5
      var tips = "本操作不可撤销,您确定招募" + _attr.on + "吗？ \n \n本次招募需要消耗" + needGold + "黄金。"
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.ZhaomuCaptive(cc, _attr.id, function (res) {
              if (_attr.locIndex && window.UserData.city.officers && _attr.locIndex <= window.UserData.city.officers.length - 1) {
                  window.UserData.city.officers[_attr.locIndex] = res
              }

              alter2Node.onButtonCancel()
              alter2Node.context.reloadPage()

          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //fireOfficer
  ReleaseOfficer(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("提示", "释放")
      var tips = "本操作不可撤销,您确定释放" + _attr.on + "吗？ \n \n "
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.MagicCancel(cc, _attr.id, "officer", function (res) {
              if (_attr.locIndex && window.UserData.city.officers && _attr.locIndex <= window.UserData.city.officers.length - 1) {
                  window.UserData.city.officers[_attr.locIndex].locDelete = true
              }

              alter2Node.onButtonCancel()
              alter2Node.context.reloadPage()

          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //fireOfficer
  fireOfficer(alterNewNode, context, eventNodeItem) {
      var alter2Node = context.NewAlert2()
      var _attr = eventNodeItem.attr
      alter2Node.InitAlert("提示", "解雇")
      var tips = "本操作不可撤销,您确定解雇" + _attr.on + "吗？ \n \n解雇军官后，您可以在军校重新招募新军官。"
      alter2Node.addNewLine("text", "", { "text": "" })

      alter2Node.addNewLine("content", "", { "text": tips })
      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.MagicCancel(cc, _attr.id, "officer", function (res) {
              if (_attr.locIndex && window.UserData.city.officers && _attr.locIndex <= window.UserData.city.officers.length - 1) {
                  window.UserData.city.officers[_attr.locIndex].locDelete = true
              }

              alter2Node.onButtonCancel()
              alter2Node.context.reloadPage()

          })
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  //sellSubmit
  buySubmit(alterNewNode, context, eventNodeItem) {
      var resType = eventNodeItem.attr.type
      var resNum = eventNodeItem.buyNum
      if (!resNum || resNum <= 0) {
          context.Toast("请选择购买数量")
          return
      }
      context.api.buyResource(cc, resType, resNum, function (res) {
          alterNewNode.onButtonCancel()
          context.Toast("购买成功!")
          context.skipScene("Exchange")
      }, function (errMsg) {
          alterNewNode.onButtonCancel()
          context.Toast(errMsg)
      })
  }
  //sellSubmit
  sellSubmit(alterNewNode, context, eventNodeItem) {
      var resType = eventNodeItem.attr.type
      var resNum = eventNodeItem.soldNum
      if (!resNum || resNum <= 0) {
          context.Toast("请选择出售数量")
          return
      }
      context.api.sellResource(cc, resType, resNum, function (res) {
          alterNewNode.onButtonCancel()
          context.Toast("出售成功!")
          context.skipScene("Exchange")
      }, function (errMsg) {
          alterNewNode.onButtonCancel()
          context.Toast(errMsg)
      })
  }
  sellResource(alterNewNode, context, eventNodeItem) {
      var alterNewNode = eventNodeItem.context.NewAlert2()
      var cnName = eventNodeItem.context.getDictName("res_change", eventNodeItem.attr.type)
      alterNewNode.InitAlert("出售" + cnName, "aaa")

      alterNewNode.addNewLine("wrap_text", "规则:", { "text": `单次出售资源量和交易所等级相关\n每出售100单位${cnName}可获得${eventNodeItem.attr.price}黄金\n出售资源征取5%的交易费。` })
      var totalNode = alterNewNode.addNewLine("text", "总价:", { "text": `    0` })
      var taxNode = alterNewNode.addNewLine("text", "税费:", { "text": `    0` })
      var billNode = {}
      alterNewNode.addNewLine("text", "", { "text": "     --------------------------------------------------" })
      var soldNum = 0
      var maxNum = eventNodeItem.data.max
      if (eventNodeItem.attr.has_num && eventNodeItem.attr.has_num < eventNodeItem.data.max) {
          maxNum = eventNodeItem.attr.has_num
      }

      var canBuyRes = eventNodeItem.data.gold / (eventNodeItem.attr.price / 100)
      if (canBuyRes < maxNum) {
          maxNum = canBuyRes
      }
      alterNewNode.addNewLine("slider", `${cnName}:`, {
          "nameSize": 36, "max": maxNum, "callback": function (num) {
              var goldNum = Math.ceil(num * eventNodeItem.attr.price / 100)
              var get = Math.ceil(0.95 * goldNum)
              totalNode.setItemValue(`    ${goldNum}`)
              taxNode.setItemValue(`    ${goldNum - get}`)
              billNode.setItemValue(`出售${cnName}:${num}，净到账:${get}黄金`)
              eventNodeItem.soldNum = num
          }
      })
      billNode = alterNewNode.addNewLine("wrap_text", "小记:", { "text": `` })


      alterNewNode.setButtonStand0(eventNodeItem.funcs["sellSubmit"])

      alterNewNode.Alert()
  }
  buyResource(alterNewNode, context, eventNodeItem) {
      var alterNewNode = eventNodeItem.context.NewAlert2()
      var cnName = eventNodeItem.context.getDictName("res_change", eventNodeItem.attr.type)
      var maxNum = eventNodeItem.data.max
      var goldBuyRes = cc.props.cityRes.gold * eventNodeItem.attr.price
      if (goldBuyRes < eventNodeItem.data.max) {
          maxNum = goldBuyRes
      }
      if (maxNum > eventNodeItem.attr.has_res) {
          maxNum = eventNodeItem.attr.has_res
      }

      var billNode = {}

      alterNewNode.addNewLine("text", "单价:", { "text": `   ${eventNodeItem.attr.price}` })
      var totalNode = alterNewNode.addNewLine("text", "总价:", { "text": `    0` })
      alterNewNode.addNewLine("wrap_text", "规则:", { "text": `单次购买资源量和交易所等级相关\n每${eventNodeItem.attr.price}黄金 可购买 100单位${cnName}\n普通出售10分钟后运输到主城` })
      alterNewNode.addNewLine("slider", `${cnName}:`, {
          "nameSize": 36, "max": maxNum, "callback": function (num) {
              var goldNum = Math.ceil(num * eventNodeItem.attr.price / 100)

              billNode.setItemValue(`购买${cnName}:${num}，消费:${goldNum}黄金`)
              totalNode.setItemValue(`    ${goldNum}`)

              eventNodeItem.buyNum = num
          }
      })
      billNode = alterNewNode.addNewLine("wrap_text", "小记:", { "text": `` })
      alterNewNode.setButtonStand0(eventNodeItem.funcs["buySubmit"])

      alterNewNode.Alert()
  }
  //flushReport
  flushReport(alterNewNode, context, eventNodeItem) {
      context.api.getArmyRank(cc, eventNodeItem.attr.id, function (res) {
          alterNewNode.InitAlert("指挥战斗", "关闭")

          var arList = res.armies
          if (cc.props.logininfo.user_id == res.user_id) {
              arList = res.armies
          } else if (cc.props.logininfo.user_id == res.defense_user_id) {
              arList = res.defense_armies
          } else {
              context.Toast("错误的用户信息")
              return
          }
          alterNewNode.addNewLine("text", "", { "text": "", "cusButtonText": "" })
          alterNewNode.addNewLine("text", "", { "text": "新版战斗界面>>", "cusButtonText": "进入" }, () => {
              alterNewNode.onButtonCancel()
              cc.props.rankID = eventNodeItem.attr.id
              cc.director.loadScene("War");
          })
          alterNewNode.addNewLine("text", "", { "text": "", "cusButtonText": "" })
          var itemList = []
          var notshow = {
              "30": "碉堡",
              "31": "榴弹炮",
              "32": "反坦克炮",
              "33": "防空炮",
              "100": "围墙",
          }
          if ((res.status == "10" || res.status == "30") && arList) {
              for (var i = 0; i < arList.length; i++) {
                  if (arList[i].number <= 0) {
                      continue
                  }
                  if (notshow[arList[i].name_type]) {
                      continue
                  }
                  var objItem = alterNewNode.addNewLine("battleItem", `${arList[i].name}`, arList[i])
                  itemList.push(objItem)
              }
              alterNewNode.addNewLine("time_cron", "距离下回合开始:", { "nextTime": res.next_handle_time, "eventNodeItem": eventNodeItem, "flushFunc": eventNodeItem.funcs["flushReport"].func })

          }



          alterNewNode.addNewLine("text", "", { "text": ">>>>>>>>>战斗详情>>>>>>>>>" })

          var logs = ""
          if (res.battle_log) {
              for (var i = res.battle_log.length - 1; i >= 0; i--) {
                  if (res.battle_log[i]) {
                      logs += res.battle_log[i].join("\n")
                      logs += "\n --------------------------- \n"
                  }

              }
              alterNewNode.addNewLine("wrap_high_text", "", { "text": logs })
          } else {
              if (res.status == "50" || res.status == "99") {
                  alterNewNode.addNewLine("text", "", { "text": "战斗已结束" })

              } else {
                  alterNewNode.addNewLine("text", "", { "text": "战斗未开始请等待" })
              }

          }
          eventNodeItem.attr = res
          eventNodeItem.attr.itemList = itemList

          alterNewNode.AddButton(eventNodeItem.funcs["setBattleCfg"])
          alterNewNode.OnButtonFunc = function () {
              alterNewNode.onButtonCancel()
          }
          alterNewNode.Alert()

      })
  }
  //showBattleHandle
  showBattleHandle(alterNewNode, context, eventNodeItem) {
      var alterNewNode = context.NewAlert5()

      eventNodeItem.alterNewNode = alterNewNode
      eventNodeItem.funcs["flushReport"].func(alterNewNode, context, eventNodeItem)
  }
  //开始采集按钮
  collectBegin(alterNewNode, context, eventNodeItem) {
      context.api.collectBegin(cc, eventNodeItem.attr.source_id, eventNodeItem.attr.id, function (res) {
          alterNewNode.onButtonCancel()
          eventNodeItem.attr = res
          context.ListFunc["showMapDetail"](context, res, alterNewNode)
          eventNodeItem.context.Toast("开始采集!")
          window.UserData.reloadHomeInfo("cityOfficer", null)

      }, function (errMsg) {
          alterNewNode.onButtonCancel()
          eventNodeItem.context.Toast(errMsg)
      })
  }
  //完成采集按钮
  collectFinish(alterNewNode, context, eventNodeItem) {
      context.api.collectFinish(cc, eventNodeItem.attr.source_id, eventNodeItem.attr.id, function (res) {
          alterNewNode.onButtonCancel()
          eventNodeItem.attr = res
          context.ListFunc["showMapDetail"](context, res, alterNewNode)
          eventNodeItem.context.Toast("采集成功!")
          window.UserData.reloadHomeInfo("cityOfficer", null)
      }, function (errMsg) {
          alterNewNode.onButtonCancel()
          eventNodeItem.context.Toast(errMsg)
      })
  }
  //我方驻军撤军
  stayArmyBack(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("撤回驻军", "撤回")
      alter2Node.Alert()
      alter2Node.addNewLine("text_mid", "统帅:", { "text": eventNodeItem.attr.battle_info.attack.user_name })

      if (eventNodeItem.attr.battle_info && eventNodeItem.attr.battle_info.attack) {
          alter2Node.addNewLine("text_mid", "军官:", { "text": eventNodeItem.attr.battle_info.attack.officer_name })
      }
      alter2Node.addNewLine("text_mid", "军队:", { "text": "" })
      for (var item of eventNodeItem.attr.armies) {
          alter2Node.addNewLine("text_mid", item.name, { "text": item.number })
      }


      alter2Node.addNewLine("text", "", { "text": "确定要撤回驻军吗？" })

      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.sendStayArmyBack(cc, eventNodeItem.attr.id, function (res) {
              context.reloadPage()
              alter2Node.onButtonCancel()

          })
      }

  }
  //他人驻军撤军
  sendArmyBack(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("撤回驻军", "撤回")
      alter2Node.Alert()
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("content", "", { "text": "确定要撤回驻军吗？" })

      if (eventNodeItem.attr.battle_info && eventNodeItem.attr.battle_info.attack) {
          alter2Node.addNewLine("text_mid", "军官", { "text": eventNodeItem.attr.battle_info.attack.officer_name })
      }

      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.sendStayArmyBack(cc, eventNodeItem.attr.id, eventNodeItem.attr.type, function (res) {
              context.reloadPage()
          })
      }

  }
  //展示撤销弹窗
  showCancelFunc(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("提示", "确定")
      alter2Node.Alert()
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("content", "", { "text": "\n\n\n取消单位训练，返回50%资源 \n本操作不可撤销,您执行取消动作吗？" })
      alter2Node.OnButtonFunc = function () {
          alter2Node.context.api.MagicCancel(cc, eventNodeItem.attr.id, eventNodeItem.attr.type, function (res) {
              if (eventNodeItem.attr.index >= 0) {
                  eventNodeItem.attr.building_end = -1
                  eventNodeItem.attr.status = 1
                  eventNodeItem.attr.train_number = 0
                  window.UserData.UpdateLocalObject(eventNodeItem.attr)
                  window.UserData.reloadHomeInfo("resource", null)
              } else {
                  window.UserData.ReloadByType(res.attr.type)
              }
              alter2Node.onButtonCancel()
          })
      }

  }
  //放弃野地确认按钮
  giveUpAreaConfirm(alterNewNode, context, eventNodeItem) {
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("提示", "确定")
      alter2Node.addNewLine("text", "", { "text": "" })
      alter2Node.addNewLine("content", "", { "text": "\n\n放弃野地 \n本操作不可撤销,您执行取消动作吗？\n注意:请提前迁移驻扎的部队!" })

      alter2Node.setButton0(eventNodeItem, "确定", eventNodeItem.funcs["giveUpArea"].func)
      alter2Node.Alert()
  }
  //派遣按钮
  moveArmy(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.attr.hasOwnProperty("cityInfo")
          && eventNodeItem.attr.cityInfo.user_id == window.UserData.city.info.user_id
          && eventNodeItem.attr.cityInfo.status == 10) {
          alterNewNode.context.Toast("中计：战略封锁，无法派遣")
          return
      }
      alterNewNode.onButtonCancel()
      var actionData = {}
      actionData.map = eventNodeItem.attr
      actionData.action = "派遣"
      cc.props.SceneContext = actionData
      context.skipScene("Battle")
  }
  //驻军
  stayArmy(alterNewNode, context, eventNodeItem) {
      if (eventNodeItem.attr.hasOwnProperty("cityInfo")
          && eventNodeItem.attr.cityInfo.user_id == window.UserData.city.info.user_id
          && eventNodeItem.attr.cityInfo.status == 10) {
          alterNewNode.context.Toast("中计：战略封锁，无法派驻")
          return
      }
      alterNewNode.onButtonCancel()
      var actionData = {}
      actionData.map = eventNodeItem.attr
      actionData.action = "驻军"
      cc.props.SceneContext = actionData
      context.skipScene("Battle")
  }
  //征服
  battleArmy(alterNewNode, context, eventNodeItem) {
      alterNewNode.onButtonCancel()
      if (eventNodeItem.attr.hasOwnProperty("cityInfo")
          && eventNodeItem.attr.cityInfo.user_id == window.UserData.city.info.user_id
          && eventNodeItem.attr.cityInfo.status == 10) {
          alterNewNode.context.Toast("中计：战略封锁，无法出征")
          return
      }
      var actionData = {}
      actionData.map = eventNodeItem.attr
      actionData.action = "征服"
      cc.props.SceneContext = actionData
      context.skipScene("Battle")
  }
  //奇袭
  battle2Army(alterNewNode, context, eventNodeItem) {
      alterNewNode.onButtonCancel()
      if (eventNodeItem.attr.hasOwnProperty("cityInfo")
          && eventNodeItem.attr.cityInfo.user_id == window.UserData.city.info.user_id
          && eventNodeItem.attr.cityInfo.status == 10) {
          alterNewNode.context.Toast("中计：战略封锁，无法奇袭")
          return
      }
      var actionData = {}
      actionData.map = eventNodeItem.attr
      actionData.action = "奇袭"
      cc.props.SceneContext = actionData
      context.skipScene("Battle")
  }
  //侦查
  battle3Army(alterNewNode, context, eventNodeItem) {
      alterNewNode.onButtonCancel()
      if (eventNodeItem.attr.hasOwnProperty("cityInfo")
          && eventNodeItem.attr.cityInfo.user_id == window.UserData.city.info.user_id
          && eventNodeItem.attr.cityInfo.status == 10) {
          alterNewNode.context.Toast("中计：战略封锁，无法侦查")
          return
      }
      var actionData = {}
      actionData.map = eventNodeItem.attr
      actionData.action = "侦查"
      cc.props.SceneContext = actionData
      context.skipScene("Battle");
  }
  enterCity(alterNewNode, context, eventNodeItem) {
      var cityID = eventNodeItem.attr.id
      if (eventNodeItem.attr.city_id) {
          cityID = eventNodeItem.attr.city_id
      }
      context.api.changeMainCity(cc, cityID, function (res) {
          alterNewNode.onButtonCancel()
          context.Toast("切换成功!")
          window.UserData.reloadHomeInfo("", function () {
              context.skipScene("Main")
          })

      }, function (errMsg) {
          alterNewNode.onButtonCancel()
          context.Toast(errMsg)
      })
  }
  //createNewCityButton
  createNewCityButton(alterNewNode, context, eventNodeItem) {
      if (!eventNodeItem.attr.station_army) {
          eventNodeItem.context.Toast("请先派驻军队!")
          return
      }
      if (!eventNodeItem.attr.station_army.officer) {
          eventNodeItem.context.Toast("请先派驻军官!")
          return
      }
      if (!eventNodeItem.attr.station_army.resource) {
          eventNodeItem.context.Toast("资源不足!")
          return
      }
      if (!eventNodeItem.attr.station_army.resource) {
          eventNodeItem.context.Toast("资源不足!")
          return
      }
      var cityName = ""
      eventNodeItem.resultList.forEach((item, index) => {
          if (item.cityName) {
              cityName = item.cityName
          }
      })
      if (!cityName) {
          eventNodeItem.context.Toast("城市名称不能为空")
          return
      }
      if (eventNodeItem.attr.station_army.resource.gold < 5000 ||
          eventNodeItem.attr.station_army.resource.food < 5000 ||
          eventNodeItem.attr.station_army.resource.steel < 5000 ||
          eventNodeItem.attr.station_army.resource.oil < 5000 ||
          eventNodeItem.attr.station_army.resource.rare < 5000) {
          eventNodeItem.context.Toast("资源不足!")
          return
      }

      context.api.createCity(cc, eventNodeItem.attr.id, cityName, function (res) {
          alterNewNode.onButtonCancel()

          eventNodeItem.context.Toast("创建成功!")
          eventNodeItem.context.skipScene("Main")
      }, function (errMsg) {
          alterNewNode.onButtonCancel()
          eventNodeItem.context.Toast(errMsg)
      })
  }
  //createNewCityShow
  createNewCityShow(alterNewNode, context, eventNodeItem) {
      if (!eventNodeItem.attr) {
          context.Toast("数据异常，请刷新后重试")
          return
      }

      var attr = eventNodeItem.attr
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("建立新城市", "关闭")

      var text = "(" + attr.lng + "," + attr.lat + ")"
      alter2Node.addNewLine("text_mid", "坐标:", { "text": text })
      alter2Node.addNewLine("wrap_text", "描述:", { "text": "在平原上建立新城市，当前测试阶段。最多可以建立3座新城市。后续版本城市数量会与统帅军衔挂钩。" })
      alter2Node.addNewLine("wrap_text", "提示:", { "text": "创建城市需要黄金、粮食、钢铁、石油、稀矿等资源各5000。可从主城运输到当前平原" })

      alter2Node.addNewLine("input_long", "名称:", { "value": "", "placeholder": "新城市名称", "maxLength": 8, "itemKey": "cityName" })

      alter2Node.setButton0(eventNodeItem, "创建", eventNodeItem.funcs["createCityButton"].func)
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  showCityDetail(alterNewNode, context, eventNodeItem) {

      if (!eventNodeItem.attr) {
          context.Toast("数据异常，请刷新后重试")
          return
      }

      var attr = eventNodeItem.attr
      var alter2Node = context.NewAlert2()
      alter2Node.InitAlert("城市详情", "关闭")


      var text = "(" + attr.lng + "," + attr.lat + ")"
      alter2Node.addNewLine("text_mid", "坐标:", { "text": text })
      alter2Node.addNewLine("input_flush", "名称:", { "value": attr.name, "placeholder": "", "maxLength": 8, "itemKey": "cityName", "randType": "city" })
      alter2Node.addNewLine("text_mid", "地形:", { "text": `${attr.area == 6 ? "海域" : "大陆"}` })
      alter2Node.addNewLine("text_mid", "民心:", { "text": attr.people_love })
      alter2Node.addNewLine("text_mid", "民怨:", { "text": attr.people_hate })

      alter2Node.setButton0(eventNodeItem, "确定", eventNodeItem.funcs["changeCityName"].func)
      // eventNodeItem.funcs["进入城市"].eventNodeItem =


      if (window.UserData.user.info.main_city == attr.id) {
          alter2Node.AddButton(eventNodeItem.funcs["moveCityInput"])

      } else {
          alter2Node.AddButton(eventNodeItem.funcs["运输"])
          alter2Node.AddButton(eventNodeItem.funcs["派遣"])

          alter2Node.AddButton(eventNodeItem.funcs["destroyCityInput"])
      }
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  destroyCityInput(alterNewNode, context, eventNodeItem) {

      if (!eventNodeItem.attr) {
          context.Toast("数据异常，请刷新后重试")
          return
      }

      var attr = eventNodeItem.attr
      var alter2Node = context.NewAlert2()

      alter2Node.InitAlert("废弃城市", "确定")

      var text = "(" + attr.lng + "," + attr.lat + ")"
      alter2Node.addNewLine("text_mid", "坐标:", { "text": text })
      if (attr.name) {
          alter2Node.addNewLine("text_mid", "名称:", { "text": attr.name })
      }
      alter2Node.addNewLine("wrap_text", "说明:", { "text": "废弃城市操作不可取消，确定废弃该城市吗？" })
      alter2Node.setButton0(eventNodeItem, "确定", eventNodeItem.funcs["destroyCity"].func)
      // eventNodeItem.funcs["进入城市"].eventNodeItem =
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  destroyCity(alterNewNode, context, eventNodeItem) {


      context.api.destroyCity(cc, eventNodeItem.attr.id, function (res) {
          alterNewNode.onButtonCancel()
          eventNodeItem.context.Toast("废弃成功!")
          // eventNodeItem.context.skipScene("Main")
          context.ListFunc["showCityList"](context)
      }, function (errMsg) {
          alterNewNode.onButtonCancel()
          eventNodeItem.context.Toast(errMsg)
      })
  }
  activityMoveCity(alterNewNode, context, eventNodeItem) {

      if (!eventNodeItem.attr) {
          context.Toast("数据异常，请刷新后重试")
          return
      }

      var attr = eventNodeItem.attr
      var alter2Node = context.NewAlert2()

      alter2Node.InitAlert("迁移城市", "确定")

      var text = "(" + attr.lng + "," + attr.lat + ")"
      alter2Node.addNewLine("text_mid", "坐标:", { "text": text })
      if (attr.name) {
          alter2Node.addNewLine("text_mid", "名称:", { "text": attr.name })
      }
      alter2Node.addNewLine("wrap_text", "说明:", { "text": "当前城市将会从主世界地图暂时消失，迁移至活动地图中。 活动结束后，城市自动迁回主世界地图随机一处位置。" })

      alter2Node.setButton0(eventNodeItem, "确定", eventNodeItem.funcs["moveToPlain"].func)
      // eventNodeItem.funcs["进入城市"].eventNodeItem =
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  moveMapCity(alterNewNode, context, eventNodeItem) {
      if (!eventNodeItem.attr) {
          context.Toast("数据异常，请刷新后重试")
          return
      }
      var attr = eventNodeItem.attr
      var alter2Node = context.NewAlert2()

      alter2Node.InitAlert("迁移城市", "确定")

      var text = "(" + attr.lng + "," + attr.lat + ")"
      alter2Node.addNewLine("text_mid", "坐标:", { "text": text })
      if (attr.name) {
          alter2Node.addNewLine("text_mid", "名称:", { "text": attr.name })
      }
      alter2Node.addNewLine("wrap_text", "说明:", { "text": "将您的城市迁移到活动地图。只有在活动结束后，才可迁回。" })

      alter2Node.setButton0(eventNodeItem, "确定", eventNodeItem.funcs["moveToPlain"].func)
      // eventNodeItem.funcs["进入城市"].eventNodeItem =
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }
  moveCityInput(alterNewNode, context, eventNodeItem) {

      if (!eventNodeItem.attr) {
          context.Toast("数据异常，请刷新后重试")
          return
      }

      var attr = eventNodeItem.attr
      var alter2Node = context.NewAlert2()

      alter2Node.InitAlert("迁移城市", "确定")

      var text = "(" + attr.lng + "," + attr.lat + ")"
      alter2Node.addNewLine("text", "坐标:", { "text": text })
      if (attr.name) {
          alter2Node.addNewLine("text", "名称:", { "text": attr.name })
      }
      alter2Node.addNewLine("wrap_text", "说明:", { "text": "迁移城市需要消耗一个迁城条例，可以通过完成每日任务领取道具。\n注意只能迁移到无主的平原地形.\n请在下方输入目的地坐标。\nPs.迁移后，24小时内不能再次迁移。" })
      alter2Node.addNewLine("input", "X:", { "value": "", "showNumberKey": true, "placeholder": "X坐标", "maxLength": 3, "itemKey": "cityX" })
      alter2Node.addNewLine("input", "Y:", { "value": "", "showNumberKey": true, "placeholder": "Y坐标", "maxLength": 3, "itemKey": "cityY" })

      alter2Node.setButton0(eventNodeItem, "确定", eventNodeItem.funcs["moveCity"].func)
      // eventNodeItem.funcs["进入城市"].eventNodeItem =
      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
  }

  //moveToPlain
  moveToPlain(alterNewNode, context, eventNodeItem) {
      var cityX = eventNodeItem.attr.lng;
      var cityY = eventNodeItem.attr.lat;

      context.api.moveCity(cc, window.UserData.city.info.id, parseInt(cityX), parseInt(cityY), function (res) {
          alterNewNode.onButtonCancel();
          eventNodeItem.context.Toast("迁移成功!");
          window.UserData.reloadHomeInfo("city", function () {
              context.changeToMap()
          })

      }, function (errMsg) {
          alterNewNode.onButtonCancel();
          eventNodeItem.context.Toast(errMsg);
      })
  }
  //moveCity
  moveCity(alterNewNode, context, eventNodeItem) {
      var cityX = ""
      var cityY = ""
      eventNodeItem.resultList.forEach((item, index) => {
          if (item.cityX != undefined) {
              cityX = item.cityX
          } else if (item.cityY != undefined) {
              cityY = item.cityY
          }
      })
      if (cityX == "" || cityY == "") {
          eventNodeItem.context.Toast("坐标不能为空")
          return
      }
      if (!eventNodeItem.context.checkNumber(cityX) || !eventNodeItem.context.checkNumber(cityY)) {
          eventNodeItem.context.Toast("只允许输入数字类型")
          return
      }

      context.api.moveCity(cc, eventNodeItem.attr.id, parseInt(cityX), parseInt(cityY), function (res) {
          alterNewNode.onButtonCancel()
          eventNodeItem.context.Toast("迁移成功!")
          eventNodeItem.context.skipScene("Main")
      }, function (errMsg) {
          alterNewNode.onButtonCancel()
          eventNodeItem.context.Toast(errMsg)
      })
  }
  changeCityName(alterNewNode, context, eventNodeItem) {
      var cityName = ""
      eventNodeItem.resultList.forEach((item, index) => {
          if (item.cityName) {
              cityName = item.cityName
          }
      })
      if (!cityName) {
          alterNewNode.onButtonCancel()
          context.ListFunc["showCityList"](context)
          return
      }
      if (cityName == eventNodeItem.attr.name) {
          alterNewNode.onButtonCancel()
          context.ListFunc["showCityList"](context)

          return
      }
      context.api.changeCityName(cc, eventNodeItem.attr.id, cityName, function (res) {
          alterNewNode.onButtonCancel()
          eventNodeItem.context.Toast("修改成功!")
          eventNodeItem.context.skipScene("Main")
      }, function (errMsg) {
          eventNodeItem.context.Toast(errMsg)
      })
  }
  setBattleCfg(alterNewNode, context, eventNodeItem) {
      var data = {}
      var cfg = {}
      if (eventNodeItem.attr.itemList) {
          for (var i = 0; i < eventNodeItem.attr.itemList.length; i++) {
              cfg[eventNodeItem.attr.itemList[i].attr.name_type] = eventNodeItem.attr.itemList[i].getValue()
          }
      }

      data["rank_id"] = eventNodeItem.attr.id
      data["cfg"] = cfg
      context.api.setBattleCfg(cc, data, function (res) {
          context.Toast("设置成功")
          //            window.UserData.reloadHomeInfo("resource,buildings", null)
          return
      }, function (errMsg) {
          context.Toast("错误:" + errMsg)
      })
  }
  showMapDetail(alterNewNode, context, eventNodeItem) {

      if (!eventNodeItem.attr) {
          context.Toast("数据异常，请刷新后重试")
          return
      }

      var attr = eventNodeItem.attr
      var alter2Node = context.NewAlert2()
      if (attr.map_type == 10) {
          alter2Node.InitAlert("城市详情", "关闭")

      } else {
          alter2Node.InitAlert("野地详情", "关闭")

      }

      var text = "(" + attr.lng + "," + attr.lat + ")"
      alter2Node.addNewLine("text_mid", "类型:", { "text": `${attr.city}(${attr.level}级)` })
      alter2Node.addNewLine("text_mid", "地形:", { "text": `${attr.area == 6 ? "海域" : "大陆"}` })
      alter2Node.addNewLine("text_mid", "坐标:", { "text": text })
      alter2Node.addNewLine("wrap_text", "描述:", { "text": attr.map_desc })
      if (attr.station_army && attr.station_army.officer && attr.station_army.officer.length > 0) {
          offName = attr.station_army.officer[0].on
          alter2Node.addNewLine("text_mid", "军官:", { "text": offName, "cusButtonText": "召回" }, function () {
              alter2Node.onButtonCancel()
              if (alterNewNode) {
                  alterNewNode.onButtonCancel()
              }
              var actionData = {}
              actionData.map = eventNodeItem.attr
              actionData.action = "派遣"
              actionData.fromArea = true
              cc.props.SceneContext = actionData
              context.skipScene("Battle");
          })
      } else {
          var offName = "无人驻守"
          alter2Node.addNewLine("text_mid", "军官:", { "text": offName, "cusButtonText": "派遣" }, function () {
              if (alterNewNode) {
                  alter2Node.onButtonCancel()
              }
              alter2Node.onButtonCancel()
              var actionData = {}
              actionData.map = eventNodeItem.attr
              actionData.action = "派遣"
              cc.props.SceneContext = actionData
              context.skipScene("Battle");
          })
      }
      alter2Node.AddButton(eventNodeItem.funcs["moveArmy"])

      if (attr.collect_begin <= 0) {
          if (offName == "无人驻守") {
              alter2Node.AddButton(eventNodeItem.funcs["giveUpAreaConfirm"])
          } else if (attr.source_id == 0) {
              alter2Node.AddButton(eventNodeItem.funcs["collectBegin"])
          }
      } else if (attr.source_id == 0) {
          alter2Node.addNewLine("text_mid", "时长:", { "text": "", "timeBegin": attr.collect_begin })
          alter2Node.addNewLine("wrap_text", "说明:", { "text": "4级野地以上，采集30分钟才可能获得资源哦。时间越长收益越高！" })

          alter2Node.AddButton(eventNodeItem.funcs["collectFinish"])
      }
      if (attr.station_army && attr.station_army.resource) {
          alter2Node.addNewLine("wrap_text", "现有:", { "text": context.getResText(attr.station_army.resource) })
      }
      if (attr.station_army && attr.station_army.desc) {
          alter2Node.addNewLine("wrap_text", "其他:", { "text": attr.station_army.desc })
      }
      if (attr.collect_begin <= 0 && attr.map_type == "5" && attr.source_id == 0) {
          alter2Node.AddButton(eventNodeItem.funcs["建造城市"])
      }
      // 展示驻军信息
      if (attr.station_army && attr.station_army.armies) {
          let al = ""
          for (var i = 0; i < attr.station_army.armies.length; i++) {
              if (attr.station_army.armies[i].number) {
                  al += `${attr.station_army.armies[i].name}: ${attr.station_army.armies[i].number}\n`
              }
          }
          alter2Node.addNewLine("wrap_text", "军队:", {
              "text": al
          })

      }
      //驻军
      if (attr.city_info && attr.city_info.army_list) {
          for (var i = 0; i < attr.city_info.army_list.length; i++) {
              let al = ""
              var armies = attr.city_info.army_list[i].armies
              var officers = attr.city_info.army_list[i].officer
              al += `玩家: ${attr.city_info.army_list[i].user_name}\n`
              al += `军官: ${officers[0].on}\n`

              for (var j = 0; j < armies.length; j++) {
                  if (armies[j].number) {
                      al += `${armies[j].name}: ${armies[j].number}\n`
                  }
              }
              alter2Node.addNewLine("wrap_text", `驻军${i + 1}:`, {
                  "text": al
              })
          }

      }
      alter2Node.OnButtonFunc = function () {
          alter2Node.onButtonCancel()
      }

      alter2Node.Alert()

      if (alterNewNode) {
          alterNewNode.node.zIndex = alter2Node.node.zIndex - 1
      }
  }
  Paiqian(alterNewNode, context, eventNodeItem) {
      var actionData = {}
      actionData.map = eventNodeItem.attr
      actionData.action = "派遣"
      cc.props.SceneContext = actionData
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      context.skipScene("Battle");
  }
  Yunshu(alterNewNode, context, eventNodeItem) {
      var actionData = {}
      actionData.map = eventNodeItem.attr
      actionData.action = "运输"
      cc.props.SceneContext = actionData
      if (alterNewNode) {
          alterNewNode.onButtonCancel()
      }
      context.skipScene("Battle");

  }
  //放弃野地按钮
  giveUpArea(alterNewNode, context, eventNodeItem) {
      if (!eventNodeItem.attr) {
          eventNodeItem.context.Toast("数据错误，请刷新后重试")
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          return
      }
      if (eventNodeItem.attr.station_army && ((eventNodeItem.attr.station_army.officer && eventNodeItem.attr.station_army.officer.length > 0))) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast("请先迁移驻扎的部队或军官!")
          return
      }
      context.api.areaGiveUp(cc, eventNodeItem.attr.source_id, eventNodeItem.attr.id, function (res) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          context.reloadPage()
          eventNodeItem.context.Toast("已放弃野地!")
      }, function (errMsg) {
          if (alterNewNode) {
              alterNewNode.onButtonCancel()
          }
          eventNodeItem.context.Toast(errMsg)
      })
  }

export let AlertFunc: alertfunc = new alertfunc();

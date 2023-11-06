showBattleRecovery(context, battleInfo) {
var data = battleInfo.attr

if (!data || !data.recovery || data.recovery.length == 0) {
    return
}
var alter2Node = context.NewAlert2()
alter2Node.InitAlert("伤兵保险", "召回")
let eventNodeItem = context.newAlertItem()
eventNodeItem.attr = data
alter2Node.addNewLine("wrap_text", "说明", {
    "text": "使用伤兵保险可以召回一部分损失的士兵,司令部中已经存在一部分伤兵。您可以使用伤兵保险再次救治一部分军队。"
})
alter2Node.addNewLine("text_mid", "损失军队:", {
    "text": ""
})
for (var i = 0; i < data.recovery.length; i++) {
    alter2Node.addNewLine("text_mid", data.recovery[i].name + ":", {
        "text": data.recovery[i].number
    })
}

alter2Node.addNewLine("text_mid", "可救军队:", {
    "text": ""
})
let showArmyNodes = Array()
for (var i = 0; i < data.recovery.length; i++) {
    let item = alter2Node.addNewLine("text_mid", data.recovery[i].name + ":", {
        "text": Math.floor(data.recovery[i].number * 0)
    })
    showArmyNodes.push(item)
}
var useProp = null
var propMap = {}
var propNode = alter2Node.addNewLine("selector", "道具:", {
    "value": []
}, function () {
    var id = Number(propNode.getValue())
    useProp = null
    if (propMap[id]) {
        useProp = propMap[id]
    }

    if (!useProp) {
        for (var i = 0; i < data.recovery.length; i++) {
            if (showArmyNodes && i < showArmyNodes.length) {
                showArmyNodes[i].resetText(data.recovery[i].name + ":", {
                    "text": 0
                })
            }
        }
        return
    }

    let coef = 0
    switch (useProp.prop_id) {
        case 340:
            coef = 0.3;
            break;
        case 350:
            coef = 0.5
            break
    }
    for (var i = 0; i < data.recovery.length; i++) {
        if (showArmyNodes && i < showArmyNodes.length) {
            showArmyNodes[i].resetText(data.recovery[i].name + ":", {
                "text": Math.floor(data.recovery[i].number * coef)
            })
        }
    }
})



alter2Node.addNewLine("wrap_text", "", { "text": "" })
alter2Node.addNewLine("wrap_text", "", { "text": "" })
alter2Node.addNewLine("wrap_text", "", { "text": "" })

context.api.propListWithUseLoc(cc, "recovery", function (res) {
    var items = Array()
    items.push({
        "text": "无",
        "value": 0
    })

    for (var i = 0; i < res.length; i++) {
        if (res[i].number <= 0) {
            continue
        }
        if (res[i].detail.use_loc != "recovery") {
            continue
        }
        items.push({
            "text": `${res[i].name}(${res[i].number})`,
            "value": res[i].id
        })
        propMap[res[i].id] = res[i]
    }
    propNode.setSelector(items)
}, function (errMsg) {
    cc.log("error==", "/city/building?bType=0", errMsg)
})


var lock = false

alter2Node.OnButtonFunc = () => {
    if (lock) {
        return
    }
    if (!useProp) {
        context.Toast("请先选择道具")
        return
    }
    var data = {
        "id": useProp.id,
        "number": 1,
        "object_id": battleInfo.report_id
    }
    //调用加速接口
    lock = true
    context.api.UserPropV2(cc, data, function (res) {

        context.Toast("救治成功")
        lock = false
        alter2Node.onButtonCancel()

        return
    }, function (err) {

        context.Toast(err)
        lock = false
    })
}
alter2Node.Alert()
}
showgroupMemberDetail(context, data) {
var alter2Node = context.NewAlert2()
alter2Node.InitAlert("成员信息", "关闭")
let eventNodeItem = context.newAlertItem()
eventNodeItem.attr = data
alter2Node.addNewLine("text", "", {
    "text": ""
})
alter2Node.addNewLine("text_mid", "名称", {
    "text": data.user_name
})

if (data.user_info) {
    alter2Node.addNewLine("text_mid", "荣誉:", {
        "text": data.user_info.honor
    })
    alter2Node.addNewLine("text_mid", "旗号:", {
        "text": data.user_info.user_flag
    })
    alter2Node.addNewLine("text_mid", "职位:", {
        "text": data.user_info.zhiwei_item.name
    })
    alter2Node.addNewLine("text_mid", "军衔:", {
        "text": data.user_info.junxian_item.name
    })
    alter2Node.addNewLine("text_mid", "活跃:", {
        "text": context.TimestampToTime(data.user_info.last_login)
    })

}

if (data.status == 10) {
    alter2Node.addNewLine("wrap_text", "说明:", {
        "text": `${data.reason}`
    })
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["handleAgree"])
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["handleRefuse"])
} else if (data.status == 30) {
    if (data.user_id != window.UserData.user.info.user_id) {
        //  alter2Node.AddButtonFrom0(eventNodeItem.funcs["chat"])
        if (window.UserData.group.groupMyInfo.role == 9) {
            alter2Node.AddButtonFrom0(eventNodeItem.funcs["cleanMember"])
            alter2Node.AddButtonFrom0(eventNodeItem.funcs["shanrangGroup"])
        }

    } else {
        alter2Node.OnButtonFunc = alter2Node.onButtonCancel
    }

}

alter2Node.Alert()
}
createGroup(context, data) {
var neweventNodeItem = context.newAlertItem()
var alter2Node = context.NewAlert2()
neweventNodeItem.alertNode = alter2Node
alter2Node.InitAlert("创建军团", "创建")
alter2Node.addNewLine("text", "", {
    "text": ""
})
alter2Node.addNewLine("wrap_text", "说明:", {
    "text": `创建军团需要至少2级联络中心，并消耗1000钻石。\n当前军团成员最多10人。`
})
alter2Node.addNewLine("text", "", {
    "text": ""
})

alter2Node.addNewLine("input_flush", "军团名称:", {
    "maxLength": 10,
    "value": "",
    "placeholder": "输入军团名称",
    "lineHeight": 30,
    "itemKey": "groupName",
    "randType": "group"
})

alter2Node.setButton0(neweventNodeItem, "创建军团", neweventNodeItem.funcs["createGroup"].func)

alter2Node.Alert()
}
skipToPlay(context, data) {
context.skipScene("Play");

}
myApply(context, data) {
var neweventNodeItem = context.newAlertItem()
var alter2Node = context.NewAlert2()
alter2Node.InitAlert("我的申请", "撤销")

neweventNodeItem.alertNode = alter2Node
context.api.GetGrouptApplyItem(cc, function (res) {
    if (res.status != 10 || !res.group_info) {
        context.Toast("还未申请加入军团")
        return
    }
    alter2Node.addNewLine("text_mid", "名称", {
        "text": res.group_info.name
    })
    alter2Node.addNewLine("text_mid", "军团长", {
        "text": res.group_info.owner_name
    })
    alter2Node.addNewLine("text_mid", "荣誉:", {
        "text": "   " + res.group_info.honor
    })
    alter2Node.addNewLine("text_mid", "人数:", {
        "text": `${res.group_info.number}/${res.group_info.max}`
    })
    alter2Node.addNewLine("wrap_text", "说明:", {
        "text": `${res.group_info.notice}`
    })
    alter2Node.addNewLine("wrap_text", "申请说明:", {
        "text": `${res.reason}`
    })
    alter2Node.addNewLine("wrap_text", "状态:", {
        "text": `${res.status_text}`
    })
    alter2Node.setButton0(neweventNodeItem, "撤销申请", neweventNodeItem.funcs["cancelApplyGroup"].func)

    alter2Node.Alert()

}, function (errMsg) {
    context.Toast("提示:" + errMsg)
})
}
groupDetail(context, data) {

var alter2Node = context.NewAlert2()
let eventNodeItem = context.newAlertItem()
eventNodeItem.attr = data
eventNodeItem.alertNode = alter2Node
if (window.UserData.user.info.group_id == 0) {
    alter2Node.InitAlert("加入军团", "加入")
    alter2Node.addNewLine("text_mid", "", {
        "text": ""
    })
    alter2Node.addNewLine("wrap_text", "说明:", {
        "text": `加入军团需要至少1级联络中心`
    })
} else {
    alter2Node.InitAlert("军团信息", "关闭")
    alter2Node.addNewLine("text", "", {
        "text": ""
    })
}
alter2Node.addNewLine("text_mid", "名称:", {
    "text": data.name,
    "cusButtonText": "复制",
}, function () {
    let f = ""
    console.log("复制", data.name)
    if (window.wx) {
        // console.log('复制---微信小游戏--cc.sys.platform=', cc.sys.platform);
        wx.setClipboardData({
            data: data.name,
            success: function (res) {
                console.log("success复制成功：", data.name);
                if (window.qq) {
                    wx.showToast({
                        title: '复制成功',
                        icon: 'success',
                        duration: 2000
                    })
                }
                return true;
            }
        });
    }
    return
})

alter2Node.addNewLine("text_mid", "军团长:", {
    "text": data.owner_name
})
alter2Node.addNewLine("text_mid", "荣誉:", {
    "text": data.honor
})
alter2Node.addNewLine("text_mid", "人数:", {
    "text": `${data.number}/${data.max}`
})
//        alter2Node.addNewLine("wrap_text", "说明:", { "text": `${attr.notice}` })
if (window.UserData.user.info.group_id == 0) {
    alter2Node.setButton0(eventNodeItem, "加入军团", eventNodeItem.funcs["addGroup"].func)
} else {
    alter2Node.OnButtonFunc = alter2Node.onButtonCancel
}

alter2Node.Alert()
}
showTechDetail(context, item) {

var alter2Node = context.NewAlert2()
let neweventNodeItem = context.newAlertItem()
neweventNodeItem.techType = item.type
neweventNodeItem.alterNewNode = alter2Node
alter2Node.eventNodeItem = neweventNodeItem
alter2Node.InitAlert(item.name, "确定")

alter2Node.SetLoadFunc(function (item) {

    alter2Node.addNewLine("text_mid", "名称:", {
        "text": item.name
    })
    alter2Node.addNewLine("text_mid", "等级:", {
        "text": item.level
    })
    alter2Node.addNewLine("wrap_text", "说明:", {
        "text": item.desc
    })
    if (item.next && item.next > 0) {
        alter2Node.addNewLine("text_mid", "", {
            "text": ""
        })

        alter2Node.addNewLine("wrap_text", "广告:", {
            "text": "广告价值百万金，每10分钟一次。"
        })
        alter2Node.addNewLine("wrap_text", "黄金:", {
            "text": "通过捐献黄金加速研究。(至少10万每次)"
        })
        alter2Node.addNewLine("wrap_text", "", {
            "text": ""
        })

        let maxNum = cc.props.cityRes.gold
        alter2Node.eventNodeItem.goldNumber = 0
        alter2Node.addNewLine("slider", `捐献:`, {
            "max": maxNum,
            "callback": function (num) {
                alter2Node.eventNodeItem.goldNumber = num
            }
        })

        alter2Node.addNewLine("text_mid", "", {
            "text": ""
        })
        alter2Node.addNewLine("text_mid", "升级进展:", {
            "text": item.number + "/" + item.next
        })
        alter2Node.addNewLine("time_cron", "广告冷却:", {
            "nextTime": window.UserData.group.groupMyInfo.next_ad_time,
            "eventNodeItem": neweventNodeItem,
            "finishLabel": "已就绪"
        })
        alter2Node.AddButtonFrom0(alter2Node.eventNodeItem.funcs["groupGoldTech"])
        alter2Node.AddButtonFrom0(alter2Node.eventNodeItem.funcs["groupAdTech"])

    } else {
        alter2Node.addNewLine("wrap_text", "升级", {
            "text": "已满级"
        })
        alter2Node.OnButtonFunc = alter2Node.onButtonCancel
    }
})
alter2Node.LoadView(item)
alter2Node.Alert()

}
//ExitGroupConfirm 退出军团
ExitGroupConfirm(context, data) {

var alter2Node = context.NewAlert2()
let neweventNodeItem = context.newAlertItem()
neweventNodeItem.alterNewNode = alter2Node
alter2Node.InitAlert("退出军团", "确定")
alter2Node.addNewLine("text", "", {
    "text": ""
})
alter2Node.addNewLine("wrap_text", "提示", {
    "text": `普通成员可以直接退出军团。`
})
alter2Node.addNewLine("wrap_text", "", {
    "text": `军团长退出请移步【解散军团】`
})
alter2Node.AddButtonFrom0(neweventNodeItem.funcs["exitGroup"])

alter2Node.Alert()
}
//展示详情
showBuildingDetail(context, attr) {
var alter2Node = context.NewAlert2()
alter2Node.InitAlert("建筑详情", "关闭")
var neweventNodeItem = context.newAlertItem()
neweventNodeItem.attr = attr
alter2Node.eventNodeItem = neweventNodeItem
let attrdetail = context.getObjectDetail(attr.name_type)


alter2Node.addNewLine("text_mid", "建筑名称:", {
    "text": attr.name
})
alter2Node.addNewLine("text_mid", "当前等级:", {
    "text": attr.level
})
alter2Node.addNewLine("text_mid", "最高等级:", {
    "text": `${attrdetail.max_level ? attrdetail.max_level : 0}级`
})
alter2Node.addNewLine("text_mid", "数量限制:", {
    "text": attrdetail.only_one == 1 ? "仅限1座" : "不限制"
})
alter2Node.addNewLine("text_mid", "当前等级:", {
    "text": attr.level
})

let attrLeveldetail = context.getObjectLevelDetail(attr.name_type, attr.level + 1)

if (attrLeveldetail) {
    alter2Node.addNewLine("text", "", {
        "text": "------------------下一等级要求------------------"
    })

    if (attrLeveldetail.need_building_string) {
        alter2Node.addNewLine("wrap_text", "建筑条件:", {
            "text": attrLeveldetail.need_building_string
        })
    }
    if (attrLeveldetail.need_tech_string) {
        alter2Node.addNewLine("wrap_text", "科技条件:", {
            "text": attrLeveldetail.need_tech_string
        })
    }
    if (attrLeveldetail.need_resource_string) {
        alter2Node.addNewLine("wrap_text", "资源条件:", {
            "text": attrLeveldetail.need_resource_string
        })
    }
    if (attr.reason_string && attr.reason_string) {
        alter2Node.addNewLine("wrap_text", "欠缺条件:", {
            "text": attr.reason_string
        })
    }
}
if (attrdetail) {
    alter2Node.addNewLine("wrap_text", "功能说明:", {
        "text": attrdetail.description
    })

}
let nextLeveldetail = context.getObjectLevelDetail(attr.name_type, attr.level + 1)
if (nextLeveldetail && nextLeveldetail.desc) {
    alter2Node.addNewLine("wrap_text", "下一等级:", {
        "text": nextLeveldetail.desc
    })
}
if (attr.status == 2) {
    alter2Node.AddButton(neweventNodeItem.funcs["showCancelFunc"])

}
if (attr.level > 0 && (attr.type == 0 || attr.type == 1|| attr.type == 4) && attr.status == 1) {
    alter2Node.AddButton(neweventNodeItem.funcs["destroyBuildingConfirm"])
}
if (attr.name_type == "2") {
    alter2Node.AddButton(neweventNodeItem.funcs["showloseArmies"])
    alter2Node.AddButton(neweventNodeItem.funcs["defenseSetting"])

} else if (attr.name_type == "5") {
    alter2Node.AddButton(neweventNodeItem.funcs["skipExchange"])
} else if (attr.name_type == "11" && attr.level > 10) {
    alter2Node.AddButton(neweventNodeItem.funcs["searchArmy"])
}
alter2Node.OnButtonFunc = function () {
    alter2Node.onButtonCancel()
}
alter2Node.Alert()
}

//展示可升级建筑
showCanBuildingList(context, attr) {

var title = "建造"
if (this.type == "Tech") {
    title = "训练"
}
var alter2Node = this.context.NewAlert2()
let neweventNodeItem = context.newAlertItem()
neweventNodeItem.attr = attr
alter2Node.eventNodeItem = neweventNodeItem


alter2Node.InitAlert(title, "关闭", "")
let _this = this

this.context.api.requestAPI(cc, "GET", "/building/can?bType=" + attr.type, {}, function (res) {
    for (var i = 0; i < res.length; i++) {
        if (res[i].can_build == true) {
            alter2Node.addNewLine("text_mid", res[i].name, {
                "text": title,
                "lineHeight": 35,
                "cusButtonText": title
            }, function (item) {
                return function () {
                    attr.name = item.name
                    attr.name_type = item.name_type
                    attr.description = item.description
                    attr.detail = item.detail[1]
                    attr.name = item.name
                    attr.sys_info = item
                    context.ListFunc["showUpgradeFunc"](alter2Node.context, attr)
                    alter2Node.onButtonCancel()
                }
            }(res[i]))

        } else {
            alter2Node.addNewLine("text_mid", res[i].name, {
                "text": "条件不足",
                "lineHeight": 35,
                "cusButtonText": "详情"
            }, function (item) {
                return function () {
                    attr.name = item.name
                    attr.name_type = item.name_type
                    attr.description = item.description
                    attr.detail = item.detail[1]
                    attr.name = item.name
                    attr.sys_info = item
                    context.ListFunc["showBuildingDetail"](alter2Node.context, attr)
                    alter2Node.onButtonCancel()

                }
            }(res[i]))

        }

    }
    alter2Node.OnButtonFunc = alter2Node.onButtonCancel
    alter2Node.Alert()

}, function (errMsg) {
    cc.log("error:", "/building/can", errMsg)
})
}
//展示升级弹窗
showUpgradeFunc(context, attr) {


var alter2Node = context.NewAlert2()
let neweventNodeItem = context.newAlertItem()
neweventNodeItem.attr = attr
alter2Node.eventNodeItem = neweventNodeItem
alter2Node.InitAlert("建筑详情", "升级")

let attrdetail = context.getObjectDetail(attr.name_type)

alter2Node.addNewLine("text_mid", "建筑名称:", {
    "text": attr.name
})
alter2Node.addNewLine("text_mid", "当前等级:", {
    "text": attr.level
})
alter2Node.addNewLine("text_mid", "最高等级:", {
    "text": attrdetail.max_level + "级"
})
alter2Node.addNewLine("text_mid", "数量限制:", {
    "text": attrdetail.only_one == 1 ? "仅限1座" : "不限制"
})
alter2Node.addNewLine("text_mid", "当前等级:", {
    "text": attr.level
})
alter2Node.addNewLine("text", "", {
    "text": "------------------下一等级要求------------------"
})
let attrLeveldetail = context.getObjectLevelDetail(attr.name_type, attr.level + 1)
if (attrLeveldetail.need_building_string) {
    alter2Node.addNewLine("wrap_text", "建筑条件:", {
        "text": attrLeveldetail.need_building_string
    })
}
if (attrLeveldetail.need_tech_string) {
    alter2Node.addNewLine("wrap_text", "科技条件:", {
        "text": attrLeveldetail.need_tech_string
    })
}
if (attrLeveldetail.need_resource_string) {
    alter2Node.addNewLine("wrap_text", "资源条件:", {
        "text": attrLeveldetail.need_resource_string
    })
}
// if (attr.sys_info.reason_string && attr.sys_info.reason_string != "") {
//     alter2Node.addNewLine("wrap_text", "条件不足:", { "text": attr.sys_info.reason_string })
// }

alter2Node.addNewLine("wrap_text", "功能说明:", {
    "text": attrdetail.description
})

alter2Node.OnButtonFunc = function () {
    alter2Node.onButtonCancel()
}

alter2Node.OnButtonFunc = function () {
    var data = {}
    data["building_id"] = attr.id
    data["name_type"] = attr.name_type
    data["type"] = attr.type
    context.api.requestAPI(cc, "POST", "/building/upgrade", data, function (res) {

        if (res && attr.index >= 0) {
            res.index = attr.index
            window.UserData.UpdateLocalObject(res)

        } else {
            window.UserData.reloadHomeInfo("resource,buildings", null)
        }
        alter2Node.onButtonCancel()
        //
    })
}
alter2Node.Alert()
}
finishFunc(context, attr, successCallback, errorCallback) {
context.api.MagicUpdate(cc, attr.id, attr.type, function (res) {
    if (res && attr.index >= 0) {
        res.index = attr.index
        window.UserData.UpdateLocalObject(res)
    } else {
        window.UserData.reloadHomeInfo("resource,buildings", null)
    }
    if (successCallback) {
        successCallback(res)
    }

}, function (errMsg) {
    context.Toast(errMsg)
    if (errorCallback) {
        errorCallback(errMsg)
    }
})
}
acceFunc(context, attr) {

var eventNodeItem = this.context.newAlertItem()
eventNodeItem.attr = attr

var alter2Node = context.NewAlert2()
alter2Node.InitAlert("时间加速", "确定")
alter2Node.addNewLine("text", "", {
    "text": ""
})
alter2Node.addNewLine("wrap_text", "说明:", {
    "text": `普通加速可以加速30分钟，且只能加速一次。\n\n道具加速使用加速包，加速效果累加。`
})
eventNodeItem.ShowPropType = 3

if (attr.has_acce == 0) {
    alter2Node.setButton0(eventNodeItem, "普通加速", eventNodeItem.funcs["objectAcce"].func)
    alter2Node.AddButton(eventNodeItem.funcs["accePropList"])

} else {
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["accePropList"])
}
alter2Node.Alert()
}
receiveTotalLimit(context, attr) {
var alter3Node = context.NewAlert3()
alter3Node.InitAlert("充值奖励", "领取")
if (window.UserData.user.info.total_money > 0) {
    alter3Node.addNewLine("wrap_text", "", {}, function () {
        return {
            "name": "",
            "content": ""
        }
    })
    alter3Node.addNewLine("wrap_text", "", {}, function () {
        return {
            "name": "已充值:",
            "content": window.UserData.user.info.total_money + "钻石" + `${window.UserData.user.info.total_money > window.UserData.user.info.next_limit_receive ? "(已达成)" : ""}`,
        }
    })
    if (window.UserData.user.info.next_reward) {
        alter3Node.addNewLine("wrap_text", "", {}, function () {
            return {
                "name": "充值活动:",
                "content": window.UserData.user.info.next_reward.name
            }
        })
        if (window.UserData.user.info.next_reward.officer) {
            for (var i = 0; i < window.UserData.user.info.next_reward.officer.length; i++) {
                alter3Node.addNewLine("wrap_text", "", {}, function () {
                    return {
                        "name": window.UserData.user.info.next_reward.officer[i].on + ":",
                        "content": `后勤: +${window.UserData.user.info.next_reward.officer[i].os} \n军事: +${window.UserData.user.info.next_reward.officer[i].op}\n学识: +${window.UserData.user.info.next_reward.officer[i].ok}\n属性点: +${window.UserData.user.info.next_reward.officer[i].attr_num}`
                    }
                })
            }
        }
        if (window.UserData.user.info.next_reward.prop) {
            alter3Node.addNewLine("wrap_text", "", {}, function () {
                return {
                    "name": "道具奖励:",
                    "content": ` `
                }
            })
            for (var i = 0; i < window.UserData.user.info.next_reward.prop.length; i++) {
                alter3Node.addNewLine("wrap_text", "", {}, function () {
                    return {
                        "name": "",
                        "content": `${window.UserData.user.info.next_reward.prop[i].text}: +${window.UserData.user.info.next_reward.prop[i].num}`
                    }
                })
            }
        }
    }
}
alter3Node.OnButtonFunc = function () {
    context.api.receiveChongzhiTotal(cc, function (res) {
        window.UserData.user.info = res
        context.Toast("领取成功")
        context.reloadPage()
        alter3Node.onButtonCancel()
    }, function (errMsg) {
        context.Toast("提示:" + errMsg)
    })
}
alter3Node.Alert()
}
showOfficerEquip(context, attr) {
var _attr = attr
var _this = this
var eventNodeItem = context.newAlertItem()
eventNodeItem.attr = attr
eventNodeItem.reloadPage = function (res) {
    if (_this.parent) {
        _this.parent.updateData(_this.type)
    }

}
var alter2Node = context.NewAlert2()
alter2Node.InitAlert(_attr.on, "关闭")
//{"name":"埃隆·马斯克","star":5,"attack":15,"server":17,"tech":20,"level":1,"status":0}

alter2Node.addNewLine("text_mid", "姓名:", {
    "text": `${_attr.on}(${_attr.l}级)`,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "星级:", {
    "text": _attr.st + "星",
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "后勤:", {
    "text": _attr.equip_officer_service > 0 ? _attr.os + _attr.equip_officer_service + `  (${_attr.os}+${_attr.equip_officer_service})` : _attr.os,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "军事:", {
    "text": _attr.equip_officer_power > 0 ? _attr.op + _attr.equip_officer_power + `  (${_attr.op}+${_attr.equip_officer_power})` : _attr.op,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "学识:", {
    "text": _attr.equip_officer_knowledge > 0 ? _attr.ok + _attr.equip_officer_knowledge + `  (${_attr.ok}+${_attr.equip_officer_knowledge})` : _attr.ok,
    "lineHeight": 30
})
var equipList = [{ "key": "equip_header", "text": "头部" }, { "key": "equip_shoulder", "text": "肩部" }, { "key": "equip_body", "text": "衣服" }, { "key": "equip_hand", "text": "手部" }, { "key": "equip_waist", "text": "腰部" }, { "key": "equip_shoes", "text": "鞋子" }, { "key": "equip_medal", "text": "勋章" }, { "key": "equip_decoration", "text": "饰品" }, { "key": "equip_parts", "text": "配件" }]

for (var i = 0; i < equipList.length; i++) {
    //解决闭包问题
    (function (dataItem) {
        var neweventNodeItem = context.newAlertItem()
        neweventNodeItem.data = _attr
        neweventNodeItem.alterNewNode = alter2Node
        neweventNodeItem.equipType = dataItem.key
        if (_attr[dataItem.key]) {

            neweventNodeItem.equip = _attr[dataItem.key]

            alter2Node.addNewLine("attr_equip", dataItem.text + ":", {
                "text": _attr[dataItem.key].name,
                "text_color": context.levelColor[_attr[dataItem.key].level] ? context.levelColor[_attr[dataItem.key].level] : "",
                "attr": `${_attr[dataItem.key].attribute.officer_service}/${_attr[dataItem.key].attribute.officer_power}/${_attr[dataItem.key].attribute.officer_knowledge}`,
                "lineHeight": 30,
                "cusButtonText": "",
                "eventNodeItem": neweventNodeItem,
                "onAddFunc": context.ListFunc["addEquip"],
                "onDescFunc": context.ListFunc["removeEquip"],
            })
        } else {
            alter2Node.addNewLine("attr_equip", dataItem.text + ":", {
                "text": "--",
                "attr": "--",
                "lineHeight": 30,
                "cusButtonText": "",
                "onAddFunc": context.ListFunc["addEquip"],
                "eventNodeItem": neweventNodeItem
            })
        }
    }(equipList[i]))
}
if (attr.equip_addition_desc) {
    alter2Node.addNewLine("wrap_text", "套装效果:", {
        "text": attr.equip_addition_desc,
        "valueColor": context.levelColor[attr.equip_addition_level]
    })
}
alter2Node.OnButtonFunc = alter2Node.onButtonCancel
alter2Node.afterAlert = () => {
    context.ListFunc["showOfficerDetail"](context, attr)
}
alter2Node.Alert()

// 添加点击事件 返回true后就关闭弹窗
}
showOfficerDetail(context, attr) {
var _attr = attr
var _this = this
var eventNodeItem = context.newAlertItem()
eventNodeItem.attr = attr
eventNodeItem.reloadPage = function (res) {
    if (_this.parent) {
        _this.parent.updateData(_this.type)
    }

}
var alter2Node = context.NewAlert2()
eventNodeItem.alterNewNode = alter2Node
alter2Node.InitAlert("军官", "关闭")
//{"name":"埃隆·马斯克","star":5,"attack":15,"server":17,"tech":20,"level":1,"status":0}

alter2Node.addNewLine("text_mid", "姓名:", {
    "text": _attr.on,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "星级:", {
    "text": _attr.st + "星",
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "后勤:", {
    "text": _attr.equip_officer_service > 0 ? _attr.os + _attr.equip_officer_service + `  (${_attr.os}+${_attr.equip_officer_service})` : _attr.os,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "军事:", {
    "text": _attr.equip_officer_power > 0 ? _attr.op + _attr.equip_officer_power + `  (${_attr.op}+${_attr.equip_officer_power})` : _attr.op,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "学识:", {
    "text": _attr.equip_officer_knowledge > 0 ? _attr.ok + _attr.equip_officer_knowledge + `  (${_attr.ok}+${_attr.equip_officer_knowledge})` : _attr.ok,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "级别:", {
    "text": _attr.l,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "薪资:", {
    "text": _attr.we,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "忠诚:", {
    "text": _attr.ly,
    "lineHeight": 30
})

alter2Node.addNewLine("text_mid", "状态:", {
    "text": _attr.stu_text,
    "lineHeight": 30
})
if (_attr.stu == 60) {
    alter2Node.addNewLine("text_mid", "被俘时间:", {
        "text": context.TimestampToTime(_attr.captive_time),
        "lineHeight": 30
    })
}
alter2Node.addNewLine("text_mid", "经验值:", {
    "text": `${_attr.exp}/${_attr.next_exp}`,
    "lineHeight": 30
})
alter2Node.addNewLine("text_mid", "属性点:", {
    "text": " " + _attr.attr_num,
    "lineHeight": 30
})
if (_attr.skill_1) {
    alter2Node.addNewLine("text_mid", "技能1:", {
        "text": _attr.skill_1.name + "(" + _attr.skill_level + "级)",
        "lineHeight": 30,
        "cusButtonText": "",
        "eventNodeItem": eventNodeItem,
    })
} else {
    alter2Node.addNewLine("text_mid", "技能1:", {
        "text": "未掌握",
        "lineHeight": 30,
        "cusButtonText": "",
        "eventNodeItem": eventNodeItem
    })
}
if (_attr.skill_2) {
    alter2Node.addNewLine("text_mid", "技能2:", {
        "text": _attr.skill_2.name + "(" + _attr.skill_level + "级)",
        "lineHeight": 30,
        "cusButtonText": "",
        "eventNodeItem": eventNodeItem,
    })

} else {
    alter2Node.addNewLine("text_mid", "技能2:", {
        "text": "未掌握",
        "lineHeight": 30,
        "cusButtonText": "",
        "eventNodeItem": eventNodeItem
    })
}

if (_attr.skill_3) {
    alter2Node.addNewLine("text_mid", "技能3:", {
        "text": _attr.skill_3.name + "(" + _attr.skill_level + "级)",
        "lineHeight": 30,
        "cusButtonText": "",
        "eventNodeItem": eventNodeItem,
    })
} else {
    alter2Node.addNewLine("text_mid", "技能3:", {
        "text": "未掌握",
        "lineHeight": 30,
        "cusButtonText": "",
        "eventNodeItem": eventNodeItem
    })
}

if (_attr.stu == 20) {
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["unOfferOfficer"])
} else if (_attr.stu == 10) {
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["handlerOfficer"])
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["offerOfficer"])
    // alter2Node.AddButtonFrom0(eventNodeItem.funcs["empty"])
    alter2Node.AddButton({
        "func": function () {
            alter2Node.afterAlert = () => {
                context.ListFunc["showOfficerEquip"](context, _attr)
            }
            alter2Node.onButtonCancel()
        },
        "eventNodeItem": eventNodeItem,
        "btnText": "装备"
    })
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["fireOfficer"])
} else if (_attr.stu == 60 && _attr.ui == window.UserData.user.info.user_id) {
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["ShuhuiCaptive"])
    alter2Node.AddButtonFrom0(eventNodeItem.funcs["GiveUpShuhuiCaptive"])
} else if (_attr.stu == 60 && _attr.ui != window.UserData.user.info.user_id) {
    if (_attr.ui == 0) {
        alter2Node.AddButtonFrom0(eventNodeItem.funcs["ZhaomuCaptive"])
        alter2Node.AddButtonFrom0(eventNodeItem.funcs["ReleaseOfficer"])
    } else {
        alter2Node.AddButtonFrom0(eventNodeItem.funcs["ZhaomuCaptive"])
        alter2Node.AddButtonFrom0(eventNodeItem.funcs["ReleaseOfficer"])
    }
} else {
    alter2Node.OnButtonFunc = alter2Node.onButtonCancel
}
alter2Node.Alert()

// 添加点击事件 返回true后就关闭弹窗
}
addYouhao(context, dataItem) {
var alter2Node = context.NewAlert2()
alter2Node.InitAlert("添加友好", "确定")
alter2Node.addNewLine("text", "", {
    "text": ""
})
alter2Node.addNewLine("wrap_text", "说明:", {
    "text": `将${dataItem.attr.name}军团置为友好。之后我方团员只有先宣战才可以攻击对方军团。`
})

alter2Node.OnButtonFunc = () => {

    context.api.AddGroupRelation(cc, dataItem.attr.name, "group", 0, {}, function (res) {
        context.Toast("设置成功")
        alter2Node.onButtonCancel()
        context.reloadPage()
    }, function (errorMsg) {
        console.log(errorMsg)
        context.Toast(errorMsg)
        alter2Node.onButtonCancel()
    })
}
alter2Node.Alert()
}
addHostile(context, eventNodeItem) {
var alter2Node = context.NewAlert2()
alter2Node.InitAlert("添加敌对", "添加")
alter2Node.addNewLine("text", "", {
    "text": ""
})
alter2Node.addNewLine("wrap_text", "说明:", {
    "text": `在下方输入对方军团名称，建议直接复制粘贴。`
})

var nameNode = alter2Node.addNewLine("input_long", "敌对军团", {
    "maxLength": 32,
    "value": "",
    "lineHeight": 30,
    "placeholder": "输入敌对军团名称",
})
alter2Node.OnButtonFunc = () => {
    if (nameNode.getValue() == "") {
        context.Toast("请输入对方军团名称")
        return
    }
    context.api.AddGroupRelation(cc, nameNode.getValue(), "group", 1, null, function (res) {
        context.Toast("添加成功")
        alter2Node.onButtonCancel()
        context.reloadPage()
    }, function (errorMsg) {
        console.log(errorMsg)
        context.Toast(errorMsg)
        alter2Node.onButtonCancel()
    })
}
alter2Node.Alert()
}
addEquip(context, eventNodeItem) {
if (eventNodeItem.alterNewNode) {
    eventNodeItem.alterNewNode.afterAlert = null
    eventNodeItem.alterNewNode.onButtonCancel()
}
var alter2Node = context.NewAlert2()

if (eventNodeItem.alterNewNode) {
    eventNodeItem.alterNewNode.onButtonCancel()
}
if (!eventNodeItem.data || eventNodeItem.data.stu != 10) {
    context.Toast("只有空闲军官可以穿卸装备")
    return
}
var equip = eventNodeItem.equip
alter2Node.InitAlert("穿戴装备", "关闭")
if (equip) {
    alter2Node.addNewLine("text_mid", "装备:", {
        "text": `${equip.name}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",
    })
    alter2Node.addNewLine("text_mid", "品质:", {
        "text": `${equip.level_name}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",
    })

    alter2Node.addNewLine("text_mid", "后勤:", {
        "text": `+${equip.attribute.officer_service}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",
    })
    alter2Node.addNewLine("text_mid", "军事:", {
        "text": `+${equip.attribute.officer_power}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",
    })
    alter2Node.addNewLine("text_mid", "学识:", {
        "text": `+${equip.attribute.officer_knowledge}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",

    })
    // alter2Node.addNewLine("text_mid", "级别", {
    //     "text": `+${equip.attribute.officer_service}/${equip.attribute.officer_power}/${equip.attribute.officer_knowledge}`,
    // })
}
alter2Node.addNewLine("wrap_text", "", {
    "text": ``
})
alter2Node.addNewLine("wrap_text", "可穿戴装备", {
    "text": `>>>>>>>>>>`
})
context.api.propListWithType(cc, 10, function (res) {
    var items = Array()
    items.push({ "text": "无", "value": 0 })
    for (var i = 0; i < res.length; i++) {
        if (res[i].detail.type != 10) {
            continue
        }

        if (res[i].detail.use_loc != eventNodeItem.equipType) {
            continue
        }
        (function (dataItem) {

            alter2Node.addNewLine("text_mid", "装备:", {
                "text": `${dataItem.detail.name}`,
                "valueColor": context.levelColor[dataItem.detail.level] ? context.levelColor[dataItem.detail.level] : "",
                "cusButtonText": "穿戴"
            }, function () {
                context.api.wearEquip(cc, eventNodeItem.data.id, dataItem.prop_id, eventNodeItem.equipType, "wear", function () {
                    window.UserData.reloadHomeInfo("cityOfficer", function () {
                        for (var i = 0; i < window.UserData.city.officers.length; i++) {
                            if (window.UserData.city.officers[i].id == eventNodeItem.data.id) {
                                alter2Node.afterAlert = () => {
                                    context.ListFunc["showOfficerEquip"](context, window.UserData.city.officers[i])
                                }
                                alter2Node.onButtonCancel()
                                break
                            }
                        }

                    })
                    context.Toast("佩戴成功")
                }, function (errMsg) {
                    context.Toast("提示:" + errMsg)
                })
            })
        }(res[i]))
    }
}, function (errMsg) {
    cc.log("error==", "/city/building?bType=0", errMsg)
})
//alter2Node.AddButtonFrom0(neweventNodeItem.funcs["exitGroup"])
alter2Node.afterAlert = () => {
    context.ListFunc["showOfficerEquip"](context, eventNodeItem.data)
}
alter2Node.OnButtonFunc = () => {
    alter2Node.onButtonCancel()
}
alter2Node.Alert()
}
removeEquip(context, eventNodeItem) {

if (!eventNodeItem || !eventNodeItem.equip) {
    return
}
if (eventNodeItem.alterNewNode) {
    eventNodeItem.alterNewNode.afterAlert = null
    eventNodeItem.alterNewNode.onButtonCancel()
}
if (!eventNodeItem.data || eventNodeItem.data.stu != 10) {
    context.Toast("只有空闲军官可以穿卸装备")
    return
}
var alter2Node = context.NewAlert2()

if (eventNodeItem.alterNewNode) {
    eventNodeItem.alterNewNode.onButtonCancel()
}
var equip = eventNodeItem.equip
var equipType = eventNodeItem.equipType
alter2Node.InitAlert("穿戴装备", "卸载")
if (equip) {
    alter2Node.addNewLine("text_mid", "装备:", {
        "text": `${equip.name}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",
    })
    alter2Node.addNewLine("text_mid", "品质:", {
        "text": `${equip.level_name}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",
    })

    alter2Node.addNewLine("text_mid", "后勤:", {
        "text": `+${equip.attribute.officer_service}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",
    })
    alter2Node.addNewLine("text_mid", "军事:", {
        "text": `+${equip.attribute.officer_power}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",
    })
    alter2Node.addNewLine("text_mid", "学识:", {
        "text": `+${equip.attribute.officer_knowledge}`,
        "valueColor": context.levelColor[equip.level] ? context.levelColor[equip.level] : "",

    })
    // alter2Node.addNewLine("text_mid", "级别", {
    //     "text": `+${equip.attribute.officer_service}/${equip.attribute.officer_power}/${equip.attribute.officer_knowledge}`,
    // })
}
alter2Node.addNewLine("wrap_text", "", {
    "text": ``
})
alter2Node.OnButtonFunc = () => {
    context.api.wearEquip(cc, eventNodeItem.data.id, eventNodeItem.equip.uuid, equipType, "take", function () {
        window.UserData.reloadHomeInfo("cityOfficer", function () {
            for (var i = 0; i < window.UserData.city.officers.length; i++) {
                if (window.UserData.city.officers[i].id == eventNodeItem.data.id) {
                    alter2Node.afterAlert = () => {
                        context.ListFunc["showOfficerEquip"](context, window.UserData.city.officers[i])
                    }
                    alter2Node.onButtonCancel()
                    break
                }
            }
            context.Toast("卸装成功")
        })

    }, function (errMsg) {
        context.Toast("提示:" + errMsg)
    })
}
alter2Node.afterAlert = () => {
    context.ListFunc["showOfficerEquip"](context, eventNodeItem.data)
}

alter2Node.Alert()
}

//展示出来训练军队的弹窗
onButtonShowArmyDetail(context, attr) {
this.context = context
this.attr = attr
var item = this.context.getArmyByNameType(this.attr.name_type)
var btnText = "确定"
//只有status = 1才可以训练
if (this.attr.status == 1) {
    btnText = "训练"
}
//{"id":1,"name":"步兵","name_type":"1","description":"我是步兵","camp":0,"need_building":"[{\"name_type\":\"1\",\"level\":\"1\"},{\"name_type\":\"13\",\"level\":\"1\"}]","need_tech":"[{\"name_type\":\"0\",\"level\":\"1\"},{\"name_type\":\"0\",\"level\":\"1\"}]","need_resource":"{\"gold\":\"0\",\"food\":\"50\",\"steel\":\"70\",\"oil\":\"10\",\"rare\":\"100\",\"people\":\"1\"}","need_time":10,"attack_down":10,"attack_sea":10,"attack_up":9,"attack_defense":18,"defense":10,"attack_range":20,"speed":300,"blood":100,"oil_need":1,"food_need":1,"type":0,"can_weight":50}
var alterNewNode = this.context.NewAlert2()
var eventNodeItem = this.context.newAlertItem()
eventNodeItem.alterNewNode = alterNewNode
eventNodeItem.attr = attr
var _this = this
eventNodeItem.reloadPage = function (res) {
    if (_this.parent) {
        _this.parent.updateData(_this.type)
    }

}
alterNewNode.InitAlert(this.attr.name + ":", btnText);
alterNewNode.setGridLayout()

alterNewNode.addNewLine("grid_text", "数量:", {
    "text": this.attr.number
});

if (this.attr.status == 1) {
    alterNewNode.addNewLine("grid_text", "状态:", {
        "text": "空闲"
    });
} else if (this.attr.status == 2) {
    alterNewNode.addNewLine("grid_text", "状态:", {
        "text": "训练中"
    });
}

alterNewNode.addNewLine("grid_text", "在训:", {
    "text": this.attr.train_number
});

var utils = require("utils");

if (this.attr.status == 1) {
    var selectNum = 0
    alterNewNode.addNewLine("text", "", {
        "text": "  ========滑动输入训练数量========"
    });
    var useTimeObj = alterNewNode.addNewLine("grid_text", "", {
        "text": item.need_resource.rare
    });
    var sliderObj = alterNewNode.addNewLine("slider", "数量", {
        "nameSize": 32,
        "max": 0,
        "callback": function (num) {
            selectNum = num
            var fname = "耗时:" + utils.timeToStr(item.need_time * num)
            useTimeObj.setItemValue(fname)
        }
    })
    this.context.api.getArmyCanTrainNum(cc, this.attr.name_type, function (res) {
        sliderObj.SetMax(res.can_train)
        var fname = "耗时:" + utils.timeToStr(item.need_time * res.can_train / 2)
        useTimeObj.setItemValue(fname)
        selectNum = Math.ceil(res.can_train / 2)

    })
}


var _this = this
if (this.attr.status == 1) {
    // 点击弹窗中的训练按钮，开始训练军队
    alterNewNode.OnButtonFunc = () => {
        //滑动窗口大于0 才说明需要建造军队
        if (selectNum > 0) {
            selectNum = Math.ceil(selectNum)
            _this.context.api.trainArmy(cc, this.attr.id, this.attr.name_type, selectNum, function (res) {
                alterNewNode.onButtonCancel()


                if (res && _this.attr.index >= 0) {
                    res.attr.index = _this.attr.index
                    window.UserData.UpdateLocalObject(res.attr)
                } else {
                    window.UserData.reloadHomeInfo("cityArmy", null)
                }

            }, function (errorMsg) {
                _this.context.Toast(errorMsg)
                return
            })
        }
    }
} else if (this.attr.status == 2) {
    alterNewNode.addNewLine("text_mid", "提示:", {
        "text": "解散训练资源返还50%"
    });
    alterNewNode.addNewLine("text_mid", "完成时间:", {
        "text": utils.formatUnix(attr.building_end)
    });


    alterNewNode.AddButtonFrom0(eventNodeItem.funcs["showCancelFunc"])
    if (window.wx && this.attr.has_acce == 0) {
        alterNewNode.AddButton(eventNodeItem.funcs["adArmyAcce"])
    }
    eventNodeItem.ShowPropType = 3
    alterNewNode.AddButton(eventNodeItem.funcs["accePropList"])

} else {
    alterNewNode.OnButtonFunc = alterNewNode.onButtonCancel
}
alterNewNode.addNewLine("text_mid", "属性:", {
    "text": ""
});
alterNewNode.addNewLine("grid_text", "对地:", {
    "text": item.attack_down
});
alterNewNode.addNewLine("grid_text", "对空:", {
    "text": item.attack_up
});
alterNewNode.addNewLine("grid_text", "对海:", {
    "text": item.attack_sea
});
alterNewNode.addNewLine("grid_text", "对防:", {
    "text": item.attack_defense
});

alterNewNode.addNewLine("grid_text", "防御:", {
    "text": item.defense
});
if (item.speed > 0) {
    alterNewNode.addNewLine("grid_text", "速度:", {
        "text": item.speed
    });
}
alterNewNode.addNewLine("grid_text", "血量:", {
    "text": item.blood
});
alterNewNode.addNewLine("grid_text", "负重:", {
    "text": item.can_weight
});
alterNewNode.addNewLine("grid_text", "射程:", {
    "text": item.attack_range
});
if (item.oil_need > 0) {
    alterNewNode.addNewLine("grid_text", "油耗:", {
        "text": item.oil_need
    });
}
if (item.need_resource > 0) {
    alterNewNode.addNewLine("grid_text", "人口:", {
        "text": item.need_resource.people
    });
}
alterNewNode.addNewLine("grid_text", "耗时:", {
    "text": item.need_time + "s"
});
if (item.description) {
    alterNewNode.addNewLine("text_mid", "条件:", {
        "text": item.description
    });
}
alterNewNode.addNewLine("text_mid", "资源:", {
    "text": ">>>>>>>>>>>>>>>>"
});
alterNewNode.addNewLine("grid_text", "粮食:", {
    "text": item.need_resource.food
});
alterNewNode.addNewLine("grid_text", "钢铁:", {
    "text": item.need_resource.steel
});
alterNewNode.addNewLine("grid_text", "石油:", {
    "text": item.need_resource.oil
});
alterNewNode.addNewLine("grid_text", "稀矿:", {
    "text": item.need_resource.rare
});
alterNewNode.addNewLine("grid_text", "", {
    "text": ""
});

alterNewNode.Alert()

}
showZhiWeiAlert(context, attr) {
if (!window.UserData.user.info) {
    return
}
var eventNodeItem = context.newAlertItem()
eventNodeItem.data = window.UserData.user.info
var alter2Node = context.NewAlert2()
alter2Node.InitAlert("职位晋升", "关闭")
alter2Node.addNewLine("text", "", {
    "text": ""
})
alter2Node.addNewLine("wrap_text", "下一级:", {
    "text": `${eventNodeItem.data.zhiwei_item.next.name}`
})
alter2Node.addNewLine("wrap_text", "军衔要求:", {
    "text": `${eventNodeItem.data.zhiwei_item.next.junxian_text}`
})
alter2Node.addNewLine("wrap_text", "条件:", {
    "text": `荣誉: ${eventNodeItem.data.zhiwei_item.next.honor} \n\n黄金: ${eventNodeItem.data.zhiwei_item.next.gold}`
})
alter2Node.addNewLine("wrap_text", "说明:", {
    "text": `职位是统帅软实力的综合体现之一，是晋级军衔的必要条件。`
})
if (eventNodeItem.data.honor >= eventNodeItem.data.zhiwei_item.next.honor && cc.props.cityRes.gold >= eventNodeItem.data.zhiwei_item.next.gold && cc.props.userInfo.junxian >= eventNodeItem.data.zhiwei_item.next.junxian) {
    alter2Node.setButton0(eventNodeItem, "晋升", eventNodeItem.funcs["zhiweiUpgrade"].func)
} else {
    alter2Node.OnButtonFunc = alter2Node.onButtonCancel
    alter2Node.addNewLine("wrap_text", "当前", {
        "text": `荣誉: ${eventNodeItem.data.honor} \n\n黄金: ${cc.props.cityRes.gold}`
    })
}

alter2Node.Alert()
}
showJunxianAlert(context, attr) {
if (!window.UserData.user.info) {
    return
}
var eventNodeItem = context.newAlertItem()
eventNodeItem.data = window.UserData.user.info
var alter2Node = context.NewAlert2()
alter2Node.InitAlert("军衔晋升", "关闭")
alter2Node.addNewLine("text", "", {
    "text": ""
})
alter2Node.addNewLine("wrap_text", "下一级:", {
    "text": `${eventNodeItem.data.junxian_item.next.name}`
})

alter2Node.addNewLine("wrap_text", "职位要求:", {
    "text": `${eventNodeItem.data.junxian_item.next.zhiwei_text}`
})
if (eventNodeItem.data.junxian_item.next.needs) {
    var bw = ""
    for (var i = 0; i < eventNodeItem.data.junxian_item.next.needs.length; i++) {
        bw += `${eventNodeItem.data.junxian_item.next.needs[i].text} * ${eventNodeItem.data.junxian_item.next.needs[i].num}\n\n`
    }
    alter2Node.addNewLine("wrap_text", "需要宝物:", {
        "text": bw
    })
}
if (eventNodeItem.data.zhiwei >= eventNodeItem.data.junxian_item.next.zhiwei) {
    alter2Node.setButton0(eventNodeItem, "晋升", eventNodeItem.funcs["junxianUpgrade"].func)
} else {
    alter2Node.addNewLine("wrap_text", "说明:", {
        "text": "当前职位不符，无法晋衔。"
    })
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
上将 : 可以拥有 9 座城市\n`
})
alter2Node.addNewLine("wrap_text", "军衔顺序:", {
    "text": `下士\n\n中士\n\n上士\n\n军士长\n\n准尉\n\n少尉\n\n中尉\n\n上尉\n\n大尉\n\n少校\n\n中校\n\n大校\n\n少将\n\n中将\n\n上将\n\n`
})
alter2Node.Alert()
}
showCityList(context, attr) {
var alter2Node = context.NewAlert2()
var eventNodeItem = context.newAlertItem()
eventNodeItem.alterNewNode = alter2Node
alter2Node.InitAlert("城市列表", "关闭")
alter2Node.context.api.getCityList(cc, function (res) {
    for (var i = 0; i < res.length; i++) {

        (function (item) {
            var neweventNodeItem = {}
            neweventNodeItem.context = eventNodeItem.context
            neweventNodeItem.attr = item
            neweventNodeItem.funcs = eventNodeItem.context.AlertFunc.getFuncByName(neweventNodeItem)
            var text = `${item.name}(${item.lng},${item.lat})`
            if (cc.props.userInfo.main_city == item.id) {
                alter2Node.addNewLine("text", "", {
                    "text": text,
                    "editAction": "详情",
                    "attr": item,
                    "eventNodeItem": neweventNodeItem
                }, function () {
                    // alter2Node.onButtonCancel()
                    neweventNodeItem.funcs["展示城市"].func(alter2Node, alter2Node.context, neweventNodeItem)
                })
            } else {

                alter2Node.addNewLine("text", "", {
                    "text": text,
                    "editAction": "详情",
                    "editAction2": "进入",
                    "attr": item,
                    "eventNodeItem": neweventNodeItem
                }, function () {
                    // alter2Node.onButtonCancel()
                    neweventNodeItem.funcs["展示城市"].func(alter2Node, alter2Node.context, neweventNodeItem)
                }, function () {
                    neweventNodeItem.funcs["进入城市"].func(alter2Node, alter2Node.context, neweventNodeItem)
                    // alter2Node.onButtonCancel()
                    // var actionData = {}
                    // actionData.map = neweventNodeItem.attr
                    // actionData.action = "运输"
                    // cc.props.SceneContext = actionData
                    // alter2Node.context.skipScene("Battle");
                })
            }

        })(res[i])
    }
})
alter2Node.OnButtonFunc = function () {
    alter2Node.onButtonCancel()
}
alter2Node.Alert()
}
showAreaList(context, attr) {
var alter2Node = context.NewAlert3()
var eventNodeItem = context.newAlertItem()
alter2Node.InitAlert("附属野地", "关闭")
alter2Node.context.api.getCityArea(cc, function (res) {

    for (var i = 0; i < res.length; i++) {

        //解决闭包问题
        (function (item) {
            var neweventNodeItem = {}
            neweventNodeItem.context = eventNodeItem.context
            neweventNodeItem.attr = item
            neweventNodeItem.funcs = eventNodeItem.context.AlertFunc.getFuncByName(neweventNodeItem)
            var text = `${item.city}(${item.lng},${item.lat})`
            alter2Node.addNewLine("text_map_item", "", item, function (data) {
                // name: "",
                // status: "",
                // officer: "",
                // timeText: "",
                let officerName = "无军官"
                if (data.station_army && data.station_army.officer && data.station_army.officer.length > 0) {
                    officerName = data.station_army.officer[0].on
                    if (data.station_army.officer.length > 1) {
                        officerName = "*" + officerName
                    }
                }
                let status = "状态:无人驻守"
                if (data.collect_begin > 0) {
                    status = "状态:采集⛏ "
                } else if (officerName != "无军官") {
                    status = "状态:驻守 "
                }
                return {
                    name: `${data.city} (${data.lng},${data.lat})(${data.level}级)`,
                    status: status,
                    officer: officerName,
                    beginTime: data.collect_begin,
                    alterNewNode: alter2Node,
                    btn1Text: "详情",
                    btn1Func: "showMapDetail",
                    btn2Text: "派遣",
                    btn2Func: function () {
                        alter2Node.onButtonCancel()

                        var actionData = {}
                        actionData.map = data
                        actionData.action = "派遣"
                        actionData.fromArea = false
                        cc.props.SceneContext = actionData
                        context.skipScene("Battle");
                    },
                    btn3Text: "召回",
                    btn3Func: function () {
                        alter2Node.onButtonCancel()

                        var actionData = {}
                        actionData.map = data
                        actionData.action = "派遣"
                        actionData.fromArea = true
                        cc.props.SceneContext = actionData
                        context.skipScene("Battle");
                    },
                }
            })
        })(res[i])
    }
})
alter2Node.OnButtonFunc = function () {
    alter2Node.onButtonCancel()
}
alter2Node.Alert()
}
openNotify(context, attr) {
var eventNodeItem = context.newAlertItem()
var alter2Node = eventNodeItem.context.NewAlert2()
alter2Node.InitAlert("订阅警讯", "关闭")
alter2Node.addNewLine("wrap_text", "重要", {
    "text": "每次登录游戏时，弹出的订阅消息通知。您需要选择订阅。若已关闭订阅，则点击屏幕右上角三个点，设置->通知管理->开启通知。然后重新进入小游戏。"
})

alter2Node.addNewLine("wrap_text", "提示", {
    "text": "若有玩家对你的任何领地发起攻击，你都可以收到微信告警信息。\n每次观看广告后，订阅时间将延长至24小时后。\n注意多次观看不累计。"
})
alter2Node.OnButtonFunc = function () {
    alter2Node.onButtonCancel()
}
// var intNode = alter2Node.addNewLine("input_long", "Key:", { "maxLength": 32, "value": "", "lineHeight": 30 })
alter2Node.AddButton(eventNodeItem.funcs["notifyMsgAd"])
alter2Node.Alert()
}
showAccountDetail(context) {
var eventNodeItem = context.newAlertItem()
var alert2Node = eventNodeItem.context.NewAlert2()
alert2Node.InitAlert("账号", "取消")
alert2Node.addNewLine("text_mid", "统帅名", { "text": window.UserData.user.info.name, "cusButtonText": "复制" }, function () {
    if (window.wx) {
        wx.setClipboardData({
            data: window.UserData.user.info.name,
            success: function (res) {
                console.log("success复制成功：", window.UserData.user.info.name);
                if (window.qq) {
                    context.Toast(window.UserData.user.info.name + "复制成功")
                }
                return true;
            }
        });
    }
})
if (window.UserData.user.logininfo.account) {
    alert2Node.addNewLine("text_mid", "账号", { "text": window.UserData.user.logininfo.account, "cusButtonText": "" })

} else {
    alert2Node.addNewLine("text_mid", "邮箱", { "text": "绑定邮箱", "cusButtonText": "绑定" }, () => {
        alert2Node.onButtonCancel()
        cc.director.loadScene("BindMail");
    })

}
if (cc.props.AlowDestroy) {
    alert2Node.addNewLine("text_mid", "注销", { "text": "点击注销可销毁账号", "cusButtonText": "注销" }, () => {
        alert2Node.onButtonCancel()
        context.ListFunc["destroyAccount"](context)

    })
}

alert2Node.OnButtonFunc = alert2Node.onButtonCancel
alert2Node.AddButton({
    "func": function () {
        alert2Node.onButtonCancel()
        cc.director.loadScene("ResetPasswd");
    },
    "eventNodeItem": eventNodeItem,
    "btnText": "修改密码"
})
alert2Node.Alert()
}
visitorPage() {
cc.director.loadScene("isitorLogin");
}
destroyAccount(context) {
var eventNodeItem = context.newAlertItem()
var alert2Node = eventNodeItem.context.NewAlert2()
alert2Node.InitAlert("注销账号", "关闭")
alert2Node.addNewLine("wrap_text", "说明", {
    "text": "1.本操作不可撤销,请谨慎操作。\n2.注销账号后,您就失去了对该账号的登陆权限。\n3.为了防止恶意注销重新注册,在您注销账号3天内,您的同意用户身份标识无法注册。(即注销了邮箱账号,3天内该邮箱账号无法注册游戏。)"
})

alert2Node.addNewLine("text_mid", "注意", { "text": "本操作不可撤销!", })
alert2Node.addNewLine("text_mid", "注意", { "text": "本操作不可撤销!", })
alert2Node.addNewLine("text_mid", "注意", { "text": "本操作不可撤销!", })

alert2Node.OnButtonFunc = alert2Node.onButtonCancel

alert2Node.AddButton({
    "func": () => {
        context.api.destroyAccount(cc, function () {
            context.Toast("注销成功")
            cc.sys.localStorage.setItem("lastAccount", "")
            cc.sys.localStorage.setItem("lastPasswd", "")
            alert2Node.onButtonCancel()
            cc.director.loadScene("Loading");

        })
    },
    "eventNodeItem": eventNodeItem,
    "btnText": "注销账号"
})
alert2Node.Alert()
}
operateFlagCommander(context, attr) {
var eventNodeItem = context.newAlertItem()
var alert2Node = eventNodeItem.context.NewAlert2()
alert2Node.InitAlert("统帅", "取消")
alert2Node.addNewLine("text_mid", "统帅名", { "text": window.UserData.user.info.name, "cusButtonText": "复制" }, function () {
    if (window.wx) {
        wx.setClipboardData({
            data: window.UserData.user.info.name,
            success: function (res) {
                console.log("success复制成功：", window.UserData.user.info.name);
                if (window.qq) {
                    context.Toast(window.UserData.user.info.name + "复制成功")
                }
                return true;
            }
        });
    }

    console.log(window.UserData.user.info.name)
})
alert2Node.addNewLine("text_mid", "旗号", { "text": window.UserData.user.info.user_flag, "cusButtonText": "" })

alert2Node.addNewLine("wrap_text", "改旗号", {
    "text": "可以使用一个《旗帜》道具修改旗号"
})
var nameNode = alert2Node.addNewLine("input_long", "旗号:", { "value": "", "maxLength": 1, "placeholder": "限制一个字符", "lineHeight": 30, "itemKey": "change_flag" })

alert2Node.OnButtonFunc = alert2Node.onButtonCancel
alert2Node.AddButton({
    "func": function () {
        if (nameNode.getValue() == "") {
            eventNodeItem.context.Toast("请输入旗号")
            return
        }
        eventNodeItem.context.api.UserPropV2(cc, {
            "prop_id": 390,
            "number": 1,
            "text": nameNode.getValue()
        }, function () {
            eventNodeItem.context.Toast("修改成功")
            alert2Node.onButtonCancel()
            eventNodeItem.context.reloadPage()
        }, function (err) {
            eventNodeItem.context.Toast(err)
        })

    },
    "eventNodeItem": eventNodeItem,
    "btnText": "修改"
})
alert2Node.Alert()
}
operateCommander(context, attr) {
var eventNodeItem = context.newAlertItem()
var alert2Node = eventNodeItem.context.NewAlert2()
alert2Node.InitAlert("统帅", "取消")
alert2Node.addNewLine("text_mid", "统帅名", { "text": window.UserData.user.info.name, "cusButtonText": "复制" }, function () {
    if (window.wx) {
        wx.setClipboardData({
            data: window.UserData.user.info.name,
            success: function (res) {
                console.log("success复制成功：", window.UserData.user.info.name);
                if (window.qq) {
                    context.Toast(window.UserData.user.info.name + "复制成功")
                }
                return true;
            }
        });
    }

    console.log(window.UserData.user.info.name)
})

alert2Node.addNewLine("wrap_text", "改名卡", {
    "text": "要使用改名卡修改名字吗?"
})
var nameNode = alert2Node.addNewLine("input_long", "统帅名:", { "value": "", "maxLength": 10, "placeholder": "限制10个字符", "lineHeight": 30, "itemKey": "use_number" })

alert2Node.OnButtonFunc = alert2Node.onButtonCancel
alert2Node.AddButton({
    "func": function () {

        if (nameNode.getValue() == "") {
            eventNodeItem.context.Toast("请输入统帅名称")
            return
        }
        eventNodeItem.context.api.UserPropV2(cc, {
            "prop_id": 380,
            "number": 1,
            "text": nameNode.getValue()
        }, function () {
            eventNodeItem.context.Toast("修改成功")
            alert2Node.onButtonCancel()
            eventNodeItem.context.reloadPage()
        }, function (err) {
            eventNodeItem.context.Toast(err)
        })

    },
    "eventNodeItem": eventNodeItem,
    "btnText": "修改"
})
alert2Node.Alert()
}
exchangeDimands(context, attr) {
var eventNodeItem = context.newAlertItem()
var alter2Node = eventNodeItem.context.NewAlert2()
alter2Node.InitAlert("兑换钻石", "兑换")
alter2Node.addNewLine("wrap_text", "提示", {
    "text": "征服9级寇城获取宝箱，即可获得钻石。\n参与游戏活动可获取钻石Key。兑换Key,可通过游戏活动获取Key"
})

var intNode = alter2Node.addNewLine("input_long", "Key:", {
    "maxLength": 32,
    "value": "",
    "lineHeight": 30
})
alter2Node.OnButtonFunc = function () {
    if (!intNode.getValue()) {
        eventNodeItem.context.Toast("请填写Key")
        return
    }
    eventNodeItem.context.api.ExchangeKey(cc, intNode.getValue(), function () {
        eventNodeItem.context.Toast("兑换成功")
        alter2Node.onButtonCancel()
        eventNodeItem.context.reloadPage()
    }, function (err) {
        eventNodeItem.context.Toast(err)
        //alter2Node.onButtonCancel()
    })

    //
}
alter2Node.Alert()
}
showMapDetail(context, attr, alterNewNode) {
var eventNodeItem = context.newAlertItem()
eventNodeItem.attr = attr
if (!eventNodeItem.attr) {
    context.Toast("数据异常，请刷新后重试")
    return
}

var alter2Node = context.NewAlert2()
if (attr.map_type == 10) {
    alter2Node.InitAlert("城市详情", "关闭")

} else {
    alter2Node.InitAlert("野地详情", "关闭")

}

var text = "(" + attr.lng + "," + attr.lat + ")"
alter2Node.addNewLine("text_mid", "类型:", {
    "text": `${attr.city}(${attr.level}级)`
})
alter2Node.addNewLine("text_mid", "坐标:", {
    "text": text
})
alter2Node.addNewLine("wrap_text", "描述:", {
    "text": attr.map_desc
})
if (attr.station_army && attr.station_army.officer && attr.station_army.officer.length > 0) {
    offName = attr.station_army.officer[0].on
    alter2Node.addNewLine("text_mid", "军官:", {
        "text": offName,
        "cusButtonText": "召回"
    }, function () {
        alter2Node.onButtonCancel()
        if (alterNewNode) {
            alterNewNode.onButtonCancel()
        }
        var actionData = {}
        actionData.map = eventNodeItem.attr
        actionData.action = "派遣"
        actionData.fromArea = true
        cc.props.SceneContext = actionData
        cc.props.LastPage = cc.props.NowPage
        context.skipScene("Battle");
    })
} else {
    var offName = "无人驻守"
    alter2Node.addNewLine("text_mid", "军官:", {
        "text": offName,
        "cusButtonText": "派遣"
    }, function () {
        if (alterNewNode) {
            alter2Node.onButtonCancel()
        }
        alter2Node.onButtonCancel()
        var actionData = {}
        actionData.map = eventNodeItem.attr
        actionData.action = "派遣"
        cc.props.SceneContext = actionData
        cc.props.LastPage = cc.props.NowPage

        context.skipScene("Battle");
    })
}
alter2Node.AddButton(eventNodeItem.funcs["moveArmy"])

if (attr.collect_begin <= 0) {
    if (offName == "无人驻守") {
        alter2Node.AddButton(eventNodeItem.funcs["giveUpAreaConfirm"])
    } else {
        alter2Node.AddButton(eventNodeItem.funcs["collectBegin"])
    }
} else {
    alter2Node.addNewLine("text", "时长:", {
        "text": "",
        "timeBegin": attr.collect_begin
    })
    alter2Node.addNewLine("wrap_text", "说明:", {
        "text": "4级野地以上，采集30分钟才可能获得资源哦。时间越长收益越高！"
    })

    alter2Node.AddButton(eventNodeItem.funcs["collectFinish"])
}
if (attr.station_army && attr.station_army.resource) {
    alter2Node.addNewLine("wrap_text", "现有:", {
        "text": context.getResText(attr.station_army.resource)
    })
}
if (attr.station_army && attr.station_army.armies) {
    let al = ""
    for (var i = 0; i < attr.station_army.armies.length; i++) {
        if (attr.station_army.armies[i].number) {
            al += `${attr.station_army.armies[i].name}: ${attr.station_army.armies[i].number}\n`
        }
    }
    alter2Node.addNewLine("wrap_text", "驻军:", {
        "text": al
    })

}
if (attr.station_army && attr.station_army.desc) {
    alter2Node.addNewLine("wrap_text", "其他:", {
        "text": attr.station_army.desc
    })
}
if (attr.collect_begin <= 0 && attr.map_type == "5") {
    alter2Node.AddButton(eventNodeItem.funcs["建造城市"])
}

alter2Node.OnButtonFunc = function () {
    window.UserData.reloadCityAreas(null)
    alter2Node.onButtonCancel()
}
alter2Node.onButtonX = function () {
    window.UserData.reloadCityAreas(null)
    alter2Node.onButtonCancel()
}
alter2Node.Alert()
if (alterNewNode) {
    alterNewNode.onButtonCancel()
}
}
// 进入活动页面
enterActivity(context, attr) {
context.changeToMicroMap(attr.data.source_id)
}

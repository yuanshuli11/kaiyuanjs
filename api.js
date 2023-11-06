getHost() {
    if (window.wx || window.tt || window.qq) {
        return cc.props.host
    }
    return cc.props.host
}
setCache(cache_type, key, data) {
    if (data.expire && data.expire > 0) {
        if (!this.cacheData) {
            this.cacheData = {}
        }
        if (!this.cacheData[cache_type]) {
            this.cacheData[cache_type] = {}
        }
        this.cacheData[cache_type][key] = data
    }
}
getCache(path) {
    var cache_type = this.getCacheType(path)

    if (!cache_type) {
        return null
    }
    if (this.cacheData[cache_type] && this.cacheData[cache_type][path] && this.context.getServerTime() < this.cacheData[cache_type][path].expire) {
        return this.cacheData[cache_type][path].data
    }
    return null
}
//AdOpen 广告奖励
AdOpen(cc, adStr, successFunc, errorFunc) {
    var path = "/prop/ad/open"
    this.requestAPI(cc, "POST", path, { "ad_id": adStr }, successFunc, errorFunc)
}

//AdPeople 广告召集
AdPeople(cc, successFunc, errorFunc) {
    var path = "/city/ad/people"
    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
//BuyProp
BuyProp(cc, id, number, successFunc, errorFunc) {
    var path = "/prop/buy"
    var data = {
        "id": id,
        "number": number
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//BanUserChat
BanUserChat(cc, id, successFunc, errorFunc) {
    var path = "/chat/ban?chat_id=" + id
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//GetUserChatItem
GetUserChatItem(cc, id, successFunc, errorFunc) {
    var path = "/chat/useritem?user_id=" + id
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//OpenScroll
OpenScroll(cc, id, successFunc, errorFunc) {
    var path = "/prop/openScroll?id=" + id
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//GetScrollInfo
GetScrollInfo(cc, successFunc, errorFunc) {
    var path = "/prop/scrollList"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//UserPropV2
UserPropV2(cc, data, successFunc, errorFunc) {
    var path = "/prop/use/v2"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//UpdateLoyal
UpdateLoyal(cc, data, successFunc, errorFunc) {
    var path = "/officer/updateLoyal"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
CaptiveOfficerList(cc, successFunc, errorFunc) {
    var path = "/officer/captive/list"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//RelationList 关系列表
RelationList(cc, rtype, successFunc, errorFunc) {
    var path = "/relation/list?type=" + rtype

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//AddRelation 添加关系 宣战
AddRelation(cc, destID, rtype, attr, successFunc, errorFunc) {
    var path = "/relation/add"
    let data = {
        "dest_id": destID,
        "type": rtype,
        "attr": attr,
        "status": 1,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}

//获取 对自己和对别人使用的计谋列表
GetPlotList(cc, userId, cityId, successFunc, errorFunc) {
    var path = "/city/get/city/plot/detail?user_id=" + userId + "&city_id=" + cityId
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//对自己或者别人城市使用计谋
UsePlotCity(cc, attackOfficerId, userId, plotId, attr, successFunc, errorFunc) {
    var path = "/city/use/plot/to/city"

    let data = {
        "attack_officer_id": attackOfficerId,
        "user_id": userId,
        "plot_id": plotId,
        "attr": attr,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}

//AddGroupRelation 添加军团关系
AddGroupRelation(cc, groupName, rtype, status, attr, successFunc, errorFunc) {
    var path = "/relation/add"
    let data = {
        "group_name": groupName,
        "type": rtype,
        "attr": attr,
        "status": status,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//ShuhuiCaptive
ShuhuiCaptive(cc, id, successFunc, errorFunc) {
    var path = "/officer/shuhui"
    let data = {
        "id": id
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//GiveupShuhuiCaptive
GiveupShuhuiCaptive(cc, id, successFunc, errorFunc) {
    var path = "/officer/giveup/shuhui"
    let data = {
        "id": id
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//ZhaomuCaptive
ZhaomuCaptive(cc, id, successFunc, errorFunc) {
    var path = "/officer/zhaomu"
    let data = {
        "id": id
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//InitServerAd
InitServerAd(cc) {
    var path = "/ad/init"
    this.requestAPI(cc, "POST", path, {}, () => { }, () => { })
}
//UserProp
UserProp(cc, data, successFunc, errorFunc) {
    var path = "/prop/use"

    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//MapList
MapList(cc, sourceID, lng, lat, successFunc, errorFunc) {
    cc.props.sourceID = sourceID
    console.log("===ccc MapList")
    var path = `/map/list?lng=${lng}&lat=${lat}&source_id=${sourceID}`

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//search army
SearchAround(cc, cityId, radius, successFunc, errorFunc) {
    var path = `/map/getaround?city_id=${cityId}&radius=${radius}`
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//MagicAcce
MagicAcce(cc, id, nameType, successFunc, errorFunc) {
    var path = "/magic/acce/v2?id=" + id + "&item_type=" + nameType

    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
//ZhiweiUpgrade 职位晋升
ZhiweiUpgrade(cc, successFunc, errorFunc) {
    var path = "/user/zhiwei/upgrade"
    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
//JunxianUpgrade 军衔晋升
JunxianUpgrade(cc, successFunc, errorFunc) {
    var path = "/user/junxian/upgrade"
    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
GetCollectList(cc, type, resolveFn, rejectFn) {
    var path = `/collector/list?type=${type}`
    this.requestAPI(cc, "GET", path, {}, resolveFn, rejectFn)
}
GetActivityList(cc, resolveFn, rejectFn) {
    var path = `/activity/list`
    this.requestAPI(cc, "GET", path, {}, resolveFn, rejectFn)
}
GetActivityHistory(cc, sourceID, resolveFn, rejectFn) {
    var path = `/activity/history?source_id=` + sourceID
    this.requestAPI(cc, "GET", path, {}, resolveFn, rejectFn)
}
CreatePositionCollect(cc, data, resolveFn, rejectFn) {
    var path = `/collector/position/create`
    this.requestAPI(cc, "POST", path, data, resolveFn, rejectFn)
}
DeleteCollect(cc, id, resolveFn, rejectFn) {
    var path = `/collector/delete?collect_id=${id}`
    this.requestAPI(cc, "POST", path, {}, resolveFn, rejectFn)
}

//ExchangeKey 兑换钻石
ExchangeKey(cc, key, successFunc, errorFunc) {
    var path = "/user/exchange"
    this.requestAPI(cc, "POST", path, { "key": key }, successFunc, errorFunc)
}
//BuildingDestroy 拆除建筑
SendMsg(cc, toUserID, tType, msg, successFunc, errorFunc) {
    var path = "/chat/send"
    let Base64 = require("Base64");

    var data = {
        "to_user_id": toUserID,
        "type": tType,
        "msg": Base64.btoa(encodeURIComponent(msg)),
    }

    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//BuildingDestroy 拆除建筑
BuildingDestroy(cc, id,type, successFunc, errorFunc) {
    var path = "/city/building/destroy"
    var data = {
        "id": id,
        "type":type
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//OfferOfficer
OfferOfficer(cc, id, stu, successFunc, errorFunc) {
    var path = "/officer/offer"
    var data = {
        "id": id,
        "status": stu
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//MagicCancel
MagicCancel(cc, id, nameType, successFunc, errorFunc) {
    var path = "/magic/cancel?id=" + id + "&item_type=" + nameType

    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
//MagicUpdate
MagicUpdate(cc, id, type, successFunc, errorFunc) {
    var path = "/magic/update?id=" + id + "&item_type=" + type

    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
propShop(cc, successFunc, errorFunc) {
    var path = "/prop/shop"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
propList(cc, successFunc, errorFunc) {
    var path = "/user/props/list"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
propListWithType(cc, type, successFunc, errorFunc) {
    var path = "/user/props/list?type=" + type
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
propListWithUseLoc(cc, useLoc, successFunc, errorFunc) {
    var path = "/user/props/list?use_loc=" + useLoc
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
readEvent(cc, id, type, successFunc, errorFunc) {
    var path = "/user/event/read"
    this.requestAPI(cc, "POST", path, { "type": type, "id": id }, successFunc, errorFunc)
}
upgradeOfficer(cc, id, successFunc, errorFunc) {
    var path = "/officer/upgrade?id=" + id
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
equipExchange(cc, data, successFunc, errorFunc) {
    var path = "/prop/exchange"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
forgetSkill(cc, id, skill_loc, successFunc, errorFunc) {
    let data = {
        "id": id,
        "skill_loc": skill_loc
    }
    var path = "/officer/forget"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
updateOfficer(cc, id, data, successFunc, errorFunc) {
    data.id = id
    var path = "/officer/update"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
receiveChongzhiTotal(cc, successFunc, errorFunc) {

    var path = "/user/totallimit/receive"
    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
updateTempKey(cc, tempKey, successFunc, errorFunc) {
    var data = {
        "key": tempKey.join(";")
    }
    var path = "/user/updateTmpKey"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
setNotify(cc, diamonds, successFunc, errorFunc) {
    var data = {
        "diamonds": diamonds
    }
    var path = "/user/updateNotify"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
loopEvent(cc, successFunc, errorFunc) {
    var path = "/user/event?limit=10&times=" + cc.props.logininfo.loop_times
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
finishTask(cc, id, ad, successFunc, errorFunc) {
    var path = "/task/finish"
    var data = {
        "id": Number(id),
        "ad": Number(ad),
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
getTaskList(cc, successFunc, errorFunc) {
    var path = "/task/list?limit=10"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
zhaomuOfficer(cc, id, successFunc, errorFunc) {
    var path = "/school/mu"
    this.requestAPI(cc, "POST", path, { "id": id }, successFunc, errorFunc)
}
getSchoolOfficer(cc, successFunc, errorFunc) {
    var path = "/school/officer"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
flushSchool(cc, successFunc, errorFunc) {
    var path = "/school/flush"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
adFlushSchool(cc, successFunc, errorFunc) {
    var path = "/school/ad/flush"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
initUser(cc, name, flag, area, camp, successFunc, errorFunc) {
    var path = "/auth/userInit"
    var data = {
        "name": name,
        "flag": flag,
        "camp": camp,
        "area": area

    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//getRandNames
getRandNames(cc, type, id, successFunc, errorFunc) {
    var path = "/magic/names?&num=10&type=" + type + "&id=" + id
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//moreAdPower
moreAdPower(cc, successFunc, errorFunc) {
    var path = "/magic/ad/power"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//exchangeInfo
exchangeInfo(cc, successFunc, errorFunc) {
    var path = "/exchange/info"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//sellResource
sellResource(cc, resType, resNum, successFunc, errorFunc) {
    var path = "/exchange/sell"
    var data = {
        "type": resType,
        "num": resNum
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//buyResource
buyResource(cc, resType, resNum, successFunc, errorFunc) {
    var path = "/exchange/buy"
    var data = {
        "type": resType,
        "num": resNum
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//wxLogin
getTechList(cc, successFunc, errorFunc) {
    var path = "/tech/getlist"

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//ttLogin
ttLogin(cc, appID, code, successFunc, errorFunc) {
    var invate_id = 0
    // var query = tt.getLaunchOptionsSync().query
    // if (query&&query.user_id){
    //     invate_id = query.user_id
    // }
    var path = "/auth/ttlogin"
    var data = {
        "code": code,
        "appid": appID,
        "invate_id": Number(invate_id)
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//opLogin
opLogin(cc, appID, token, successFunc, errorFunc) {
    var invate_id = 0
    // var query = tt.getLaunchOptionsSync().query
    // if (query&&query.user_id){
    //     invate_id = query.user_id
    // }
    var path = "/auth/oplogin"
    var data = {
        "token": token,
        "appid": appID,
        "invate_id": Number(invate_id)
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//wxLogin
qqLogin(cc, appID, code, successFunc, errorFunc) {
    var invate_id = 0
    var query = wx.getLaunchOptionsSync().query
    if (query && query.user_id) {
        invate_id = query.user_id
    }
    var path = "/auth/qqlogin"
    var data = {
        "code": code,
        "appid": appID,
        "invate_id": Number(invate_id),
        "source": JSON.stringify(qq.getLaunchOptionsSync()),

    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//wxLogin
wxLogin(cc, appID, code, successFunc, errorFunc) {
    var invate_id = 0
    var query = wx.getLaunchOptionsSync().query
    if (query && query.user_id) {
        invate_id = query.user_id
    }
    var path = "/auth/wxlogin"
    var data = {
        "code": code,
        "appid": appID,
        "invate_id": Number(invate_id),
        "source": JSON.stringify(wx.getLaunchOptionsSync()),
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)

}
// getArmyRank
getArmyRank(cc, id, successFunc, errorFunc) {
    var path = "/army/getArmyRank?id=" + id
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
// GetGrouptApplyItem
GetGrouptApplyItem(cc, successFunc, errorFunc) {
    var path = "/group/apply"

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
// GetGrouptDetail
GetGrouptDetail(cc, successFunc, errorFunc) {
    var path = "/group/detail"

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
getGrouptInfo(cc, successFunc, errorFunc) {
    var path = "/group/info"

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//CancelApplyGroup
CancelApplyGroup(cc, successFunc, errorFunc) {
    var path = "/group/cancel"
    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
// GroupGoldTech
GroupGoldTech(cc, techType, number, successFunc, errorFunc) {
    var path = "/group/goldtech"
    let data = {
        "tech_type": techType,
        "gold_number": number
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
// GroupAdTech
GroupAdTech(cc, techType, successFunc, errorFunc) {
    var path = "/group/adtech"
    let data = {
        "tech_type": techType
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//AddGroup
AddGroup(cc, id, reason, successFunc, errorFunc) {
    var path = "/group/add"
    var data = {
        "id": id,
        "reason": reason
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//CreateGroup
CreateGroup(cc, name, successFunc, errorFunc) {
    var path = "/group/create"
    var data = {
        "name": name
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//getGrouptList
getGrouptList(cc, successFunc, errorFunc) {
    var path = "/group/list"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//getGroupMembertList
getGroupMembertList(cc, status, successFunc, errorFunc) {
    var path = "/group/member/list?status=" + status
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//getReportByID
getReportByID(cc, id, successFunc, errorFunc) {
    var path = "/report/getbyid?id=" + id
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//行军计谋
getBattleMarchPlot(cc, successFunc, errorFunc) {
    var path = "/battle/march/plot/list"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//reportList
getReportList(cc, limit, offset, rType, successFunc, errorFunc) {
    var path = "/report/getlist/v3?limit=" + limit + "&offset=" + offset + "&type=" + rType
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//getReportRankList
getReportRankList(cc, successFunc, errorFunc) {
    var path = "/report/getrank"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//deleteReport
deleteReport(cc, ids, successFunc, errorFunc) {
    var path = "/report/delete"
    var data = {
        "ids": ids,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//readReport
readReport(cc, ids, successFunc, errorFunc) {
    var path = "/report/read"
    var data = {
        "ids": ids,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//getGroupChat
getGroupChat(cc, successFunc, errorFunc) {
    var path = "/chat/groupInfo"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//getSysChat
getSysChat(cc, successFunc, errorFunc) {
    var path = "/chat/syslist"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//getUserChatList
getUserChatList(cc, successFunc, errorFunc) {
    var path = "/chat/userlist"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//getGroupChat
getWorldChat(cc, successFunc, errorFunc) {
    var path = "/chat/worldlist"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//Shanrang
Shanrang(cc, userID, successFunc, errorFunc) {

    var path = "/group/shanrang"
    var data = {
        "to_user": userID,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//CleanMember
CleanMember(cc, id, successFunc, errorFunc) {

    var path = "/group/clean"
    var data = {
        "id": id,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//ExitGroup
ExitGroup(cc, successFunc, errorFunc) {

    var path = "/group/exit"

    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
//HandleGroupAgree
HandleGroupAgree(cc, id, result, successFunc, errorFunc) {

    var path = "/group/handle"
    var data = {
        "id": id,
        "result": result
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//setDefenseCfg
setDefenseCfg(cc, total, cfgType, armyItem, successFunc, errorFunc) {
    var path = "/city/defense/setting/v2"
    var data = {
        "total": Number(total),
        "cfg_type": cfgType,
        "army_setting": armyItem
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//setBattleCfg
setBattleCfg(cc, data, successFunc, errorFunc) {
    var path = "/battle/setting"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//getRankList
getRankList(cc, tType, page, successFunc, errorFunc) {
    var path = "/rank/officer?biz_type=" + tType + "&page=" + page
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//goBattle
goBattle(cc, data, successFunc, errorFunc) {
    var path = "/battle/start"
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//sendStayArmyBack
sendStayArmyBack(cc, rank_id, successFunc, errorFunc) {
    var path = "/battle/stayback"
    var data = {
        "rank_id": rank_id,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//goBattleBack
goBattleBack(cc, report_id, rank_id, successFunc, errorFunc) {
    var path = "/battle/back"
    var data = {
        "rank_id": rank_id,
        "report_id": report_id,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
// wearEquip
wearEquip(cc, officerID, uuid, equipType, action, successFunc, errorFunc) {
    var path = "/officer/equip/wear"
    var data = {
        "equip_type": equipType,
        "uuid": uuid,
        "officer_id": officerID,
        "action": action
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
// setTax
SetTax(cc, number, successFunc, errorFunc) {
    var path = "/city/settax"
    var data = {
        "number": number
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
// SetLove
SetLove(cc, successFunc, errorFunc) {
    var path = "/city/love"

    this.requestAPI(cc, "POST", path, {}, successFunc, errorFunc)
}
//exitMap
exitMap(cc, successFunc, errorFunc) {
    var path = "/activity/exitmap"
    var data = {
        "source_id": cc.props.sourceID,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//moveCity
moveCity(cc, id, cityX, cityY, successFunc, errorFunc) {
    var path = "/city/move"
    var data = {
        "city_id": id,
        "focus_lng": cityX,
        "focus_lat": cityY,
        "source_id": cc.props.sourceID,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//destroyCity
destroyCity(cc, id, successFunc, errorFunc) {
    var path = "/city/destroy"
    var data = {
        "city_id": id,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//createCity
createCity(cc, id, name, successFunc, errorFunc) {
    var path = "/city/create"
    var data = {
        "area_id": id,
        "name": name
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//collectFinish
collectFinish(cc, source_id, id, successFunc, errorFunc) {
    var path = "/city/collect/finish"
    var data = {
        "area_id": id,
        "source_id": source_id
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//collectBegin
areaGiveUp(cc, source_id, id, successFunc, errorFunc) {
    var path = "/city/area/giveup"
    var data = {
        "area_id": id,
        "source_id": source_id
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//collectBegin
collectBegin(cc, source_id, id, successFunc, errorFunc) {
    var path = "/city/collect/begin"
    var data = {
        "area_id": id,
        "source_id": source_id
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//getCityOfficer
getCityOfficer(cc, successFunc, errorFunc) {
    var path = "/city/officer"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//getCityList
getCityList(cc, successFunc, errorFunc) {
    var path = "/city/list"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//getCityArea
getCityArea(cc, successFunc, errorFunc) {
    var path = "/city/area/list"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}

//getHomeInfo
InitAllInfo(cc, limitInfo, data, successFunc, errorFunc) {
    var path = "/home/city/allinfo/v2?limitInfo=" + limitInfo
    this.requestAPI(cc, "POST", path, data, function (res) {
        successFunc(res)
    }, errorFunc)
}
//getHomeInfo
getHomeInfo(cc, successFunc, errorFunc) {
    var path = "/home/city/info"
    this.requestAPI(cc, "GET", path, {}, function (res) {
        successFunc(res)
        cc.props.homeInfo = res
    }, errorFunc)
}
//changeCityName
changeMainCity(cc, id, successFunc, errorFunc) {
    var path = "/city/change/main"
    var data = {
        "id": id
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//changeCityName
changeCityName(cc, id, name, successFunc, errorFunc) {
    var path = "/city/change/name"
    var data = {
        "id": id,
        "name": name
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//获取可训练军队的数量
recoverArmies(cc, id, successFunc, errorFunc) {
    var path = "/army/recover"
    var data = {
        "id": id,
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
// 军队list
cityArmies(cc, successFunc, errorFunc) {
    var path = "/army/list"

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//发送充值密码邮件
sendResetPasswdMailCode(cc, mail, successFunc, errorFunc) {
    var path = "/user/passwd/resetcode?mail=" + mail

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//发送注册邮件
sendMailCode(cc, mail, successFunc, errorFunc) {
    var path = "/auth/register/sendmail?mail=" + mail

    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
destroyAccount(cc, successFunc, errorFunc) {
    var path = "/user/destroy"
    var data = {
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//获取可训练军队的数量
trainArmy(cc, id, nameType, num, successFunc, errorFunc) {
    var path = "/army/train"
    var data = {
        "id": id,
        "name_type": nameType,
        "num": num
    }
    this.requestAPI(cc, "POST", path, data, successFunc, errorFunc)
}
//army
//获取可训练军队的数量
getArmyCanTrainNum(cc, nameType, successFunc, errorFunc) {
    var path = "/army/trainnum?name_type=" + nameType
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}

//获取字典项
getCfgDict(cc, successFunc, errorFunc) {
    var path = "/cfg/dict/v2"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//baseInfo
baseInfo(cc, successFunc, errorFunc) {
    var path = "/base/info"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//获取广告福利
userAdWeal(cc, successFunc, errorFunc) {
    var path = "/user/adweal"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}
//军备展示
junBeiList(cc, successFunc, errorFunc) {
    var path = "/user/junbei/list"
    this.requestAPI(cc, "GET", path, {}, successFunc, errorFunc)
}

//完成广告福利
finishUserWeal(cc, attr, successFunc, errorFunc) {
    var path = "/user/finish/adweal"
    this.requestAPI(cc, "POST", path, attr, successFunc, errorFunc)
}

//默认的错误处理函数
errorFunc(url, msg) {
    if (this.context) {
        this.context.Toast(msg)
    }

    return
}
//getCacheType 优先取cacheKey设置的类型。自动取path第一段
getCacheType(path) {
    if (this.cacheKey[path]) {
        return this.cacheKey[path]
    }
    var ls = path.split("/")
    if (ls.length <= 1) {
        return null
    }
    return ls[1]
}
isLock(method, path) {
    if (this.lockTime == 0 || method != "POST") {
        return false
    }

    if (Date.parse(new Date()) / 1000 - this.lockTime > 3) {
        this.lockTime = 0
        return false
    }

    if (this.lockTime > 0) {
        return true
    }

    return false
}
lock(method) {
    if (method == "GET") {
        return
    }
    this.lockTime = Date.parse(new Date()) / 1000
}
unLock(method) {
    this.lockTime = 0
}

import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        HomeData: [],
        ShopData: [],
        GoodsData: {},
        CartPanelData: [],
        CheckOutData: [],
        AddressData: [],
        orderOne: {},
        orders: [],
        ZhuCeData: {},
        DengLuData: {}
    },
    mutations: {
        getHomeData: function (state, data) {
            state.HomeData = data
        },
        getShopData: function (state, data) {
            state.ShopData = data
        },
        getGoodsData: function (state, data) {
            state.GoodsData = data;
        },
        getCartPanelData(state, data) {
            data.checked = false;
            for (let i = 0; i < state.CartPanelData.length; i++) {
                if (data.id == state.CartPanelData[i].id) {
                    state.CartPanelData[i].num += data.num;
                    return
                }
            }
            state.CartPanelData.push(data)
        },
        getCheckOutData(state, data) {
            if (data.bool) {
                state.CheckOutData = [];
                for (let i = 0; i < state.CartPanelData.length; i++) {
                    if (state.CartPanelData[i].checked) {
                        state.CheckOutData.push(state.CartPanelData[i]);
                    }
                }
            } else {
                state.CheckOutData = data.data
            }
        },
        getAddressData(state, data) {
            state.AddressData = data
        },
        saveAddressData(state, data) {
            state.AddressData.push(data)
        },
        setupCartPanelData(state, data) {
            for (let i = 0; i < state.CartPanelData.length; i++) {
                if (state.CartPanelData[i].id === data.id) {
                    state.CartPanelData[i].num += data.num;
                    if (state.CartPanelData[i].num <= 1) {
                        state.CartPanelData[i].num = 1
                    }
                }
            }
        },
        deleteCartPanelData(state, data) {
            for (let i = 0; i < state.CartPanelData.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (state.CartPanelData[i].id === data[j].id) {
                        state.CartPanelData.splice(i, 1)
                    }
                }
            }
        },
        getPayMentData(state, data) {
                let diZhi = {};
                for (let i = 0; i < state.AddressData.length; i++) {
                    if (state.AddressData[i].id === data.id) {
                        diZhi = state.AddressData[i]
                    }
                }
                let sum = 0;
                for (let i = 0; i < state.CheckOutData.length; i++) {
                    sum += state.CheckOutData[i].money * state.CheckOutData[i].num;
                }
                let json = {
                    orderNum: Date.now(),
                    diZhi: diZhi,
                    listData: state.CheckOutData,
                    sum: sum,
                    payBool: false
                };
                state.orderOne = json;
                if(state.orders.length==0){
                    state.orders.push(json)
                }else {
                    for(let i=0;i<state.orders.length;i++){
                        if(state.orders[i].orderNum!==json.orderNum){
                            state.orders.push(json)
                        }
                    }
                }
        },
        getPayMentData2(state, data){
            state.orderOne = data.data;
        },
        payOrder(state, data) {
            for (let i = 0; i < state.orders.length; i++) {
                if (state.orders[i].orderNum === data) {
                    state.orders[i].payBool = true;
                }
            }
        },
        getZhuCeData(state, data) {
            state.ZhuCeData = data;
        },
        getDengLuData(state, data) {
            state.ZhuCeData = data;
            state.DengLuData = data;
        },
        getTuiChu(state, data) {
            state.ZhuCeData = data;
            state.CartPanelData=[];
            state.CheckOutData=[];
            state.AddressData=[];
            state.orderOne={};
            state.orders=[];
        }
    },

    actions: {
        getHomeAsync: function (context) {
            Axios.get("http://127.0.0.1:3000/getHome").then((data) => {
                context.commit("getHomeData", data.data)
            })
        },
        getShopAsync: function (context, id) {
            Axios.get("http://127.0.0.1:3000/getShop/" + id).then((data) => {
                context.commit("getShopData", data.data)
            })
        },
        getGoodsAsync: function (context, json) {
            Axios.get("http://127.0.0.1:3000/getGoods/" + json.ids + "/" + json.id).then((data) => {
                context.commit("getGoodsData", data.data)
            })
        },
        getAddressAsync: function (context) {
            Axios.get("http://127.0.0.1:3000/getAddress").then((data) => {
                context.commit("getAddressData", data.data)
            })
        },
        getZhuCeAsync: function (context, json) {
            Axios.get("http://127.0.0.1:3000/getZhuCe/" + json.name + "/" + json.password).then((data) => {
                context.commit("getZhuCeData", data.data)
            })
        },
        getDengLuAsync: function (context, json) {
            Axios.get("http://127.0.0.1:3000/getDengLu/" + json.name + "/" + json.password).then((data) => {
                context.commit("getDengLuData", data.data)
            })
        }
    },
    modules: {}
})

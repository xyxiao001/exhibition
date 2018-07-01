// 避免影响全局，方法名以大写M开头，后面命名以正常驼峰形式

export default {
    methods: {
        async Mjsonp(url, param = {}) {
            const response = await this.$http.jsonp(url, {params: param})
            .catch(e => {
                console.log(e)
                return e
            })
            return response
            // let response
            // await this.$http.jsonp(url, {params: param})
            // .then(res => {
            //     response = res
            // }, res => {
            //     alert('code: 500')
            // })
            // return response
        },
        async MjsonpNew(url, param = {}) {
            const response = await this.$http.jsonp(url, param)
            .catch(e => {
                console.log(e)
                return e
            })
            return response
        },
        async Mget(url, param) {
            const response = await this.$http.get(url, param, { emulateJSON: true })
            .catch(e => {
                console.log(e)
                return e
            })
            return response
        },
        async Mpost(url, param) {
            const response = await this.$http.post(url, param, { emulateJSON: true })
            .catch(e => {
                console.log(e)
                return e
            })
            return response
        },
        MrouterJump(to, pra_obj) {
            if (this.$router) {
                this.$router.push({name: to, params: pra_obj})
            }
        },
        MgetQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
            var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i")
            var r = window.location.search.substr(1).match(reg)
            var q = window.location.pathname.substr(1).match(reg_rewrite)
            if(r != null){
                return unescape(r[2])
            }else if(q != null){
                return unescape(q[2])
            }else{
                return null
            }
        },
        MrouterGoBack() {
            this.$router.go(-1)
        },
        MtestFunction() {
            console.log('this is a mixins test function')
        },
        MresetBgc() {
            // $('body').css('background-color', '#fff')
        },
        MbgcNone() {
            $('body').css('background-color', '#edf2f5')
        },
        MclearRepeat(arr) {
            // 去除数组中重复的Object
            const unique = {}
            arr.forEach((val, index) => {
                unique[ JSON.stringify(val) ] = val
            })

            const new_array = Object.keys(unique).map(u => JSON.parse(u))
            return new_array
        },
        MduplicateRemoval(list, arr) {
            // 请求列表去重
            const new_list = list
            for (let i = 0; i < new_list.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (new_list[i]) {
                        if (new_list[i].id === arr[j].id) {
                            list.splice(i, 1)
                        }
                    }
                }
            }
            return list
            // forEach 若修改原list 会出现BUG
            // new_list.forEach((value, index) => {
            //     arr.forEach((val, i) => {
            //         console.log(`new_list[${index}].id = ${new_list[index].id}`)
            //         console.log(`arr[${i}].id = ${arr[i].id}`)
            //         console.log('-------------------------------------------')
            //         if (value.id === val.id) {
            //             console.log(`重复值 index = ${index} ----------------------------------------------`)
            //             new_list.splice(index, 1)
            //             // console.log(list)
            //         }
            //     })
            // })
        }
    }
}

import router from "./router";
// 默认导出的不用带{}，不然需要带{}
import { getToken } from './composables/auth'
import { ElNotification } from "element-plus";

// 全局路由守卫
router.beforeEach((to, from, next) => {
    const token = getToken()
    console.log(`token:$token`);

    // 如果没有登录，则只能去登录页
    if (!token && to.path != "/login") {
        ElNotification({
            message: "请先登录",
            type: "error",
            duration: 2000
        });
        return next({ path: "/login" })
    }
    // 防止重复登录
    if (token && to.path == "/login") {
        return next({ path: from.path })
    }
    let title = (to.meta.title ? to.meta.title: "") + "-商城后台管理"
    document.title = title
    next()
})

router.afterEach((to, from, next) => {

})
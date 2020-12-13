import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import Error404 from '@/pages/error/Error404'
import Layout from '@/pages/layout/Layout'

import NewMain from '@/pages/new/Main'
import SocialMain from '@/pages/social/Main'
import SocialDetails from '@/pages/social/Details'
import BlogMain from '@/pages/blog/Main'
import BlogAdd from '@/pages/blog/Add'
import BlogEdit from '@/pages/blog/Edit'
import BlogDetails from '@/pages/blog/Details'
import ProjectMain from '@/pages/project/Main'
import ProjectDetails from '@/pages/project/Details'
import ReadmeMain from '@/pages/readme/Main'
import ConfigureMain from '@/pages/configure/Main'
import HelperMain from '@/pages/helper/Main'

import MobileLayout from '@/mobile_views/layout/Layout'
import MobileBlogMain from '@/mobile_views/blog/Main'
import MobileBlogDetails from '@/mobile_views/blog/Details'
import MobileProjectMain from '@/mobile_views/project/Main'
import MobileProjectDetails from '@/mobile_views/project/Details'
import MobileSelfMain from '@/mobile_views/self/Main'



// Vue.use(Router)

export const constantRouterMap = [

    {
        path: '/new/main',
        redirect: '/new/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-star-off',
            title: '最新动态'
        },
        children: [
            {
                path: 'main',
                component: NewMain,
                meta: { title: '最新动态' }
            }
        ]
    },
    {
        path: '/social/main',
        redirect: '/social/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-mobile-phone',
            title: '社交圈'
        },
        children: [
            {
                path: 'main',
                component: SocialMain,
                meta: { title: '社交圈' }
            },
            {
                path: 'details/:name',
                component: SocialDetails,
                meta: { title: '用户资料' }
            }
        ]
    },
    {
        path: '/blog/main',
        redirect: '/blog/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-edit-outline',
            title: '博客列表'
        },
        children: [
            {
                path: 'main',
                component: BlogMain,
                meta: { title: '博客列表' }
            },
            {
                path: 'add',
                component: BlogAdd,
                meta: { title: '发表博客' }
            },
            {
                path: 'edit/:id',
                component: BlogEdit,
                meta: { title: '编辑博客' }
            },
            {
                path: 'details/:id',
                component: BlogDetails,
                meta: { title: '博客详情' }
            }
        ]
    },
    {
        path: '/project/main',
        redirect: '/project/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-service',
            title: '开源项目'
        },
        children: [
            {
                path: 'main',
                component: ProjectMain,
                meta: { title: '项目列表' }
            },
            {
                path: 'details/:name',
                component: ProjectDetails,
                meta: { title: '项目详情' }
            }
        ]
    },
    {
        path: '/helper/main',
        redirect: '/helper/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-printer',
            title: '使用帮助',
            mini: true
        },
        children: [
            {
                path: 'main',
                component: HelperMain,
                meta: { title: '使用帮助' }
            }
        ]
    },
    {
        path: '/readme/main',
        redirect: '/readme/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-document',
            title: 'README.md'
        },
        children: [
            {
                path: 'main',
                component: ReadmeMain,
                meta: { title: 'README.md' }
            }
        ]
    },
    {
        path: '/configure/main',
        redirect: '/configure/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-setting',
            title: '系统配置',
            LoginRequired: true
        },
        children: [
            {
                path: 'main',
                component: ConfigureMain,
                meta: { title: '系统配置' }
            }
        ]
    },



    {
        path: "/404",
        component: Error404
    },
    {
        path: '/',
        redirect: '/new',
    },
    {
        path: "*",
        redirect: "/404"
    },

    //mobile
    {
        path: '/mobile/blog/main',
        redirect: '/mobile/blog/main',
        component: MobileLayout,
        meta: {
            type: "mobile",
            icon: 'edit',
            title: '博客'
        },
        children: [
            {
                path: 'main',
                component: MobileBlogMain,
                meta: {
                    scrollTop: true
                }
            },
            {
                path: 'details/:id',
                component: MobileBlogDetails,
                meta: {
                    scrollTop: true
                }
            }
        ]

    },
    {
        path: '/mobile/project/main',
        redirect: '/mobile/project/main',
        component: MobileLayout,
        meta: {
            type: "mobile",
            icon: 'like-o',
            title: '项目'
        },
        children: [
            {
                path: 'main',
                component: MobileProjectMain,
                meta: {
                    scrollTop: true
                }
            },
            {
                path: 'details/:name',
                component: MobileProjectDetails,
                meta: {
                    scrollTop: true
                }
            }
        ]

    },
    {
        path: '/mobile/self/main',
        redirect: '/mobile/self/main',
        component: MobileLayout,
        meta: {
            type: "mobile",
            icon: 'contact',
            title: '个人'
        },
        children: [
            {
                path: 'main',
                component: MobileSelfMain,
                meta: {
                    scrollTop: true
                }
            }
        ]

    },
]




// const router = new Router({
//     mode: 'history',
//     routes: constantRouterMap,
//     scrollBehavior(to, from, savedPosition) {
//         if (to.meta.scrollTop) {
//             return { x: 0, y: 0 }
//         }
//     }
// })

// router.beforeEach((to, from, next) => {
//     Vue.prototype.$setTitle(to.meta.title)
//     next()
// })



// export default router
import type { RevenueProjects,BlogCards } from '@/types/dashboard/index';

import product1 from "@/assets/images/products/dash-prd-1.jpg";
import product2 from "@/assets/images/products/dash-prd-2.jpg";
import product3 from "@/assets/images/products/dash-prd-3.jpg";
import product4 from "@/assets/images/products/dash-prd-4.jpg";

import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import img1 from '@/assets/images/blog/blog-img1.jpg';
import img2 from '@/assets/images/blog/blog-img2.jpg';
import img3 from '@/assets/images/blog/blog-img3.jpg';

/*--Revenue Projects --*/
const RevenueProjectsData: RevenueProjects[] = [
    {
        img: product1,
        leadname: "Minecraf App",
        designation: "Jason Roy",
        projectname: "73.2%",
        statuscolor: "warning",
        statustext: "Medium",
        money: "$3.5K",
    },
    {
        img: product2,
        leadname: "Web App Project",
        designation: "Mathew Flintoff",
        projectname: "73.2%",
        statuscolor: "secondary",
        statustext: "Very High",
        money: "$24.5K",
    },
    {
        img: product3,
        leadname: "Modernize Dashboard",
        designation: "Anil Kumar",
        projectname: "73.2%",
        statuscolor: "success",
        statustext: "Low",
        money: "$12.8K",
    },
    {
        img: product4,
        leadname: "Dashboard Co",
        designation: "George Cruize",
        projectname: "73.2%",
        statuscolor: "error",
        statustext: "High",
        money: "$2.4K",
    },
];


/*--Blog Cards--*/
const BlogCardData: BlogCards[] = [
    {
        avatar: user1,
        coveravatar: img1,
        read: '2 min Read',
        title: '中国传统色彩-风信紫',
        link: '/',
        color:'#C8ADC4',
    },
    {
        avatar: user2,
        coveravatar: img2,
        read: '2 min Read',
        title: '中国传统色彩-暮山紫',
        link: '/',
        color:'#A4ABD6',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-萝兰紫',
        link: '/',
        color:'#C08EAF',
    },
    {
        avatar: user2,
        coveravatar: img2,
        read: '2 min Read',
        title: '中国传统色彩-藤萝紫',
        link: '/',
        color:'#8076A3',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-樱草紫',
        link: '/',
        color:'#C06F98',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-槿紫',
        link: '/',
        color:'#806D9E',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-豆蒄紫',
        link: '/',
        color:'#AD6598',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-山梗紫',
        link: 'SHAN GENG ZI',
        color:'#61649F',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-蕈紫',
        link: 'XUN ZI',
        color:'#815C94',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-桔梗紫',
        link: '/',
        color:'#813C85',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-野菊紫',
        link: '/',
        color:'#525288',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-玫瑰紫',
        link: '/',
        color:'#BA2F7B',
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: '中国传统色彩-漫天星紫',
        link: '/',
        color:'#2E317C',
    }
];


const BlogCardData_blue: BlogCards[] = [
  {
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-清水蓝',
    link: '/',
    color:'#93D5DC',
  }, {
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-瀑布蓝',
    link: '/',
    color:'#51C4D3',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-云水蓝',
    link: '/',
    color:'#BACCD9',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-星蓝',
    link: '/',
    color:'#93B5CF',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-晴山蓝',
    link: '/',
    color:'#8FB2C9',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-秋波蓝',
    link: '/',
    color:'#BABCD1',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-涧石蓝',
    link: '/',
    color:'#66A9C9',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-蔚蓝',
    link: '/',
    color:'#29B7CB',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-孔雀蓝',
    link: '/',
    color:'#0EB0C9',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-翠蓝',
    link: '/',
    color:'#1E9EB3',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-云山蓝',
    link: '/',
    color:'#2F90B9',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-宝石蓝',
    link: '/',
    color:'#2486B9',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-海军蓝',
    link: '/',
    color:'#346C9C',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-虹蓝',
    link: '/',
    color:'#2177B8',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-景泰蓝',
    link: '/',
    color:'#2775B6',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-靛青',
    link: '/',
    color:'#1661AB',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-钢青',
    link: '/',
    color:'#142334',
  },{
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: '中国传统色彩-暗蓝',
    link: '/',
    color:'#101F30',
  }
]


export {RevenueProjectsData,BlogCardData,BlogCardData_blue}

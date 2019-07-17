import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

import menuList from '../../config/menuConfig'
import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu

/*
左侧导航组件
*/
class LeftNav extends Component {

    /*
    根据指定菜单数据列表产生<Menu>的子节点数据
    使用reduce（）+ 递归
    */
   gerMenuNodes2 = (menuList) => {

    //得到当前请求的path
    const path = this.props.location.pathname

    return menuList.reduce((pre,item)=>{
        //添加<Menu.Item><Menu.Item>
        if(!item.children){
         pre.push((
             
         ))
        }
    })
   }
}
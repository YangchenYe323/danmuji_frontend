import React from 'react'
import { Tooltip, Container } from '@material-ui/core'


const ShowcaseSet = () => {
    return(
        <Container maxWidth="sm">
            <h4>显示设置</h4>
            <div>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title='是否开启自动连接上次连接的房间' arrow>
                        <span>启动</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title='cmd窗口是否显示弹幕' arrow>
                        <span>cmd</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title='弹幕是否显示舰长图标'>
                        <span>舰</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title='弹幕是否显示老爷图标'>
                        <span>爷</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title='弹幕是否显示用户UL等级'>
                        <span>UL</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title = '弹幕是否显示房管图标'>
                        <span>管</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title = '弹幕是否显示勋章图标'>
                        <span>勋</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title = '弹幕是否显示房管禁言消息'>
                        <span>禁言</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title = '弹幕是否显示礼物消息'>
                        <span>礼物</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title = '弹幕是否显示欢迎用户进入直播间消息'>
                        <span>欢迎</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title = '弹幕是否显示关注消息'>
                        <span>关注</span>
                    </Tooltip>
                </label>
                <label>
                    <input type='checkbox'/>
                    <Tooltip title = '是否弹幕保存本地(本地弹幕文件夹位置：本项目根目录下Danmuji_log文件夹)'>
                        <span>本地</span>
                    </Tooltip>
                </label>
            </div>
        </Container>
    )
} 

export default ShowcaseSet
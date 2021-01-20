import React from 'react'
import { Tooltip, Container } from '@material-ui/core'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'


const ShowcaseSet = (props) => {

    const handleChange = props.handleChowcaseChange;

    return(
        <Container maxWidth="sm">
            <h4>显示设置</h4>
            <div>
                <FormGroup row>
                    <Tooltip title = '是否自动连接上次连接的房间' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.auto} onChange={handleChange} name="autoConnect" />}
                            label="自动"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '是否在命令行显示弹幕' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.cmd} onChange={handleChange} name="cmd"/>}
                            label="cmd"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示舰长图标' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.guard} onChange={handleChange} name="guard"/>}
                            label="舰"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示老爷图标' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.vip} onChange={handleChange} name="vip"/>}
                            label="爷"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示用户UL等级' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.ul} onChange = {handleChange} name="ul"/>}
                            label="UL"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示房管图标' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.manager} onChange={handleChange} name="manager"/>}
                            label="管"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示勋章图标' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.medal} onChange={handleChange} name="medal"/>}
                            label="勋"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示房管禁言消息' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.block} onChange={handleChange} name="block"/>}
                            label="禁言"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示礼物消息' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.gift} onChange={handleChange} name="gift"/>}
                            label="礼物"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示用户进入直播间' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.welcome} onChange={handleChange} name="welcome"/>}
                            label="欢迎"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否显示关注主播消息' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.subscribe} onChange={handleChange} name="subscribe"/>}
                            label="关注"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                    <Tooltip title = '弹幕是否保存本地（保存到项目根目录下Danmuji_log文件夹' arrow>
                        <FormControlLabel
                            control={<Switch checked={props.local} onChange={handleChange} name="local"/>}
                            label="本地"
                            labelPlacement="bottom"
                        />
                    </Tooltip>
                </FormGroup>
            </div>
        </Container>
    )
} 

export default ShowcaseSet
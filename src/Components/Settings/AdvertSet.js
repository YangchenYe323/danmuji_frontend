import React from 'react'
import {Tooltip, Container, FormGroup, FormControl, InputLabel, Select, FormControlLabel, Switch} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

const AdvertSet = (props) => {

    const classes = useStyles();

    return(
        <Container maxwidth='sm'>
            <h4>广告姬设置（需要登录）</h4>
            <FormGroup row>
                <Tooltip title = "是否打开" arrow>
                    <FormControlLabel
                        control={<Switch checked = {props.advertOpen} onChange={props.handleAdvertChange} name= "advertOpen"/>}
                        label="开关"
                    />
                </Tooltip>
                <Tooltip title = "是否仅在直播中生效果" arrow>
                    <FormControlLabel
                        control={<Switch checked = {props.advertLiveOpen} onChange={props.handleAdvertChange} name= "advertLiveOpen"/>}
                        label="直播"
                    />
                </Tooltip>
                <Tooltip title = "选择发送条件（顺序or随机）" arrow>
                    <FormControl className={classes.formControl}>
                        <Select
                            native
                            value={props.advertCond}
                            onChange={props.handleAdvertChange}
                            inputProps={
                                {
                                    name:'顺序'
                                }
                            }
                        >

                        <option aria-label="None" value=""/>
                        <option value={1}>顺序</option>
                        <option value={2}>随机</option>           

                        </Select>
                    </FormControl>
                </Tooltip>
                    <Tooltip title = "多少秒发送一次" arrow>
                        <FormControl className={classes.formControl}>
                            <Select
                                native
                                value={props.advertInterTime}
                                onChange={props.handleAdvertChange}
                                inputProps={
                                    {   
                                        name:'0'
                                    }
                            }      
                            >
                        <option aria-label="None" value=""/>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>    
                        <option value={3}>3</option>       

                        </Select>
                    </FormControl>
                </Tooltip>
            </FormGroup>
        </Container>
    );

}

export default AdvertSet
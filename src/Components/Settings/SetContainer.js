import React, {Component} from 'react'
import {Container} from '@material-ui/core'
import ShowcaseSet from './ShowcaseSet'
import AdvertSet from './AdvertSet'
import SaveButton from './SaveButton'

class SetContainer extends Component{

    state = {
        //showcase state
        auto:true,
        cmd:false,
        guard:true,
        vip:false,
        ul:true,
        manager:false,
        medal:true,
        block:false,
        gift:true,
        welcome:false,
        subscribe:true,
        local:false,
        
        //advert state
        advert_open:false,
        advert_is_live_open:false,
        advertCond:1,
        advertInterTime:0,
        advertMessage:"",
        
    };

    render(){

        const handleChowcaseChange = (event) => {
            this.setState({...this.state, [event.target.name]: event.target.checked});
        }

        const logSet = () => {
            console.log(this.state);
        }


        return(
            <Container maxWidth="sm">
                <ShowcaseSet 
                auto={this.state.auto} 
                cmd={this.state.cmd}
                guard={this.state.guard}
                vip={this.state.vip}
                ul={this.state.ul}
                manager={this.state.manager}
                medal={this.state.medal}
                block={this.state.block}
                gift={this.state.gift}
                welcome={this.state.welcome}
                subscribe={this.state.subscribe}
                local={this.state.local}
                handleChowcaseChange = {handleChowcaseChange}/>

                <AdvertSet/>

                <SaveButton logSet = {logSet}/>
            </Container>
        )
    }

}

export default SetContainer
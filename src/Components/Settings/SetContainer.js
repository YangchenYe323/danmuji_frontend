import React, {Component} from 'react'
import {Container} from '@material-ui/core'
import ShowcaseSet from './ShowcaseSet'
import SaveButton from './SaveButton'

class SetContainer extends Component{

    state = {}

    render(){

        const handleChowcaseChange = (event) => {
            this.setState({...this.state, [event.target.name]: event.target.checked});
        }

        const logSet = () => {
            console.log(this.state);
        }


        return(
            <Container>
                <ShowcaseSet handleChowcaseChange = {handleChowcaseChange}/>
                <SaveButton logSet = {logSet}/>
            </Container>
        )
    }

}

export default SetContainer
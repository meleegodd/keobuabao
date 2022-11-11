import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bot from './Bot'
import './OanTuXi.css'
import Player from './Player'
import ResultGame from './ResultGame'

class OanTuXi extends Component {
    render() {
        return (
            <div className='game text-center'>
                <div className='row'>
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4'>
                        <ResultGame />
                        <button onClick={() => { this.props.playGame() }} className='btn btn-success mt-5'>Play game</button>
                    </div>
                    <div className='col-4'>
                        <Bot />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomBotItem = setInterval(() => {

                let action = {
                    type: 'RAN_DOM',
                }
                dispatch(action)

                count++;
                if (count > 5) {
                    clearInterval(randomBotItem)
                    dispatch({
                        type: 'END_GAME'
                    })
                }

            }, 100)


        }
    }
}

export default connect(null, mapDispatchToProps)(OanTuXi)
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Bot extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -30px;}
            25% {top: 50px;}
            50% {top: -30px;}
            75% {top: 50px;}
            100% {top: 0;}
          }`
        return (
            <div className=' text-center playerGame mt-2'>
                <style>
                    {keyframe}
                </style>
                <div style={{ position: 'relative' }} className='theThink'>
                    <img style={{
                        position: 'absolute',
                        left: '30%',
                        animation: `randomItem${Date.now()} 0.5s`,
                        width: '100px',
                        height: '100px',
                        marginTop: '16px'
                    }} src={this.props.computer.hinhAnh} alt='' />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: '150px', height: '150px' }} src='./img/playerComputer.png' alt='1' />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.OanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Bot)

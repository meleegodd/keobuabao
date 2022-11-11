import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className=' text-center playerGame mt-2'>
                <div className='theThink'>
                    <img style={{ width: '100px', height: '100px', marginTop: '16px' }} src={this.props.mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh} alt='0' />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: '150px', height: '150px' }} src='./img/player.png' alt='1' />

                <div className='row'>
                    {this.props.mangDatCuoc.map((item, index) => {
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' }
                        }
                        return <div className='col-4' key={index}>
                            <button onClick={() => { this.props.datCuoc(item.ma) }} style={border} className='btnItem'>
                                <img style={{ width: '50px', heigth: '50xp' }} src={item.hinhAnh} alt={item.ma} />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.OanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            let action = {
                type: 'DAT_CUOC',
                maCuoc
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)


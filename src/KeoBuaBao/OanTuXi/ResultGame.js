import React, { Component } from 'react'
import { connect } from 'react-redux'

class ResultGame extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning'>{this.props.result.ketQua}</div>
                <div className='display-4 text-success'>Số bàn thắng: <span>{this.props.result.soBanThang}</span></div>
                <div className='display-4 text-success'>Tổng số bàn chơi: <span>{this.props.result.soBanChoi}</span></div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.OanTuXiReducer
    }
}

export default connect(mapStateToProps)(ResultGame)
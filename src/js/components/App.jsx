import React from "react";
import '../../App.css';
import DrumPad from "./DrumPad";
import PadBank from "./PadBank";
import { connect } from "react-redux";
import { switchPower, 
         changeVolume,
         switchBank,
         updateDisplay } from "../actions/index";

const mapStateToProps = (state) => {
    return {
        power: state.power,
        volume: state.volume,
        bank: state.bank,
        display: state.display
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchPower: (currentState) => { dispatch(switchPower(currentState)); },
        changeVolume: (newVolume) => { dispatch(changeVolume(newVolume)); },
        switchBank: (currentBank) => { dispatch(switchBank(currentBank)); },
        updateDisplay: (newDisplay) => { dispatch(updateDisplay(newDisplay)); }
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePower = event => {
        this.props.switchPower(this.props.power);
    };

    handleVolume = event => {
        this.props.changeVolume(event.target.value)
    };

    handleBank = event => {
        this.props.switchBank(this.props.bank)
    };

    render() {
        return (
            <div id="drum-machine" className="col-6 bg-light rounded container-fluid">
                <div className="row d-flex justify-content-between p-4">
                    <PadBank className="col-xs-8"
                        power={this.props.power}
                        bank={this.props.bank} />
                    <div id="controls-container" className="col-xs-4 justify-content-center align-items-center">
                        <div className="control row mt-2 custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="power-switch" onClick={this.handlePower} />
                            <label className="custom-control-label" for="power-switch">Power</label>
                        </div>
                        <div id="display" className="control row mt-2 py-2 border border-primary rounded">
                            {this.props.display}
                        </div>
                        <div className="control mt-2">
                            <label for="volume-slider">Volume</label>
                            <input
                                id="volume-slider" 
                                className="custom-range" 
                                type="range" 
                                min="0" max="1" step="0.01"
                                value={this.props.volume}
                                onChange={this.handleVolume} />
                        </div>
                        <div id="bank-select" className="control row mt-2 custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="bank-switch" onClick={this.handleBank} />
                            <label className="custom-control-label" for="bank-switch">Bank</label>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

App = connect(mapStateToProps, mapDispatchToProps) (App);


export default App;
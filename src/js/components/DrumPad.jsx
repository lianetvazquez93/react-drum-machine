import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        power: state.power,
        display: state.display,
        volume: state.volume
    }
};


class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    playSound = event => {
        let sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        if (this.props.power) {
            sound.play();
        } else { return; }
    };

    updateDisplay = event => {
        if (this.props.power) {
            let display = document.getElementById("display");
            display.innerHTML = this.props.id;
        }
    };

    handleKeyPress = event => {
        if (event.keyCode === this.props.keyCode) {
            this.playSound(event);
            this.updateDisplay(event);
        }
    };

    render() {
        
        const clips = [].slice.call(document.getElementsByClassName("clip"));
        clips.forEach(clip => { clip.volume = this.props.volume });

        return (
            <div 
                className="drum-pad col-3 p-2 m-1 rounded bg-primary text-center"
                id={this.props.id}
                onClick={(event) => {
                    this.playSound();
                    this.updateDisplay();
                }} >
                <p>{this.props.keyTrigger}</p>
                <audio
                    className="clip"
                    id={this.props.keyTrigger}
                    src={this.props.url} />    
            </div>
        )
    }


}

DrumPad = connect (mapStateToProps) (DrumPad);

export default DrumPad;
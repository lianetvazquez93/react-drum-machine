import React from "react";
import { bankOne, bankTwo } from "../constants/bank-types";
import DrumPad from "./DrumPad";


class PadBank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let padbank = this.props.power?
                        !this.props.bank?
                            bankOne.map((element) => {
                                return (
                                    <DrumPad
                                        url={element.url}
                                        id={element.id}
                                        keyTrigger={element.keyTrigger}
                                        keyCode={element.keyCode} />
                                )
                            }) :
                            bankTwo.map((element) => {
                                return (
                                    <DrumPad
                                        url={element.url}
                                        id={element.id}
                                        keyTrigger={element.keyTrigger}
                                        keyCode={element.keyCode} />
                                )
                            })
                        : bankOne.map((element) => {
                            return (
                                <DrumPad
                                    url={element.url}
                                    id={element.id}
                                    keyTrigger={element.keyTrigger}
                                    keyCode={element.keyCode} />
                            )
                        }); 


        return (
            <div id="padbank" className="row"> { padbank }</div>
        );
            
    }
}

export default PadBank;
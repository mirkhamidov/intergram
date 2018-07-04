import dateFormat from 'dateformat'
import { h, Component } from 'preact';

const dayInMillis = 60 * 60 * 24 * 1000;

export default class MessageArea extends Component {

    componentDidMount() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    render(props,{}) {
        const currentTime = new Date();
        return (
            <ol class="chat">
                {props.messages.map(({name, text, from, time}) => {
                    if (from === 'visitor') {
                        name = "Вы";
                    }
                    return (
                        <li class={from}>
                            <div class="msg">
                                <p>
                                { (props.conf.displayMessageTime) ?
                                    <span class="time"> 
                                        {
                                            currentTime - new Date(time) < dayInMillis ?
                                                dateFormat(time, "HH:MM") :
                                                dateFormat(time, "m/d/yy HH:MM")
                                        }
                                         
                                    </span> 
                                    :
                                    ''
                                }
                                { (name) ?
                                    <span class="name answer">{name}&nbsp;</span>
                                    :
                                    <span class="name">{props.conf.projectName}&nbsp;</span>
                                }
                               </p>
                               <p> 
                               { text ? text : ''} 
                               </p>
                            </div>
                        </li>
                    );
                })}
            </ol>
        );
    }

}

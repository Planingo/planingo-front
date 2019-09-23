import React from 'react';
import { Switch as  SwitchReact} from 'element-react';

const Switch = ({ off, on, label }) => {
    return (
        <div>
            <SwitchReact
                value={true}
                onText={on}
                offText={off}/>
                {label}
        </div>
    )
}

export default Switch;
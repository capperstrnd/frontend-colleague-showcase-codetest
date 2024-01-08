import React from "react";
import './Grid.css';

interface Props {
    children: any
}

const Grid: React.FC<Props> = ({children}) => {

    return (
        <div className="grid">
            {children}
        </div>
    );
}

export default Grid;
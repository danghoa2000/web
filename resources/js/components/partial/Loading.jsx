import React from "react";
import { Spin } from "antd";

const Loading = () => {
    return (
        <div className="loading-overlay text-center">
            <Spin />
        </div>
    );
};

export default Loading;

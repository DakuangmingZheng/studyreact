import React from "react";
import PropTypes from "prop-types";
export default function Propswith(props) {
    const {temperature} = props
    return <div>
        <h1>(函数定义组件)当前气温是{temperature}</h1>
    </div>
}
Propswith.propTypes={
    temperature:PropTypes.number
}
Propswith.defaultProps={
    temperature:30
}


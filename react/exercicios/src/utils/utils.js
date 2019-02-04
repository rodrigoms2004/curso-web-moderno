import React from 'react'   // mandatory!

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            // propriedades do pai, propriedades do filho
            ...props, ...child.props
        })
    })
}

import React, {Fragment} from 'React'
const Header = props => {
    console.log(props)
    return(
        <Fragment>
        <h1 className={props.value}>Hello {props.name}</h1>
        <span>{props.children}</span>
        </Fragment>
    )
    
}

export default Header
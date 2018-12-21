import React from 'react'

function sideMenuItem(props) {
	return (
		<li className={props.menu_is_active}
        onClick={() => props.eventHandler(props.menu_item.name)}
        >
            <a >
                <i className={props.menu_item.icon_class}></i>
                <span>{props.menu_item.name.replace(/_/g,' ')}</span>
            </a>
		</li>
		)
}

export default sideMenuItem;

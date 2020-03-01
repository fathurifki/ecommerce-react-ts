import React from 'react'
import shard from '../../helpers/shard'

const { Navbar, NavbarBrand } = shard

export const NavigationBar = () => {
    return (
        <Navbar style={{ maxWidth: '100%' }} type="dark" theme="primary" expand="md">
            <NavbarBrand href="#">Hippies</NavbarBrand>
        </Navbar>
    )
}
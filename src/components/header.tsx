"use client";
import {Container, Nav, Navbar, NavbarBrand, NavDropdown} from "react-bootstrap";
import Image from 'next/image';
import logo from '@/images/logo.png';

type NavbarItem = {
    title: string;
    type: 'link' | 'dropdown',
    url?: string,
    children?: NavbarItem[];
};

export default function Header() {
    const mainSiteUrl = 'https://ewbsbusiness.ae';

    const navBar: NavbarItem[] = [
        {
            title: 'Home',
            type: 'link',
            url: '/',
        },
        {
            title: 'MainLand',
            type: 'dropdown',
            children: [
                {
                    title: 'Dubai',
                    type: 'link',
                    url: `/dubai-mainland-company`,
                },
                {
                    title: 'What Is Dubai Mainland',
                    type: 'link',
                    url: '/dubai-mainland-license',
                },
                {
                    title: 'Required Documents',
                    type: 'link',
                    url: '/required-documents',
                },
                {
                    title: 'Professional Licence',
                    type: 'link',
                    url: '/professional-license',
                },
                {
                    title: 'Commercial Licence',
                    type: 'link',
                    url: '/commercial-license',
                },
                {
                    title: 'Resident Visa',
                    type: 'link',
                    url: '/residency-visa',
                },
            ],
        },
        {
            title: 'Freezone',
            type: 'dropdown',
            children: [
                {
                    title: 'Dubai Freezone',
                    type: 'link',
                    url: '/Dubai-Freezone',
                },
                {
                    title: 'Shams Freezone',
                    type: 'link',
                    url: '/shams-freezone',
                },
                {
                    title: 'AMC Freezone',
                    type: 'link',
                    url: '/ajman-media-city-freezone',
                },
                {
                    title: 'Rakez Freezone',
                    type: 'link',
                    url: '/rakez-freezone',
                },
                {
                    title: 'IFZA Freezone',
                    type: 'link',
                    url: '/ifza-freezone',
                },
            ],
        },
        {
            title: 'Service',
            type: 'dropdown',
            children: [
                {
                    title: 'Pro Services',
                    type: 'link',
                    url: '/pro-services',
                },
                {
                    title: 'Mea And Mofa Attestation',
                    type: 'link',
                    url: '/mea-and-mofa-attestation',
                },
                {
                    title: 'Tax Residency',
                    type: 'link',
                    url: '/tax-residency-dubai',
                },
            ],
        },
        {
            title: 'Promotions',
            type: 'dropdown',
            children: [
                {
                    title: 'Shams Package',
                    type: 'link',
                    url: "/shams-packages",
                },
                {
                    title: 'Sharjah Freezone',
                    type: 'link',
                    url: '/sharjah-freezone',
                },
                {
                    title: 'SPC Freezone',
                    type: 'link',
                    url: '/spcfz',
                },
                {
                    title: 'Dubai Mainland Professional',
                    type: 'link',
                    url: '/dubai-mainland-license',
                },
                {
                    title: 'Freelancing',
                    type: 'link',
                    url: '/freelancing',
                },
                {
                    title: 'Company Setup',
                    type: 'link',
                    url: '/company-setup',
                },
            ],
        },
        {
            title: 'Blog',
            type: 'link',
            url: '/blog'
        },
        {
            title: 'About Us',
            type: 'link',
            url: '/aboutus',
        },
        {
            title: 'Contact Us',
            type: 'link',
            url: '/contactus',
        },
    ]

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="d-flex justify-content-between align-items-center">
                    <NavbarBrand>
                        <a href={mainSiteUrl}>
                            <Image src={logo} width={201} height={80} alt="EWBS"/>
                        </a>
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" id="navbar-nav-id">
                            {
                                navBar.map((item, index) => (
                                    (item.type === 'link') ? (
                                        <a className={'nav-item navbar-text hover:text-red-800 pr-2 no-underline'}
                                           key={`nav-item-${index}`}
                                           href={`${mainSiteUrl}${item.url}`}>{item.title}</a>
                                    ) : (
                                        <NavDropdown className={'w-fit pr-1'} key={`nav-item-${index}`}
                                                     title={item.title}
                                                     id={`basic-nav-dropdown-${index}`}>
                                            {
                                                item.children?.map((child, childIndex) => (
                                                    <div className={'px-2 w-fit'} key={`nav-item-child-${childIndex}`}>
                                                        <a className={'nav-item navbar-text hover:text-red-800 no-underline'}
                                                           href={`${mainSiteUrl}${child.url}`}>{child.title}</a>
                                                    </div>
                                                ))
                                            }
                                        </NavDropdown>
                                    )
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

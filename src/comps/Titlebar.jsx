import './css/Titlebar.css'
import { Link } from 'react-router-dom'

export const Titlebar = () => {
    return (
        <div className='bar-container'>
            <div className='nav-container'>
            <div className='logo-wrapper'>
                <div className='logo-container'>
                    <Link className='logo-text' to='/'>Random Raid Generator</Link>
                </div>
                </div>
                <div className='link-wrapper'>
                    <Link to='/info' className='link-text'>Info</Link>
                    <Link to='/faq' className='link-text'>FAQ</Link>
                </div>
            </div>
        </div>
    )
}
import React, {useState, useEffect} from 'react';
import './ThemeSwitcher.css';
import {VscColorMode} from 'react-icons/vsc';

const ThemeSwitcher = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedColor, setSelectedColor] =useState(localStorage.getItem('selectedColor') || '#1e90ff');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setShowDropdown(false);
        localStorage.setItem('selectedColor',color);
    };

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--primaryColor', selectedColor);
    }, [selectedColor]);
    
    return (
        <div className='theme_toggle'>
            <div className='theme_icon' onClick={toggleDropdown}>
                <VscColorMode className='icon'/>
            </div>
            {showDropdown && (
                <div className='color_dropdown'>
                    <div className='color_option' style={{backgroundColor: '#1e90ff'}} onClick={() => handleColorChange('#1e90ff')}></div>
                    <div className='color_option' style={{backgroundColor: '#ff4500'}} onClick={() => handleColorChange('#ff4500')}></div>
                    <div className='color_option' style={{backgroundColor: '#32cd32'}} onClick={() => handleColorChange('#32cd32')}></div>
                    <div className='color_option' style={{backgroundColor: '#ff69b4'}} onClick={() => handleColorChange('#ff69b4')}></div>
                    <div className='color_option' style={{backgroundColor: '#ce04ce'}} onClick={() => handleColorChange('#ce04ce')}></div>
                </div>
            )}
        </div>
    )
};

export default ThemeSwitcher;
import { useEffect } from "react";
import { NAV_LINKS } from '@/constants'
 
interface HamburgerMenuProps {
    onClose: () => void; // Define onClose as a function that returns void
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClose }) => {
    useEffect(() => {
        // Function to handle scroll event
        const preventScroll = (e: Event) => {
            e.preventDefault();
        };

        // Event listener to prevent scrolling
        document.body.style.overflow = 'hidden';
        window.addEventListener('scroll', preventScroll);

        // Cleanup function to remove the event listener
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('scroll', preventScroll);
        };
    }, []); // Only run this effect once when the component mounts

    return (
        <div className="absolute inset-0  bg-[#8CE2F1] z-10 overflow-y-hidden h-[100vh] items-center justify-center">
            <div className="text-end p-5 font-poppins font-bold text-[40px] hover:cursor-pointer" onClick={onClose}>X</div>
            <div className="flex-col flex text-center font-poppins font-medium text-[24px] text-[#043F48] py-[30%]  ml-[10%]">
                {NAV_LINKS.map((link) => (
                    <a key={link.key} href={link.href}
                    className="hover:opacity-60 pt-[30px]"
                    onClick={onClose}
                    >
                        {link.label}
                    </a>
                    ))}
            </div>
        </div>
    );
};
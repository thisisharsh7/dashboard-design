import { RiBarChartLine } from 'react-icons/ri';
import { FiAward } from 'react-icons/fi';
import { AiOutlineFile } from 'react-icons/ai';

const Sidebar = () => {
    const sidebarOptions = [
        { id: 'dashboard', icon: <RiBarChartLine />, text: 'Dashboard' },
        { id: 'skillTest', icon: <FiAward />, text: 'Skill Test' },
        { id: 'internships', icon: <AiOutlineFile />, text: 'Internships' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                {sidebarOptions.map((option) => (
                    <div className="sidebar-options" id={option.id} key={option.id}>
                        <div>{option.icon}</div>
                        <p>{option.text}</p>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;

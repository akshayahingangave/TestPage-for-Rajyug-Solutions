import '../App.css'

function Sidebar() {
    return (

        <div className="row">
            <nav class="menu">
                <ul><br />
                    <li className="has-subnav">
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fas fa-th-large fa-2x"></i>
                        </a>
                        <br />
                    </li>
                    <li className="has-subnav">
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fas fa-user-plus"></i>
                        </a>
                        <br />
                    </li>
                    <li class="has-subnav">
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fas fa-user-friends"></i>
                        </a>
                        <br />
                    </li>
                    <li class="has-subnav">
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fa">&#xf2c1;</i>
                        </a>
                        <br />
                    </li>
                    <li>
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fas fa-calendar-day"></i>
                        </a>
                        <br />
                    </li>
                    <li>
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fas fa-user-friends"></i>
                        </a>
                        <br />
                    </li>
                    <li>
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fas fa-bars"></i>
                        </a>
                        <br />
                    </li>
                    <li>
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fas fa-th"></i>
                        </a>
                        <br />
                    </li>
                    <li>
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fas fa-copy"></i>
                        </a>
                        <br />
                    </li>
                    <li>
                        <a href="#" style={{ textAlign: 'center' }}>
                            <i class="fa">&#xf0fe;</i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
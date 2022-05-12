export function Index() {
    return (
            <div className="overflow-hidden w-64 h-screen bg-gray-800 py-4 px-3 bg-gray-50 dark:bg-gray-800" aria-label="Sidebar">
              <ul className="space-y-5">
                <li>
                  <a href="index"><img src="EPI-USE Logo.png" alt="LOG" /></a>
                  <h1 className="bg-white">Fresh Produce Inventory Tracker</h1>
                </li>
                <li>
                  <a href="index" className="flex items-center p-2 text-base bg-blue-900 font-normal text-white hover:bg-red-700">
                    <i className="fa fa-pie-chart" style={{fontSize: '48px'}} />
                    <span className="ml-3">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="upload" className="flex items-center p-2 text-base bg-blue-900 font-normal text-white hover:bg-red-700">
                    <i className="fa fa-upload" style={{fontSize: '48px'}} />
                    <span className="ml-3">Upload Photos</span>
                  </a>
                </li>
                <li>
                  <a href="userInfo" className="flex items-center p-2 bg-blue-900 font-normal text-white hover:bg-red-700">
                    <i className="fa fa-user" style={{fontSize: '48px'}} />
                    <span className="ml-3">User Info</span>
                  </a>
                </li>
                <li>
                  <a href="about" className="flex items-center p-2 w-64 text-base bg-red-700 font-normal text-white hover:bg-red-700">
                    <i className="fa fa-cog" style={{fontSize: '48px'}} />
                    <span className="ml-3">About</span>
                  </a>
                </li>
              </ul>
            </div>
    );
  }
  
  export default Index;
  
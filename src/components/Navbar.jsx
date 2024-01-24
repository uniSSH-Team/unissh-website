import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className='navbar min-h-min h-[40px] drag bordered-b' id='navbar'>
        <div
          className='navbar-start ml-2 flex flex-row gap-4'
          id='navbar_start'
        >
          <div className='dropdown no-drag' id='navbar_start_btn'>
            <div tabIndex={0} role='button' className=''>
              <Link
                to={"/"}
                className='transition-all text-xs text-white/50 hover:text-white/70'
              >
                home
              </Link>
            </div>
          </div>

          <div className='dropdown no-drag' id='navbar_start_btn'>
            <div tabIndex={0} role='button' className=''>
              <Link
                to={"/downloads"}
                className='transition-all text-xs text-white/50 hover:text-white/70'
              >
                downloads
              </Link>
            </div>
          </div>
        </div>

        <div className='navbar-center no-drag'>
          <div className='tooltip tooltip-bottom' data-tip='v0.0.2'>
            <a className='transition-all select-none text-sm hover:text-white/60'>
              uniSSH
            </a>
          </div>
        </div>

        <div className='navbar-end'></div>
      </div>
    </>
  );
}

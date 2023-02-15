import { Outlet, Link } from 'react-router-dom';

export default function Root() {

    return (
        <div className='h-screen'>
            <div className="flex flex-col gap-4 my-8 rounded-xl w-3/4 h-[93vh] bg-slate-600 mx-auto text-slate-200 overflow-hidden relative">

                <header className='border-b border-slate-500 w-full bg-slate-800 pt-6 pb-2 h-36 absolute top-0'>
                    <h1 className="text-5xl text-center">React Component Library</h1>
                    <nav className='mt-4'>
                        <ul className='flex justify-center gap-4'>
                            <li className='hover:underline underline-offset-4'>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <Link to={"/alert"}>Alert</Link>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <Link to={"/badge"}>Badge</Link>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <Link to={"/button"}>Button</Link>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <Link to={"/card"}>Card</Link>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <Link to={"/modal"}>Modal</Link>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <Link to={"/progress"}>Progress Bar</Link>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <Link to={"/rating"}>Rating</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className='px-12 flex flex-col gap-4 mt-36 py-8 overflow-auto'>
                    <Outlet />
                </main>
            </div>
        </div>

    )

}
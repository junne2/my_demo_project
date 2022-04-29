

export default function Header() {
    return (
        <header id="header" class data-bg="transparent2">
            {/* <!-- page top main inner --> */}
            <div class="header-inner">
                <h1><a class="logo" href="/">Night view</a></h1>
                <nav>
                    <a href="/seoul">Seoul</a>
                    <a href="/gyenggi">Gyeonggi</a>
                    <a href="/incheon">Incheon</a>
                    <a href="/ulsan">Ulsan</a>
                    <a href="/busan">Busan</a>
                </nav>
            </div>
        </header>
    )
}
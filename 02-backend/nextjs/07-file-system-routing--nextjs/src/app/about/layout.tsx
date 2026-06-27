export default function AboutLayout({children}) {
    return (
        <div>
            <aside>Sidebar</aside>
            <main>
                {
                    children
                }
            </main>
        </div>
    )
}
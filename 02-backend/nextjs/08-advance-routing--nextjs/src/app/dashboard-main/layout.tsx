// export default function dashboardLayout({ feed, stats }) {
//     return (
//         <div style={
//             {
//                 display: "flex",
//                 gap: "20px"
//             }
//         }>
//             <div style={{
//                 flex: 2
//             }}>
//                 {
//                     feed
//                 }
//             </div>
//             <div style={
//                 {
//                     flex:1
//                 }
//             }>
//                 {
//                     stats
//                 }
//             </div>
//         </div>
//     )
// }

import Link from "next/link";

export default function dashboardLayout({ tab1, tab2 }) {
    return (
        <div style={
            {
                display: "flex",
                gap: "20px"
            }
        }>
            <nav style={
                {
                    marginBottom: "20px"
                }
            }>
                <Link href={"/dashboard-main/tab1"}>Tab 1</Link> | {" "}
                <Link href={"/dashboard-main/tab2"}>Tab 2</Link>
            </nav>
            <div>
                {
                    tab1
                }
                {
                    tab2
                }
            </div>
        </div>
    )
}
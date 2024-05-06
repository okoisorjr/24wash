import Navbar from "../navbar"
import Footer from "../footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar/>
        {children}
      <Footer />
    </div>
  )
}
// @ts-expect-error - because it's just a quick mock
const Layout = ({ children, complementary }) => {
  return (
    <>
      <main>{children}</main>
      <aside>{complementary}</aside>
    </>
  )
}

export default Layout

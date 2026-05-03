import Navbar from "../components/Navbar";

function MainLayout({ children, darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </div>
  );
}

export default MainLayout;
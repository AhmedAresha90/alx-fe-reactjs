import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <div style={{ padding: "0 20px" }}>
        <UserProfile
          name="John Doe"
          age={25}
          bio="Frontend developer who loves building UI."
        />
      </div>
      <MainContent />
      <Footer />
    </div>
  );
}

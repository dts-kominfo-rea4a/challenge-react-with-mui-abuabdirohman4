import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
// import contactsJSON from "./data/contacts.json";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header />
      <Contact data="{}"/>
      {/* <ContactForm /> */}
    </div>
  );
};

export default App;

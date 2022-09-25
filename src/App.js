import { Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON)
  console.log(contacts)
  return (
    <div className="App">
      <Header />
      <Grid container sx={{ mt: 11, mx: 8 }}>
        <Grid xs={5}>
          <ContactForm />
        </Grid>
        <Grid xs={7}>
          <Contact data={contacts} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

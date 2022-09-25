// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";

const ContactForm = () => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <Card sx={{ bgcolor: "#F3F1EB", width: "85%" }}>
      <CardContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "97%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField required autoFocus id="filled-basic" label="Name" variant="filled" defaultValue="Orang"/>
          <TextField required id="filled-basic" type="number" label="Phone" variant="filled" defaultValue="087771711717"/>
          <TextField required id="filled-basic" label="Email" variant="filled" defaultValue="orang@orang.com"/>
          <TextField required id="filled-basic" label="Photo URL" variant="filled" defaultValue="http://placekitten.com/100"/>
        </Box>
      </CardContent>
      <CardActions>
        <Button type="submit" size="large" sx={{ color: "#2F7C32" }}>
          ADD NEW
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactForm;

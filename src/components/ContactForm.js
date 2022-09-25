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
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="large" sx={{ color: "#2F7C32" }}>
          ADD NEW
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactForm;

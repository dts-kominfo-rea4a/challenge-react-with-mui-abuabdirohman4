// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      {data.map((data) => (
        <List sx={{ width: "75%", bgcolor: "#DBF6F0", ml: 5 }} key={data.phone}>
          <ListItem alignItems="flex-start" sx={{ pt: 0, pb: 1 }}>
            <ListItemAvatar>
              <Avatar
                alt={data.name}
                src={data.photo}
                sx={{ width: 83, height: 83, mr: 5 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={data.name}
              secondary={
                <>
                  <Typography component="span" sx={{ display: "block" }}>
                    {data.phone}
                  </Typography>
                  <Typography component="span">{data.email}</Typography>
                </>
              }
            />
          </ListItem>
          <Divider component="li" />
        </List>
      ))}
    </>
  );
};

export default Contact;
